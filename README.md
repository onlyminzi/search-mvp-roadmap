# 🚀 Search MVP Roadmap — 개발 인수인계 문서

> 신규 환경에서 이어서 개발할 수 있도록 프로젝트 구조, 데이터 설계, 주요 로직, 기술 스택, 로컬 실행법을 정리한 문서입니다.

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| **프로젝트명** | Search MVP Roadmap — Scrum Sprint Roadmap Matrix |
| **목적** | 신통합검색 프로젝트의 SP8~SP14 개발 로드맵을 RPG 스타일 퀘스트 보드로 시각화 |
| **특징** | 스프린트별 시나리오 진행도 시각화, 스토리보드 애니메이션, 확장 MVP 이중 트랙 |

---

## 2. 파일 구조

```
antigravity/
├── index.html         # 앱 전체 HTML 골격 (모달 포함, JS 로직은 없음)
├── styles.css         # 전체 CSS 디자인 시스템 (다크모드, RPG 테마)
├── app.js             # 모든 데이터 + 로직 (quests 배열, sprintRoadmap, 렌더링 함수)
├── cyber_cliff_bg.png # 배경 이미지
├── README.md          # 이 문서
├── CLAUDE.md          # Claude Code용 프로젝트 가이드
└── .claude/
    └── launch.json    # Claude Code 개발 서버 설정 (포트 8000)
```

> ⚠️ **단일 페이지 앱(SPA)**: 프레임워크 없음. 순수 HTML + Vanilla JS + CSS.

---

## 3. 기술 스택

- **런타임**: 순수 Vanilla JS (ES6+, No Framework)
- **스타일**: Vanilla CSS (CSS Variables, Flexbox, Grid, 애니메이션)
- **폰트**: Google Fonts — Inter + Orbitron (CDN)
- **서버**: `python3 -m http.server 8000` (개발용 정적 파일 서버)

---

## 4. 로컬 실행 방법

### 4-1. 새 PC에서 처음 세팅할 때

설치할 것은 **git과 python3뿐**입니다. Node.js, npm, 빌드 도구 모두 필요 없습니다.

```bash
git clone https://github.com/onlyminzi/search-mvp-roadmap.git
cd search-mvp-roadmap
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 접속하면 끝입니다.

> macOS·Linux는 python3가 기본 탑재되어 있습니다. Windows는 [python.org](https://www.python.org/downloads/)에서 설치하거나, 대신 `npx serve -l 8000` 을 써도 동일하게 동작합니다.

### 4-2. 이미 클론해 둔 PC에서 이어서 작업할 때

```bash
git pull
python3 -m http.server 8000
```

작업을 마치면 다른 PC에서 이어받을 수 있도록 반드시 푸시합니다.

```bash
git add -A && git commit -m "작업 내용" && git push
```

### 4-3. Claude Code 사용 시

저장소에 [.claude/launch.json](.claude/launch.json)이 포함되어 있어, Claude Code에서 별도 설정 없이 `quest-dashboard` 라는 이름으로 개발 서버를 바로 띄울 수 있습니다.

---

## 5. 핵심 데이터 구조 (app.js)

### 5-1. `quests` 배열 (시나리오 정의)

```js
const quests = [
  {
    id: 1,               // 시나리오 번호
    badge: "QUEST 01",   // 기본 MVP: "QUEST 0X" / 확장 MVP: "EXP 0X"
    isExpanded: false,   // true = 확장 MVP 시나리오 (보라색 스타일)
    title: "시나리오 1. ...",
    zone: "ZONE 1: ...",
    context: "...",
    goals: [...],
    conditions: [...],
    backlogs: [...],
    rewards: { xp, stat, statVal },
    persona: {
      name, avatar, desc,
      storyboard: [
        { type: "narrator" | "user" | "system", text: "..." }
      ]
    }
  }
]
```

**시나리오 목록:**

| ID | Badge | 제목 | 구분 |
|---|---|---|---|
| 1 | QUEST 01 | 검색 진입 & 자동완성 UI | Base MVP |
| 2 | QUEST 02 | 자동완성 목적지 도달 | Base MVP |
| 3 | QUEST 03 | 종목/공모주 결과 탐색 | Base MVP |
| 4 | QUEST 04 | 메뉴 결과 탐색 | Base MVP |
| 5 | QUEST 05 | 테마/키워드 결과 탐색 | Base MVP |
| 6 | QUEST 06 | 뉴스/공시 결과 탐색 | Base MVP |
| 7 | QUEST 07 | 검색 관리자 & 배치 제어 | Base MVP |
| 8 | QUEST 08 | MVP E2E 통합 품질 검증 | Base MVP |
| 9 | EXP 09 | 투자정보/이벤트/공지 탐색 | **Expanded MVP** |
| 10 | EXP 10 | 진입 구엔진 전환 & 결과없음 챗봇 | **Expanded MVP** |
| 11 | EXP 11 | GA 기반 검색 품질 지표 검증 | **Expanded MVP** |
| 12 | EXP 12 | 금융상품 콘텐츠 탐색 | **Expanded MVP** |

---

### 5-2. `sprintRoadmap` 객체 (스프린트별 상태)

```js
const sprintRoadmap = {
  SP8: {
    period: "날짜",
    progress: 30,          // 내부 보고 기준 진척률(%) — 헤더 % 와 XP 바가 이 값을 그대로 표시
    concept: "스프린트 개념",
    value: "고객 체감 가치",
    review: "리뷰 설명 요약",
    scenarioStatus: {
      1: { role: "primary"|"supporting"|"validation"|"none", rank: 0~7, desc: "..." },
      // ... 시나리오 1~12 모두 정의
    },
    storyboard: [
      { type: "narrator"|"user"|"system", text: "..." }
    ]
  },
  // SP9 ~ SP14
}
```

**Rank 정의 (0~7):**

| Rank | 뱃지 | 의미 |
|---|---|---|
| 0 | 미착수 🔒 | 해당 스프린트에서 미개발 |
| 1 | 정책정의 📜 | 기획/정책 정의 단계 |
| 2 | 일부구현 🛠️ | 일부 화면/API 구현 |
| 3 | 경로연결 🔗 | 화면 간 흐름 연결 완료 — 운영 트랙은 **운영연동 🔗** |
| 4 | 결과확장 ✨ | 기능 확장 및 고도화 — 운영 트랙은 **기능확장 ✨** |
| 5 | 운영가능 🛡️ | 운영 가능 수준 도달 |
| 6 | QA검증완료 🏆 | E2E QA 통과 완료 (SP13 종착점) — 운영 트랙은 **운영검증완료 🏆** |
| 7 | 오픈준비완료 🚀 | QA 이슈 수정·재검증 및 운영 반영 완료 (SP14 종착점) |

> 💡 **운영 트랙:** 시나리오 7(검색 관리자)·11(GA 지표)은 페르소나가 박관리(검색 운영 담당자)인 내부용 시나리오입니다. 사다리의 3·4·6단은 고객의 검색 결과 여정을 기준으로 지은 이름이라 이 둘에는 맞지 않아서, `isOps: true` 로 표시하고 해당 단계만 다른 문구를 씁니다 (rank 3 배치 파이프라인 연동, rank 4 관리 기능 추가, rank 6 운영 관점 점검). 0~2·5·7단은 공용이고 사다리 깊이도 그대로라 진행률·노드 색상·연결선은 영향이 없습니다. 실제로 rank 3·4를 거치는 건 S7뿐입니다(SP9·SP10·SP11) — S11은 SP12까지 rank 2에 머물다 SP13에서 6으로 올라갑니다. 시나리오 8은 페르소나가 QA 엔지니어지만 산출물이 고객 E2E 인수 테스트 자체라 고객 트랙으로 둡니다.

**Role 정의:**

| Role | 의미 |
|---|---|
| `primary` | 해당 스프린트의 핵심 개발 대상 |
| `supporting` | 보조적으로 개발되는 항목 |
| `validation` | QA/검증 중심 |
| `none` | 해당 스프린트에서 미착수 |

---

### 5-3. 스프린트별 진행 요약

**스프린트별 보고 진척률:** SP8 30% / SP9 50% / SP10 60% / SP11 65% / SP12 75% / SP13 85% / SP14 100%

> ⚠️ 이 수치는 내부 보고 기준(개발 공수 기준)이라 **랭크 합산과 일치하지 않습니다.** 예를 들어 SP9는 보고 기준 50%지만 랭크로는 84점 중 18점(21%)입니다. 랭크를 바꿔도 화면의 % 는 안 움직이므로 `progress` 를 같이 고쳐야 합니다.

| Sprint | 개념 | Q1~Q8 | E1~E4 (Q9~12) |
|---|---|---|---|
| SP8 | 기본 흐름 구축 | Rank 1~3 시작 | 미착수 |
| SP9 | 핵심 기능 확장 | Rank 3~4 | 미착수 |
| SP10 | 검색 경험 고도화 | Rank 4~5 | 미착수 |
| SP11 | 확장 화면 개발 | Rank 4~5 | E1/E2: Rank 3, E3: Rank 1, E4: 미착수 |
| SP12 | 오픈 준비 완료 | Rank 5 | E1/E2: Rank 4, E3/E4: Rank 2 |
| SP13 | 품질검증/심의 | 전원 Rank 6 🏆 | 전원 Rank 6 🏆 |
| SP14 | QA 수정개발·직원 CBT·점진 오픈 전환 | 전원 Rank 7 🚀 | 전원 Rank 7 🚀 |

---

## 6. 주요 UI 함수 (app.js)

| 함수명 | 역할 |
|---|---|
| `renderQuestBoard()` | 퀘스트 노드 렌더링. Q1~Q8 시안, E1~E4 보라 + 구분 배너 |
| `drawConnections()` | SVG 점선으로 노드 간 경로 연결. 100ms 지연 렌더라 `connectionTimeoutId`로 이전 호출을 취소해 경로 중복 누적을 막음 |
| `openQuestModal(id)` | 퀘스트 클릭 → 모달 오픈 및 시나리오 데이터 렌더링 |
| `playStoryboard()` | 모달 내 챗 버블 애니메이션 순차 재생 |
| `playSprintReviewStoryboard()` | 스프린트 리뷰 스토리보드 재생 (confetti 포함) |
| `updateSprint(sprintId)` | 상단 탭 클릭 → 스프린트 전환 및 전체 UI 갱신 |
| `launchConfetti()` | SP14 완료 시 색종이 애니메이션 |

---

## 7. 디자인 시스템 (styles.css)

### CSS 변수 (색상 토큰)

```css
:root {
  --color-cyan: #00f0ff;     /* 기본 MVP 강조색 */
  --color-green: #00ffaa;    /* 완료 상태 색 */
  --color-purple: #bd00ff;   /* 확장 MVP 강조색 */
  --color-locked: #3a3f5a;   /* 미착수 노드 색 */
  --bg-dark: #090c1a;        /* 전체 배경 */
  --text-white: #e8eaf6;
  --text-muted: #8892b0;
}
```

### 핵심 CSS 클래스

| 클래스 | 역할 |
|---|---|
| `.quest-node` | 퀘스트 원형 노드 기본 |
| `.quest-node.active` | 개발 중 (시안 글로우) |
| `.quest-node.completed` | 완료 (초록 글로우) |
| `.quest-node.locked` | 미착수 (반투명) |
| `.quest-node.expanded-quest` | 확장 MVP 노드 (보라 계열) |
| `.expanded-section-divider` | 확장 MVP 구분 배너 |
| `.rank-badge.rank-N` | rank 1~7별 뱃지 |
| `.sprint-header-top` | 스프린트 카드 헤더. `display:block` + 뱃지 `float:left` 로, 긴 제목의 둘째 줄이 뱃지 아래 공간까지 사용 (flex 로 되돌리면 제목이 `…` 로 잘림) |
| `.glass` | 글래스모피즘 |
| `.orbitron` | Orbitron 폰트 |

---

## 8. 확장 MVP 이중 트랙 구조

SP11부터 기본 MVP(Q1~Q8)와 확장 MVP(E1~E4)가 별도 트랙으로 시각화됩니다.

```
[기본 MVP Q1~Q8]  ← 시안(#00f0ff) 색상, SP8~SP14
        ↕ Rank 0 → 7로 레벨업

── 🆕 EXPANDED MVP ZONE 구분 배너 ──

[확장 MVP E1~E4]  ← 보라(#bd00ff) 색상, SP11~SP14
        ↕ Rank 0 → 7로 레벨업
```

- 노드 라벨: 기본 `Q1~Q8`, 확장 `E1~E4` (내부 id는 9~12)
- 확장 노드는 SP11 이전 스프린트에서는 아예 렌더링되지 않음

---

## 9. 개발 히스토리

| 변경 | 내용 |
|---|---|
| SP8~SP10 기반 | Q1~Q8 시나리오 정의, 스프린트 진행도 구현 |
| SP11 확장 MVP 추가 | E1~E4(Q9~12) 시나리오 신규 추가 |
| 데이터 정비 | Q1~Q8 전 스프린트 진행도 재정비 (SP10 이후 끊김 수정) |
| 디자인 확장 | 보라/마젠타 팔레트 + pulse-purple 애니메이션 + 구분 배너 추가 |
| 시나리오 10 수정 | 점진적 오픈 전략(구엔진 전환) + 챗봇 연결 유도 방향으로 변경 |
| SP11/12/13 데이터 | E1/E2 경로연결(SP11) → 결과확장(SP12) → 운영가능(SP13) 진행 반영 |
