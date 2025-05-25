class PopupElements {
  private recentSearchElement!: HTMLElement;
  private startButtonElement!: HTMLButtonElement;
  private statusTextElement!: HTMLElement;
  private rabbitHoleHistoryElement!: HTMLUListElement;
  private rabbitHoleDepthElement!: HTMLSpanElement;

  constructor() {
    try {
      this.init();
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  }

  private init() {
    this.recentSearchElement = document.getElementById(
      "recentSearch"
    ) as HTMLElement;
    this.startButtonElement = document.getElementById(
      "startButton"
    ) as HTMLButtonElement;
    this.statusTextElement = document.getElementById(
      "statusText"
    ) as HTMLElement;
    this.rabbitHoleHistoryElement = document.getElementById(
      "rabbitHoleHistory"
    ) as HTMLUListElement;

    this.rabbitHoleDepthElement = document.getElementById(
      "rabbitHoleDepth"
    ) as HTMLSpanElement;
  }

  public setRecentSearchElement(value: string) {
    this.recentSearchElement.innerHTML = value;
  }

  public setStartButtonElement(value: string) {
    this.startButtonElement.innerHTML = value;
  }

  public setStatusTextElement(value: string) {
    this.statusTextElement.innerHTML = value;
  }

  public removeRabbitHoleHistoryElement() {
    this.rabbitHoleHistoryElement.innerHTML = "";
  }

  public appendRabbitHoleHistoryElement(value: HTMLLIElement) {
    this.rabbitHoleHistoryElement.appendChild(value);
  }

  public setRabbitHoleHistoryElement(value: string) {
    const historyElement = document.createElement("li");
    historyElement.innerHTML = value;
    this.rabbitHoleHistoryElement.appendChild(historyElement);
  }

  public setRabbitHoleDepthElement(value: number) {
    this.rabbitHoleDepthElement.innerHTML = value.toString();
  }

  public addStartButtonClickListener(callback: () => void) {
    this.startButtonElement.addEventListener("click", callback);
  }
}

export default PopupElements;
