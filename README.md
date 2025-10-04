# 🔮 AI 타로 운세 (AI Tarot Reading)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-2.0%20Flash-4285F4?logo=google)](https://ai.google.dev/)

**1일 1서비스 프로젝트 #3** - Google Gemini AI가 해석해주는 3카드 타로 운세 서비스

카테고리를 선택하고 3장의 카드(과거-현재-미래)를 뽑아 AI의 맞춤형 해석을 받아보세요! ✨

## 🎯 주요 기능

### ⭐ 핵심 기능
- 🎴 **3카드 스프레드**: 과거-현재-미래 타로 카드 리딩
- 🎯 **6가지 카테고리**: 연애운, 재물운, 건강운, 직업운, 대인관계운, 종합운
- 🤖 **AI 맞춤 해석**: Google Gemini 2.0 Flash가 선택한 카테고리에 특화된 해석 제공
- 🔄 **무제한 다시 뽑기**: 원하는 만큼 카드를 다시 뽑을 수 있음
- 💾 **자동 저장**: 마지막 결과가 저장되어 새로고침해도 유지
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원

### 🎨 UI/UX
- ✨ **카테고리 선택**: 아이콘과 그라데이션으로 구분된 6가지 운세
- 🎭 **3D 카드 애니메이션**: Framer Motion을 활용한 순차적 카드 공개
- 🌙 **신비로운 다크 테마**: 보라색 그라데이션과 별빛 배경
- 🎴 **22장 메이저 아르카나**: 각 카드별 고유한 이모지 아이콘
- 📊 **정/역방향 표시**: 카드의 방향에 따른 다른 해석

### 🧠 AI 기능 (Google Gemini 2.0 Flash)
- **카테고리 특화 해석**: 선택한 운세(연애, 재물 등)에만 집중된 분석
- **종합 메시지**: 3장 카드의 전체적인 흐름 파악
- **개별 카드 해석**: 과거/현재/미래 각각의 의미
- **실천 가능한 조언**: 구체적이고 실용적인 조언 제공

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18.0 이상
- npm 또는 yarn
- Google AI API 키 (무료)

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/1Day-1Service/10-03.git
cd 10-03
```

2. **의존성 설치**
```bash
npm install
```

3. **환경 변수 설정**

`.env.local` 파일을 생성하고 Google AI API 키를 추가하세요:

```bash
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

💡 **Google AI API 키 받는 방법**:
1. [Google AI Studio](https://aistudio.google.com/app/apikey) 접속
2. API 키 생성
3. 무료 쿼터 제공 (일일 제한 있음)

4. **개발 서버 실행**
```bash
npm run dev
```

5. **브라우저에서 접속**
```
http://localhost:3001
```

## 📖 사용 방법

### 1. 카테고리 선택
- 💕 **연애운**: 이성 관계, 연인과의 관계, 새로운 만남
- 💰 **재물운**: 재물 운세, 금전 수입, 재테크, 투자
- 💪 **건강운**: 건강 상태, 체력, 정신 건강, 웰빙
- 💼 **직업운**: 직장 생활, 업무 성과, 승진, 이직
- 👥 **대인관계운**: 친구 관계, 가족 관계, 동료 관계
- ✨ **종합운**: 전반적인 운세, 인생의 방향

### 2. 카드 뽑기
- "카드 뽑기" 버튼 클릭
- 3장의 카드(과거-현재-미래)가 순차적으로 공개

### 3. AI 해석 확인
- **종합 메시지**: 선택한 카테고리 관점에서 전체 흐름
- **과거 카드**: 과거가 현재에 미친 영향
- **현재 카드**: 현재 상황 분석
- **미래 카드**: 미래 전망
- **조언**: 실천 가능한 구체적 조언

### 4. 다시 뽑기
- 언제든지 "다시 뽑기" 버튼으로 새로운 운세 확인
- 카테고리 변경 후 다시 뽑기 가능

## 🏗️ 기술 스택

### Frontend
- **Next.js 14.2** - App Router, Server Components
- **React 18** - 함수형 컴포넌트, Hooks
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Framer Motion** - 3D 카드 애니메이션

### AI & Backend
- **Google Generative AI** - Gemini 2.0 Flash Experimental
- **Next.js API Routes** - 서버리스 API
- **카테고리별 프롬프트 엔지니어링** - 특화된 운세 해석

### UI Components
- **Shadcn UI** - 재사용 가능한 컴포넌트
- **Radix UI** - 접근성 높은 UI 프리미티브
- **Lucide React** - 아이콘 라이브러리

## 📁 프로젝트 구조

```
2025-10-03-daily-tarot/
├── app/
│   ├── api/
│   │   └── generate-reading/
│   │       └── route.ts          # AI 해석 생성 API
│   ├── globals.css               # 전역 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 메인 페이지
├── components/
│   ├── tarot/
│   │   ├── category-selector.tsx # 카테고리 선택
│   │   ├── card-spread.tsx       # 3카드 스프레드 표시
│   │   ├── tarot-card.tsx        # 단일 카드 컴포넌트
│   │   ├── reading-result.tsx    # 해석 결과 표시
│   │   └── share-button.tsx      # 공유 버튼
│   └── ui/                       # Shadcn UI 컴포넌트
├── lib/
│   ├── ai/
│   │   └── gemini-client.ts      # Google Gemini AI 클라이언트
│   ├── tarot-data.ts             # 22장 메이저 아르카나 데이터
│   ├── tarot-engine.ts           # 3카드 스프레드 로직
│   ├── daily-check.ts            # 저장 & 로드 관리
│   └── utils.ts                  # 유틸리티 함수
├── types/
│   └── tarot.ts                  # TypeScript 타입 정의
└── public/                       # 정적 파일
```

## 🎴 타로 카드 목록

**22장의 메이저 아르카나**:
- 0. 광대 (The Fool) 🃏
- I. 마법사 (The Magician) 🎩
- II. 여사제 (The High Priestess) 🌙
- III. 여황제 (The Empress) 👑
- IV. 황제 (The Emperor) 👨‍⚖️
- V. 교황 (The Hierophant) ⛪
- VI. 연인 (The Lovers) 💕
- VII. 전차 (The Chariot) 🏇
- VIII. 힘 (Strength) 🦁
- IX. 은둔자 (The Hermit) 🔦
- X. 운명의 수레바퀴 (Wheel of Fortune) 🎡
- XI. 정의 (Justice) ⚖️
- XII. 매달린 사람 (The Hanged Man) 🙃
- XIII. 죽음 (Death) 💀
- XIV. 절제 (Temperance) 🧘
- XV. 악마 (The Devil) 😈
- XVI. 탑 (The Tower) 🏰
- XVII. 별 (The Star) ⭐
- XVIII. 달 (The Moon) 🌙
- XIX. 태양 (The Sun) ☀️
- XX. 심판 (Judgement) 📯
- XXI. 세계 (The World) 🌍

## 🎨 주요 화면

### 1. 카테고리 선택
- 6가지 운세 카테고리
- 아이콘과 그라데이션으로 시각화
- 선택 시 애니메이션 효과

### 2. 3카드 스프레드
- 과거-현재-미래 카드 배치
- 순차적 3D 플립 애니메이션
- 각 카드의 정/역방향 표시

### 3. AI 해석 결과
- 카테고리별 종합 분석
- 각 카드별 상세 해석 (카드 이미지 포함)
- 실천 가능한 조언

### 4. 다시 뽑기
- 보라색 버튼으로 쉽게 접근
- 카테고리 재선택 가능

## 🔧 개발 스크립트

```bash
# 개발 서버 실행 (포트 3001)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint
```

## 🌟 특별한 점

### 1. **카테고리별 AI 특화**
일반적인 타로 해석이 아닌, 선택한 카테고리(연애, 재물 등)에만 집중된 AI 분석

### 2. **3카드 스프레드**
단일 카드가 아닌 과거-현재-미래의 흐름을 파악하는 전문적인 리딩

### 3. **Google Gemini 2.0 Flash**
- 최신 AI 모델 사용
- 빠른 응답 속도
- 자연스러운 한국어 해석

### 4. **부드러운 UX**
- 카드 즉시 표시
- AI 해석은 백그라운드 생성
- 에러 시 기본 해석으로 폴백

### 5. **완전한 TypeScript**
모든 코드가 TypeScript로 작성되어 타입 안정성 보장

## 📱 반응형 지원

- **모바일 (< 768px)**: 세로 레이아웃, 카드 세로 배치
- **태블릿 (768px - 1024px)**: 2단 그리드
- **데스크톱 (> 1024px)**: 3단 가로 배치

## 🔐 보안

- API 키는 서버사이드에서만 사용
- `.env.local`은 Git에서 자동 제외
- 클라이언트에 민감한 정보 노출 없음

## 🐛 문제 해결

### 카드 뽑기 버튼이 안 눌려요
```javascript
// 콘솔(F12)에서 실행
localStorage.clear()
location.reload()
```

### AI 해석이 생성되지 않아요
1. `.env.local` 파일에 API 키가 올바른지 확인
2. 서버를 재시작 (`Ctrl+C` 후 `npm run dev`)
3. Google AI API 크레딧 확인

### 포트 3001이 이미 사용 중이에요
```bash
# 다른 포트로 실행
npm run dev -- -p 3002
```

## 📝 개발 일지

- **2025-10-04**: 프로젝트 대규모 개편
  - Google Gemini AI 통합
  - 3카드 스프레드 시스템 구현
  - 6가지 카테고리별 특화 해석
  - 무제한 다시 뽑기 기능
  - UI/UX 대폭 개선

## 🎯 향후 계획

- [ ] 마이너 아르카나 56장 추가
- [ ] 켈틱 크로스 스프레드 (10카드)
- [ ] 사용자 질문 입력 기능
- [ ] 해석 히스토리 저장
- [ ] 카카오톡 공유 기능
- [ ] 다국어 지원 (영어, 일본어)
- [ ] PWA 지원

## 📄 라이선스

MIT License

## 👨‍💻 개발자

**1일 1서비스 프로젝트**
- 매일 하나씩 유용한 서비스를 만드는 챌린지

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - 강력한 React 프레임워크
- [Google AI](https://ai.google.dev/) - 무료 Gemini API 제공
- [Shadcn UI](https://ui.shadcn.com/) - 아름다운 컴포넌트 라이브러리
- [Framer Motion](https://www.framer.com/motion/) - 부드러운 애니메이션

---

<div align="center">

**🔮 AI가 해석하는 타로 운세로 당신의 미래를 확인하세요! ✨**

Made with 💜 by 1Day-1Service

[Live Demo](#) | [Report Bug](https://github.com/1Day-1Service/10-03/issues) | [Request Feature](https://github.com/1Day-1Service/10-03/issues)

</div>
