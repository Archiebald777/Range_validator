"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(fromValue) {
    if (isNaN(fromValue) || typeof fromValue !== "number") {
      throw new TypeError("This must be a number");
    }
    if (fromValue > this.to) {
      throw new RangeError("from must be smaller than to");
    }
    this._from = fromValue;
  }
  get from() {
    return this._from;
  }
  set to(toValue) {
    if (isNaN(toValue) || typeof toValue !== "number") {
      throw new TypeError("This must be a number");
    }
    if (toValue < this.from) {
      throw new RangeError("from must be smaller than to");
    }
    this._to = toValue;
  }
  get to() {
    return this._to;
  }
  get Range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number >= this._from || number <= this._to)
      throw new RangeError("Number must be in the range");
  }
}

const anyNumber = new RangeValidator(1, 5);

const anyNumber2 = new RangeValidator(5, 1);
