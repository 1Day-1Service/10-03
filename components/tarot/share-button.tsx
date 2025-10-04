'use client';

import { useState } from 'react';
import { Share2, Copy, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TarotCard, CardOrientation } from '@/types/tarot';

interface ShareButtonProps {
  card: TarotCard;
  orientation: CardOrientation;
}

export function ShareButton({ card, orientation }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `🔮 오늘의 타로 운세 🔮

${card.roman}. ${card.name} (${card.nameEn})
${orientation === 'upright' ? '정방향' : '역방향'}

${card.image}

키워드: ${(orientation === 'upright' ? card.keywords.upright : card.keywords.reversed).join(', ')}

#타로 #운세 #DailyTarot`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([shareText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `타로운세_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-3 justify-center">
      <Button
        onClick={handleCopy}
        variant="outline"
        className="gap-2 bg-purple-900/30 border-purple-500/30 hover:bg-purple-800/40 text-purple-100"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            복사됨!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            텍스트 복사
          </>
        )}
      </Button>
      
      <Button
        onClick={handleDownload}
        variant="outline"
        className="gap-2 bg-indigo-900/30 border-indigo-500/30 hover:bg-indigo-800/40 text-indigo-100"
      >
        <Download className="w-4 h-4" />
        다운로드
      </Button>
    </div>
  );
}

