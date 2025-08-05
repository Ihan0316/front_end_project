export const NAV_MENUS = [
  { key: "store", label: "스토어", dropdownType: "store" },
  { key: "mac", label: "Mac" },
  { key: "ipad", label: "iPad" },
  { key: "iphone", label: "iPhone" },
  { key: "watch", label: "Watch" },
  { key: "vision", label: "Vision" },
  { key: "airpods", label: "AirPods" },
  { key: "tvhome", label: "TV 및 홈" },
  { key: "entertain", label: "엔터테인먼트" },
  { key: "accessory", label: "엑세서리" },
  { key: "support", label: "고객지원" },
];

export const DROPDOWN_ITEMS = {
  mac: {
    left: [
      "Mac 모두 살펴보기",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
      "디스플레이",
      "Mac 비교하기",
      "PC에서 Mac으로 전환하기",
    ],
    center: ["Mac 쇼핑하기", "Mac 액세서리", "Apple Trade In", "할부 방식"],
    right: [
      "Mac 지원",
      "Mac을 위한 AppleCare+",
      "macOS Sonoma",
      "Apple ID 관리",
      "iCloud+",
      "Mac과 비즈니스",
      "교육",
    ],
  },
  ipad: ["iPad Pro", "iPad Air", "iPad mini"],
  iphone: ["iPhone 15", "iPhone 14", "iPhone SE"],
  watch: ["Apple Watch Series 9", "Apple Watch SE"],
  vision: ["Apple Vision Pro"],
  airpods: ["AirPods Pro", "AirPods"],
  tvhome: ["Apple TV 4K", "HomePod"],
  entertain: ["Apple Music", "Apple TV+", "Apple Arcade"],
  accessory: ["케이스", "충전기", "키보드"],
  support: ["고객지원 홈", "제품 지원"],
};

export const STORE_DROPDOWN = {
  left: [
    "최신 제품 쇼핑하기",
    "Mac",
    "iPad",
    "iPhone",
    "Apple Watch",
    "Apple Vision Pro",
    "액세서리",
  ],
  center: [
    "매장 찾기",
    "주문 상태",
    "Apple Trade In",
    "할부 방식",
    "개인 맞춤 설정",
  ],
  right: ["인증 리퍼비쉬 제품", "교육", "비즈니스"],
};
