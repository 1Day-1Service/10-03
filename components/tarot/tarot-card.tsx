'use client';

import { motion } from 'framer-motion';
import { TarotCard, CardOrientation } from '@/types/tarot';
import { cn } from '@/lib/utils';

interface TarotCardProps {
  card: TarotCard;
  orientation: CardOrientation;
  isFlipped: boolean;
  className?: string;
}

export function TarotCardDisplay({ card, orientation, isFlipped, className }: TarotCardProps) {
  const isReversed = orientation === 'reversed';
  
  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* 카드 앞면 */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-1">
            <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className={cn(
                  "text-8xl mb-4 transition-transform",
                  isReversed && "rotate-180"
                )}>
                  {card.image}
                </div>
                <div className="text-white">
                  <div className="text-sm text-purple-300 mb-1">{card.roman}</div>
                  <div className="text-xl font-bold mb-1">{card.name}</div>
                  <div className="text-sm text-purple-200">{card.nameEn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 카드 뒷면 */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-1">
            <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-lg flex items-center justify-center">
              <div className="relative">
                <div className="text-6xl">🌙</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

