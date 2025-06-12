# 📁 React Tetris 코드 구조 및 함수 명세서

> 각 파일의 역할과 주요 함수들을 상세히 정리한 참고 문서입니다.

---

## 📱 **src/index.js** - 메인 엔트리 포인트
```javascript
/**
 * 📱 메인 엔트리 포인트
 * - React 앱을 DOM에 마운트하는 시작점
 * - React 18의 createRoot API 사용
 */
```

**주요 역할:**
- React 앱을 HTML DOM에 연결
- React 18의 새로운 렌더링 API 사용
- 전역 CSS 스타일 로드

**의존성:**
- `react`, `react-dom/client`
- `./index.css`, `./App`

---

## 🎮 **src/App.js** - 루트 컴포넌트
```javascript
/**
 * 🎮 메인 App 컴포넌트
 * - 전체 애플리케이션의 루트 컴포넌트
 * - Tetris 게임 컴포넌트를 렌더링
 */
```

**주요 역할:**
- 앱의 최상위 컴포넌트
- Tetris 컴포넌트 렌더링
- 전역 스타일 적용

**의존성:**
- `./components/Tetris`

---

## 🛠️ **src/utils/Utils.js** - 게임 유틸리티 함수들
```javascript
/**
 * 🛠️ 게임 유틸리티 함수들
 * - 테트리스 게임 로직에 필요한 헬퍼 함수들
 */
```

### 📋 **함수 목록:**

#### `PrintPlayerInMap(player, map)`
- **기능**: 플레이어(떨어지는 블록)를 게임 맵에 그리는 함수
- **매개변수**: 
  - `player`: 현재 플레이어 블록 정보
  - `map`: 게임 맵 배열
- **반환값**: 플레이어가 그려진 새로운 맵
- **용도**: 블록이 맵에 착지했을 때 맵에 블록을 영구적으로 추가

---

## ⏰ **src/hooks/useInterval.js** - setInterval 안전 사용 훅
```javascript
/**
 * ⏰ useInterval 커스텀 훅
 * - setInterval을 React 함수형 컴포넌트에서 안전하게 사용하기 위한 훅
 * - 컴포넌트 리렌더링 시에도 콜백 함수의 최신 상태를 유지
 * - delay가 null이면 interval을 정지
 */
```

### 📋 **함수 목록:**

#### `useInterval(callback, delay)`
- **기능**: React에서 setInterval을 안전하게 사용하는 커스텀 훅
- **매개변수**:
  - `callback`: 실행할 함수
  - `delay`: 실행 간격 (ms), null이면 정지
- **용도**: 게임 루프(블록 자동 낙하)에 사용

---

## 📱 **src/hooks/useWindowDimensions.js** - 창 크기 추적 훅
```javascript
/**
 * 📱 useWindowDimensions 커스텀 훅
 * - 브라우저 창 크기를 실시간으로 추적하는 훅
 * - 반응형 디자인 구현에 사용
 * - 윈도우 리사이즈 이벤트를 자동으로 관리
 */
```

### 📋 **함수 목록:**

#### `getWindowDimensions()`
- **기능**: 현재 윈도우 크기를 반환
- **반환값**: `{width, height}` 객체

#### `useWindowDimensions()`
- **기능**: 윈도우 크기 변화를 실시간으로 추적하는 훅
- **반환값**: `{width, height}` 객체
- **용도**: 반응형 게임 화면 크기 조정

---

## 🎮 **src/components/Tetris/index.js** - 게임 상태 관리
```javascript
/**
 * 🎮 메인 Tetris 컴포넌트
 * - 게임 상태 관리 (시작 페이지 ↔ 게임 화면)
 * - StartPage와 Game 컴포넌트 간의 라우팅 역할
 */
```

### 📋 **상태 관리:**
- `runing`: 게임 실행 여부 (boolean)

**주요 역할:**
- 게임 시작 전/후 화면 전환
- StartPage ↔ Game 컴포넌트 라우팅

---

## 📐 **src/components/Center/index.js** - 중앙정렬 레이아웃
```javascript
/**
 * 📐 Center 레이아웃 컴포넌트
 * - 전체 화면 중앙 정렬을 위한 styled-component
 * - 로딩 화면이나 모달 등에 사용
 */
```

**주요 역할:**
- Flexbox를 이용한 중앙 정렬
- 재사용 가능한 레이아웃 컴포넌트

---

## 🚀 **src/components/StartPage/index.js** - 게임 시작 페이지
```javascript
/**
 * 🚀 게임 시작 페이지 컴포넌트
 * - 게임 시작 전 화면
 * - 3D 효과가 있는 Start 버튼 포함
 * - 황금색 배경과 스타일링된 UI
 */
```

### 📋 **컴포넌트 구조:**
- `StyledStartPage`: 전체 화면 배경
- `StartButton`: 3D 효과가 있는 시작 버튼

**주요 역할:**
- 게임 시작 화면 렌더링
- 3D 스타일 버튼 UI
- 게임 시작 콜백 실행

---

## 💀 **src/components/LoseGame/index.js** - 게임오버 모달
```javascript
/**
 * 💀 게임 오버 모달 컴포넌트
 * - 게임 종료 시 표시되는 오버레이 모달
 * - 최종 점수, 레벨, 라인 수 표시
 * - 게임 재시작 버튼 제공
 * - 반응형 디자인 지원 (세로/가로 모드)
 */
```

### 📋 **컴포넌트 구조:**
- `CenterOverlay`: 전체 화면 오버레이
- `LoseContainer`: 게임오버 모달 컨테이너
- `Title`: "Game Over" 제목
- `ContainerStatus`: 점수 정보 컨테이너
- `StatusRow`: 개별 상태 정보 행
- `ContainerButton`: 버튼 컨테이너
- `Button`: 재시작 버튼

**Props:**
- `status`: 게임 상태 정보 (점수, 레벨, 라인)
- `portrait`: 세로 모드 여부
- `pixelSize`: 픽셀 크기
- `theme3d`: 3D 테마 여부
- `restartClick`: 재시작 콜백 함수

---

## 📊 **src/components/StatusRow/index.js** - 상태 표시 컴포넌트
```javascript
/**
 * 📊 상태 표시 행 컴포넌트
 * - 게임 상태 정보를 표시하는 재사용 가능한 컴포넌트
 * - 점수, 레벨, 라인 수 등의 정보 표시
 * - 커스터마이징 가능한 스타일링 옵션
 */
```

### 📋 **컴포넌트 구조:**
- `Container`: 상태 정보 컨테이너 (shouldForwardProp으로 DOM props 필터링)
- `Title`: 상태 제목
- `Value`: 상태 값

**Props:**
- `title`: 표시할 제목
- `value`: 표시할 값
- `padding`: 패딩 크기
- `margin`: 마진 크기
- `borderSize`: 테두리 크기
- `portrait`: 세로 모드 여부
- `backgroundColor`: 배경색

---

## 🎯 **src/components/Stage/index.js** - 메인 게임 스테이지
```javascript
/**
 * 🎯 메인 게임 스테이지 컴포넌트
 * - 테트리스 게임 화면의 메인 컴포넌트
 * - 게임 보드, 다음 블록 미리보기, 상태 정보 표시
 * - 반응형 디자인 (세로/가로 모드 자동 전환)
 * - 3D 테마 토글 기능
 * - 키보드/터치 이벤트 처리
 */
```

### 📋 **함수 목록:**

#### `getRenderizacaoBloco(bloco)`
- **기능**: 블록의 빈 공간을 제거하여 렌더링용으로 최적화
- **매개변수**: `bloco` - 원본 블록 배열
- **반환값**: 최적화된 블록 배열
- **용도**: 다음 블록 미리보기에서 불필요한 공간 제거

### 📋 **상태 관리:**
- `pixelSize`: 픽셀 크기 (반응형)
- `portrait`: 세로 모드 여부
- `theme3d`: 3D 테마 활성화 여부
- `nextRender`: 다음 블록 렌더링 데이터

### 📋 **컴포넌트 구조:**
- `Game`: 메인 게임 컨테이너
- `ContainerNext`: 다음 블록 미리보기 영역
- `Next`: 다음 블록 표시 박스
- `StyledStage`: 메인 게임 보드
- `Row`: 게임 보드의 각 행
- `Pixel`: 개별 픽셀/블록
- `ContainerStatus`: 상태 정보 영역

**Props:**
- `lose`: 게임오버 여부
- `restartClick`: 재시작 콜백
- `map`: 게임 맵 데이터
- `player`: 현재 플레이어 블록
- `hint`: 힌트 블록 위치
- `status`: 게임 상태 (점수, 레벨, 라인)
- `paused`: 일시정지 여부

---

## 🎮 **src/components/Game/index.js** - 핵심 게임 로직
```javascript
/**
 * 🎮 핵심 게임 로직 컴포넌트
 * - 테트리스 게임의 모든 핵심 로직 담당
 * - 블록 생성, 이동, 회전, 충돌 감지, 라인 클리어
 * - 키보드 입력 처리 (방향키, 스페이스바)
 * - 터치/드래그 제스처 지원
 * - 점수 계산 및 레벨 시스템
 * - 게임 오버 처리
 */
```

### 📋 **블록 정의:**
- `I, O, T, J, L, S, Z`: 7가지 테트리스 블록 형태

### 📋 **주요 함수 목록:**

#### `getRandomBloco()`
- **기능**: 랜덤한 테트리스 블록 생성
- **반환값**: 색상이 포함된 블록 객체
- **용도**: 새로운 블록 생성 시 사용

#### `getRandomPlayer(player)`
- **기능**: 새로운 플레이어 블록 생성
- **매개변수**: `player` - 이전 플레이어 정보
- **반환값**: 새 플레이어 객체 (현재 블록 + 다음 블록)
- **용도**: 블록이 착지한 후 새 블록 생성

#### `restartGame()`
- **기능**: 게임 재시작
- **용도**: 모든 게임 상태를 초기값으로 리셋

#### `loseGame()`
- **기능**: 게임 오버 처리
- **용도**: 게임오버 상태로 전환

#### `drop()`
- **기능**: 블록을 한 칸 아래로 이동
- **용도**: 자동 낙하 및 수동 빠른 낙하

#### `rotatePlayer()`
- **기능**: 현재 블록을 시계방향으로 90도 회전
- **용도**: 위 화살표 키 입력 시 실행

#### `forwardDown()`
- **기능**: 블록을 바닥까지 즉시 이동 (하드 드롭)
- **용도**: 스페이스바 입력 시 실행

#### `keyUp({keyCode})`
- **기능**: 키보드 키 릴리즈 이벤트 처리
- **매개변수**: `keyCode` - 릴리즈된 키 코드
- **처리 키**: 
  - `40` (↓): 빠른 낙하 종료
  - `32` (Space): 스페이스 재사용 허용

#### `keyDown({keyCode})`
- **기능**: 키보드 키 프레스 이벤트 처리
- **매개변수**: `keyCode` - 눌린 키 코드
- **처리 키**:
  - `37` (←): 좌측 이동
  - `38` (↑): 블록 회전
  - `39` (→): 우측 이동
  - `40` (↓): 빠른 낙하
  - `32` (Space): 하드 드롭

#### `checkMap(map)`
- **기능**: 완성된 라인 확인 및 제거
- **매개변수**: `map` - 현재 게임 맵
- **반환값**: 라인이 제거된 새로운 맵
- **용도**: 라인 클리어 로직 및 점수 계산

#### `validatePosition(pos, bloco)`
- **기능**: 블록이 특정 위치에 놓일 수 있는지 검증
- **매개변수**: 
  - `pos` - 확인할 위치 [y, x]
  - `bloco` - 확인할 블록
- **반환값**: 배치 가능 여부 (boolean)
- **용도**: 충돌 감지 및 이동/회전 가능성 검사

#### `calculateHintPlayer(player)`
- **기능**: 현재 블록이 떨어질 위치 계산 (그림자 블록)
- **매개변수**: `player` - 현재 플레이어 블록
- **반환값**: 힌트 위치의 플레이어 객체
- **용도**: 블록이 떨어질 위치를 미리보기로 표시

#### `getNewPlayerPos(movement)`
- **기능**: 이동 방향에 따른 새로운 위치 계산
- **매개변수**: `movement` - "left", "right", "down"
- **반환값**: 새로운 위치 배열 또는 기존 위치
- **용도**: 블록 이동 시 새 위치 계산

### 📋 **상태 관리:**
- `map`: 게임 맵 (18x10 배열)
- `player`: 현재 플레이어 블록
- `down`: 빠른 낙하 모드 여부
- `pause`: 일시정지 상태
- `tick`: 마지막 입력 시간
- `hintPlayer`: 힌트 블록 위치
- `spaceReleased`: 스페이스 키 재사용 가능 여부
- `lines`: 완성한 라인 수
- `score`: 현재 점수
- `level`: 현재 레벨
- `dragX, dragY`: 드래그 위치
- `gameOver`: 게임오버 여부

### 📋 **게임 상수:**
- `STAGE_HEIGHT`: 18 (게임 보드 높이)
- `STAGE_WIDTH`: 10 (게임 보드 너비)
- `colors`: 7가지 블록 색상 배열

---

## 🎨 **스타일 파일들**

### **src/index.css**
- 전역 CSS 스타일
- 폰트 로드 및 기본 스타일 설정

### **src/styles.css**
- 추가 컴포넌트 스타일
- 커스텀 CSS 규칙

---

## 🖼️ **이미지 리소스**

### **src/images/background.jpg**
- 게임 배경 이미지 (고화질)

### **src/images/background-min.jpg**
- 최적화된 배경 이미지 (저용량)

---

## 🔗 **컴포넌트 의존성 관계**

```
App
└── Tetris
    ├── StartPage
    └── Game
        └── Stage
            ├── StatusRow
            ├── LoseGame
            └── Center (for loading)
```

## 🎯 **주요 게임 플로우**

1. **게임 시작**: `StartPage` → `Game` 컴포넌트 전환
2. **블록 생성**: `getRandomPlayer()` → 새 블록 생성
3. **블록 이동**: `keyDown()` → `getNewPlayerPos()` → `validatePosition()`
4. **블록 회전**: `rotatePlayer()` → `validatePosition()`
5. **블록 낙하**: `useInterval()` → `drop()` → `validatePosition()`
6. **라인 완성**: `checkMap()` → 점수 계산 → 레벨 업
7. **게임 오버**: `loseGame()` → `LoseGame` 모달 표시
8. **게임 재시작**: `restartGame()` → 모든 상태 초기화 
