const noSearchQueryText = "감지된 검색이 없습니다.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";
const createNewRabbitHoleText = "새로운 토끼굴 생성하기!";
const recentSearchQueryText = "최근 검색어";

const depthProgressStatusCheckPoints: (keyof typeof depthProgressStatusText)[] =
  [1, 25, 50, 75, 99, 100, 125, 150, 175, 200];

const depthProgressStatusText = {
  1: "토끼굴 입구에서 멍하니 서 있는 중!",
  25: "슬쩍 들어가봅니다!",
  50: "벌써 절반이네요.",
  75: "곧 끝에 도착해요.",
  99: "거의 다왔어요.",
  100: "최대 깊이에요! 괜찮은거죠?",
  125: "처음 찾고자 했던 게 뭔지 떠올려봅시다!",
  150: "아직 돌아갈 수 있어요!",
  175: "원래 토끼굴은 이렇게 깊은 건가요?",
  200: "너무 멀리왔어요. 돌아가야 해요!",
};

const hiddenClass = "hidden";
const scaleDownAnimation = "scale-down-center";
const kawaiAnimation = "jello-horizontal";
const slideInBottomAnimation = "slide-in-bottom";
const slideOutBottomAnimation = "slide-out-bottom";
const fadeInAnimation = "fade-in";
const fadeOutAnimation = "fade-out";
const toastStyle = {
  position: "fixed",
  top: "15px",
  right: "15px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  zIndex: "2000",
};

export {
  noSearchQueryText,
  newRabbitHoleText,
  scaleDownAnimation,
  kawaiAnimation,
  slideInBottomAnimation,
  slideOutBottomAnimation,
  toastStyle,
  createNewRabbitHoleText,
  recentSearchQueryText,
  hiddenClass,
  fadeInAnimation,
  fadeOutAnimation,
  depthProgressStatusText,
  depthProgressStatusCheckPoints,
};
