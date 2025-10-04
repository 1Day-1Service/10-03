import { TarotCard } from '@/types/tarot';

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 0,
    name: "광대",
    nameEn: "The Fool",
    roman: "0",
    image: "🃏",
    keywords: {
      upright: ["새로운 시작", "자유", "모험", "순수함", "가능성"],
      reversed: ["무모함", "경솔함", "불안정", "방황", "미숙함"]
    },
    meaning: {
      upright: "새로운 여정이 시작됩니다. 순수한 마음으로 모험을 떠나세요. 오늘은 가능성으로 가득 찬 날입니다.",
      reversed: "신중하지 못한 결정으로 인해 어려움을 겪을 수 있습니다. 조금 더 계획을 세우고 준비하는 시간이 필요합니다."
    },
    advice: {
      upright: "두려움 없이 앞으로 나아가되, 준비는 철저히 하세요. 새로운 것을 시도하기 좋은 날입니다.",
      reversed: "한 발 물러서서 상황을 다시 생각해보세요. 성급한 결정보다는 신중함이 필요한 시기입니다."
    },
    luckyColor: "#FFD700",
    luckyNumber: 0
  },
  {
    id: 1,
    name: "마법사",
    nameEn: "The Magician",
    roman: "I",
    image: "🎩",
    keywords: {
      upright: ["창조력", "능력", "집중", "실현", "의지"],
      reversed: ["조작", "능력 부족", "집중력 결여", "낭비"]
    },
    meaning: {
      upright: "당신 안에 모든 가능성이 있습니다. 의지와 집중력으로 원하는 것을 이루어낼 수 있는 날입니다.",
      reversed: "자신의 능력을 과신하거나 잘못된 방향으로 사용하고 있지 않은지 돌아볼 필요가 있습니다."
    },
    advice: {
      upright: "가진 자원과 능력을 최대한 활용하세요. 당신은 원하는 것을 창조할 수 있는 힘이 있습니다.",
      reversed: "능력을 올바른 방향으로 사용하고 있는지 점검하세요. 허세보다는 실력을 쌓는 데 집중하세요."
    },
    luckyColor: "#8B00FF",
    luckyNumber: 1
  },
  {
    id: 2,
    name: "여사제",
    nameEn: "The High Priestess",
    roman: "II",
    image: "🌙",
    keywords: {
      upright: ["직관", "내면", "신비", "지혜", "고요"],
      reversed: ["비밀", "억압", "혼란", "표면적 지식"]
    },
    meaning: {
      upright: "내면의 목소리에 귀를 기울이세요. 직관이 당신에게 중요한 메시지를 전하고 있습니다.",
      reversed: "감정과 직관을 무시하고 있지는 않나요? 내면의 소리를 들어보세요."
    },
    advice: {
      upright: "조용히 명상하고 내면을 들여다보세요. 답은 이미 당신 안에 있습니다.",
      reversed: "억압된 감정이나 무시된 직관이 있다면 그것과 마주할 용기를 내세요."
    },
    luckyColor: "#4169E1",
    luckyNumber: 2
  },
  {
    id: 3,
    name: "여황제",
    nameEn: "The Empress",
    roman: "III",
    image: "👑",
    keywords: {
      upright: ["풍요", "사랑", "창조", "자연", "양육"],
      reversed: ["의존", "소홀", "창의성 결여", "과잉보호"]
    },
    meaning: {
      upright: "풍요롭고 사랑이 넘치는 시기입니다. 창조적인 에너지가 샘솟고 주변을 돌볼 여유가 있습니다.",
      reversed: "자신이나 타인에 대한 돌봄이 부족하거나 과도합니다. 균형을 찾아야 합니다."
    },
    advice: {
      upright: "자신과 주변 사람들을 사랑으로 대하세요. 창조적인 활동에 시간을 투자하세요.",
      reversed: "자신을 돌보는 것과 타인을 돌보는 것 사이의 균형을 맞추세요."
    },
    luckyColor: "#228B22",
    luckyNumber: 3
  },
  {
    id: 4,
    name: "황제",
    nameEn: "The Emperor",
    roman: "IV",
    image: "👨‍⚖️",
    keywords: {
      upright: ["권위", "구조", "통제", "안정", "아버지"],
      reversed: ["독재", "경직", "통제 불능", "미성숙"]
    },
    meaning: {
      upright: "질서와 구조가 필요한 때입니다. 리더십을 발휘하고 체계적으로 일을 진행하세요.",
      reversed: "지나친 통제나 경직된 사고방식이 문제를 일으킬 수 있습니다."
    },
    advice: {
      upright: "책임감을 가지고 계획을 세우세요. 당신의 리더십이 필요한 순간입니다.",
      reversed: "융통성을 발휘하세요. 모든 것을 통제하려 하지 말고 흐름에 맡기는 것도 필요합니다."
    },
    luckyColor: "#DC143C",
    luckyNumber: 4
  },
  {
    id: 5,
    name: "교황",
    nameEn: "The Hierophant",
    roman: "V",
    image: "⛪",
    keywords: {
      upright: ["전통", "교육", "신념", "규범", "영적 지도"],
      reversed: ["반항", "독단", "구태의연", "제약"]
    },
    meaning: {
      upright: "전통과 가르침에서 지혜를 얻을 수 있습니다. 멘토나 선배의 조언이 도움이 될 것입니다.",
      reversed: "기존의 틀에서 벗어나고 싶어 합니다. 자신만의 길을 찾을 때입니다."
    },
    advice: {
      upright: "경험 많은 사람의 조언을 구하세요. 검증된 방법을 따르는 것이 현명합니다.",
      reversed: "자신만의 신념을 믿으세요. 관습에 얽매이지 말고 새로운 길을 개척하세요."
    },
    luckyColor: "#FFD700",
    luckyNumber: 5
  },
  {
    id: 6,
    name: "연인",
    nameEn: "The Lovers",
    roman: "VI",
    image: "💕",
    keywords: {
      upright: ["사랑", "조화", "선택", "연결", "관계"],
      reversed: ["불협화음", "잘못된 선택", "유혹", "불균형"]
    },
    meaning: {
      upright: "중요한 선택의 순간입니다. 사랑과 조화가 깃든 관계가 발전할 수 있습니다.",
      reversed: "관계에서 불협화음이 있거나 잘못된 선택을 할 위험이 있습니다."
    },
    advice: {
      upright: "마음의 소리를 따르세요. 진정한 사랑과 조화를 추구하세요.",
      reversed: "관계를 재평가하고 진정으로 원하는 것이 무엇인지 생각해보세요."
    },
    luckyColor: "#FF69B4",
    luckyNumber: 6
  },
  {
    id: 7,
    name: "전차",
    nameEn: "The Chariot",
    roman: "VII",
    image: "🏇",
    keywords: {
      upright: ["승리", "의지", "통제", "진전", "결단력"],
      reversed: ["방향 상실", "공격성", "무모함", "실패"]
    },
    meaning: {
      upright: "강한 의지와 결단력으로 목표를 향해 나아가세요. 승리가 가까이 있습니다.",
      reversed: "방향을 잃었거나 지나치게 공격적입니다. 속도를 조절하세요."
    },
    advice: {
      upright: "자신감을 가지고 전진하세요. 장애물을 극복할 힘이 있습니다.",
      reversed: "목표를 재설정하고 균형을 찾으세요. 무모한 돌진보다는 전략이 필요합니다."
    },
    luckyColor: "#4169E1",
    luckyNumber: 7
  },
  {
    id: 8,
    name: "힘",
    nameEn: "Strength",
    roman: "VIII",
    image: "🦁",
    keywords: {
      upright: ["용기", "인내", "자제력", "내면의 힘", "연민"],
      reversed: ["나약함", "자기 의심", "통제 불능", "두려움"]
    },
    meaning: {
      upright: "부드러운 힘으로 어려움을 극복하세요. 인내와 용기가 필요한 시기입니다.",
      reversed: "자신감이 부족하거나 자제력을 잃었습니다. 내면의 힘을 회복해야 합니다."
    },
    advice: {
      upright: "인내심을 가지세요. 강압보다는 이해와 연민으로 상황을 해결하세요.",
      reversed: "용기를 내세요. 두려움과 마주하고 자신을 믿으세요."
    },
    luckyColor: "#FF8C00",
    luckyNumber: 8
  },
  {
    id: 9,
    name: "은둔자",
    nameEn: "The Hermit",
    roman: "IX",
    image: "🔦",
    keywords: {
      upright: ["성찰", "고독", "지혜", "내면 탐구", "영적 깨달음"],
      reversed: ["고립", "고독감", "회피", "외로움"]
    },
    meaning: {
      upright: "혼자만의 시간이 필요합니다. 내면을 탐구하고 지혜를 얻을 수 있는 시기입니다.",
      reversed: "지나친 고립이나 사회적 회피가 문제가 될 수 있습니다."
    },
    advice: {
      upright: "조용히 명상하고 자신을 돌아보세요. 내면의 빛을 찾으세요.",
      reversed: "고립에서 벗어나세요. 다른 사람들과의 연결도 중요합니다."
    },
    luckyColor: "#808080",
    luckyNumber: 9
  },
  {
    id: 10,
    name: "운명의 수레바퀴",
    nameEn: "Wheel of Fortune",
    roman: "X",
    image: "🎡",
    keywords: {
      upright: ["행운", "변화", "순환", "운명", "전환점"],
      reversed: ["불운", "저항", "정체", "나쁜 타이밍"]
    },
    meaning: {
      upright: "인생의 전환점입니다. 운명의 바퀴가 당신에게 유리하게 돌아갑니다.",
      reversed: "운이 따르지 않거나 변화를 받아들이기 어렵습니다."
    },
    advice: {
      upright: "흐름에 몸을 맡기세요. 기회를 잡고 변화를 받아들이세요.",
      reversed: "인내하세요. 모든 것은 순환하며, 곧 상황이 나아질 것입니다."
    },
    luckyColor: "#4B0082",
    luckyNumber: 10
  },
  {
    id: 11,
    name: "정의",
    nameEn: "Justice",
    roman: "XI",
    image: "⚖️",
    keywords: {
      upright: ["공정함", "진실", "법", "균형", "원인과 결과"],
      reversed: ["불공정", "거짓", "책임 회피", "불균형"]
    },
    meaning: {
      upright: "공정한 판단의 시기입니다. 진실이 밝혀지고 정의가 실현될 것입니다.",
      reversed: "불공정한 대우를 받거나 진실을 외면하고 있습니다."
    },
    advice: {
      upright: "정직하고 공정하게 행동하세요. 진실을 말하고 책임을 지세요.",
      reversed: "불공정함에 맞서세요. 자신의 행동에 책임을 지세요."
    },
    luckyColor: "#006400",
    luckyNumber: 11
  },
  {
    id: 12,
    name: "매달린 사람",
    nameEn: "The Hanged Man",
    roman: "XII",
    image: "🙃",
    keywords: {
      upright: ["희생", "새로운 관점", "기다림", "항복", "깨달음"],
      reversed: ["지체", "저항", "헛된 희생", "우유부단"]
    },
    meaning: {
      upright: "다른 관점에서 바라보세요. 기다림과 희생이 필요한 시기입니다.",
      reversed: "무의미한 희생이나 지나친 지체가 문제입니다."
    },
    advice: {
      upright: "때로는 멈추고 기다리는 것도 필요합니다. 새로운 시각을 얻으세요.",
      reversed: "행동할 때입니다. 더 이상 기다리지 마세요."
    },
    luckyColor: "#00CED1",
    luckyNumber: 12
  },
  {
    id: 13,
    name: "죽음",
    nameEn: "Death",
    roman: "XIII",
    image: "💀",
    keywords: {
      upright: ["변화", "종결", "재생", "변신", "새로운 시작"],
      reversed: ["저항", "정체", "변화에 대한 두려움", "집착"]
    },
    meaning: {
      upright: "하나의 단계가 끝나고 새로운 시작이 옵니다. 변화를 두려워하지 마세요.",
      reversed: "변화를 거부하거나 과거에 집착하고 있습니다."
    },
    advice: {
      upright: "끝을 받아들이세요. 새로운 시작을 위한 공간을 만드세요.",
      reversed: "과거를 놓아주세요. 변화는 성장의 일부입니다."
    },
    luckyColor: "#000000",
    luckyNumber: 13
  },
  {
    id: 14,
    name: "절제",
    nameEn: "Temperance",
    roman: "XIV",
    image: "🧘",
    keywords: {
      upright: ["균형", "절제", "조화", "인내", "통합"],
      reversed: ["불균형", "과잉", "조급함", "극단"]
    },
    meaning: {
      upright: "균형과 조화를 찾으세요. 인내심을 가지고 점진적으로 나아가세요.",
      reversed: "균형을 잃었거나 극단으로 치우쳤습니다."
    },
    advice: {
      upright: "중용의 길을 가세요. 서두르지 말고 조화롭게 진행하세요.",
      reversed: "극단을 피하고 균형을 회복하세요. 조급함을 버리세요."
    },
    luckyColor: "#87CEEB",
    luckyNumber: 14
  },
  {
    id: 15,
    name: "악마",
    nameEn: "The Devil",
    roman: "XV",
    image: "😈",
    keywords: {
      upright: ["유혹", "속박", "집착", "물질주의", "중독"],
      reversed: ["해방", "자유", "극복", "깨달음"]
    },
    meaning: {
      upright: "무언가에 얽매여 있습니다. 유혹이나 집착에서 벗어나야 합니다.",
      reversed: "속박에서 벗어나고 있습니다. 자유를 되찾을 수 있습니다."
    },
    advice: {
      upright: "당신을 묶고 있는 것이 무엇인지 인식하세요. 자유를 선택하세요.",
      reversed: "나쁜 습관에서 벗어나세요. 당신은 스스로를 해방시킬 수 있습니다."
    },
    luckyColor: "#8B0000",
    luckyNumber: 15
  },
  {
    id: 16,
    name: "탑",
    nameEn: "The Tower",
    roman: "XVI",
    image: "🏰",
    keywords: {
      upright: ["붕괴", "충격", "계시", "해방", "급격한 변화"],
      reversed: ["회피", "지연된 붕괴", "내적 변화", "위기 회피"]
    },
    meaning: {
      upright: "갑작스러운 변화나 충격이 있을 수 있습니다. 기존의 구조가 무너질 수 있습니다.",
      reversed: "변화를 늦추거나 회피하고 있지만, 결국 마주해야 합니다."
    },
    advice: {
      upright: "놀라더라도 침착하세요. 붕괴 후에는 더 튼튼하게 재건할 수 있습니다.",
      reversed: "피할 수 없는 변화를 받아들이세요. 준비하고 적응하세요."
    },
    luckyColor: "#FF4500",
    luckyNumber: 16
  },
  {
    id: 17,
    name: "별",
    nameEn: "The Star",
    roman: "XVII",
    image: "⭐",
    keywords: {
      upright: ["희망", "영감", "치유", "평온", "낙관"],
      reversed: ["절망", "환멸", "비관", "자신감 결여"]
    },
    meaning: {
      upright: "희망과 영감이 찾아옵니다. 치유와 평화의 시기입니다.",
      reversed: "희망을 잃었거나 꿈을 포기하고 있습니다."
    },
    advice: {
      upright: "믿음을 가지세요. 당신의 꿈을 향해 나아가세요.",
      reversed: "희망을 회복하세요. 어두운 터널 끝에는 빛이 있습니다."
    },
    luckyColor: "#00FFFF",
    luckyNumber: 17
  },
  {
    id: 18,
    name: "달",
    nameEn: "The Moon",
    roman: "XVIII",
    image: "🌙",
    keywords: {
      upright: ["환상", "직관", "무의식", "두려움", "혼란"],
      reversed: ["명확성", "해방", "진실 드러남", "불안 해소"]
    },
    meaning: {
      upright: "불확실성과 혼란의 시기입니다. 직관을 믿되 환상과 현실을 구분하세요.",
      reversed: "혼란이 걷히고 진실이 드러납니다."
    },
    advice: {
      upright: "직관을 따르되 냉철하게 판단하세요. 두려움에 휘둘리지 마세요.",
      reversed: "이제 진실을 볼 수 있습니다. 혼란에서 벗어나세요."
    },
    luckyColor: "#C0C0C0",
    luckyNumber: 18
  },
  {
    id: 19,
    name: "태양",
    nameEn: "The Sun",
    roman: "XIX",
    image: "☀️",
    keywords: {
      upright: ["기쁨", "성공", "활력", "명확함", "긍정"],
      reversed: ["낙담", "실패", "어둠", "지나친 낙관"]
    },
    meaning: {
      upright: "밝고 긍정적인 에너지가 넘칩니다. 성공과 기쁨의 시기입니다.",
      reversed: "일시적인 어려움이나 낙담이 있을 수 있습니다."
    },
    advice: {
      upright: "밝은 마음으로 하루를 시작하세요. 긍정적인 에너지를 나누세요.",
      reversed: "곧 어둠이 걷힐 것입니다. 긍정을 잃지 마세요."
    },
    luckyColor: "#FFFF00",
    luckyNumber: 19
  },
  {
    id: 20,
    name: "심판",
    nameEn: "Judgement",
    roman: "XX",
    image: "📯",
    keywords: {
      upright: ["재생", "각성", "용서", "평가", "부활"],
      reversed: ["자기 의심", "죄책감", "변명", "과거에 얽매임"]
    },
    meaning: {
      upright: "과거를 돌아보고 새롭게 시작할 기회입니다. 용서하고 용서받으세요.",
      reversed: "과거의 죄책감이나 후회에서 벗어나지 못하고 있습니다."
    },
    advice: {
      upright: "자신을 정직하게 평가하세요. 과거를 용서하고 새롭게 태어나세요.",
      reversed: "자신을 용서하세요. 과거는 과거일 뿐입니다."
    },
    luckyColor: "#9400D3",
    luckyNumber: 20
  },
  {
    id: 21,
    name: "세계",
    nameEn: "The World",
    roman: "XXI",
    image: "🌍",
    keywords: {
      upright: ["완성", "성취", "통합", "여행", "만족"],
      reversed: ["미완성", "지체", "목표 상실", "끝나지 않은 일"]
    },
    meaning: {
      upright: "목표를 달성하고 완성의 기쁨을 느낄 수 있습니다. 성공과 만족의 시기입니다.",
      reversed: "아직 완성되지 않았거나 목표에 도달하지 못했습니다."
    },
    advice: {
      upright: "성취를 축하하세요. 새로운 사이클이 곧 시작될 것입니다.",
      reversed: "끝마치지 못한 일이 있다면 완성하세요. 마지막 한 걸음이 중요합니다."
    },
    luckyColor: "#4169E1",
    luckyNumber: 21
  }
];

