import { TAROT_CARDS } from './tarot-data';
import { TarotCard, CardOrientation, CardInSpread, DailyReading, ReadingCategory } from '@/types/tarot';
import { getTodayDate } from './daily-check';

export function getRandomCard(excludeIds: number[] = []): TarotCard {
  const availableCards = TAROT_CARDS.filter(card => !excludeIds.includes(card.id));
  const randomIndex = Math.floor(Math.random() * availableCards.length);
  return availableCards[randomIndex];
}

export function getRandomOrientation(): CardOrientation {
  return Math.random() < 0.5 ? 'upright' : 'reversed';
}

// 3카드 스프레드: 과거 - 현재 - 미래
export function createThreeCardSpread(): CardInSpread[] {
  const positions = ['과거', '현재', '미래'];
  const cards: CardInSpread[] = [];
  const usedCardIds: number[] = [];

  for (const position of positions) {
    const card = getRandomCard(usedCardIds);
    usedCardIds.push(card.id);
    
    cards.push({
      card,
      orientation: getRandomOrientation(),
      position
    });
  }

  return cards;
}

export function createDailyReading(category: ReadingCategory): DailyReading {
  const cards = createThreeCardSpread();
  
  return {
    date: getTodayDate(),
    category,
    cards,
    timestamp: Date.now()
  };
}

