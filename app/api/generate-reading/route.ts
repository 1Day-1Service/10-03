import { NextRequest, NextResponse } from 'next/server';
import { generatePersonalizedReading, TarotAIPrompt } from '@/lib/ai/huggingface-client';

export async function POST(request: NextRequest) {
  try {
    console.log('🤖 AI 타로 해석 API 호출됨');
    
    const body = await request.json();
    const { cardName, cardNameEn, orientation, keywords }: TarotAIPrompt = body;

    if (!cardName || !cardNameEn || !orientation || !keywords) {
      return NextResponse.json(
        { error: '필수 매개변수가 누락되었습니다.' },
        { status: 400 }
      );
    }

    console.log('📋 요청 데이터:', { cardName, cardNameEn, orientation, keywords });

    // 환경 변수 확인
    if (!process.env.HUGGINGFACE_API_TOKEN) {
      console.error('❌ HUGGINGFACE_API_TOKEN이 설정되지 않았습니다.');
      return NextResponse.json(
        { error: 'API 토큰이 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    const reading = await generatePersonalizedReading({
      cardName,
      cardNameEn,
      orientation,
      keywords,
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

