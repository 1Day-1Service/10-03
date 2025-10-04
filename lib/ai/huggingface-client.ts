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
    if (!process.env.HUGGINGFACE_API_TOKEN) {
      throw new Error('HUGGINGFACE_API_TOKEN이 설정되지 않았습니다.');
    }

    const systemPrompt = `You are a professional tarot reader with 30 years of experience. Provide insightful tarot card interpretations combining psychological perspectives and spiritual wisdom. Write in Korean with a friendly yet mystical tone.`;

    const userPrompt = `
Tarot Card: ${prompt.cardName} (${prompt.cardNameEn})
Orientation: ${prompt.orientation === 'upright' ? 'Upright (정방향)' : 'Reversed (역방향)'}
Keywords: ${prompt.keywords.join(', ')}

Please write today's tarot interpretation in the following format in Korean:

**오늘의 메시지**
(2-3 sentences explaining the core meaning of the card and today's energy)

**조언**
(2-3 sentences providing practical and specific advice)

Write in a warm and hopeful tone so that the user can start their day positively.`;

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: `<s>[INST] ${systemPrompt}\n\n${userPrompt} [/INST]`,
      parameters: {
        max_new_tokens: 400,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.1,
        return_full_text: false,
      },
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error('AI 타로 해석 생성 실패:', error);
    throw error;
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

