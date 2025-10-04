export type CardOrientation = 'upright' | 'reversed';

export type ReadingCategory = 'love' | 'money' | 'health' | 'career' | 'relationship' | 'general';

export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  roman: string;
  image: string;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  meaning: {
    upright: string;
    reversed: string;
  };
  advice: {
    upright: string;
    reversed: string;
  };
  luckyColor: string;
  luckyNumber: number;
}

export interface CardInSpread {
  card: TarotCard;
  orientation: CardOrientation;
  position: string; // "과거", "현재", "미래" 등
}

export interface DailyReading {
  date: string; // YYYY-MM-DD
  category: ReadingCategory;
  cards: CardInSpread[]; // 여러 카드
  timestamp: number;
  aiReading?: {
    category: ReadingCategory;
    categoryName: string;
    overallMessage: string;
    cardInterpretations: {
      position: string;
      message: string;
    }[];
    advice: string;
  };
}

export interface TarotReading {
  card: TarotCard;
  orientation: CardOrientation;
}

