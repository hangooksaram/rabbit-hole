import ChromeStorage from "../../chromeApi/storageData";
import { initRabbitHole } from "../../rabbitHole/rabbitHole";
import PopupUI from "./popupUI";

PopupUI.addStartButtonClickListener(async () => {
  const recentSearch = await ChromeStorage.get("recentSearch");
  initRabbitHole(recentSearch?.searchQuery || "", () => {
    PopupUI.toastNewRabbitHole();
    PopupUI.initRabbitHoleUI();
    PopupUI.setRabbitHoleDepthUI(0);
  });
});
