import { TAROT_CARDS } from './tarot-data';
import { TarotCard, CardOrientation, TarotReading, DailyReading } from '@/types/tarot';
import { getTodayDate } from './daily-check';

export function getRandomCard(): TarotCard {
  const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
  return TAROT_CARDS[randomIndex];
}

export function getRandomOrientation(): CardOrientation {
  return Math.random() < 0.5 ? 'upright' : 'reversed';
}

export function performReading(): TarotReading {
  const card = getRandomCard();
  const orientation = getRandomOrientation();
  
  return {
    card,
    orientation
  };
}

export function createDailyReading(): DailyReading {
  const reading = performReading();
  
  return {
    date: getTodayDate(),
    card: reading.card,
    orientation: reading.orientation,
    timestamp: Date.now()
  };
}

