# 감정 일기장 (Emotion Diary)

단순히 “일기”만 쓰는 게 아니라, **그날의 감정까지 함께 기록**하는 개인 감정 일기장 프로젝트입니다.  
강의를 따라 만들면서 **라우팅으로 여러 페이지를 구성하는 법**, **공통 컴포넌트로 UI 모듈화**, **정적 자산(폰트/이미지) 사용**, **복잡한 데이터(리스트/정렬/필터링) 처리**, **배포(Vercel)** 흐름을 학습하는 것을 목표로 했습니다.

## 주요 기능

- **일기 CRUD**
  - **작성**: 날짜 / 감정(1~5) / 내용 입력 후 저장
  - **조회**: 개별 일기 상세 페이지에서 감정 이미지와 내용 확인
  - **수정**: 기존 일기 수정
  - **삭제**: 확인창 후 삭제(복구 불가 안내)
- **월별 일기 필터링**
  - 홈에서 현재 “피벗 월”을 기준으로 해당 월에 작성된 일기만 보여줍니다.
- **정렬**
  - 최신순 / 오래된순 정렬을 제공합니다.

## 페이지(라우팅)

프로젝트는 `react-router-dom` 기반으로 여러 페이지로 구성됩니다.

- **`/`**: 홈(월별 일기 리스트 + 정렬 + “새 일기 쓰기”)
- **`/new`**: 새 일기 작성
- **`/diary/:id`**: 일기 상세 조회
- **`/edit/:id`**: 일기 수정/삭제
- **`*`**: Not Found

라우팅은 `src/App.jsx`에서 정의되어 있으며, 일기 데이터는 Context로 하위 페이지/컴포넌트에 전달됩니다.

## 데이터/상태 관리

- **상태 관리**: `useReducer` + Context
  - `DiaryStateContext`: 일기 목록 상태
  - `DiaryDispatchContext`: 생성/수정/삭제 액션(`onCreate`, `onUpdate`, `onDelete`)
- **영속 저장소**: `localStorage`
  - 앱 시작 시 `localStorage`의 `diary` 데이터를 로드하여 초기화합니다.
  - 생성/수정/삭제 시 변경된 전체 목록을 `localStorage`에 저장합니다.

## 정적 자산(폰트/이미지)

- **외부 폰트 사용**
  - `public/NanumPenScript-Regular.ttf`를 `src/index.css`의 `@font-face`로 로드합니다.
- **이미지 사용**
  - 감정 이미지(`src/assets/emotion1.png` ~ `emotion5.png`)를 컴포넌트에서 import하여 사용합니다.
  - OG 썸네일/파비콘은 `public/thumbnail.png`, `public/favicon.ico`를 사용합니다.

## 기술 스택

- **Frontend**: React, React Router
- **Build Tool**: Vite
- **Lint**: ESLint

## 폴더 구조

```text
section12/
  public/
    NanumPenScript-Regular.ttf
    favicon.ico
    thumbnail.png
  src/
    assets/               # 감정 이미지 리소스
    components/           # 공통 UI 컴포넌트 (Header, Button, Editor, Viewer, List/Item 등)
    hooks/                # 커스텀 훅 (페이지 타이틀, 단일 일기 조회 등)
    pages/                # 라우팅 단위 페이지 (Home, New, Diary, Edit, Notfound)
    util/                 # 유틸/상수 (감정 상수, 날짜 포맷, 이미지 매핑 등)
    App.jsx               # 라우팅 + Context Provider + 로컬스토리지 초기화
    main.jsx              # React 진입점 (BrowserRouter)
```

## 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 배포

Vercel 배포를 목표로 한 프로젝트이며, Vite 빌드 결과물을 기준으로 배포할 수 있습니다.  
(프로젝트에 `.vercel/` 설정이 포함되어 있습니다.)
