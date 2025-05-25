class PopupElements {
  private static recentSearchElement: HTMLElement;
  private static startButtonElement: HTMLButtonElement;
  private static statusTextElement: HTMLElement;
  private static rabbitHoleHistoryElement: HTMLUListElement;
  private static rabbitHoleDepthElement: HTMLSpanElement;

  constructor() {
    try {
      this.init();
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  }

  private init() {
    PopupElements.recentSearchElement = document.getElementById(
      "recentSearch"
    ) as HTMLElement;
    PopupElements.startButtonElement = document.getElementById(
      "startButton"
    ) as HTMLButtonElement;
    PopupElements.statusTextElement = document.getElementById(
      "statusText"
    ) as HTMLElement;
    PopupElements.rabbitHoleHistoryElement = document.getElementById(
      "rabbitHoleHistory"
    ) as HTMLUListElement;

    PopupElements.rabbitHoleDepthElement = document.getElementById(
      "rabbitHoleDepth"
    ) as HTMLSpanElement;
  }

  public static setRecentSearchElement(value: string) {
    PopupElements.recentSearchElement.innerHTML = value;
  }

  public static setStartButtonElement(value: string) {
    PopupElements.startButtonElement.innerHTML = value;
  }

  public static setStatusTextElement(value: string) {
    PopupElements.statusTextElement.innerHTML = value;
  }

  public static removeRabbitHoleHistoryElement() {
    PopupElements.rabbitHoleHistoryElement.innerHTML = "";
  }

  public static appendRabbitHoleHistoryElement(value: HTMLLIElement) {
    PopupElements.rabbitHoleHistoryElement.appendChild(value);
  }

  public static setRabbitHoleHistoryElement(value: string) {
    const historyElement = document.createElement("li");
    historyElement.innerHTML = value;
    PopupElements.rabbitHoleHistoryElement.appendChild(historyElement);
  }

  public static setRabbitHoleDepthElement(value: number) {
    PopupElements.rabbitHoleDepthElement.innerHTML = value.toString();
  }

  public static addStartButtonClickListener(callback: () => void) {
    PopupElements.startButtonElement.addEventListener("click", callback);
  }
}

export default PopupElements;
