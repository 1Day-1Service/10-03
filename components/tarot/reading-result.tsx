'use client';

import { motion } from 'framer-motion';
import { TarotCard, CardOrientation } from '@/types/tarot';
import { Sparkles, Heart, Palette, Hash } from 'lucide-react';

interface ReadingResultProps {
  card: TarotCard;
  orientation: CardOrientation;
  aiReading?: {
    message: string;
    advice: string;
  };
  isGeneratingAI?: boolean;
  aiError?: string | null;
}

export function ReadingResult({ card, orientation, aiReading, isGeneratingAI, aiError }: ReadingResultProps) {
  const isReversed = orientation === 'reversed';
  const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;
  const meaning = aiReading?.message || (isReversed ? card.meaning.reversed : card.meaning.upright);
  const advice = aiReading?.advice || (isReversed ? card.advice.reversed : card.advice.upright);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="space-y-6"
    >
      {/* 정/역방향 표시 */}
      <div className="text-center">
        <div className={`inline-block px-4 py-2 rounded-full ${
          isReversed 
            ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
            : 'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {isReversed ? '역방향 (Reversed)' : '정방향 (Upright)'}
        </div>
      </div>

      {/* 키워드 */}
      <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-purple-300" />
          <h3 className="text-lg font-semibold text-purple-100">키워드</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-400/30"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* 오늘의 메시지 */}
      <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-indigo-300" />
          <h3 className="text-lg font-semibold text-indigo-100">
            {aiReading ? '✨ AI 타로 해석' : '오늘의 메시지'}
          </h3>
        </div>
        {isGeneratingAI ? (
          <div className="flex items-center gap-2 text-indigo-200">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-300 border-t-transparent"></div>
            <p>AI가 당신만을 위한 특별한 해석을 작성하고 있습니다...</p>
          </div>
        ) : (
          <>
            <p className="text-indigo-100 leading-relaxed">{meaning}</p>
            {aiError && (
              <p className="mt-2 text-sm text-yellow-300/80">{aiError}</p>
            )}
          </>
        )}
      </div>

      {/* 조언 */}
      <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-blue-300" />
          <h3 className="text-lg font-semibold text-blue-100">
            {aiReading ? '✨ AI 조언' : '조언'}
          </h3>
        </div>
        {isGeneratingAI ? (
          <div className="flex items-center gap-2 text-blue-200">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-300 border-t-transparent"></div>
            <p>AI가 맞춤 조언을 작성하고 있습니다...</p>
          </div>
        ) : (
          <p className="text-blue-100 leading-relaxed">{advice}</p>
        )}
      </div>

      {/* 행운의 정보 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Palette className="w-4 h-4 text-purple-300" />
            <h4 className="text-sm font-semibold text-purple-100">행운의 색상</h4>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full border-2 border-white/30"
              style={{ backgroundColor: card.luckyColor }}
            />
            <span className="text-purple-200 text-sm">{card.luckyColor}</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-4 h-4 text-indigo-300" />
            <h4 className="text-sm font-semibold text-indigo-100">행운의 숫자</h4>
          </div>
          <div className="text-3xl font-bold text-indigo-200">{card.luckyNumber}</div>
        </div>
      </div>
    </motion.div>
  );
}

