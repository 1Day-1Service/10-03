'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TarotCardDisplay } from '@/components/tarot/tarot-card';
import { ReadingResult } from '@/components/tarot/reading-result';
import { ShareButton } from '@/components/tarot/share-button';
import { createDailyReading } from '@/lib/tarot-engine';
import { getTodayReading, saveTodayReading, hasReadingToday } from '@/lib/daily-check';
import { DailyReading } from '@/types/tarot';

export default function Home() {
  const [reading, setReading] = useState<DailyReading | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    // 오늘 이미 뽑았는지 확인
    console.log('🔍 페이지 로드 - 오늘 이미 뽑은 카드 확인 중...');
    const todayReading = getTodayReading();
    if (todayReading) {
      console.log('✅ 오늘 이미 뽑은 카드가 있습니다:', todayReading);
      setReading(todayReading);
      setIsFlipped(true);
      setHasDrawn(true);
    } else {
      console.log('📝 오늘 아직 카드를 뽑지 않았습니다.');
    }
    setIsLoading(false);
  }, []);

  const handleDrawCard = async () => {
    console.log('🎴 카드 뽑기 버튼 클릭됨');
    setIsLoading(true);
    setAiError(null);
    
    // 애니메이션 효과를 위한 딜레이
    setTimeout(async () => {
      console.log('🎲 새 카드를 생성 중...');
      const newReading = createDailyReading();
      console.log('✅ 카드 생성 완료:', newReading);
      setReading(newReading);
      setHasDrawn(true);
      setIsLoading(false);
      
      // 카드 뒤집기 애니메이션
      setTimeout(() => {
        console.log('🔄 카드 뒤집는 중...');
        setIsFlipped(true);
      }, 500);

      // AI 타로 해석 생성 (선택적)
      setTimeout(async () => {
        console.log('🤖 AI 타로 해석 생성 시도 중...');
        setIsGeneratingAI(true);
        
        try {
          const keywords = newReading.orientation === 'upright' 
            ? newReading.card.keywords.upright 
            : newReading.card.keywords.reversed;

          const response = await fetch('/api/generate-reading', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              cardName: newReading.card.name,
              cardNameEn: newReading.card.nameEn,
              orientation: newReading.orientation,
              keywords: keywords,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.warn('⚠️ AI 해석 생성 실패:', errorData);
            throw new Error(errorData.details || 'AI 해석 생성 실패');
          }

          const aiReading = await response.json();
          
          // 에러 응답인지 확인
          if (aiReading.error) {
            throw new Error(aiReading.error);
          }
          
          console.log('✨ AI 해석 생성 완료:', aiReading);
          
          const updatedReading = {
            ...newReading,
            aiReading,
          };
          
          setReading(updatedReading);
          saveTodayReading(updatedReading);
        } catch (error) {
          console.error('❌ AI 해석 생성 오류:', error);
          console.log('📝 기본 해석을 사용합니다.');
          setAiError('AI 해석을 생성할 수 없어 기본 해석을 표시합니다.');
          // 기본 해석으로 계속 진행
          saveTodayReading(newReading);
        } finally {
          setIsGeneratingAI(false);
        }
      }, 1500);
    }, 1000);
  };

  const handleResetReading = () => {
    console.log('🔄 타로 카드 다시 뽑기');
    localStorage.removeItem('daily-tarot-reading');
    setReading(null);
    setIsFlipped(false);
    setHasDrawn(false);
    setIsLoading(false);
    setIsGeneratingAI(false);
    setAiError(null);
    setShowResetConfirm(false);
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
              오늘의 타로 운세
            </h1>
            <Sparkles className="w-8 h-8 text-purple-300" />
          </div>
          <p className="text-center text-purple-200/70 mt-2">
            매일 하나의 카드로 당신의 하루를 안내합니다
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {!hasDrawn ? (
          /* 카드 뽑기 전 */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto w-64 h-96"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-xl p-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="text-6xl">🌙</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-30">✨</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-100 font-[var(--font-cinzel)]">
                오늘의 운세를 확인하세요
              </h2>
              <p className="text-purple-200/70">
                하루에 한 번, 신비로운 타로 카드가 당신에게 메시지를 전합니다
              </p>
            </div>

            <Button
              onClick={handleDrawCard}
              disabled={isLoading}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/70 relative z-10 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RotateCcw className="w-5 h-5 mr-2 animate-spin" />
                  카드를 뽑는 중...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  카드 뽑기
                </>
              )}
            </Button>
          </motion.div>
        ) : (
          /* 카드 뽑은 후 */
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-2"
            >
              <h2 className="text-3xl font-bold text-purple-100 font-[var(--font-cinzel)]">
                {new Date().toLocaleDateString('ko-KR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h2>
              <p className="text-purple-200/70">오늘 당신을 위한 카드</p>
            </motion.div>

            {reading && (
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* 카드 */}
                <div className="lg:sticky lg:top-8">
                  <TarotCardDisplay
                    card={reading.card}
                    orientation={reading.orientation}
                    isFlipped={isFlipped}
                    className="mx-auto w-72 h-[28rem]"
                  />
                </div>

                {/* 결과 */}
                {isFlipped && (
                  <div className="space-y-6">
                    <ReadingResult
                      card={reading.card}
                      orientation={reading.orientation}
                      aiReading={reading.aiReading}
                      isGeneratingAI={isGeneratingAI}
                      aiError={aiError}
                    />
                    
                    <ShareButton
                      card={reading.card}
                      orientation={reading.orientation}
                    />

                    {/* 다시 뽑기 버튼 */}
                    <div className="text-center pt-4 space-y-3">
                      {!showResetConfirm ? (
                        <Button
                          onClick={() => setShowResetConfirm(true)}
                          variant="outline"
                          className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          다시 뽑기
                        </Button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 space-y-3"
                        >
                          <p className="text-purple-200 text-sm">
                            정말 다시 뽑으시겠습니까?<br />
                            <span className="text-purple-300/70 text-xs">현재 카드와 AI 해석이 사라집니다.</span>
                          </p>
                          <div className="flex gap-2 justify-center">
                            <Button
                              onClick={handleResetReading}
                              size="sm"
                              className="bg-purple-600 hover:bg-purple-700"
                            >
                              네, 다시 뽑을게요
                            </Button>
                            <Button
                              onClick={() => setShowResetConfirm(false)}
                              size="sm"
                              variant="outline"
                              className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                            >
                              취소
                            </Button>
                          </div>
                        </motion.div>
                      )}
                      
                      <p className="text-purple-300/70 text-xs">
                        💫 내일 자정이 되면 자동으로 새로운 카드를 뽑을 수 있습니다
                      </p>
                    </div>
                  </div>
                )}
              </div>
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

