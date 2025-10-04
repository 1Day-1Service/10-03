export type CardOrientation = 'upright' | 'reversed';

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

export interface DailyReading {
  date: string; // YYYY-MM-DD
  card: TarotCard;
  orientation: CardOrientation;
  timestamp: number;
  aiReading?: {
    message: string;
    advice: string;
  };
}

export interface TarotReading {
  card: TarotCard;
  orientation: CardOrientation;
}

