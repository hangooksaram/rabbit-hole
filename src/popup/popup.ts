import PopupController from "./popupController";
import PopupEvents from "./popupEvents";
import PopupUI from "./ui/popupUI";

class Popup {
  static UI = PopupUI;
  static Events = PopupEvents;
  static Controller = PopupController;
}

export default Popup;
