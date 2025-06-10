const noSearchQueryText = "감지된 검색이 없습니다.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";
const createNewRabbitHoleText = "새로운 토끼굴 생성하기!";
const recentSearchQueryText = "최근 검색어";

const hiddenClass = "hidden";
const scaleDownAnimation = "scale-down-center";
const kawaiAnimation = "jello-horizontal";
const slideInBottomAnimation = "slide-in-bottom";
const slideOutBottomAnimation = "slide-out-bottom";
const toastStyle = {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  zIndex: "1000",
  opacity: "0",
  transition: "opacity 0.5s",
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
};
