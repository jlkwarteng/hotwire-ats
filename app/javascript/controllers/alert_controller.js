import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    closeAfter: {
      type: Number,
      default: 2500,
    },
    removeAfter: {
      type: Number,
      default: 1100,
    },
  };

  initialize() {
    console.log("INITINGG>>>>");
    this.hide();
  }

  connect() {
    console.log("CONNECTING>>>>");
    setTimeout(() => {
      this.show();
    }, 50);
    setTimeout(() => {
      this.close();
    }, this.closeAfterValue);
  }

  close() {
    console.log("HIDE");
    this.hide();
    setTimeout(() => {
      this.element.remove();
    }, this.removeAfterValue);
  }

  show() {
    this.element.setAttribute(
      "style",
      "transition: 0.5s; transform:translate(0, -100px);"
    );
  }

  hide() {
    this.element.setAttribute(
      "style",
      "transition: 1s; transform:translate(0, 200px);"
    );
  }
}
