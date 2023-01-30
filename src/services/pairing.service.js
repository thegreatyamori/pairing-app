import LeaderLine from "@codehardt/leader-line";
import { getAllMembers } from "./member.service";

export default class PairingService {
  _elements = [];

  constructor() {
    this._members = getAllMembers();
  }

  get authors() {
    return this._members.sort();
  }

  get matrix() {
    return this._elements;
  }

  removeLeaderLines() {
    const body = document.querySelector("body");
    const lines = document.querySelectorAll(".leader-line");

    lines.forEach((line) => body.removeChild(line));
  }

  handlePairItems(anchor, pair) {
    console.log(`Evt fired: ${anchor} -> ${pair}`);

    const [areErrors, errors] = this.validateConnections(anchor, pair);

    if (areErrors) {
      for (const error of errors) {
        console.error(error);
      }
      return;
    }

    this.connectLine(anchor, pair, "name");
    this._elements.push({ author: anchor, coAuthor: pair });
  }

  validateConnections(anchor, pair) {
    let errors = [];
    let matrix = new Set(this._elements);

    // TODO: pending validation
    // if (anchor === pair)
    //   errors.push("Unable to connect the same item!");

    for (const el of matrix) {
      if (
        el.author === anchor ||
        el.coAuthor === anchor ||
        el.author === pair ||
        el.coAuthor === pair
      )
        errors.push("Element already paired.");

      if (el.author === anchor && el.coAuthor === pair)
        errors.push("This element has been paired previously.");
    }

    return [errors.length !== 0, errors];
  }

  connectLine(from, to, locator) {
    const start = document.querySelector(`[${locator}=${from}]`);
    const end = document.querySelector(`[${locator}=${to}]`);
    return new LeaderLine(start, end, {
      color: this.randomizeColorLine(),
      startPlug: "arrow1",
    });
  }

  randomizeColorLine() {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = Math.floor(Math.random() * 128) + 128;
    let b = Math.floor(Math.random() * 128) + 128;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  setMemberPosition(index) {
    const elements = this.authors.length;
    const position = (360 / elements) * index - 90;
    const anglePosition = `rotate(${position}deg)`;
    const angleRotation = `rotate(${-position}deg)`;
    const radius = `translate(10em)`;
    return {
      transform: `${anglePosition} ${radius} ${angleRotation}`,
    };
  }
}
