import ElementWrapper from "../../ui/ElementWrapper";

class PopupElements {
  recentSearch: ElementWrapper<HTMLElement>;
  recentSearchContainer: ElementWrapper<HTMLElement>;
  recentSearchLabel: ElementWrapper<HTMLSpanElement>;
  statusText: ElementWrapper<HTMLElement>;
  rabbitHoleHistory: ElementWrapper<HTMLUListElement>;
  rabbitHoleDepth: ElementWrapper<HTMLSpanElement>;
  createRabbitHoleImage: ElementWrapper<HTMLDivElement>;
  settingContainer: ElementWrapper<HTMLDivElement>;
  settingOpenButton: ElementWrapper<HTMLImageElement>;
  settingCloseButton: ElementWrapper<HTMLImageElement>;

  constructor() {
    this.recentSearch = new ElementWrapper(
      document.getElementById("recentSearch") as HTMLElement
    );
    this.recentSearchContainer = new ElementWrapper(
      document.getElementById("recentSearchContainer") as HTMLElement
    );
    this.recentSearchLabel = new ElementWrapper(
      document.getElementById("recentSearchLabel") as HTMLSpanElement
    );
    this.statusText = new ElementWrapper(
      document.getElementById("statusText") as HTMLElement
    );
    this.rabbitHoleHistory = new ElementWrapper(
      document.getElementById("rabbitHoleHistory") as HTMLUListElement
    );
    this.rabbitHoleDepth = new ElementWrapper(
      document.getElementById("rabbitHoleDepth") as HTMLSpanElement
    );
    this.createRabbitHoleImage = new ElementWrapper(
      document.getElementById("createRabbitHoleImage") as HTMLDivElement
    );
    this.settingContainer = new ElementWrapper(
      document.getElementById("settingContainer") as HTMLDivElement
    );
    this.settingOpenButton = new ElementWrapper(
      document.getElementById("settingOpenButton") as HTMLImageElement
    );
    this.settingCloseButton = new ElementWrapper(
      document.getElementById("closeSettingButton") as HTMLImageElement
    );
  }
}

export default new PopupElements();
