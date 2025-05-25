class PopupElements {
  private static recentSearchElement: HTMLElement = document.getElementById(
    "recentSearch"
  ) as HTMLElement;
  private static recentSearchContainerElement: HTMLElement =
    document.getElementById("recentSearchContainer") as HTMLElement;
  private static recentSearchLabelElement: HTMLSpanElement =
    document.getElementById("recentSearchLabel") as HTMLSpanElement;
  private static startButtonElement: HTMLButtonElement =
    document.getElementById("startButton") as HTMLButtonElement;
  private static statusTextElement: HTMLElement = document.getElementById(
    "statusText"
  ) as HTMLElement;
  private static rabbitHoleHistoryElement: HTMLUListElement =
    document.getElementById("rabbitHoleHistory") as HTMLUListElement;
  private static rabbitHoleDepthElement: HTMLSpanElement =
    document.getElementById("rabbitHoleDepth") as HTMLSpanElement;

  public static setRecentSearchElement(value: string) {
    PopupElements.recentSearchElement.innerHTML = value;
  }
  public static addRecentSearchElementClass(value: string) {
    PopupElements.recentSearchElement.classList.add(value);
  }
  public static removeRecentSearchElementClass(value: string) {
    PopupElements.recentSearchElement.classList.remove(value);
  }
  public static setRecentSearchLabelElement(value: string) {
    PopupElements.recentSearchLabelElement.innerHTML = value;
  }
  public static addRecentSearchContainerElementClass(value: string) {
    PopupElements.recentSearchContainerElement.classList.add(value);
  }
  public static removeRecentSearchContainerElementClass(value: string) {
    PopupElements.recentSearchContainerElement.classList.remove(value);
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

  public static addRecentSearchContainerMouseEnterListener(
    callback: () => void
  ) {
    PopupElements.recentSearchContainerElement.addEventListener(
      "mouseenter",
      (e: MouseEvent) => {
        e.stopPropagation();
        callback();
      }
    );
  }
  public static addRecentSearchContainerMouseLeaveListener(
    callback: () => void
  ) {
    PopupElements.recentSearchContainerElement.addEventListener(
      "mouseleave",
      callback
    );
  }
}

export default PopupElements;
