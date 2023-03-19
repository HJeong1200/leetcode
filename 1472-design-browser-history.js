/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.current = homepage;
  this.next = [];
  this.previous = [];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.previous.push(this.current);
  this.current = url;
  this.next = [];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (!this.previous.length) return this.current;

  if (this.previous.length <= steps) {
    this.next = [...this.previous.slice(1), this.current, ...this.next];
    this.current = this.previous[0];
    this.previous = [];

    return this.current;
  }

  this.next = [
    ...this.previous.slice(this.previous.length - steps + 1),
    this.current,
    ...this.next,
  ];
  this.current = this.previous[this.previous.length - steps];
  this.previous = this.previous.slice(0, this.previous.length - steps);

  return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (!this.next.length) return this.current;

  if (this.next.length <= steps) {
    this.previous = [...this.previous, this.current, ...this.next.slice(0, -1)];
    this.current = this.next[this.next.length - 1];
    this.next = [];

    return this.current;
  }

  this.previous = [
    ...this.previous,
    this.current,
    ...this.next.slice(0, steps - 1),
  ];
  this.current = this.next[steps - 1];
  this.next = this.next.slice(steps);

  return this.current;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
