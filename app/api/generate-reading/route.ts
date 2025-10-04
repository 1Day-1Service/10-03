import { NextRequest, NextResponse } from 'next/server';
import { generatePersonalizedReading, TarotAIPrompt } from '@/lib/ai/huggingface-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cardName, cardNameEn, orientation, keywords }: TarotAIPrompt = body;

    if (!cardName || !cardNameEn || !orientation || !keywords) {
      return NextResponse.json(
        { error: '필수 매개변수가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const reading = await generatePersonalizedReading({
      cardName,
      cardNameEn,
      orientation,
      keywords,
    });

    return NextResponse.json(reading);
  } catch (error) {
    console.error('타로 해석 생성 중 오류:', error);
    return NextResponse.json(
      { error: 'AI 타로 해석을 생성하는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

