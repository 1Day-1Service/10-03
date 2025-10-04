'use client';

import { motion } from 'framer-motion';
import { CardInSpread } from '@/types/tarot';
import { cn } from '@/lib/utils';

interface CardSpreadProps {
  cards: CardInSpread[];
  isRevealed: boolean;
}

export function CardSpread({ cards, isRevealed }: CardSpreadProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((cardData, index) => {
          const isReversed = cardData.orientation === 'reversed';
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              {/* 포지션 라벨 */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-200 font-[var(--font-cinzel)]">
                  {cardData.position}
                </h3>
              </div>

              {/* 카드 */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-48 h-72"
              >
                {/* 카드 앞면 (실제 카드) */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-1">
                    <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-lg flex flex-col items-center justify-center p-4">
                      <div className={cn(
                        "text-6xl mb-4 transition-transform",
                        isReversed && "rotate-180"
                      )}>
                        {cardData.card.image}
                      </div>
                      <div className="text-center text-white">
                        <div className="text-xs text-purple-300 mb-1">{cardData.card.roman}</div>
                        <div className="text-base font-bold mb-1">{cardData.card.name}</div>
                        <div className="text-xs text-purple-200">{cardData.card.nameEn}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 카드 뒷면 */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
                  style={{
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-1">
                    <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-lg flex items-center justify-center">
                      <div className="relative">
                        <div className="text-5xl">🌙</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl opacity-30">✨</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 정/역방향 표시 (카드가 공개된 후에만) */}
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 1.1 }}
                  className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${isReversed 
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }
                  `}
                >
                  {isReversed ? '역방향' : '정방향'}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

