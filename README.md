# 🔮 오늘의 타로 운세 (Daily Tarot Reading)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Hugging Face](https://img.shields.io/badge/🤗%20Hugging%20Face-AI-yellow)](https://huggingface.co/)

**1일 1서비스 프로젝트 #3** - AI가 해석해주는 매일 새로운 타로 운세 서비스

매일 하나의 타로 카드를 뽑아 AI가 개인화된 해석을 제공합니다. 하루를 긍정적으로 시작할 수 있는 메시지와 조언을 받아보세요! ✨

## 🎯 주요 기능

### ⭐ 핵심 기능
- 🎴 **일일 타로 카드**: 매일 하나의 랜덤 타로 카드 뽑기
- 🤖 **AI 개인화 해석**: Hugging Face AI (Meta Llama 3.2 3B)가 작성하는 맞춤형 해석
- 🔄 **카드 다시 뽑기**: 언제든지 새로운 카드로 다시 뽑기 가능
- 💾 **일일 저장**: 하루 동안 뽑은 카드와 해석 보관 (자정 초기화)
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원

### 🎨 UI/UX
- ✨ **3D 카드 플립 애니메이션**: Framer Motion을 활용한 부드러운 카드 뒤집기
- 🌙 **신비로운 다크 테마**: 보라색 그라데이션과 별빛 배경
- 🎭 **22장의 메이저 아르카나**: 각 카드별 고유한 이모지 아이콘
- 📊 **정/역방향 표시**: 카드의 방향에 따른 다른 해석
- 🎨 **행운의 색상 & 숫자**: 각 카드별 행운의 요소 표시

### 🧠 AI 기능
- **실시간 해석 생성**: 카드를 뽑은 후 AI가 실시간으로 개인화된 메시지 작성
- **자연스러운 한국어**: 따뜻하고 친근한 톤의 AI 해석
- **로딩 애니메이션**: AI 생성 중 상태 표시
- **에러 처리**: AI 실패 시 기본 해석으로 자동 폴백

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18.0 이상
- npm 또는 yarn
- Hugging Face API 토큰 (무료)

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

`.env.local` 파일을 생성하고 Hugging Face API 토큰을 추가하세요:

```bash
HUGGINGFACE_API_TOKEN=your_token_here
```

💡 **Hugging Face API 토큰 받는 방법**:
1. [Hugging Face](https://huggingface.co/) 가입
2. Settings → Access Tokens
3. New Token 생성 (Read 권한만 필요)

4. **개발 서버 실행**
```bash
npm run dev
```

5. **브라우저에서 접속**
```
http://localhost:3001
```

## 📖 사용 방법

### 카드 뽑기
1. 첫 화면에서 **"카드 뽑기"** 버튼 클릭
2. 카드가 뒤집히며 오늘의 타로 카드가 나타남
3. 기본 해석이 먼저 표시됨
4. 2-5초 후 AI가 생성한 개인화된 해석으로 업데이트

### 카드 다시 뽑기
1. 결과 화면 하단의 **"다시 뽑기"** 버튼 클릭
2. 확인 메시지에서 **"네, 다시 뽑을게요"** 선택
3. 처음 화면으로 돌아가 새로운 카드 뽑기

### 로컬스토리지 초기화
개발자 도구 콘솔(F12)에서:
```javascript
localStorage.clear()
location.reload()
```

## 🏗️ 기술 스택

### Frontend
- **Next.js 14.2** - App Router, Server Components
- **React 18** - 함수형 컴포넌트, Hooks
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Framer Motion** - 애니메이션

### AI & Backend
- **Hugging Face Inference API** - AI 모델 호출
- **Meta Llama 3.2 3B Instruct** - 텍스트 생성 모델
- **Next.js API Routes** - 서버리스 API

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
│   │   ├── tarot-card.tsx        # 3D 카드 컴포넌트
│   │   ├── reading-result.tsx    # 해석 결과 표시
│   │   └── share-button.tsx      # 공유 버튼
│   └── ui/                       # Shadcn UI 컴포넌트
├── lib/
│   ├── ai/
│   │   └── huggingface-client.ts # AI 클라이언트
│   ├── tarot-data.ts             # 타로 카드 데이터
│   ├── tarot-engine.ts           # 타로 로직
│   ├── daily-check.ts            # 일일 체크 & 저장
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

### 1. 카드 뽑기 전
- 신비로운 뒷면 카드 애니메이션
- 부드러운 부유 효과
- 별빛 배경

### 2. 카드 뽑는 중
- 로딩 스피너
- "카드를 뽑는 중..." 메시지

### 3. 결과 화면
- 3D 플립 애니메이션으로 카드 공개
- 정/역방향 배지
- 키워드 태그
- AI 해석 (로딩 → 완성)
- 행운의 색상 & 숫자
- 다시 뽑기 버튼

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

### 1. **AI 개인화**
일반적인 고정된 타로 해석이 아닌, AI가 매번 새롭게 작성하는 개인화된 메시지를 받을 수 있습니다.

### 2. **부드러운 UX**
- 카드는 즉시 표시되어 사용자를 기다리게 하지 않음
- AI 해석은 백그라운드에서 생성되어 자연스럽게 업데이트
- 에러가 발생해도 기본 해석으로 서비스 지속

### 3. **아름다운 디자인**
- Tailwind CSS로 세밀하게 조정된 그라데이션
- Framer Motion의 부드러운 애니메이션
- 별빛과 보라색 테마로 신비로운 분위기

### 4. **TypeScript 완전 지원**
모든 코드가 TypeScript로 작성되어 타입 안정성 보장

## 📱 반응형 지원

- **모바일 (< 768px)**: 세로 레이아웃, 최적화된 카드 크기
- **태블릿 (768px - 1024px)**: 2단 그리드
- **데스크톱 (> 1024px)**: 카드와 해석 나란히 표시

## 🔐 보안

- API 토큰은 서버사이드에서만 사용
- `.env.local`은 Git에서 자동 제외
- 클라이언트에 민감한 정보 노출 없음

## 🐛 문제 해결

### 카드 버튼이 안 눌려요
```javascript
// 콘솔(F12)에서 실행
localStorage.clear()
location.reload()
```

### AI 해석이 생성되지 않아요
1. `.env.local` 파일에 API 토큰이 올바른지 확인
2. 서버를 재시작 (`Ctrl+C` 후 `npm run dev`)
3. Hugging Face API 크레딧 확인

### 포트 3001이 이미 사용 중이에요
```bash
# 다른 포트로 실행
npm run dev -- -p 3002
```

## 📝 개발 일지

- **2025-10-03**: 초기 프로젝트 생성
- 22장 메이저 아르카나 데이터 구축
- 3D 카드 플립 애니메이션 구현
- Hugging Face AI 통합
- 다시 뽑기 기능 추가

## 🎯 향후 계획

- [ ] 마이너 아르카나 56장 추가
- [ ] 3카드 스프레드 (과거-현재-미래)
- [ ] 사용자 질문 입력 기능
- [ ] 해석 히스토리 저장
- [ ] 소셜 공유 기능 강화
- [ ] 다국어 지원 (영어, 일본어)
- [ ] PWA 지원

## 📄 라이선스

MIT License

## 👨‍💻 개발자

**1일 1서비스 프로젝트**
- 매일 하나씩 유용한 서비스를 만드는 챌린지

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - 강력한 React 프레임워크
- [Hugging Face](https://huggingface.co/) - 무료 AI API 제공
- [Shadcn UI](https://ui.shadcn.com/) - 아름다운 컴포넌트 라이브러리
- [Framer Motion](https://www.framer.com/motion/) - 부드러운 애니메이션

---

<div align="center">

**🔮 매일 새로운 타로 운세로 하루를 시작하세요! ✨**

Made with 💜 by 1Day-1Service

[Live Demo](#) | [Report Bug](https://github.com/1Day-1Service/10-03/issues) | [Request Feature](https://github.com/1Day-1Service/10-03/issues)

</div>
