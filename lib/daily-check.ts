import { DailyReading } from '@/types/tarot';

const STORAGE_KEY = 'daily-tarot-reading';

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function getTodayReading(): DailyReading | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const reading: DailyReading = JSON.parse(stored);
    
    // Check if reading is from today
    if (reading.date === getTodayDate()) {
      return reading;
    }
    
    // Clear old reading
    localStorage.removeItem(STORAGE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

export function saveTodayReading(reading: DailyReading): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reading));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

export function hasReadingToday(): boolean {
  return getTodayReading() !== null;
}

