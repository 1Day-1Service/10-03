'use client';

import { motion } from 'framer-motion';
import { Heart, DollarSign, Activity, Briefcase, Users, Sparkles } from 'lucide-react';
import { ReadingCategory } from '@/types/tarot';

interface CategorySelectorProps {
  selectedCategory: ReadingCategory;
  onSelectCategory: (category: ReadingCategory) => void;
}

const categories = [
  { id: 'love' as ReadingCategory, name: '연애운', icon: Heart, color: 'from-pink-500 to-rose-500' },
  { id: 'money' as ReadingCategory, name: '재물운', icon: DollarSign, color: 'from-yellow-500 to-amber-500' },
  { id: 'health' as ReadingCategory, name: '건강운', icon: Activity, color: 'from-green-500 to-emerald-500' },
  { id: 'career' as ReadingCategory, name: '직업운', icon: Briefcase, color: 'from-blue-500 to-indigo-500' },
  { id: 'relationship' as ReadingCategory, name: '대인관계', icon: Users, color: 'from-purple-500 to-violet-500' },
  { id: 'general' as ReadingCategory, name: '종합운', icon: Sparkles, color: 'from-indigo-500 to-purple-500' },
];

export function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-purple-100 text-center mb-6 font-[var(--font-cinzel)]">
        어떤 운세가 궁금하신가요?
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <motion.button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative p-6 rounded-xl border-2 transition-all
                ${isSelected 
                  ? 'border-purple-400 bg-purple-900/50 shadow-lg shadow-purple-500/30' 
                  : 'border-purple-500/30 bg-purple-900/20 hover:border-purple-400/50'
                }
              `}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${category.color}
                  ${isSelected ? 'shadow-lg' : ''}
                `}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <span className={`
                  text-lg font-semibold
                  ${isSelected ? 'text-purple-100' : 'text-purple-200'}
                `}>
                  {category.name}
                </span>
                
                {isSelected && (
                  <motion.div
                    layoutId="selected"
                    className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

