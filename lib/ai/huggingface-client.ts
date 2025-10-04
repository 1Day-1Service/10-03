import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_TOKEN);

export interface TarotAIPrompt {
  cardName: string;
  cardNameEn: string;
  orientation: 'upright' | 'reversed';
  keywords: string[];
  userName?: string;
  question?: string;
}

export async function generateTarotReading(prompt: TarotAIPrompt): Promise<string> {
  try {
    const systemPrompt = `당신은 30년 경력의 전문 타로 리더입니다. 
깊이 있고 통찰력 있는 타로 카드 해석을 제공하며, 심리학적 관점과 영적 지혜를 결합합니다.
답변은 친근하면서도 신비로운 톤으로, 한국어로 작성합니다.`;

    const userPrompt = `
타로 카드: ${prompt.cardName} (${prompt.cardNameEn})
방향: ${prompt.orientation === 'upright' ? '정방향' : '역방향'}
키워드: ${prompt.keywords.join(', ')}

이 카드에 대한 오늘의 타로 해석을 다음 형식으로 작성해주세요:

**오늘의 메시지**
(2-3문장으로 카드의 핵심 의미와 오늘의 에너지를 설명)

**조언**
(2-3문장으로 실용적이고 구체적인 조언 제공)

따뜻하고 희망적인 톤으로, 사용자가 하루를 긍정적으로 시작할 수 있도록 작성해주세요.`;

    const response = await hf.textGeneration({
      model: 'meta-llama/Llama-3.2-3B-Instruct',
      inputs: `${systemPrompt}\n\n${userPrompt}`,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.8,
        top_p: 0.9,
        repetition_penalty: 1.2,
      },
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error('AI 타로 해석 생성 실패:', error);
    throw new Error('AI 타로 해석을 생성할 수 없습니다.');
  }
}

export async function generatePersonalizedReading(prompt: TarotAIPrompt): Promise<{
  message: string;
  advice: string;
}> {
  try {
    const fullReading = await generateTarotReading(prompt);
    
    // 응답을 메시지와 조언으로 분리
    const messagePart = fullReading.match(/\*\*오늘의 메시지\*\*\s*([\s\S]*?)(?=\*\*조언\*\*|$)/);
    const advicePart = fullReading.match(/\*\*조언\*\*\s*([\s\S]*?)$/);
    
    return {
      message: messagePart?.[1]?.trim() || fullReading.slice(0, fullReading.length / 2).trim(),
      advice: advicePart?.[1]?.trim() || fullReading.slice(fullReading.length / 2).trim(),
    };
  } catch (error) {
    console.error('개인화된 타로 해석 생성 실패:', error);
    throw error;
  }
}

