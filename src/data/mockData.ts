import { StatItem, CurriculumItem, InstructorStory, GalleryItem, FaqItem } from '../types';

import heroArtImg from '../assets/images/miniature_hero_art_1785043528716.jpg';
import roomboxImg from '../assets/images/miniature_gallery_roombox_1785043543731.jpg';

export const STATS_DATA: StatItem[] = [
  { label: '지자체·학교 MOU 및 협약', value: '120+', description: '전국 교육기관 및 공공기관 협력' },
  { label: '양성 전문 강사', value: '450+', description: '자격증 취득 후 활발한 활동 중' },
  { label: '누적 교육 수강생', value: '15,000+', description: '유치원부터 어르신 힐링 클래스까지' },
  { label: '출강 만족도 평점', value: '98.4%', description: '담당자 및 참가자 현장 만족도' },
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'school-1',
    category: 'school',
    title: '초·중·고 학교 방과후 & 창체 미니어처 클래스',
    subtitle: '손끝 집중력 향상과 창의력 발달을 위한 학교 맞춤 프로그램',
    target: '초·중·고등학생 및 특수학급',
    duration: '회당 80분 ~ 120분 (단기/학기제 선택)',
    description: '안전성 검증된 친환경 클레이와 자재만을 사용합니다. 학생들의 소근육 발달과 조형 예술적 감각을 키워주며, 학기말 성과 전시회까지 연계 지원합니다.',
    highlights: ['KC 인증 안전한 친환경 조형 재료 사용', '학교 예산 및 학급 인원에 맞춘 맞춤 키트 제공', '담당 교사 평가 및 만족도 설문 시스템 지원'],
    tag: '학교 인기 1위'
  },
  {
    id: 'festival-1',
    category: 'festival',
    title: '지자체 축제 & 공공기관 체험부스 운영',
    subtitle: '남녀노소 누구나 즐기는 대규모 현장 체험 프로그램',
    target: '지역 주민, 가족 단위 참가자, 축제 방문객',
    duration: '부스 상시 운영 (회당 20분 소요)',
    description: '짧은 시간 동안 고품질의 미니어처 소품(열쇠고리, 마그넷, 미니 푸드)을 완성할 수 있도록 효율적으로 구성된 대형 행사 맞춤형 체험 부스입니다.',
    highlights: ['시간당 100명 이상 수용 가능한 고효율 모듈', '협회 소속 베테랑 강사 5~10명 단체 파견', '행사 메인 컨셉에 맞춘 맞춤형 체험 작품 제작'],
    tag: '지자체 추천'
  },
  {
    id: 'corporate-1',
    category: 'corporate',
    title: '기업 임직원 워크숍 & 힐링 힐링 아트 클래스',
    subtitle: '일상의 스트레스를 해소하고 몰입감을 선사하는 오피스 힐링',
    target: '기업 임직원, 동호회, 팀빌딩 참가자',
    duration: '2시간 ~ 3시간 코스',
    description: '작은 세계에 몰입하는 미니어처 작업을 통해 심리적 안정감과 팀원 간 친밀감을 높여줍니다. 나만의 나노 룸박스나 미니 디저트 가든을 제작합니다.',
    highlights: ['사내 회의실 및 외부 행사장출장 전면 세팅', '개별 완성작 고급 투명 케이스 포장 제공', '세금계산서 및 기업용 정산 서류 완비'],
    tag: '임직원 만족도 Top'
  },
  {
    id: 'certificate-1',
    category: 'certificate',
    title: '한국미니어처아트협회 전문 강사 자격증반',
    subtitle: '수강 후 프리마켓 진출 및 출강 강사로 자립하는 실전 과정',
    target: '공방 창업 희망자, 프리랜서 강사, 취미 전문화',
    duration: '기초반 (8주) / 심화 자격증반 (12주)',
    description: '단순 제작 기법 습득에 그치지 않고, 기관 제안서 작성, 공공 출강 노하우, 프리마켓 상품 기획, 원가 계산까지 실전 비즈니스를 전수합니다.',
    highlights: ['자격증 취득 후 협회 인력풀 등록 및 출강 기회 부여', '수강생 전용 프리마켓 공동 부스 및 판매 루트 제공', '협회 교재 및 수업용 키트 도매가 공급'],
    tag: '수익 연계'
  }
];

export const INSTRUCTOR_STORIES: InstructorStory[] = [
  {
    id: 'story-1',
    name: '김서연 강사',
    role: 'KMAA 1급 자격 강사 / 서울 경기 지역 출강',
    category: 'flea',
    title: '경단녀 주부에서 주말 프리마켓 완판 강사로!',
    quote: '"예쁜 미니어처를 만드는 것도 좋았지만, 실제 프리마켓 부스에서 한 시간 만에 완판되었을 때의 쾌감은 잊을 수 없습니다."',
    story: '육아로 오랜 기간 경력이 단절되었던 김서연 강사는 KMAA 자격증 과정을 수료한 후 협회의 지원을 받아 지역 주말 프리마켓에 출전했습니다. KMAA만의 고품질 디저트 키트 디자인 덕분에 첫 참가에서 준비한 80개 작품을 조기 완판했습니다.',
    location: '서울 서초구 & 송파구 프리마켓',
    outcomes: ['주말 하루 매출 120만원 달성', '초등학교 방과후 특기적성 강사 채용', '협회 공동 부스 정기 참가자 지정'],
    badge: '프리마켓 매출 1위',
    image: heroArtImg
  },
  {
    id: 'story-2',
    name: '박진우 강사',
    role: 'KMAA 전문 수석 지도자 / 지자체 전문 담당',
    category: 'mou',
    title: '지자체 청소년 수련관 MOU 체결 및 연간 출강',
    quote: '"협회에서 제공해 준 기관 제안서 양식과 실전 가이드 덕분에 지자체 수련관 연간 계약을 당당히 성사시켰습니다."',
    story: '공방 운영 초기, 기관 마케팅 방법을 몰라 고민하던 박진우 강사는 KMAA의 MOU 체결 실전 마케팅 교육을 이수한 후 지역 청소년 문화의 집에 사업 제안서를 제출했습니다. 차별화된 커리큘럼으로 인정을 받아 연간 36회차 정규 출강 계약을 맺었습니다.',
    location: '경기도 수원시 청소년수련관',
    outcomes: ['지자체 연간 정규 프로그램 36회 계약', '수강생 만족도 조사 100점 만점', '지역 신문 공예 교육 우수 사례 보도'],
    badge: 'MOU 수주 성공',
    image: roomboxImg
  },
  {
    id: 'story-3',
    name: '이지은 강사',
    role: 'KMAA 2급 자격 강사 / 초등 방과후 전담',
    category: 'school',
    title: '아이들의 미소가 가득한 방과후 미니어처 교실',
    quote: '"스마트폰만 보던 학생들이 90분 동안 눈을 반짝이며 미니어처 도넛을 완성해 부모님께 자랑할 때 보람을 느낍니다."',
    story: '초등학교 3곳의 방과후 공예 강사로 활동 중인 이지은 강사는 KMAA의 안전 인증 재료 키트 덕분에 학부모들의 깊은 신뢰를 얻고 있습니다. 매 학기 수강 신청 개설 5분 만에 마감되는 인기 강좌로 자리잡았습니다.',
    location: '인천 연수구 초등학교 3곳',
    outcomes: ['매 학기 방과후 수강신청 전석 마감', '학부모 만족도 99% 달성', '학기말 학생 미니어처 전시회 개최'],
    badge: '마감 인기 강좌',
    image: heroArtImg
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: '조선 전통 한상차림 미니어처',
    category: 'traditional',
    categoryLabel: '전통 공예',
    author: 'KMAA 지도자회 공동 작품',
    description: '신선로, 불고기, 각종 나물과 놋그릇까지 1/12 비율로 정교하게 표현한 전통 한식 미니어처입니다.',
    image: heroArtImg,
    tags: ['전통한식', '1/12비율', '수제공예', 'KMAA대표작']
  },
  {
    id: 'g-2',
    title: '따스한 햇살이 드는 아틀리에 룸박스',
    category: 'roombox',
    categoryLabel: '룸박스 & 건축',
    author: '박진우 수석 강사',
    description: '실제 LED 조명이 켜지는 미니 아틀리에 룸박스입니다. 작은 미니북과 화분, 이젤까지 손수 제작되었습니다.',
    image: roomboxImg,
    tags: ['룸박스', 'LED조명', '인테리어소품', '공방작품']
  },
  {
    id: 'g-3',
    title: '달콤한 디저트 베이커리 쇼케이스',
    category: 'food',
    categoryLabel: '미니어처 음식',
    author: '김서연 강사',
    description: '타르트, 컵케이크, 바게트 등 다양한 베이커리 항목을 질감까지 살려 제작한 디저트 플레이트입니다.',
    image: heroArtImg,
    tags: ['디저트', '클레이아트', '프리마켓인기', '체험키트']
  },
  {
    id: 'g-4',
    title: '지자체 체험부스용 DIY 미니 가든 키트',
    category: 'kit',
    categoryLabel: '체험 키트',
    author: 'KMAA 교육개발팀',
    description: '20분 만에 초보자도 손쉽게 다육이와 미니 울타리를 만들 수 있는 고효율 행사용 DIY 키트입니다.',
    image: roomboxImg,
    tags: ['DIY키트', '체험부스', '단체수업', 'KC인증']
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Q. 지자체나 학교와 MOU 체결은 어떤 절차로 진행되나요?',
    answer: '협회에 출강 및 MOU 문의를 남겨주시면, 담당 매니저가 지정되어 기관의 예산, 대상, 인원 및 목적에 맞는 맞춤 커리큘럼 제안서와 협약서(MOU) 안을 24시간 이내에 송부해 드립니다.',
    category: 'mou'
  },
  {
    question: 'Q. 공예 경험이 전혀 없는 초보자도 강사 자격증을 취득할 수 있나요?',
    answer: '네, 가능합니다! KMAA의 강사 자격증 교육 과정은 기공법 기본기부터 시작하여 단계별로 디자인, 조형, 채색을 체계적으로 배웁니다. 또한 자격증 취득 후 실전 강사 스터디와 프리마켓 참가를 밀착 지원합니다.',
    category: 'instructor'
  },
  {
    question: 'Q. 수업에 사용되는 재료는 안전한가요?',
    answer: '한국미니어처아트협회에서 제공하는 모든 클레이 및 조형 자재는 어린이제품 안전 특별법 기준을 준수하며 KC 인증을 완료한 안심 재료입니다.',
    category: 'kit'
  },
  {
    question: 'Q. 대규모 행사(100명 이상)에도 강사 파견 및 키트 공급이 가능한가요?',
    answer: '네! KMAA는 전국 각지에 450여 명의 정식 자격 강사 인력풀을 보유하고 있어, 대규모 축제 및 기업 대형 행사 시 팀 단위 강사 파견과 단체 키트 당일 배송이 가능합니다.',
    category: 'general'
  }
];
