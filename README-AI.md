# 🔮 AI 타로 운세 - Hugging Face 통합

## ✨ 새로운 기능

이제 **Hugging Face AI**가 당신만을 위한 개인화된 타로 해석을 제공합니다!

### AI 기능 특징

- 🤖 **Meta Llama 3.2 3B Instruct** 모델 사용
- 💬 **개인화된 해석**: 각 카드에 맞춤형 메시지와 조언 생성
- 🌟 **실시간 생성**: 카드를 뽑은 후 AI가 실시간으로 해석 작성
- 📝 **한국어 지원**: 자연스러운 한국어로 따뜻한 메시지 전달
- 💾 **로컬 저장**: AI 해석도 함께 저장되어 하루 종일 확인 가능

### 작동 방식

1. **카드 뽑기**: 사용자가 카드 뽑기 버튼 클릭
2. **카드 선택**: 랜덤으로 타로 카드와 방향 결정
3. **AI 해석 생성**: 
   - 카드 정보를 Hugging Face API로 전송
   - AI가 카드의 의미와 키워드를 분석
   - 개인화된 메시지와 조언 생성
4. **결과 표시**: 카드와 함께 AI 해석 표시

### 기술 스택

```typescript
// Hugging Face Inference SDK
import { HfInference } from '@huggingface/inference';

// 사용 모델
model: 'meta-llama/Llama-3.2-3B-Instruct'

// API 엔드포인트
POST /api/generate-reading
```

### 환경 변수 설정

`.env.local` 파일에 Hugging Face API 토큰이 필요합니다:

```bash
HUGGINGFACE_API_TOKEN=your_token_here
```

### 파일 구조

```
2025-10-03-daily-tarot/
├── lib/
│   └── ai/
│       └── gemini-client.ts         # Google Gemini AI 클라이언트
├── app/
│   ├── api/
│   │   └── generate-reading/
│   │       └── route.ts              # API 라우트
│   └── page.tsx                      # 메인 페이지 (AI 통합)
├── components/
│   └── tarot/
│       └── reading-result.tsx        # 결과 표시 (AI 지원)
└── types/
    └── tarot.ts                      # 타입 정의 (AI 해석 포함)
```

### UI/UX

- **로딩 상태**: AI가 해석을 생성하는 동안 스피너와 메시지 표시
- **에러 처리**: API 오류 시 기본 해석으로 폴백
- **부드러운 전환**: 애니메이션으로 자연스러운 사용자 경험

### 성능 최적화

- **비동기 처리**: 카드는 즉시 표시, AI 해석은 백그라운드에서 생성
- **캐싱**: 하루에 한 번만 생성, localStorage에 저장
- **에러 복구**: AI 실패 시에도 기본 해석으로 서비스 지속

## 🚀 실행 방법

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 환경 변수 설정:
   ```bash
   # .env.local 파일 생성
   HUGGINGFACE_API_TOKEN=your_token_here
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. 브라우저에서 접속:
   ```
   http://localhost:3001
   ```

## 🎨 사용자 경험

1. **카드 뽑기 버튼 클릭**
2. **카드 뒤집기 애니메이션** (1초)
3. **기본 해석 표시** (즉시)
4. **AI 해석 생성 중...** (2-5초)
5. **AI 해석으로 업데이트** ✨

## 🔒 보안

- API 토큰은 서버사이드에서만 사용
- 클라이언트에 노출되지 않음
- .env.local은 git에서 무시됨

## 📝 향후 개선 사항

- [ ] 사용자 질문 입력 기능
- [ ] 다양한 AI 모델 선택 옵션
- [ ] 해석 스타일 커스터마이징
- [ ] 해석 히스토리 저장
- [ ] 소셜 공유 기능 강화

---

Made with 💜 by 1일 1서비스 프로젝트

