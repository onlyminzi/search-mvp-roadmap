// Quest data representing the 12 customer scenarios (ids 1-8 base MVP, 9-12 expanded MVP)
const quests = [
  {
    id: 1,
    badge: "QUEST 01",
    title: "시나리오 1. 검색 진입 & 탐색 시작",
    zone: "ZONE 1: SEARCH ENTRY & UTILITIES",
    context: "고객이 검색창에 진입했지만 아직 검색어를 입력하지 않았다. 최근 검색, 인기 검색, 기본 입력 UI를 통해 빠르게 탐색을 시작해야 한다.",
    goals: [
      "검색 진입 화면에서 고객이 바로 탐색을 시작할 수 있다.",
      "최근검색/인기검색을 통해 종목, 메뉴, 검색 결과로 이동할 수 있다.",
      "입력 규칙과 예외 케이스가 명확하다."
    ],
    conditions: [
      "검색 진입 화면의 기본 UI/정책이 확정된다.",
      "최근검색/인기검색이 화면에 노출되고, 선택 시 목적지 또는 검색 결과로 이동할 수 있다.",
      "입력 불가/오류/빈값 케이스의 처리 기준이 정의된다."
    ],
    backlogs: [
      "[정책] 입력화면 검색어 입력 정책 정의 (수기/자연어/예외 케이스)",
      "[화면개발] SP-1a. 검색 진입 화면 정의 및 UI 제작",
      "[R&D] SP1-a 입력화면 UI 개발가능성 검증",
      "[화면개발] SP1-a 입력화면 인기검색 UI 개발",
      "[화면개발] SP1-a 입력화면 최근검색 UI 개발",
      "[백엔드] 인기 검색 순위 프로세스 개발",
      "[백엔드] 인기 검색 순위 조회서비스 개발"
    ],
    rewards: {
      xp: 50,
      stat: "ui",
      statVal: 8
    },
    persona: {
      name: "김주린 (30, 직장인)",
      avatar: "🙋‍♂️",
      desc: "주식 초보 / 최근 핫한 정보 위주로 탐색 선호",
      storyboard: [
        { type: "narrator", text: "김주린님이 모바일 주식 앱을 켜고 돋보기 모양의 검색창을 누릅니다." },
        { type: "user", text: "어제 봤던 종목 시세나 한번 봐야겠다" },
        { type: "system", text: "검색창이 활성화되며, '최근 검색어' 리스트와 함께 '실시간 인기 급상승 검색어' 10위 목록이 부드러운 애니메이션으로 노출됩니다." },
        { type: "user", text: "대박! 삼전이랑 에코프로가 인기 순위에 바로 떠 있네! 타이핑할 것 없이 이걸 바로 터치해야지!" }
      ]
    }
  },
  {
    id: 2,
    badge: "QUEST 02",
    title: "시나리오 2. 자동완성 목적지 도달",
    zone: "ZONE 1: SEARCH ENTRY & UTILITIES",
    context: "고객이 종목명, 종목코드, 메뉴명, 테마 키워드 등을 입력하는 중이다. 고객은 검색 결과 페이지까지 가지 않고도 자동완성 후보를 통해 빠르게 목적지로 이동하고 싶다.",
    goals: [
      "입력 중 적절한 자동완성 후보가 노출된다.",
      "종목/메뉴/테마 등 후보 타입이 구분된다.",
      "후보 클릭 시 현재가, 메뉴, 결과화면 등 목적지로 이동한다.",
      "자동완성 선택/미선택 시 결과화면 진입 흐름이 명확하다."
    ],
    conditions: [
      "대표 검색어 기준 자동완성 후보가 노출된다.",
      "후보 타입별 목적지가 정의된다.",
      "FE가 자동완성 리스트를 구현할 수 있는 API/응답 구조가 준비된다.",
      "자동완성 선택/미선택 시 결과화면 진입 흐름이 QA 가능하다."
    ],
    backlogs: [
      "[기획] 자동완성 선택/미선택 시 결과화면 진입 플로우 정의",
      "[화면개발] SP1-b. 자동완성화면 기본 시안 UI 제작",
      "[디자인] 자동완성 & 검색결과용 아이콘 수급",
      "[백엔드] 자동완성 조회서비스 개발 (종목, 메뉴, 공모주, 금현물, 테마)",
      "[데이터] MVP 데이터 수집 (종목, 메뉴, 공모주, 금현물, 테마)",
      "[데이터] MVP 데이터 파싱 및 인덱스 생성 프로그램 개발",
      "[R&D] 동의어/신조어/오탈자 사전 개발",
      "[백엔드] 벡터검색 개발 - 뉴스/공시 검색"
    ],
    rewards: {
      xp: 60,
      stat: "data",
      statVal: 10
    },
    persona: {
      name: "김주린 (30, 직장인)",
      avatar: "🙋‍♂️",
      desc: "빠른 화면 전환과 다이렉트 목적지 이동을 원함",
      storyboard: [
        { type: "narrator", text: "김주린님이 검색창에 '반도'라고 두 글자를 타이핑하기 시작합니다." },
        { type: "user", text: "음... 반도체 관련 테마도 보고 싶고, 삼성전자 주가도 보고 싶은데 한 번에 찾아줄까?" },
        { type: "system", text: "즉시 검색어 매칭 동작! 자동완성 추천창에 [테마] 반도체, [종목] 반도체장비주, [메뉴] 해외주식 소수점거래 신청이 성격별로 분리되어 표시됩니다." },
        { type: "user", text: "와! 결과 페이지로 안 넘어가도 내가 찾는 게 다 뜬다! [테마] 반도체 클릭해서 바로 확인해야지!" }
      ]
    }
  },
  {
    id: 3,
    badge: "QUEST 03",
    title: "시나리오 3. 종목 찾기 & 현재가 이동",
    zone: "ZONE 2: CORE TARGET SEARCH",
    context: "고객이 종목명, 종목코드, 줄임말, 초성, 공모주/금현물 등 투자 대상 키워드로 검색한다.",
    goals: [
      "종목 검색어가 자동완성 또는 결과화면에서 적절히 노출된다.",
      "고객은 종목 결과를 보고 현재가 또는 관련 목적지로 이동한다.",
      "종목/공모주/금현물 등 MVP 종목성 대상이 검색 가능하다."
    ],
    conditions: [
      "대표 종목 검색어 기준 자동완성/결과화면에서 종목이 노출된다.",
      "종목 클릭 시 현재가 등 목적지 이동이 가능하다.",
      "Must 쿼리셋 기준 치명적인 누락/오분류가 확인되고 수정/보류 판단이 가능하다."
    ],
    backlogs: [
      "[데이터] 종목·메뉴 검색 결과 데이터 품질 1차 검증",
      "[데이터] MVP 데이터 수집 (종목, 메뉴, 공모주, 금현물, 테마)",
      "[데이터] MVP 데이터 파싱 및 인덱스 생성 프로그램 개발",
      "[백엔드] MVP 콜렉션별 조회서비스 개발 (종목, 메뉴, 공모주, 금현물, 테마)",
      "[QA] 검색 품질 검증용 테스트 쿼리셋 구축"
    ],
    rewards: {
      xp: 70,
      stat: "search",
      statVal: 12
    },
    persona: {
      name: "김주린 (30, 직장인)",
      avatar: "🙋‍♂️",
      desc: "약어, 초성, 혹은 숫자로 이루어진 종목코드로 빠르게 찾기 원함",
      storyboard: [
        { type: "narrator", text: "김주린님이 검색창에 '삼전' 또는 종목코드 '005930'을 입력합니다." },
        { type: "user", text: "맨날 풀네임으로 치기 귀찮은데, 그냥 줄임말이나 종목 번호만 쳐도 잘 나오겠지?" },
        { type: "system", text: "초성/줄임말 사전과 종목 마스터 인덱스 매핑 가동! 결과 목록 맨 위에 '삼성전자(005930)'가 즉각 출력됩니다." },
        { type: "user", text: "역시 삼전만 쳐도 잘 나오네! 클릭해서 실시간 차트랑 현재가 화면으로 바로 점프!" }
      ]
    }
  },
  {
    id: 4,
    badge: "QUEST 04",
    title: "시나리오 4. 스마트한 메뉴 검색 이동",
    zone: "ZONE 2: CORE TARGET SEARCH",
    context: "고객이 '이체', '공모주', '환전'처럼 메뉴성 키워드를 검색한다. 메뉴명을 정확히 모르거나 자동완성을 선택하지 않아도 결과화면에서 다음 행동을 안내받아야 한다.",
    goals: [
      "메뉴성 검색어가 자동완성 또는 결과화면에서 노출된다.",
      "메뉴 결과 또는 메뉴 Onboarding Card를 통해 고객이 목적지로 이동한다.",
      "메뉴 키워드, 유의어, 이동 목적지 기준이 명확하다."
    ],
    conditions: [
      "대표 메뉴 검색어 기준 자동완성/결과화면에서 메뉴가 노출된다.",
      "메뉴 클릭 또는 CTA를 통해 목적지 이동이 가능하다.",
      "자동완성 미선택 후 결과화면 진입 시 메뉴 Onboarding Card 정책이 적용 가능하다."
    ],
    backlogs: [
      "[화면개발] SP3-a. 검색결과 메뉴꾸러미&공모주 UI 제작",
      "[데이터] 종목·메뉴 검색 결과 데이터 품질 1차 검증",
      "[데이터] MVP 데이터 수집 및 인덱싱 프로그램 개발",
      "[백엔드] 자동완성 및 콜렉션별 조회서비스 개발",
      "[R&D] 동의어/신조어/오탈자 사전 개발"
    ],
    rewards: {
      xp: 70,
      stat: "ui",
      statVal: 10
    },
    persona: {
      name: "김주린 (30, 직장인)",
      avatar: "🙋‍♂️",
      desc: "어플 내 명칭(이체) 대신 일반적인 용어(송금)로 메뉴를 찾는 편",
      storyboard: [
        { type: "narrator", text: "김주린님이 보증금 이체를 위해 검색창에 '송금'이라고 적고 돋보기 아이콘을 누릅니다." },
        { type: "user", text: "앗, 메뉴이름이 송금이 아니네? 이 앱에서는 이 기능이 어디 숨어있는 거지?" },
        { type: "system", text: "유의어 매핑 레이어(송금 -> 이체) 작동! 검색 결과 최상단에 [메뉴] '즉시이체 신청' 카드와 이체 화면으로 다이렉트 이동 가능한 '이동하기' CTA 버튼이 배치됩니다." },
        { type: "user", text: "휴, 송금이라 쳤는데도 스마트하게 '이체' 메뉴 온보딩 카드로 안내해주네! 안 헤매고 바로 이체한다!" }
      ]
    }
  },
  {
    id: 5,
    badge: "QUEST 05",
    title: "시나리오 5. 테마/섹터 키워드 탐색",
    zone: "ZONE 3: ADVANCED DISCOVERY",
    context: "고객이 '반도체', '2차전지'처럼 테마/섹터성 키워드를 입력한다. 고객은 단일 종목이 아니라 관련 테마와 종목을 탐색하고 싶다.",
    goals: [
      "테마/섹터 검색어에 대해 테마 결과 또는 관련 종목이 노출된다.",
      "고객이 테마 기반으로 다음 투자 탐색을 이어갈 수 있다.",
      "테마-종목 매핑과 인덱싱 기준이 정의된다."
    ],
    conditions: [
      "대표 테마 검색어 기준 테마/관련 종목 결과가 노출된다.",
      "테마 인덱싱 필드와 갱신/중복 처리 기준이 정의된다.",
      "결과화면에서 고객이 관련 종목 또는 다음 탐색 행동으로 이어갈 수 있다."
    ],
    backlogs: [
      "[화면개발] SP2-b. 검색결과 메뉴&테마 UI 제작",
      "[기획] 뉴스·공시·테마 컬렉션 인덱싱 기준 정의",
      "[백엔드] 검색 랭킹 알고리즘 설계 및 품질 검증",
      "[백엔드] 벡터검색 개발 - 뉴스/공시 검색",
      "[데이터] MVP 데이터 수집, 파싱 및 인덱스 생성 프로그램 개발",
      "[백엔드] MVP 콜렉션별 조회서비스 개발"
    ],
    rewards: {
      xp: 80,
      stat: "search",
      statVal: 15
    },
    persona: {
      name: "이분석 (38, 전문 투자 연구원)",
      avatar: "🧐",
      desc: "단일 종목 추천보다는 트렌디한 테마 묶음과 관련 섹터 분석을 중시",
      storyboard: [
        { type: "narrator", text: "이분석 연구원이 검색창에 요즘 가장 주목받는 '2차전지' 테마를 적어 검색합니다." },
        { type: "user", text: "단순히 한 종목 말고, 2차전지 관련 밸류체인 테마 전체에 어떤 대표 종목들이 포진해 있는지 한눈에 보고 비교 분석하고 싶어." },
        { type: "system", text: "테마-종목 간의 랭킹 스코어링 로직이 작동하며, '2차전지' 테마와 관련된 대형주(LG에너지솔루션, 포스코홀딩스)가 가중치 순으로 결과창에 세련된 리스트 형태로 출력됩니다." },
        { type: "user", text: "좋아! 테마와 연관 주식 묶음이 관련성 지표에 맞춰 일목요연하게 나오니 추가 분석하기 아주 유용하군." }
      ]
    }
  },
  {
    id: 6,
    badge: "QUEST 06",
    title: "시나리오 6. 뉴스/공시 판단 근거 확인",
    zone: "ZONE 3: ADVANCED DISCOVERY",
    context: "고객이 종목명 또는 시장 키워드를 검색한 뒤 관련 뉴스/공시를 확인하고 싶다.",
    goals: [
      "검색 결과화면에서 관련 뉴스/공시 컬렉션이 노출된다.",
      "고객은 뉴스/공시 상세로 이동해 판단 근거를 확인한다.",
      "노출 기준, 갱신 주기, 중복/만료 기준이 정의된다."
    ],
    conditions: [
      "대표 검색어 기준 뉴스/공시 결과가 결과화면에 노출된다.",
      "뉴스/공시 결과의 노출 필드, 갱신/만료/중복 처리 기준이 정의된다.",
      "상세 이동 또는 후속 행동이 가능하다."
    ],
    backlogs: [
      "[화면개발] 검색결과 뉴스·공시 UI 제작",
      "[기획] 뉴스·공시·테마 컬렉션 인덱싱 기준 정의",
      "[백엔드] MVP 콜렉션별 조회서비스 개발",
      "[기획] 결과화면 컬렉션 노출 기준 정의 (종목/메뉴/뉴스·공시/테마)"
    ],
    rewards: {
      xp: 80,
      stat: "data",
      statVal: 12
    },
    persona: {
      name: "이분석 (38, 전문 투자 연구원)",
      avatar: "🧐",
      desc: "뉴스 기사의 실시간성과 신뢰할 수 있는 공식 거래소 공시 교차 확인 중시",
      storyboard: [
        { type: "narrator", text: "이분석님이 최근 주가가 요동치는 종목의 '공시'를 검색합니다." },
        { type: "user", text: "단순한 낚시성 홍보 기사 말고, 진짜 전자 공시나 신뢰성 높은 외신 뉴스를 바로 대조해서 팩트 체크하고 싶어." },
        { type: "system", text: "실시간 데이터 배치를 통해 인덱싱된 거래소 공시 및 검증된 언론사 뉴스 피드를 중복 제거 알고리즘을 거쳐 검색 결과 하단 탭에 노출합니다." },
        { type: "user", text: "신속하게 가짜 뉴스를 필터링하고 공시 원문을 대조해서 볼 수 있어 매매 판단 내리기 아주 용이하다!" }
      ]
    }
  },
  {
    id: 7,
    badge: "QUEST 07",
    title: "시나리오 7. 검색 관리자 & 배치 제어",
    zone: "ZONE 4: QUALITY CONTROL & OPS",
    context: "운영자 또는 내부 담당자가 검색 품질을 관리하기 위해 배치 상태, 사전, 메뉴, 인기검색, 로그, 모니터링 항목을 확인해야 한다.",
    goals: [
      "운영자가 MVP 핵심 운영 항목을 조회/관리/모니터링할 수 있다.",
      "배치 실패, 데이터 품질 이상, 장애 상황에 대응할 수 있다.",
      "출시 후 안정적으로 품질을 점검할 수 있다."
    ],
    conditions: [
      "운영자가 배치/사전/메뉴/인기검색 관련 핵심 항목을 확인할 수 있다.",
      "배치 성공/실패, 재수행 기준, 장애 대응 기준이 정리된다.",
      "운영 작업 QA 체크리스트로 안전하게 점검할 수 있다."
    ],
    backlogs: [
      "[기획] 관리자 페이지 핵심 플로우 정책 정의 (배치 재수행/사전 관리/메뉴 관리)",
      "[화면개발] 관리자 페이지 개발",
      "[백엔드] 관리자 페이지 관련 조회서비스 개발",
      "[기획] 관리자 배치 모니터링 데이터 항목 정의",
      "[백엔드] 배치별 모니터링 서비스 개발",
      "[운영] 출시 후 데이터 모니터링 시스템 구축",
      "[운영] 장애대응 매뉴얼 작성",
      "[운영] 재기동(정기PM) 매뉴얼 작성",
      "[QA] 관리자 페이지 운영 작업 QA 체크리스트 작성"
    ],
    rewards: {
      xp: 90,
      stat: "ops",
      statVal: 18
    },
    persona: {
      name: "박관리 (42, 검색 운영 담당자)",
      avatar: "🧑‍💼",
      desc: "서비스의 무장애 운영, 일일 배치 파이프라인 관리, 검색 사전 수정 기능 필요",
      storyboard: [
        { type: "narrator", text: "박관리 담당자가 매일 오전 검색 어드민 모니터링 대시보드에 로그인합니다." },
        { type: "user", text: "오늘 새벽에 돌아간 동의어 사전 반영 배치와 인기 검색어 수집 크론이 에러 없이 잘 끝났을까?" },
        { type: "system", text: "어드민 모니터링 대시보드 활성화! 배치 성공률 100% 녹색 인디케이터가 켜지고 장애 복구 및 서비스 재기동 가이드북이 탑재되어 있습니다." },
        { type: "user", text: "모니터링 알림판이 심플하고 가시성이 좋아서 안심이네. 배치 실패 시 수동 재실행 버튼도 잘 먹고, 문제없겠어!" }
      ]
    }
  },
  {
    id: 8,
    badge: "QUEST 08",
    title: "시나리오 8. MVP E2E 통합 품질 검증",
    zone: "ZONE 4: QUALITY CONTROL & OPS",
    context: "개발 스프린트의 결과물을 일부 고객에게 테스트하기 전에, 내부적으로 검색 품질, 로그, E2E, 디자인, 운영 리스크를 점검해야 한다.",
    goals: [
      "MVP 주요 시나리오가 실제로 동작하는지 확인한다.",
      "검색 품질과 로그/지표가 검증 가능하다.",
      "고객 테스트 후보 시나리오와 질문지가 준비된다.",
      "실제 고객 테스트로 넘겨도 되는 항목과 후속 보완 항목을 분리한다."
    ],
    conditions: [
      "핵심 고객 시나리오별 E2E 동작 여부가 확인된다.",
      "검색 품질/로그/디자인/운영 QA 결과가 정리된다.",
      "실제 고객 테스트 후보 시나리오와 보류/후속 보완 항목이 구분된다."
    ],
    backlogs: [
      "[QA] MVP E2E 인수 테스트 시나리오 + 합격 기준 정의",
      "[QA] MVP 통합 검색 품질 재검증",
      "[화면개발] SP4-a. 개발테스트/디자인테스트 후 전체기능테스트",
      "[QA] MVP 검색 품질 지표 산출 기준 확정",
      "[기획] 신통합검색 핵심 사용자 여정 로그 이벤트 정의",
      "[기획] MVP 고객 테스트(UT) 후보 시나리오/질문 초안 작성",
      "[백엔드] 조회서비스 러쉬테스트 진행",
      "[QA] 검색 KR 및 데이터 품질 기준 정의",
      "[기획] 검색 로그 이벤트 및 Funnel 정의"
    ],
    rewards: {
      xp: 100,
      stat: "qa",
      statVal: 20
    },
    persona: {
      name: "최품질 (35, QA 엔지니어)",
      avatar: "👩‍🔬",
      desc: "최종 배포 전 모든 퍼널의 유저 시나리오를 엄격하게 최종 점검 및 리스크 제거 목표",
      storyboard: [
        { type: "narrator", text: "최품질 팀장이 배포 하루 전, PO 및 개발팀 전원과 E2E 통합 품질 평가회의를 소집합니다." },
        { type: "user", text: "실제 고객들에게 베타 공개를 하기 전에, 검색어 진입부터 결과 클릭까지 수집되는 로그들이 이상 없는지, E2E 테스트셋 100% 패스했는지 봅시다." },
        { type: "system", text: "통합 E2E 인수 테스트 러너가 돌아가며 삼전/이체/2차전지 등 핵심 시나리오의 통과 여부 로그 데이터가 실시간으로 그래프와 통계표로 반환됩니다." },
        { type: "user", text: "퍼널 유실 없음, 통합 검색 정확도 합격! 이제 고객 테스트(UT) 질문지를 확정하고 출시 후보(RC) 승인을 내려도 좋겠어요. 여정 끝!" }
      ]
    }
  },
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXPANDED MVP SCENARIOS (SP11+) - isExpanded: true
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 9,
    badge: "EXP 09",
    isExpanded: true,
    title: "시나리오 9. 투자정보/이벤트/공지 탐색",
    zone: "ZONE 5: EXPANDED MVP",
    context: "고객이 검색창에서 투자정보, 이벤트, 공지 등 확장된 콘텐츠를 탐색한다. 기존 종목/메뉴 결과 외에 투자에 필요한 다양한 정보를 검색 결과에서 직접 확인하고 싶다.",
    goals: [
      "투자정보 결과가 검색 결과화면에 노출된다.",
      "이벤트/공지 결과가 검색 결과화면에 노출된다.",
      "고객이 결과를 클릭해 상세 내용으로 이동할 수 있다."
    ],
    conditions: [
      "대표 검색어 기준 투자정보 결과가 결과화면에 노출된다.",
      "이벤트/공지 결과가 노출되고 목적지 이동이 가능하다.",
      "노출 우선순위 기준이 정의된다."
    ],
    backlogs: [
      "[기획] 투자정보/이벤트/공지 검색 결과 노출 정책 정의",
      "[화면개발] 투자정보/이벤트/공지 결과 카드 UI 제작",
      "[백엔드] 투자정보/이벤트/공지 인덱싱 및 조회서비스 개발",
      "[QA] 투자정보/이벤트/공지 결과 E2E 검증"
    ],
    rewards: { xp: 80, stat: "search", statVal: 14 },
    persona: {
      name: "이분석 (38, 전문 투자 연구원)",
      avatar: "🧐",
      desc: "검색 하나로 투자정보, 이벤트, 공지까지 한눈에 파악하길 원함",
      storyboard: [
        { type: "narrator", text: "이분석 연구원이 검색창에 관심 종목을 입력합니다." },
        { type: "user", text: "종목 시세뿐만 아니라 관련 투자정보나 회사 이벤트도 한 화면에서 보고 싶어." },
        { type: "system", text: "확장 검색 결과 화면 로딩! 종목 결과 아래로 투자정보 카드, 이벤트/공지 섹션이 순서대로 표시됩니다." },
        { type: "user", text: "이제 여기저기 탭을 넘기지 않아도 투자 판단에 필요한 정보들이 한 곳에 모여 있네!" }
      ]
    }
  },
  {
    id: 10,
    badge: "EXP 10",
    isExpanded: true,
    title: "시나리오 10. 진입 구엔진 전환 & 결과없음 챗봇",
    zone: "ZONE 5: EXPANDED MVP",
    context: "신규 엔진의 점진적 오픈(A/B 테스트) 기간 동안 고객이 원하면 기존 검색 엔진으로 돌아갈 수 있는 진입 옵션을 제공하며, 검색 결과가 없을 때는 챗봇을 연결해 고객의 추가 탐색을 자연스럽게 유도한다.",
    goals: [
      "신규 엔진 진입화면에서 기존 구버전 엔진으로 돌아갈 수 있는 옵션을 제공한다.",
      "검색 결과가 없는 케이스에서는 챗봇을 연결하여 고객이 궁금증을 바로 해소할 수 있도록 추가 탐색을 유도한다.",
      "구엔진 전환율 및 결과없음 챗봇 진입률 데이터를 확보한다."
    ],
    conditions: [
      "진입화면 내 '기존 검색으로 돌아가기' 기능이 정의되고 정상 동작한다.",
      "결과없음 화면에 챗봇 연결 안내를 직관적으로 제공하여 매끄러운 탐색 경험을 유지한다.",
      "관련 GA 이벤트 적재 기준이 마련된다."
    ],
    backlogs: [
      "[기획] 구엔진 전환 옵션 및 결과없음 챗봇 연결 정책 정의",
      "[화면개발] 진입화면 구엔진 전환 UI 및 결과없음 화면 제작",
      "[백엔드] 결과없음 응답 시 챗봇 연동 처리 검토",
      "[QA] 구엔진 전환 기능 및 결과없음 챗봇 E2E 검증"
    ],
    rewards: { xp: 70, stat: "ui", statVal: 12 },
    persona: {
      name: "김주린 (30, 직장인)",
      avatar: "🙋‍♂️",
      desc: "새로운 UI가 낯설어 예전 화면으로 돌아가길 원하며, 결과가 없을 때 챗봇의 도움을 받아 탐색을 이어가길 원하는 고객",
      storyboard: [
        { type: "narrator", text: "김주린님이 점진적 오픈 중인 신규 검색창에 진입합니다." },
        { type: "user", text: "새로운 검색창이 아직은 어색한데... 예전 화면으로 돌아갈 수 있는 옵션이 있네!" },
        { type: "system", text: "진입화면 상단 '기존 버전으로 돌아가기' 토글 버튼 제공! 또한 결과가 없는 키워드 입력 시 '검색 결과가 없습니다' 문구와 함께 추가 탐색을 돕는 챗봇 연동 버튼이 직관적으로 표시됩니다." },
        { type: "user", text: "결과가 없을 때 바로 챗봇에게 물어볼 수 있게 안내해주니, 당황하지 않고 궁금증을 바로 해결할 수 있어서 좋네!" }
      ]
    }
  },
  {
    id: 11,
    badge: "EXP 11",
    isExpanded: true,
    title: "시나리오 11. GA 기반 검색 품질 지표 검증",
    zone: "ZONE 5: EXPANDED MVP",
    context: "내부 담당자가 GA 및 검색 로그 기반으로 검색 품질 지표를 모니터링하고 검증한다.",
    goals: [
      "GA 이벤트가 정상적으로 수집되고 분석 가능하다.",
      "검색 품질 핵심 지표(클릭률, 재검색률 등)가 확인된다.",
      "지표 기반 개선 포인트를 도출할 수 있다."
    ],
    conditions: [
      "GA 이벤트 수집 및 대시보드 확인이 가능하다.",
      "핵심 검색 품질 지표의 기준값이 정의된다.",
      "지표 기반 의사결정 프로세스가 정리된다."
    ],
    backlogs: [
      "[기획] GA 이벤트 및 검색 Funnel 최종 정의",
      "[개발] GA 이벤트 적재 구현 및 검증",
      "[운영] 검색 품질 지표 대시보드 구축",
      "[QA] GA 데이터 정합성 검증"
    ],
    rewards: { xp: 70, stat: "ops", statVal: 14 },
    persona: {
      name: "박관리 (42, 검색 운영 담당자)",
      avatar: "🧑‍💼",
      desc: "데이터 기반으로 검색 품질을 지속적으로 개선하는 운영 담당자",
      storyboard: [
        { type: "narrator", text: "박관리 담당자가 GA 대시보드를 열어 검색 품질 지표를 확인합니다." },
        { type: "user", text: "오픈 후 고객들이 검색을 어떻게 사용하는지, 재검색이 얼마나 발생하는지 데이터로 확인해야 해." },
        { type: "system", text: "GA 검색 품질 대시보드 활성화! 검색어별 클릭률, 재검색률, 결과없음 비율이 시각화되어 표시됩니다." },
        { type: "user", text: "데이터를 보면서 어떤 검색어에서 고객이 이탈하는지 바로 파악하고 개선할 수 있겠어!" }
      ]
    }
  },
  {
    id: 12,
    badge: "EXP 12",
    isExpanded: true,
    title: "시나리오 12. 금상/커뮤니티 콘텐츠 탐색",
    zone: "ZONE 5: EXPANDED MVP",
    context: "고객이 금융 상품, 커뮤니티 게시글 등 추가 확장 콘텐츠를 검색으로 탐색하고 싶다.",
    goals: [
      "금상 관련 검색 결과가 노출된다.",
      "커뮤니티 관련 검색 결과가 노출된다.",
      "확장 콘텐츠 결과로의 이동이 가능하다."
    ],
    conditions: [
      "금상/커뮤니티 콘텐츠 결과가 검색화면에서 노출된다.",
      "관련 콘텐츠 클릭 시 목적지 이동이 가능하다.",
      "콘텐츠 노출 우선순위 기준이 정의된다."
    ],
    backlogs: [
      "[기획] 금상/커뮤니티 검색 결과 노출 정책 정의",
      "[화면개발] 금상/커뮤니티 결과 카드 UI 제작",
      "[백엔드] 금상/커뮤니티 인덱싱 및 조회서비스 개발",
      "[QA] 금상/커뮤니티 결과 E2E 검증"
    ],
    rewards: { xp: 80, stat: "search", statVal: 14 },
    persona: {
      name: "이분석 (38, 전문 투자 연구원)",
      avatar: "🧐",
      desc: "커뮤니티의 시장 반응과 금융상품 정보를 검색에서 바로 확인하길 원함",
      storyboard: [
        { type: "narrator", text: "이분석 연구원이 관심 종목과 관련된 커뮤니티 반응을 검색합니다." },
        { type: "user", text: "시장 참여자들이 이 종목에 대해 어떻게 이야기하고 있는지 커뮤니티 반응이 궁금해." },
        { type: "system", text: "확장 콘텐츠 검색 결과 로딩! 종목 아래로 커뮤니티 게시글 섹션과 관련 금융상품 정보가 카드 형태로 표시됩니다." },
        { type: "user", text: "검색 하나로 커뮤니티 여론과 금융상품 정보까지 한번에 확인되니 분석 효율이 훨씬 높아졌어!" }
      ]
    }
  }
];

// Scrum Sprint Roadmap Dataset Mapping
const sprintRoadmap = {
  SP8: {
    period: "2026.07.06 ~ 2026.07.17",
    concept: "기본 검색 흐름 구축",
    value: "고객이 검색창에 진입해 자동완성 후보를 발견하고, 일부 종목/메뉴 결과까지 연결되는 기본 흐름을 이용할 수 있다.",
    review: "고객이 검색창 진입(S1), 자동완성 후보 조회(S2), 대표 종목 현재가(S3) 및 이체 등 메뉴결과 1차 연결(S4)을 완료하여 엔드투엔드 기본 기틀을 세웠습니다.",
    scenarioStatus: {
      1: { role: "supporting", rank: 1, desc: "검색 진입 화면 기본 UI/정책 정의" },
      2: { role: "primary", rank: 2, desc: "대표 케이스 기준 자동완성 화면 및 API 일부 구현" },
      3: { role: "primary", rank: 2, desc: "대표 종목 검색 결과 노출" },
      4: { role: "primary", rank: 3, desc: "메뉴 결과 1차 연결" },
      5: { role: "none", rank: 0, desc: "미개발" },
      6: { role: "none", rank: 0, desc: "미개발" },
      7: { role: "supporting", rank: 2, desc: "관리자 화면 일부 착수 (어드민 기본 UI 구현)" },
      8: { role: "none", rank: 0, desc: "미개발" },
      9: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      10: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      11: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      12: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" }
    },
    storyboard: [
      { type: "narrator", text: "SP8 스프린트 리뷰 시뮬레이션을 시작합니다. [기본 검색 흐름 구축]" },
      { type: "user", text: "🙋‍♂️ 김주린: 돋보기 모양의 검색창을 누릅니다." },
      { type: "system", text: "🧭 S1 (검색진입 - 설계정의) & S7 (관리자 일부)가 활성화되어 기본 화면 레이아웃이 로딩됩니다." },
      { type: "user", text: "🙋‍♂️ 김주린: 검색창에 '송금'이라고 적습니다." },
      { type: "system", text: "🔗 S4 (메뉴 핵심경로 연결). '이체' 메뉴 온보딩 카드가 나타나며 '이동하기' 버튼이 노출됩니다." },
      { type: "user", text: "🙋‍♂️ 김주린: 이체 버튼을 누르니 진짜 송금 화면으로 한 번에 넘어가네요! 아주 편리합니다." },
      { type: "narrator", text: "SP8 리뷰 결과: 8개 시나리오 중 핵심 종목/메뉴 1차 연결 성공으로 기본 뼈대 구축 완료." }
    ]
  },
  SP9: {
    period: "2026.07.20 ~ 2026.07.31",
    concept: "핵심 검색 기능 확장",
    value: "인기검색을 통해 탐색을 시작하고, 자동완성/종목/테마 결과까지 한층 확장된 검색 범위와 카테고리를 활용할 수 있다.",
    review: "인기검색어 순위 연동(S1), 테마 자동완성(S2), 전체 종목 인덱스 확장(S3), 테마-종목 매핑(S5)이 신규로 뚫려 고객 탐색폭을 비약적으로 넓혔습니다.",
    scenarioStatus: {
      1: { role: "primary", rank: 3, desc: "인기 검색 순위 프로세스 개발 및 UI 연결 완료" },
      2: { role: "primary", rank: 3, desc: "종목/메뉴 외 테마 자동완성 데이터 및 검색 후보 연동 완료" },
      3: { role: "primary", rank: 3, desc: "전 종목 데이터 파싱 및 인덱스 패킹 완료, 조회 API 랭킹 적용" },
      4: { role: "supporting", rank: 3, desc: "동의어/신조어 사전 개발 및 유의어 연동" },
      5: { role: "primary", rank: 3, desc: "테마 결과 UI 제작 및 테마-종목 인덱싱 결합 완료" },
      6: { role: "none", rank: 0, desc: "미개발" },
      7: { role: "supporting", rank: 3, desc: "개발서버 반영 및 일일 배치 자동화 처리 기반 구축" },
      8: { role: "none", rank: 0, desc: "미개발" },
      9: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      10: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      11: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      12: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" }
    },
    storyboard: [
      { type: "narrator", text: "SP9 스프린트 리뷰 시뮬레이션을 시작합니다. [핵심 검색 기능 확장]" },
      { type: "user", text: "🙋‍♂️ 김주린: 오늘 아침 가장 인기 있는 주식이 뭔지 검색어 입력 없이 보고 싶어요." },
      { type: "system", text: "🧭 S1 (인기 검색어). 실시간 급상승 인기검색 순위가 최근 검색어 옆에 정렬되어 나타납니다." },
      { type: "user", text: "🙋‍♂️ 김주린: 요즘 테마주가 핫하다던데, 검색창에 '2차전지' 테마를 검색해 봅니다." },
      { type: "system", text: "🔗 S5 (테마 검색결과 연결). '2차전지' 테마 배너와 함께 포스코홀딩스, LG에너지솔루션 등 관련주 목록이 매핑되어 표시됩니다." },
      { type: "user", text: "🙋‍♂️ 김주린: 종목명을 몰라도 핫한 섹터 주식들을 모아볼 수 있어 탐색하기에 훨씬 편해졌습니다!" },
      { type: "narrator", text: "SP9 리뷰 결과: 실시간 인기검색어 연동 및 테마-종목 매핑 연결 완료." }
    ]
  },
  SP10: {
    period: "2026.08.03 ~ 2026.08.14",
    concept: "검색 경험 고도화",
    value: "검색 결과에서 최신 뉴스/공시를 조회하고, 메뉴 꾸러미, 공모주 정보 추가로 끊김 없는 검색을 경험한다.",
    review: "공모주(S3), 뉴스/공시(S6) 탭 연동을 더하고, 사전 관리(S7)와 고객 UT 검토 초안(S8)을 준비하며 고품질 검색을 구축했습니다.",
    scenarioStatus: {
      1: { role: "supporting", rank: 4, desc: "자연어/예외 케이스 입력 정책 고도화" },
      2: { role: "primary", rank: 4, desc: "자동완성 테마/종목/메뉴 후보 확장 및 응답 속도 최적화" },
      3: { role: "supporting", rank: 4, desc: "공모주 일정 정보 추가 수집 및 표출 신규 반영" },
      4: { role: "primary", rank: 4, desc: "메뉴 Onboarding Card 및 복수 메뉴 꾸러미 처리 신규" },
      5: { role: "primary", rank: 4, desc: "테마 랭킹 가중치 고도화" },
      6: { role: "primary", rank: 4, desc: "뉴스/공시 탭 인덱싱 연동" },
      7: { role: "supporting", rank: 4, desc: "사전 자동화 관리기능 신규 추가 (유의어/오탈자/동의어/신종어)" },
      8: { role: "validation", rank: 2, desc: "변경심의 준비 시작" },
      9: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      10: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      11: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" },
      12: { role: "none", rank: 0, desc: "미착수 (SP11+ 확장 예정)" }
    },
    storyboard: [
      { type: "narrator", text: "SP10 스프린트 리뷰 시뮬레이션을 시작합니다. [검색 경험 고도화]" },
      { type: "user", text: "🧐 이분석: 요즘 공모주 일정이 궁금한데 바로 볼 수 있을까?" },
      { type: "system", text: "✨ S3 (공모주 일정). 검색창에 입력하면 공모주 일정이 결과화면에 노출됩니다." },
      { type: "user", text: "🧐 이분석: 관련 최신 뉴스와 거래소 공시가 결과화면에서 바로 보였으면 좋겠어." },
      { type: "system", text: "✨ S6 (뉴스/공시 연동). 실시간 뉴스 및 공시가 깔끔하게 정렬 표출됩니다." },
      { type: "user", text: "🧐 이분석: 다른 탭으로 넘어가지 않아도 팩트 체크가 가능하군요. 아주 고무적입니다!" },
      { type: "narrator", text: "SP10 리뷰 결과: 뉴스/공시 탭 및 공모주 일정 연결 완료." }
    ]
  },
  SP11: {
    period: "2026.08.18 ~ 2026.08.28",
    concept: "확장 MVP 개발 범위 재정의 및 오픈 기반 화면 개발",
    value: "10월 단계적 오픈을 준비하기 위해 확장 MVP 범위를 확정하고, 고객이 실제로 접하는 진입-결과-결과없음 흐름과 GA 검증 기반을 만든다.",
    review: "투자정보, 이벤트, 공지, GA, 진입화면, 결과없음 케이스에 대한 확장 범위를 확정하고 화면 개발을 진행했습니다.",
    scenarioStatus: {
      1: { role: "primary", rank: 5, desc: "검색 진입화면 완성 및 오픈 기반 정책 적용" },
      2: { role: "primary", rank: 4, desc: "자동완성 API 안정화 및 테마 자동완성 고도화" },
      3: { role: "primary", rank: 5, desc: "종목/공모주 검색 결과 정확도 고도화 완료" },
      4: { role: "primary", rank: 5, desc: "메뉴 꾸러미 및 Onboarding Card 최종 완성" },
      5: { role: "primary", rank: 4, desc: "테마 랭킹 가중치 고도화 및 인기검색어 확장" },
      6: { role: "primary", rank: 5, desc: "뉴스/공시 탭 인덱싱 연동 완료 및 품질 보강" },
      7: { role: "supporting", rank: 4, desc: "관리자 화면 잔여 구축" },
      8: { role: "validation", rank: 3, desc: "GA 이벤트 및 로그 기준 정리" },
      9: { role: "primary", rank: 3, desc: "🆕 투자정보/이벤트/공지 결과 노출 경로연결 완료" },
      10: { role: "primary", rank: 3, desc: "🆕 진입 구엔진 전환 및 결과없음 챗봇 경로연결 완료" },
      11: { role: "supporting", rank: 1, desc: "🆕 GA 검색 품질 지표 기준 정의 시작" },
      12: { role: "none", rank: 0, desc: "미착수 - SP12 이후 포함 여부 검토" }
    },
    storyboard: [
      { type: "narrator", text: "SP11 스프린트 리뷰 시뮬레이션을 시작합니다. [확장 MVP 화면 개발]" },
      { type: "user", text: "✍️ 기획자: 10월 오픈 전까지 확장할 투자정보, 이벤트, 공지 화면 정의를 마쳤습니다." },
      { type: "system", text: "📜 S3 (투자/이벤트/공지 결과). 결과화면에 투자정보, 이벤트, 공지 결과 카드가 표시됩니다." },
      { type: "user", text: "💻 개발자: 진입화면 개발과 결과없음 케이스에 대한 예외처리도 진행 중입니다." },
      { type: "system", text: "📊 S8 (GA 로그 기준). GA 이벤트와 로그 기준 정리가 완료되어 대시보드 검증 준비가 되었습니다." },
      { type: "narrator", text: "SP11 리뷰 결과: 확장 MVP 범위 확정 및 주요 화면 개발 착수." }
    ]
  },
  SP12: {
    period: "2026.08.31 ~ 2026.09.11",
    concept: "확장 MVP 개발 완료 및 오픈 준비 전환",
    value: "확장 MVP 개발 범위를 마무리하고, 10월 물리서버 기반 단계적 오픈 전 필요한 품질/로그/고객 접점 보완 항목을 정리한다.",
    review: "SP11 확정 범위 개발을 마무리하고 SP12 금상/커뮤니티 고려 범위를 판단했으며, 10월 오픈 준비 항목 분리를 완료했습니다.",
    scenarioStatus: {
      1: { role: "primary", rank: 5, desc: "검색 진입화면 오픈 전 사용 흐름 점검 완료" },
      2: { role: "primary", rank: 5, desc: "자동완성 응답시간 최적화 및 기능 통합 테스트 완료" },
      3: { role: "primary", rank: 5, desc: "종목/공모주 검색 쿼리셋 정확도 검증 완료" },
      4: { role: "primary", rank: 5, desc: "메뉴 결과화면 프론트엔드 연동 완료" },
      5: { role: "primary", rank: 5, desc: "테마 랭킹 가중치 적용 및 검색 정합성 중간 QA" },
      6: { role: "primary", rank: 5, desc: "뉴스/공시 고도화 피드 1차 E2E 테스트 패스" },
      7: { role: "supporting", rank: 5, desc: "어드민 모니터링 대시보드 필수 기능 구현 완료" },
      8: { role: "validation", rank: 4, desc: "내부 QA 진행 및 GA 적재 확인" },
      9: { role: "primary", rank: 4, desc: "🆕 투자정보/이벤트/공지 결과 노출 결과확장 완료" },
      10: { role: "primary", rank: 4, desc: "🆕 진입 구엔진 전환 및 결과없음 챗봇 결과확장 완료" },
      11: { role: "supporting", rank: 2, desc: "🆕 GA 로그 기준 정리 완료 및 대시보드 검증 준비" },
      12: { role: "supporting", rank: 2, desc: "🆕 금상/커뮤니티 포함 여부 검토 및 범위 확정" }
    },
    storyboard: [
      { type: "narrator", text: "SP12 스프린트 리뷰 시뮬레이션을 시작합니다. [확장 MVP 완료 및 오픈 준비]" },
      { type: "user", text: "💻 개발자: 진입화면 잔여 항목과 금상/커뮤니티 결과 화면을 보완하여 개발을 완료했습니다!" },
      { type: "system", text: "🛠️ S1 (사용 흐름 점검). 오픈 전 사용자 흐름 점검 테스트가 시작되었습니다." },
      { type: "user", text: "🧑‍💼 박관리: 운영 필요 항목과 오픈 지표 확인 기준 정리를 마쳤습니다. GA 적재도 문제없습니다." },
      { type: "narrator", text: "SP12 리뷰 결과: 확장 MVP 개발이 성공적으로 완료되고 오픈 준비 체제로 돌입했습니다." }
    ]
  },
  SP13: {
    period: "2026.09.14 ~ 2026.09.23",
    concept: "QA · 변경심의 · 품질검증",
    value: "10월 오픈 전 고객에게 노출될 핵심 흐름의 QA와 품질검증을 진행하고, 변경심의 및 운영 이행에 필요한 기준을 정리한다.",
    review: "진입/결과화면 주요 검색 흐름 QA와 통합 검색 결과 품질검증을 마쳤으며, 변경심의에 필요한 장애 대응 기준 등 모든 자료를 정리했습니다.",
    scenarioStatus: {
      1: { role: "validation", rank: 5, desc: "진입화면 QA 및 주요 검색 흐름 점검 완료" },
      2: { role: "validation", rank: 5, desc: "자동완성 API QA 및 응답시간 기준 통과" },
      3: { role: "validation", rank: 6, desc: "종목 검색 쿼리셋 정확도 검증 최종 완료" },
      4: { role: "validation", rank: 6, desc: "메뉴 온보딩 카드 이동 퍼널 QA 완료" },
      5: { role: "validation", rank: 5, desc: "테마 랭킹 및 검색 정합성 중간 QA 통과" },
      6: { role: "validation", rank: 6, desc: "뉴스/공시 E2E 통합 QA 완료" },
      7: { role: "supporting", rank: 5, desc: "운영/장애 대응 기준 점검 및 변경심의 필요 자료 정리" },
      8: { role: "primary", rank: 5, desc: "GA/로그 정상 적재 확인 및 품질 지표 2차 확인" },
      9: { role: "primary", rank: 5, desc: "🆕 투자정보/이벤트/공지 결과 노출 운영가능 상태 도달" },
      10: { role: "primary", rank: 5, desc: "🆕 진입 구엔진 전환 및 결과없음 챗봇 운영가능 상태 도달" },
      11: { role: "supporting", rank: 4, desc: "🆕 GA 기반 검색 품질 지표 1차 집계 완료" },
      12: { role: "supporting", rank: 4, desc: "🆕 금상/커뮤니티 결과화면 결과확장 완료" }
    },
    storyboard: [
      { type: "narrator", text: "SP13 스프린트 리뷰 시뮬레이션을 시작합니다. [품질검증 및 변경심의]" },
      { type: "user", text: "👩‍🔬 최품질: 10월 오픈에 맞춰 진입화면과 결과화면 등 주요 흐름의 전체 QA를 진행합니다." },
      { type: "system", text: "🛡️ S1 (전체 QA 진행). 전체 항목 품질검증 결과, 치명적인 이슈 없이 품질이 안정적임을 확인했습니다." },
      { type: "user", text: "🧑‍💼 박관리: 장애 대응 기준과 변경심의 필요 자료가 모두 정리되었고 심의를 요청합니다." },
      { type: "system", text: "📜 S7 (변경심의 요청). 심의가 성공적으로 통과되며 10월 오픈의 기술적 준비가 완료되었습니다." },
      { type: "narrator", text: "SP13 리뷰 결과: 성공적인 품질 검증 및 변경심의 통과 완료." }
    ]
  },
  SP14: {
    period: "2026.09.28 ~ 2026.10.08",
    concept: "QA 수정개발 · 직원 CBT · 점진 오픈 전환",
    value: "SP13 통합 QA에서 발견된 오픈 차단 이슈를 수정·재검증하고, 10/7 운영 반영과 10/8 집중 모니터링을 거쳐 직원 자연 사용 CBT와 고객 점진 오픈이 가능한 상태를 만든다.",
    review: "오픈 차단 이슈 수정·재검증과 10/7 운영 반영을 마치고, 10/12~10/14 직원 CBT 운영안과 SP15 1%→20% 점진 오픈 체크리스트를 확정했습니다. 기능별 A/B 개선 실험은 100% 전환 이후인 SP17로 분리했습니다.",
    scenarioStatus: {
      1: { role: "validation", rank: 6, desc: "진입 Must 흐름 회귀 테스트 통과 및 10/7 운영 반영 완료" },
      2: { role: "validation", rank: 6, desc: "자동완성 기반 검색성공률 산식 검증 및 목적지 도달 계측 확인" },
      3: { role: "validation", rank: 6, desc: "Must 쿼리셋 오분류·잘못된 랜딩 해소 및 종목 데이터 일치 재검증" },
      4: { role: "validation", rank: 6, desc: "메뉴 딥링크 랜딩 재검증 및 환경별 스모크 테스트 통과" },
      5: { role: "validation", rank: 6, desc: "테마 결과 품질 보완 및 자연 사용 미검증 구간 식별 체계 확정" },
      6: { role: "validation", rank: 6, desc: "뉴스/공시 배치 안정화 및 10/8 집중 모니터링 이상 없음" },
      7: { role: "primary", rank: 6, desc: "벡터검색 on/off·구엔진 복귀·롤백 절차 리허설 완료" },
      8: { role: "primary", rank: 6, desc: "오픈 차단 이슈 수정·재검증 완료 및 직원 CBT 운영안 확정" },
      9: { role: "validation", rank: 6, desc: "🆕 투자정보/이벤트/공지 E2E 회귀 테스트 통과 및 운영 반영 완료" },
      10: { role: "validation", rank: 6, desc: "🆕 신→구 전환·결과없음 회복을 SP15 초기 집중 검증 항목으로 확정" },
      11: { role: "primary", rank: 6, desc: "🆕 공통 Primary·Guardrail 산식 검증 및 GA/서버 로그 누락·중복 QA 완료" },
      12: { role: "primary", rank: 6, desc: "🆕 금융상품 배너 노출·클릭 및 금융상품 홈 도달 검증 완료" }
    },
    storyboard: [
      { type: "narrator", text: "SP14 스프린트 리뷰 시뮬레이션을 시작합니다. [QA 수정개발 · 직원 CBT 준비]" },
      { type: "user", text: "💻 개발자: SP13에서 발견된 오픈 차단 이슈를 모두 수정·재검증하고 10/7 운영 환경에 반영했습니다." },
      { type: "system", text: "🛠️ 10/8 집중 모니터링 결과 오류율·타임아웃·p95 응답시간·롤백 경로 모두 정상입니다." },
      { type: "user", text: "✍️ 기획자: 10/12~10/14 직원 CBT는 별도 과업 없이 고객과 동일한 환경에서 자연스럽게 검색하도록 운영합니다." },
      { type: "system", text: "📊 공통 Primary·Guardrail 산식과 여정 로그 검증 완료. 자연 사용에서 발생하지 않은 기능은 '정상'이 아닌 '미검증'으로 표시됩니다." },
      { type: "narrator", text: "SP14 리뷰 결과: 고객 오픈 게이트 통과! SP15에서 1% → 5% → 10% → 20% 점진 오픈을 시작합니다." }
    ]
  }
};

// App State Management
let state = {
  currentSprint: "SP8",
  selectedQuestId: null
};

// Rank 0-6 titles, indexed positionally by scenarioStatus.rank.
// Used by both renderQuestBoard() and openQuestModal() — keep as a single source.
const RANK_TITLES = [
  "미착수 🔒",
  "정책정의 📜",
  "일부구현 🛠️",
  "경로연결 🔗",
  "결과확장 ✨",
  "운영가능 🛡️",
  "QA검증완료 🏆"
];

// Audio Synth utilizing Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(261.63, audioCtx.currentTime); // C4
      osc.frequency.exponentialRampToValueAtTime(329.63, audioCtx.currentTime + 0.1); // E4
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === "quest-complete") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(392.00, audioCtx.currentTime); // G4
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime + 0.1); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.4); // G5
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === "level-up") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.24); // C6
      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } else if (type === "typing") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    }
  } catch (e) {
    console.error("Audio Context is blocked or not supported", e);
  }
}

// Confetti Particle System
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * -10 - 5;
    this.gravity = 0.35;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
  }
  update() {
    this.speedY += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function launchConfetti() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2 - 100;
  for (let i = 0; i < 80; i++) {
    particles.push(new ConfettiParticle(x, y));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Iterate backwards so splicing dead particles doesn't skip the next one
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.y > canvas.height) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// UI Rendering
function updateUI() {
  const sprintId = state.currentSprint;
  const data = sprintRoadmap[sprintId];

  // Update Sprint Context Banner
  document.getElementById("sprint-timer").innerText = `${sprintId}: ${data.period}`;
  document.getElementById("display-sprint-id").innerText = sprintId;
  document.getElementById("display-sprint-concept").innerText = data.concept;
  document.getElementById("display-sprint-date").innerText = data.period;
  document.getElementById("display-sprint-value").innerText = data.value;
  document.getElementById("display-sprint-review").innerText = data.review;

  // Update Profile & Stats
  let totalRankPoints = 0;
  let maxPossiblePoints = quests.length * 6; // 12 quests * Rank 6 max
  
  Object.keys(data.scenarioStatus).forEach(id => {
    totalRankPoints += data.scenarioStatus[id].rank;
  });

  const completionRate = Math.round((totalRankPoints / maxPossiblePoints) * 100);
  document.getElementById("completion-rate").innerText = `${completionRate}% SQUAD PROGRESS`;

  // Dynamic Level calculation based on sprint index
  const sprintLevels = { "SP8": 8, "SP9": 9, "SP10": 10, "SP11": 11, "SP12": 12, "SP13": 13, "SP14": 14 };
  document.getElementById("char-level").innerText = `LV.${sprintLevels[sprintId]}`;
  document.getElementById("xp-text").innerText = `${completionRate}%`;
  
  const xpPct = (totalRankPoints / maxPossiblePoints) * 100;
  document.getElementById("xp-progress").style.width = `${xpPct}%`;

  // Squad Capability stats are now static, removed dynamic updates
  // Render Quest Nodes and Draw Connection Lines
  renderQuestBoard();
  drawConnections();
}

// Render Winding Vertical Roadmap based on Sprint state
function renderQuestBoard() {
  const container = document.getElementById("quest-nodes-container");
  container.innerHTML = "";

  const alignments = [
    "align-left",   // Q1
    "align-center", // Q2
    "align-right",  // Q3
    "align-center", // Q4
    "align-left",   // Q5
    "align-center", // Q6
    "align-right",  // Q7
    "align-center", // Q8
    // Expanded MVP
    "align-left",   // Q9
    "align-center", // Q10
    "align-right",  // Q11
    "align-center"  // Q12
  ];

  const sprintId = state.currentSprint;
  const statusMap = sprintRoadmap[sprintId].scenarioStatus;

  // Find the highest unlocked/active node in this sprint
  let highestActiveId = 1;
  quests.forEach(q => {
    const status = statusMap[q.id];
    if (status && status.rank > 0) {
      highestActiveId = q.id;
    }
  });

  let expandedDividerInserted = false;

  quests.forEach((q, index) => {
    const status = statusMap[q.id];
    if (!status) return;

    // Insert section divider before first expanded quest
    if (q.isExpanded && !expandedDividerInserted) {
      // Check if any expanded quest has started
      const hasAnyExpanded = quests.filter(qq => qq.isExpanded).some(qq => {
        const s = statusMap[qq.id];
        return s && s.rank > 0;
      });

      if (hasAnyExpanded) {
        const divider = document.createElement("div");
        divider.className = "expanded-section-divider";
        divider.innerHTML = `<span class="orbitron">🆕 EXPANDED MVP ZONE</span> <span class="text-xs">확장 MVP 신규 시나리오</span>`;
        container.appendChild(divider);
      }
      expandedDividerInserted = true;
    }

    // Skip expanded quests if none have started yet (all rank 0)
    if (q.isExpanded && status.rank === 0) {
      const allExpandedLocked = quests.filter(qq => qq.isExpanded).every(qq => {
        const s = statusMap[qq.id];
        return !s || s.rank === 0;
      });
      if (allExpandedLocked) return; // Don't render locked expanded quests
    }

    const alignClass = alignments[index];
    const rank = status.rank;

    let nodeClass = "quest-node";
    let statusText = "";

    if (rank === 0) {
      nodeClass += " locked";
      statusText = "🔒 미착수";
    } else if (rank === 6) {
      nodeClass += " completed";
      statusText = `🏆 QA완료 (Lvl ${rank})`;
    } else {
      nodeClass += " active";
      statusText = `⚔️ 개발중 (Lvl ${rank})`;
    }

    // Add expanded class for visual distinction
    if (q.isExpanded) {
      nodeClass += " expanded-quest";
    }

    const wrapper = document.createElement("div");
    wrapper.className = `map-node-wrapper ${alignClass}`;
    
    // Assigning zone classes for emojis
    let zoneClass = "zone-1";
    if (q.id === 3 || q.id === 4) zoneClass = "zone-2";
    else if (q.id === 5 || q.id === 6) zoneClass = "zone-3";
    else if (q.id === 7 || q.id === 8) zoneClass = "zone-4";
    else if (q.id >= 9) zoneClass = "zone-5";

    let nodeHTML = `
      <div class="${nodeClass} ${zoneClass}" data-id="${q.id}">
        <span class="quest-node-num orbitron">${q.isExpanded ? 'E' + (q.id - 8) : 'Q' + q.id}</span>
        ${highestActiveId === q.id ? '<div class="player-token">👨‍💻</div>' : ''}
      </div>
    `;

    // Tooltip information
    const roleBadgeText = status.role === "none" ? "" : `<span class="rank-badge rank-${rank}">${RANK_TITLES[rank]}</span>`;
    const infoHTML = `
      <div class="quest-node-info ${q.isExpanded ? 'expanded-info' : ''}">
        <div class="info-title">${q.title}</div>
        <div class="info-status" style="margin-top: 4px; display: flex; align-items: center; gap: 6px;">
          ${roleBadgeText}
          <span class="text-xs text-muted">${status.role.toUpperCase()}</span>
        </div>
      </div>
    `;

    wrapper.innerHTML = nodeHTML + infoHTML;

    // Node click handler
    const nodeEl = wrapper.querySelector(".quest-node");
    if (rank > 0) {
      nodeEl.addEventListener("click", () => {
        playSound("click");
        openQuestModal(q.id);
      });
    } else {
      nodeEl.addEventListener("click", () => {
        playSound("click");
        alert("이 시나리오 퀘스트는 이번 스프린트(SP)에서 기획/개발 미설정 상태입니다.");
      });
    }

    container.appendChild(wrapper);
  });
}

// Pending drawConnections timeout. The SVG is cleared synchronously but the
// paths are appended 100ms later, so a redraw that lands inside that window
// (rapid sprint-tab clicks) would otherwise let the previous sprint's paths
// arrive after the clear and accumulate on top of the new ones.
let connectionTimeoutId = null;

// Draw Connection Lines between active nodes
function drawConnections() {
  const svg = document.getElementById("path-svg");
  svg.innerHTML = "";

  clearTimeout(connectionTimeoutId);

  const nodes = document.querySelectorAll(".quest-node");
  if (nodes.length < 2) return;

  const statusMap = sprintRoadmap[state.currentSprint].scenarioStatus;

  connectionTimeoutId = setTimeout(() => {
    const svgRect = svg.getBoundingClientRect();
    
    for (let i = 0; i < quests.length - 1; i++) {
      const currentNodeEl = document.querySelector(`.quest-node[data-id="${quests[i].id}"]`);
      const nextNodeEl = document.querySelector(`.quest-node[data-id="${quests[i+1].id}"]`);

      if (!currentNodeEl || !nextNodeEl) continue;

      // Guard against missing scenarioStatus entries so a data gap can't throw here
      const currentStatus = statusMap[quests[i].id];
      const nextStatus = statusMap[quests[i+1].id];
      if (!currentStatus || !nextStatus) continue;

      const rect1 = currentNodeEl.getBoundingClientRect();
      const rect2 = nextNodeEl.getBoundingClientRect();

      const x1 = rect1.left + rect1.width / 2 - svgRect.left;
      const y1 = rect1.top + rect1.height / 2 - svgRect.top;
      const x2 = rect2.left + rect2.width / 2 - svgRect.left;
      const y2 = rect2.top + rect2.height / 2 - svgRect.top;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      
      const cpY1 = y1 - (y1 - y2) / 2;
      const cpY2 = y2 + (y1 - y2) / 2;
      const d = `M ${x1} ${y1} C ${x1} ${cpY1}, ${x2} ${cpY2}, ${x2} ${y2}`;
      
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      
      const currentRank = currentStatus.rank;
      const nextRank = nextStatus.rank;

      if (currentRank === 6 && nextRank > 0) {
        path.setAttribute("stroke", "var(--color-green)");
        path.setAttribute("stroke-width", "4");
        path.setAttribute("style", "filter: drop-shadow(0 0 4px var(--color-green))");
      } else if (currentRank > 0 && nextRank > 0) {
        path.setAttribute("stroke", "var(--color-cyan)");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke-dasharray", "5, 5");
        path.setAttribute("style", "filter: drop-shadow(0 0 2px var(--color-cyan))");
      } else {
        path.setAttribute("stroke", "rgba(255, 255, 255, 0.05)");
        path.setAttribute("stroke-width", "2");
      }

      svg.appendChild(path);
    }
  }, 100);
}

// Global variable to keep track of storyboard animation timeout IDs
let simTimeoutIds = [];

// Persona Storyboard Simulation Animator
function playPersonaSimulation(quest) {
  const chatArea = document.getElementById("sim-chat-area");
  const playBtn = document.getElementById("play-sim-btn");
  
  simTimeoutIds.forEach(id => clearTimeout(id));
  simTimeoutIds = [];
  chatArea.innerHTML = "";
  playBtn.disabled = true;
  playBtn.innerText = "PLAYING SIMULATION... 🎬";

  const storyboard = quest.persona.storyboard;
  let currentStep = 0;

  function renderNextStep() {
    if (currentStep >= storyboard.length) {
      playBtn.disabled = false;
      playBtn.innerText = "REPLAY STORYBOARD 🎬";
      return;
    }

    const step = storyboard[currentStep];
    const bubble = document.createElement("div");
    
    if (step.type === "narrator") {
      bubble.className = "chat-bubble narrator";
      bubble.innerText = step.text;
    } else if (step.type === "user") {
      bubble.className = "chat-bubble user";
      bubble.innerText = `👤 ${quest.persona.name}: "${step.text}"`;
    } else if (step.type === "system") {
      bubble.className = "chat-bubble system";
      bubble.innerText = `📱 System Core: ${step.text}`;
    }

    chatArea.appendChild(bubble);
    chatArea.scrollTop = chatArea.scrollHeight;
    
    playSound("typing");
    currentStep++;
    
    const delay = Math.max(1300, step.text.length * 50);
    const timeoutId = setTimeout(renderNextStep, delay);
    simTimeoutIds.push(timeoutId);
  }

  renderNextStep();
}

// Global Sprint Review Storyboard Overlay Animator
let reviewTimeoutIds = [];
function playSprintReviewStoryboard() {
  const sprintId = state.currentSprint;
  const data = sprintRoadmap[sprintId];
  const chatArea = document.getElementById("review-sim-chat-area");
  const modal = document.getElementById("review-modal");
  
  // Reset previous state
  reviewTimeoutIds.forEach(id => clearTimeout(id));
  reviewTimeoutIds = [];
  chatArea.innerHTML = "";

  document.getElementById("review-modal-badge").innerText = `${sprintId} SPRINT REVIEW`;
  document.getElementById("review-modal-subtitle").innerText = data.value;

  modal.classList.add("open");

  let currentStep = 0;
  const storyboard = data.storyboard;

  function renderNextStep() {
    if (currentStep >= storyboard.length) {
      launchConfetti();
      playSound("quest-complete");
      return;
    }

    const step = storyboard[currentStep];
    const bubble = document.createElement("div");

    if (step.type === "narrator") {
      bubble.className = "chat-bubble narrator";
      bubble.innerText = step.text;
    } else if (step.type === "user") {
      bubble.className = "chat-bubble user";
      bubble.innerText = step.text;
    } else if (step.type === "system") {
      bubble.className = "chat-bubble system";
      bubble.innerText = step.text;
    }

    chatArea.appendChild(bubble);
    chatArea.scrollTop = chatArea.scrollHeight;
    
    playSound("typing");
    currentStep++;

    const delay = Math.max(1600, step.text.length * 55);
    const timeoutId = setTimeout(renderNextStep, delay);
    reviewTimeoutIds.push(timeoutId);
  }

  renderNextStep();
}

function closeReviewModal() {
  reviewTimeoutIds.forEach(id => clearTimeout(id));
  reviewTimeoutIds = [];
  document.getElementById("review-modal").classList.remove("open");
}

// Modal Interaction for Quest Detail
function openQuestModal(id) {
  state.selectedQuestId = id;
  const q = quests.find(item => item.id === id);
  const sprintId = state.currentSprint;
  const status = sprintRoadmap[sprintId].scenarioStatus[id];

  simTimeoutIds.forEach(id => clearTimeout(id));
  simTimeoutIds = [];

  document.getElementById("modal-quest-badge").innerText = q.badge;
  document.getElementById("modal-quest-title").innerText = q.title;
  document.getElementById("modal-quest-zone").innerText = q.zone;
  document.getElementById("modal-quest-context").innerText = q.context;

  // Load Persona Profile Card
  document.getElementById("persona-name").innerText = q.persona.name;
  document.getElementById("persona-avatar").innerText = q.persona.avatar;
  document.getElementById("persona-desc").innerText = q.persona.desc;

  // Reset simulation chat area
  const chatArea = document.getElementById("sim-chat-area");
  chatArea.innerHTML = `<div class="chat-bubble narrator">Click 'PLAY STORYBOARD' to see how ${q.persona.name} interacts with this scenario.</div>`;

  const playBtn = document.getElementById("play-sim-btn");
  playBtn.disabled = false;
  playBtn.innerText = "PLAY STORYBOARD 🎬";
  
  const newPlayBtn = playBtn.cloneNode(true);
  playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
  newPlayBtn.addEventListener("click", () => {
    playSound("click");
    playPersonaSimulation(q);
  });

  // Render Goal experiences
  const goalsContainer = document.getElementById("modal-quest-goals");
  goalsContainer.innerHTML = q.goals.map(g => `<li>${g}</li>`).join("");

  // Render Sprint Status & Workload Map inside this Sprint
  const statusBox = document.getElementById("modal-sprint-status-box");
  statusBox.innerHTML = "";

  const sprintRow = document.createElement("div");
  sprintRow.className = "sprint-status-box";
  sprintRow.innerHTML = `
    <div class="sprint-status-row">
      <span class="text-xs text-muted">Sprint Track</span>
      <span class="font-bold text-xs orbitron text-cyan">${sprintId}</span>
    </div>
    <div class="sprint-status-row">
      <span class="text-xs text-muted">Completeness Level</span>
      <span class="rank-badge rank-${status.rank}">${RANK_TITLES[status.rank]}</span>
    </div>
    <div class="sprint-status-row">
      <span class="text-xs text-muted">Squad Role Track</span>
      <span class="role-badge ${status.role}">${status.role.toUpperCase()}</span>
    </div>
    <div class="sprint-status-row" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 5px;">
      <span class="text-xs text-muted">Delivery Task Summary:</span>
      <p class="text-xs text-muted" style="line-height: 1.4;">${status.desc}</p>
    </div>
  `;
  statusBox.appendChild(sprintRow);

  // Render Backlog badges
  // Render Completion Criteria
  const conditionsContainer = document.getElementById("modal-quest-conditions");
  conditionsContainer.innerHTML = q.conditions.map(c => `<li class="condition-item"><span class="condition-check">✓</span>${c}</li>`).join("");

  // Rewards Display
  const currentStatVal = Math.round(status.rank * (q.rewards.statVal / 6));
  document.getElementById("modal-reward-xp").innerText = `+${Math.round(status.rank * (q.rewards.xp / 6))} EXP`;
  document.getElementById("modal-reward-stat").innerText = `+${currentStatVal} ${q.rewards.stat.toUpperCase()}`;

  // Show Modal
  document.getElementById("quest-modal").classList.add("open");
}

function closeQuestModal() {
  simTimeoutIds.forEach(id => clearTimeout(id));
  simTimeoutIds = [];
  document.getElementById("quest-modal").classList.remove("open");
  state.selectedQuestId = null;
  updateUI();
}

// Setup Event Listeners
document.getElementById("modal-close-btn").addEventListener("click", () => {
  playSound("click");
  closeQuestModal();
});

document.getElementById("quest-modal").addEventListener("click", (e) => {
  if (e.target.id === "quest-modal") {
    closeQuestModal();
  }
});

// Setup sprint tabs click listeners
document.querySelectorAll(".sprint-tab").forEach(tab => {
  tab.addEventListener("click", (e) => {
    const sprintId = e.currentTarget.dataset.sprint;
    if (state.currentSprint !== sprintId) {
      playSound("click");
      
      // Update active tab class
      document.querySelectorAll(".sprint-tab").forEach(t => t.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      state.currentSprint = sprintId;

      // updateUI() repaints the XP bar and progress text from the sprint's ranks
      updateUI();
    }
  });
});

document.getElementById("sprint-review-play-btn").addEventListener("click", () => {
  playSound("click");
  playSprintReviewStoryboard();
});

document.getElementById("review-modal-close-btn").addEventListener("click", () => {
  playSound("click");
  closeReviewModal();
});
document.getElementById("review-modal-action-btn").addEventListener("click", () => {
  playSound("click");
  closeReviewModal();
});

document.getElementById("review-modal").addEventListener("click", (e) => {
  if (e.target.id === "review-modal") {
    closeReviewModal();
  }
});

// Init on load
updateUI();
