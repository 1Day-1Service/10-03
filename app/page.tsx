'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategorySelector } from '@/components/tarot/category-selector';
import { CardSpread } from '@/components/tarot/card-spread';
import { getTodayReading, saveTodayReading } from '@/lib/daily-check';
import { createDailyReading } from '@/lib/tarot-engine';
import { DailyReading, ReadingCategory } from '@/types/tarot';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ReadingCategory>('general');
  const [reading, setReading] = useState<DailyReading | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('🔍 페이지 로드');
    const lastReading = getTodayReading();
    if (lastReading) {
      console.log('✅ 마지막 카드:', lastReading);
      setReading(lastReading);
      setIsRevealed(true);
      setSelectedCategory(lastReading.category);
    }
    setIsLoading(false);
  }, []);

  const handleDrawCards = async () => {
    console.log(`🎴 ${selectedCategory} 카드 뽑기 시작`);
    setIsLoading(true);
    setAiError(null);

    setTimeout(async () => {
      const newReading = createDailyReading(selectedCategory);
      console.log('✅ 카드 생성 완료:', newReading);
      
      setReading(newReading);
      saveTodayReading(newReading);
      setIsLoading(false);
      
      // 카드 공개
      setTimeout(() => {
        setIsRevealed(true);
      }, 300);

      // AI 해석 생성
      setIsGeneratingAI(true);
      
      setTimeout(async () => {
        try {
          console.log('🤖 AI 해석 생성 시도');
          
          const response = await fetch('/api/generate-reading', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              category: newReading.category,
              cards: newReading.cards,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.details || 'AI 해석 생성 실패');
          }

          const aiReading = await response.json();
          
          if (aiReading.error) {
            throw new Error(aiReading.error);
          }
          
          console.log('✨ AI 해석 완료:', aiReading);
          
          const updatedReading = {
            ...newReading,
            aiReading,
          };
          
          setReading(updatedReading);
          saveTodayReading(updatedReading);
        } catch (error) {
          console.error('❌ AI 해석 오류:', error);
          setAiError('AI 해석을 생성할 수 없어 기본 해석을 표시합니다.');
        } finally {
          setIsGeneratingAI(false);
        }
      }, 500);
    }, 800);
  };

  const handleReset = () => {
    console.log('🔄 다시 뽑기 - 시작');
    try {
      // localStorage 삭제
      localStorage.removeItem('daily-tarot-reading');
      console.log('✅ localStorage 삭제 완료');
      
      // 모든 상태 초기화
      setReading(null);
      setIsRevealed(false);
      setIsGeneratingAI(false);
      setAiError(null);
      setIsLoading(false);
      
      console.log('✅ 상태 초기화 완료 - 카드 선택 화면으로 돌아갑니다');
    } catch (error) {
      console.error('❌ 다시 뽑기 오류:', error);
    }
  };

  if (isLoading && !reading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-purple-300 flex flex-col items-center gap-4">
          <Moon className="w-12 h-12 animate-pulse" />
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 stars-bg">
      {/* Header */}
      <header className="border-b border-purple-500/30 backdrop-blur-sm bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Moon className="w-8 h-8 text-purple-300" />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-[var(--font-cinzel)]">
              타로 운세
            </h1>
            <Sparkles className="w-8 h-8 text-purple-300" />
          </div>
          <p className="text-center text-purple-200/70 mt-2">
            3장의 카드로 과거-현재-미래를 읽습니다
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {!reading ? (
          /* 카드 뽑기 전 - 카테고리 선택 */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <CategorySelector
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div className="text-center">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log('🖱️ 카드 뽑기 버튼 클릭됨!');
                  handleDrawCards();
                }}
                disabled={isLoading}
                type="button"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/50 cursor-pointer pointer-events-auto relative z-50"
              >
                {isLoading ? (
                  <>
                    <RotateCcw className="w-5 h-5 mr-2 animate-spin" />
                    카드를 섞는 중...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    카드 뽑기
                  </>
                )}
              </Button>
              
              {/* 디버그 정보 */}
              <p className="mt-3 text-xs text-purple-300/70">
                상태: {isLoading ? '로딩 중' : '준비됨'} | 선택: {selectedCategory}
              </p>
            </div>
          </motion.div>
        ) : (
          /* 카드 뽑은 후 - 결과 표시 */
          <div className="max-w-6xl mx-auto space-y-12">
            {/* 카드 스프레드 */}
            <CardSpread cards={reading.cards} isRevealed={isRevealed} />

            {/* AI 해석 */}
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="space-y-8"
              >
                {/* 카테고리별 종합 메시지 */}
                <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-indigo-100 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    {isGeneratingAI 
                      ? 'AI가 해석 작성 중...' 
                      : `✨ ${reading.aiReading?.categoryName || '종합'} 분석`
                    }
                  </h3>
                  {isGeneratingAI ? (
                    <div className="flex items-center gap-3 text-indigo-200">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-300 border-t-transparent"></div>
                      <p>카드의 의미를 분석하고 있습니다...</p>
                    </div>
                  ) : (
                    <p className="text-indigo-100 leading-relaxed text-lg">
                      {reading.aiReading?.overallMessage || '카드들이 당신에게 메시지를 전합니다.'}
                    </p>
                  )}
                  {aiError && (
                    <p className="mt-3 text-sm text-yellow-300/80">{aiError}</p>
                  )}
                </div>

                {/* 각 카드별 카테고리 해석 */}
                {!isGeneratingAI && reading.aiReading?.cardInterpretations && (
                  <div className="grid md:grid-cols-3 gap-6">
                    {reading.aiReading.cardInterpretations.map((interp, index) => {
                      const cardData = reading.cards[index];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2.2 + index * 0.2 }}
                          className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-purple-100">
                              {interp.position}
                            </h4>
                            <span className="text-2xl">{cardData.card.image}</span>
                          </div>
                          <div className="text-xs text-purple-300 mb-2">
                            {cardData.card.name} ({cardData.orientation === 'upright' ? '정방향' : '역방향'})
                          </div>
                          <p className="text-purple-200 leading-relaxed text-sm">
                            {interp.message}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* 카테고리별 조언 */}
                {!isGeneratingAI && reading.aiReading?.advice && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                    className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-blue-100 mb-4">
                      💫 {reading.aiReading.categoryName} 조언
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {reading.aiReading.advice}
                    </p>
                  </motion.div>
                )}

                {/* 다시 뽑기 버튼 */}
                <div className="text-center pt-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('🔄 다시 뽑기 버튼 클릭됨!!!');
                      handleReset();
                    }}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all cursor-pointer shadow-lg hover:shadow-xl relative z-[100]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    다시 뽑기
                  </button>
                  
                  <p className="mt-2 text-xs text-purple-300/70">
                    새로운 운세를 보려면 클릭하세요
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-purple-500/30 backdrop-blur-sm bg-slate-900/50">
        <div className="container mx-auto px-4 text-center text-purple-200/60 text-sm space-y-2">
          <p>🌙 타로는 당신의 내면을 비추는 거울입니다</p>
          <p className="text-xs">2025-10-03 · 1일 1서비스 프로젝트 #3</p>
        </div>
      </footer>
    </main>
  );
}
