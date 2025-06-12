import {
  fadeInAnimation,
  fadeOutAnimation,
  toastStyle,
} from "../popup/constants";

function toast(text: string) {
  const toastElement = document.createElement("div");
  toastElement.textContent = text;
  Object.assign(toastElement.style, toastStyle);
  toastElement.classList.add(fadeInAnimation);

  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.classList.add(fadeOutAnimation);
  }, 1000);
}

export default toast;
