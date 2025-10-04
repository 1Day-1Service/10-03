import { GoogleGenerativeAI } from '@google/generative-ai';
import { CardInSpread, ReadingCategory } from '@/types/tarot';

export interface TarotAIPrompt {
  category: ReadingCategory;
  cards: CardInSpread[];
}

const CATEGORY_NAMES: Record<ReadingCategory, string> = {
  love: '연애운',
  money: '재물운',
  health: '건강운',
  career: '직업운',
  relationship: '대인관계운',
  general: '종합운'
};

const CATEGORY_DETAILS: Record<ReadingCategory, string> = {
  love: '이성 관계, 연인과의 관계, 새로운 만남, 짝사랑, 연애 발전',
  money: '재물 운세, 금전 수입, 재테크, 투자, 지출 관리',
  health: '건강 상태, 체력, 정신 건강, 질병 예방, 웰빙',
  career: '직장 생활, 업무 성과, 승진, 이직, 커리어 발전',
  relationship: '친구 관계, 가족 관계, 동료 관계, 사회적 네트워킹',
  general: '전반적인 운세, 인생의 방향, 중요한 결정'
};

export async function generateTarotReading(prompt: TarotAIPrompt): Promise<string> {
  try {
    if (!process.env.GOOGLE_AI_API_KEY) {
      throw new Error('GOOGLE_AI_API_KEY가 설정되지 않았습니다.');
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const systemPrompt = `당신은 30년 경력의 전문 타로 리더입니다. 
깊이 있고 통찰력 있는 타로 카드 해석을 제공하며, 심리학적 관점과 영적 지혜를 결합합니다.
3카드 스프레드(과거-현재-미래)를 해석하며, 각 카드의 의미와 전체적인 흐름을 파악합니다.
답변은 친근하면서도 신비로운 톤으로, 한국어로 작성합니다.`;

    const cardsInfo = prompt.cards.map((cardData, index) => {
      const keywords = cardData.orientation === 'upright' 
        ? cardData.card.keywords.upright 
        : cardData.card.keywords.reversed;
      
      return `
${index + 1}. ${cardData.position} - ${cardData.card.name} (${cardData.card.nameEn})
   방향: ${cardData.orientation === 'upright' ? '정방향' : '역방향'}
   키워드: ${keywords.join(', ')}`;
    }).join('\n');

    const categoryFocus = CATEGORY_DETAILS[prompt.category];
    
    const userPrompt = `
운세 카테고리: ${CATEGORY_NAMES[prompt.category]}
초점 영역: ${categoryFocus}

뽑힌 카드들 (3카드 스프레드):
${cardsInfo}

위 3장의 타로 카드를 바탕으로 **${CATEGORY_NAMES[prompt.category]}**에 **특화되어** 해석해주세요.
${CATEGORY_NAMES[prompt.category]}의 관점에서만 분석하고, 다른 영역은 언급하지 마세요.

다음 형식으로 작성해주세요:

**${CATEGORY_NAMES[prompt.category]} 종합 분석**
(3-4문장으로 ${categoryFocus}의 관점에서 전체적인 흐름을 설명)

**과거 - ${CATEGORY_NAMES[prompt.category]} 측면**
(2-3문장으로 과거 카드가 ${categoryFocus}에 미친 영향)

**현재 - ${CATEGORY_NAMES[prompt.category]} 측면**
(2-3문장으로 현재 ${categoryFocus} 상황)

**미래 - ${CATEGORY_NAMES[prompt.category]} 전망**
(2-3문장으로 미래 ${categoryFocus} 예상)

**${CATEGORY_NAMES[prompt.category]} 관련 조언**
(3-4문장으로 ${categoryFocus}에 대한 구체적이고 실천 가능한 조언)

따뜻하고 희망적인 톤으로 작성하되, ${CATEGORY_NAMES[prompt.category]}에만 집중해주세요.
반드시 위의 형식을 지켜서 작성해주세요.`;

    const result = await model.generateContent(`${systemPrompt}\n\n${userPrompt}`);
    const response = result.response;
    const text = response.text();

    return text.trim();
  } catch (error) {
    console.error('AI 타로 해석 생성 실패:', error);
    throw error;
  }
}

export async function generatePersonalizedReading(prompt: TarotAIPrompt): Promise<{
  category: ReadingCategory;
  categoryName: string;
  overallMessage: string;
  cardInterpretations: { position: string; message: string; }[];
  advice: string;
}> {
  try {
    const fullReading = await generateTarotReading(prompt);
    const categoryName = CATEGORY_NAMES[prompt.category];
    
    // 응답 파싱 (카테고리별로 동적으로 매칭)
    const overallPattern = new RegExp(`\\*\\*${categoryName} 종합 분석\\*\\*\\s*([\\s\\S]*?)(?=\\*\\*과거|$)`, 'i');
    const pastPattern = new RegExp(`\\*\\*과거[^*]*${categoryName}[^*]*\\*\\*\\s*([\\s\\S]*?)(?=\\*\\*현재|$)`, 'i');
    const presentPattern = new RegExp(`\\*\\*현재[^*]*${categoryName}[^*]*\\*\\*\\s*([\\s\\S]*?)(?=\\*\\*미래|$)`, 'i');
    const futurePattern = new RegExp(`\\*\\*미래[^*]*${categoryName}[^*]*\\*\\*\\s*([\\s\\S]*?)(?=\\*\\*.*조언|$)`, 'i');
    const advicePattern = new RegExp(`\\*\\*${categoryName}[^*]*조언\\*\\*\\s*([\\s\\S]*?)$`, 'i');
    
    const overallMatch = fullReading.match(overallPattern);
    const pastMatch = fullReading.match(pastPattern);
    const presentMatch = fullReading.match(presentPattern);
    const futureMatch = fullReading.match(futurePattern);
    const adviceMatch = fullReading.match(advicePattern);
    
    return {
      category: prompt.category,
      categoryName,
      overallMessage: overallMatch?.[1]?.trim() || `${categoryName}에 대한 카드의 메시지입니다.`,
      cardInterpretations: [
        { position: '과거', message: pastMatch?.[1]?.trim() || '' },
        { position: '현재', message: presentMatch?.[1]?.trim() || '' },
        { position: '미래', message: futureMatch?.[1]?.trim() || '' }
      ],
      advice: adviceMatch?.[1]?.trim() || '긍정적인 마음으로 임하세요.',
    };
  } catch (error) {
    console.error('개인화된 타로 해석 생성 실패:', error);
    throw error;
  }
}

