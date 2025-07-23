import IHistoryController from "./abstract/HistoryControllerInterface";

class HistoryService {
  historyController: IHistoryController;

  constructor(historyController: IHistoryController) {
    this.historyController = historyController;
  }

  init() {
    this.historyController.initHistory();
  }
}

export default HistoryService;
