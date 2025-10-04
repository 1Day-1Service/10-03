# 🔮 오늘의 타로 운세 (Daily Tarot Reading)

**날짜**: 2025-10-03  
**난이도**: 🟢 Easy  
**예상 소요시간**: 2-3시간

---

## 📌 서비스 개요

매일 하나의 타로 카드를 뽑아 오늘의 운세를 확인하는 신비로운 웹 서비스입니다.  
아름다운 타로 카드 이미지와 카드 뒤집기 애니메이션으로 몰입감을 높입니다.

---

## 🎯 핵심 기능 (MVP 범위)

### ✅ 필수 기능 (MVP)
1. **타로 카드 뽑기**
   - 메이저 아르카나 22장 중 랜덤 선택
   - 카드 뒤집기 3D 애니메이션
   - 정방향/역방향 랜덤

2. **카드 정보 표시**
   - 타로 카드 이미지 (실제 디자인)
   - 카드 이름 (한글 + 영문)
   - 카드 번호 (로마 숫자)
   - 정/역방향 표시

3. **운세 해석**
   - 키워드 (3-5개)
   - 오늘의 메시지 (2-3문장)
   - 조언/주의사항
   - 행운의 색상, 숫자

4. **하루 한 번 제한**
   - localStorage로 날짜 체크
   - 이미 뽑았으면 결과만 표시
   - 자정 넘으면 리셋

5. **결과 공유**
   - 카드 이미지로 저장
   - 텍스트 복사
   - SNS 공유 (선택사항)

### 🔮 추가 기능 (시간 여유시)
- 카드별 상세 설명 모달
- 과거 7일간의 히스토리
- 카드 셔플 애니메이션
- 배경 음악/효과음
- 질문 입력 기능
- 다양한 카드 덱 스타일

---

## 🛠 기술 스택

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animation**: Framer Motion

### Assets
- **타로 카드 이미지**: Public Domain (Rider-Waite) 또는 자체 디자인
- **아이콘**: lucide-react
- **폰트**: 신비로운 느낌의 세리프 폰트

---

## 📁 프로젝트 구조

```
2025-10-03-daily-tarot/
├── app/
│   ├── layout.tsx              # Root Layout
│   ├── page.tsx                # Main Page
│   ├── globals.css             # Global Styles
│   └── fonts/                  # Custom Fonts
├── components/
│   ├── tarot/
│   │   ├── card-deck.tsx       # 카드 덱 (뒷면)
│   │   ├── tarot-card.tsx      # 타로 카드 컴포넌트
│   │   ├── card-flip.tsx       # 카드 뒤집기 애니메이션
│   │   ├── reading-result.tsx  # 운세 결과
│   │   ├── share-button.tsx    # 공유 버튼
│   │   └── history-drawer.tsx  # 히스토리 (선택)
│   └── ui/                     # Shadcn UI Components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   ├── tarot-data.ts           # 타로 카드 데이터
│   ├── tarot-engine.ts         # 카드 선택 로직
│   ├── daily-check.ts          # 날짜 체크 로직
│   └── utils.ts                # 유틸리티
├── types/
│   └── tarot.ts                # 타입 정의
├── public/
│   └── tarot-cards/            # 타로 카드 이미지
│       ├── 00-fool.png
│       ├── 01-magician.png
│       └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── PLAN.md
```

---

## 📦 타입 정의

```typescript
// types/tarot.ts

export type CardOrientation = 'upright' | 'reversed';

export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  roman: string; // 로마 숫자 (예: "0", "I", "II")
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
  luckyColor?: string;
  luckyNumber?: number;
}

export interface DailyReading {
  date: string; // YYYY-MM-DD
  card: TarotCard;
  orientation: CardOrientation;
  timestamp: number;
}

export interface TarotReading {
  card: TarotCard;
  orientation: CardOrientation;
}
```

---

## 🎴 메이저 아르카나 22장

```
0. 광대 (The Fool)
I. 마법사 (The Magician)
II. 여사제 (The High Priestess)
III. 여황제 (The Empress)
IV. 황제 (The Emperor)
V. 교황 (The Hierophant)
VI. 연인 (The Lovers)
VII. 전차 (The Chariot)
VIII. 힘 (Strength)
IX. 은둔자 (The Hermit)
X. 운명의 수레바퀴 (Wheel of Fortune)
XI. 정의 (Justice)
XII. 매달린 사람 (The Hanged Man)
XIII. 죽음 (Death)
XIV. 절제 (Temperance)
XV. 악마 (The Devil)
XVI. 탑 (The Tower)
XVII. 별 (The Star)
XVIII. 달 (The Moon)
XIX. 태양 (The Sun)
XX. 심판 (Judgement)
XXI. 세계 (The World)
```

---

## 🎨 UI/UX 디자인 컨셉

### 색상 팔레트
- **Primary**: Deep Purple (#6B46C1, #7C3AED)
- **Secondary**: Gold (#F59E0B, #FCD34D)
- **Background**: Dark Navy (#0F172A, #1E293B)
- **Accent**: Mystical Purple (#A78BFA, #C4B5FD)

### 레이아웃
- **메인 화면**: 중앙에 카드 덱, 신비로운 배경 (별빛, 그라데이션)
- **카드 뽑기 전**: "오늘의 운세를 확인하세요" + 카드 덱 뒷면
- **카드 뽑기 중**: 카드 뒤집기 애니메이션 (3D flip)
- **결과 화면**: 카드 + 운세 해석 + 공유 버튼

### 애니메이션
- 카드 뒤집기: 3D rotateY (180deg)
- 페이드 인/아웃
- 반짝이는 별빛 효과
- 부드러운 스크롤

---

## 💫 주요 기능 흐름

```
1. 첫 방문
   ↓
2. 메인 화면 (카드 덱 보임)
   - "오늘의 운세를 확인하세요"
   - "카드 뽑기" 버튼
   ↓
3. 버튼 클릭
   ↓
4. 카드 셔플 애니메이션 (선택)
   ↓
5. 카드 뒤집기 애니메이션
   ↓
6. 결과 화면
   - 타로 카드 이미지
   - 카드 이름 (한글/영문)
   - 정/역방향 표시
   - 키워드
   - 오늘의 메시지
   - 조언
   - 행운의 색상/숫자
   ↓
7. localStorage에 저장
   ↓
8. 공유/저장 가능
```

---

## ✅ 개발 단계별 체크리스트

### Phase 1: 프로젝트 셋업 (20분)
- [ ] Next.js 프로젝트 생성
- [ ] 필요한 패키지 설치 (framer-motion 등)
- [ ] Shadcn UI 컴포넌트 설치
- [ ] 타입 정의 작성
- [ ] 기본 레이아웃 구성

### Phase 2: 타로 데이터 준비 (30분)
- [ ] 타로 카드 22장 데이터 작성
- [ ] 각 카드별 키워드, 의미, 조언 작성
- [ ] 타로 카드 이미지 준비 (Public Domain 또는 간단한 디자인)
- [ ] 카드 뒷면 이미지 디자인

### Phase 3: 카드 선택 로직 (20분)
- [ ] 랜덤 카드 선택 함수
- [ ] 정/역방향 랜덤 함수
- [ ] 날짜 체크 로직 (localStorage)
- [ ] 오늘 이미 뽑았는지 확인

### Phase 4: 카드 컴포넌트 (40분)
- [ ] TarotCard 컴포넌트 (카드 이미지 + 정보)
- [ ] CardDeck 컴포넌트 (카드 뒷면)
- [ ] CardFlip 애니메이션 (framer-motion)
- [ ] 3D flip 효과 구현

### Phase 5: 결과 화면 (30분)
- [ ] ReadingResult 컴포넌트
- [ ] 카드 정보 표시
- [ ] 운세 해석 표시
- [ ] 키워드, 조언, 행운 정보

### Phase 6: 공유 기능 (20분)
- [ ] 결과 이미지로 저장
- [ ] 텍스트 복사
- [ ] 다시 뽑기 (내일)

### Phase 7: 스타일링 & 마무리 (30분)
- [ ] 신비로운 배경 (그라데이션, 별빛)
- [ ] 반응형 디자인
- [ ] 다크 테마
- [ ] 폰트 적용
- [ ] 최종 테스트

---

## 🚀 MVP 완성 기준

1. ✅ 메이저 아르카나 22장 데이터 완성
2. ✅ 카드 뒤집기 애니메이션
3. ✅ 타로 카드 이미지 표시
4. ✅ 운세 해석 표시 (키워드, 메시지, 조언)
5. ✅ 하루 한 번 제한 (localStorage)
6. ✅ 결과 이미지로 저장
7. ✅ 신비로운 UI/UX
8. ✅ 반응형 디자인

---

## 📝 타로 카드 데이터 예시

```typescript
{
  id: 0,
  name: "광대",
  nameEn: "The Fool",
  roman: "0",
  image: "/tarot-cards/00-fool.png",
  keywords: {
    upright: ["새로운 시작", "자유", "모험", "순수함", "가능성"],
    reversed: ["무모함", "경솔함", "불안정", "방황"]
  },
  meaning: {
    upright: "새로운 여정이 시작됩니다. 순수한 마음으로 모험을 떠나세요.",
    reversed: "신중하지 못한 결정으로 인해 어려움을 겪을 수 있습니다."
  },
  advice: {
    upright: "두려움 없이 앞으로 나아가되, 준비는 철저히 하세요.",
    reversed: "한 발 물러서서 상황을 다시 생각해보세요."
  },
  luckyColor: "#FFD700",
  luckyNumber: 0
}
```

---

## 💡 개발 팁

1. **카드 이미지**: Rider-Waite 덱은 Public Domain이므로 자유롭게 사용 가능
2. **애니메이션**: framer-motion의 `motion.div`와 `rotateY` 사용
3. **날짜 체크**: `new Date().toISOString().split('T')[0]`로 YYYY-MM-DD 형식
4. **랜덤**: `crypto.getRandomValues()` 사용하면 더 랜덤함
5. **배경**: CSS gradient + 별빛 파티클 효과

---

## 🎭 분위기 연출

- **배경 음악**: 은은한 명상/신비 음악 (선택사항)
- **효과음**: 카드 뒤집는 소리 (선택사항)
- **파티클**: 떠다니는 별빛, 반짝임
- **폰트**: Cinzel, EB Garamond 등 세리프 폰트
- **커서**: 커스텀 커서 (별 모양)

---

**준비 완료! 확인 후 개발 시작해주세요!** 🔮✨

