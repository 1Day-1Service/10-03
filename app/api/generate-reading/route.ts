import { NextRequest, NextResponse } from 'next/server';
import { generatePersonalizedReading, TarotAIPrompt } from '@/lib/ai/gemini-client';

export async function POST(request: NextRequest) {
  try {
    console.log('🤖 AI 타로 해석 API 호출됨');
    
    const body = await request.json();
    const { category, cards }: TarotAIPrompt = body;

    if (!category || !cards || cards.length === 0) {
      return NextResponse.json(
        { error: '필수 매개변수가 누락되었습니다.' },
        { status: 400 }
      );
    }

    console.log('📋 요청 데이터:', { category, cardsCount: cards.length });

    // AI 기능 비활성화 옵션
    const AI_ENABLED = process.env.ENABLE_AI !== 'false';
    
    if (!AI_ENABLED) {
      console.log('ℹ️ AI 기능이 비활성화되어 있습니다.');
      return NextResponse.json(
        { error: 'AI 기능이 비활성화되어 있습니다.' },
        { status: 503 }
      );
    }

    // 환경 변수 확인
    if (!process.env.GOOGLE_AI_API_KEY) {
      console.error('❌ GOOGLE_AI_API_KEY가 설정되지 않았습니다.');
      return NextResponse.json(
        { error: 'Google AI API 키가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    const reading = await generatePersonalizedReading({
      category,
      cards,
    });

    console.log('✅ AI 해석 생성 완료');
    return NextResponse.json(reading);
  } catch (error) {
    console.error('❌ 타로 해석 생성 중 오류:', error);
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
    return NextResponse.json(
      { 
        error: 'AI 타로 해석을 생성하는 중 오류가 발생했습니다.',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

