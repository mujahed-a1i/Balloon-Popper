/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Balloon from \"./scripts/balloon\";\n// import Canvas from \"./scripts/canvas\";\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let game1 = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  game1.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ2tDO0FBR2xDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU87RUFFbkQsSUFBSUMsS0FBSyxHQUFHLElBQUlILHFEQUFJLENBQUMsQ0FBQztFQUN0QkcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBQztBQUVmLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGxvb25wb3BwZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQmFsbG9vbiBmcm9tIFwiLi9zY3JpcHRzL2JhbGxvb25cIjtcbi8vIGltcG9ydCBDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiAge1xuXG4gIGxldCBnYW1lMSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUxLnN0YXJ0KCk7XG5cbn0pOyJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZTEiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/balloon.js":
/*!********************************!*\
  !*** ./src/scripts/balloon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Balloon {\n  static dy = 1;\n  constructor() {\n    this.directions = [this.floatLeft, this.floatRight, this.floatUp];\n    this.x = Math.floor(25 + Math.random() * (975 - 25 + 1));\n    this.y = 627;\n    this.dx = 1;\n    this.dy = .6;\n    this.radius = 25;\n    this.startAngle = 0;\n    this.endAngle = 2 * Math.PI;\n    this.color = this.randomColor();\n    this.letter = this.randomLetter();\n    this.moveCounter = 0;\n    this.moveLimit = Math.floor(Math.random() * (140 - 40 + 1) + 40);\n    // this.direction = ['right-up', 'left-up'][Math.floor(Math.random()* 2)];\n    this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random() * 3)];\n  }\n  draw(ctx) {\n    // Draws the balloon with corresponding Letter\n\n    // Draws the balloon\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);\n    ctx.fill();\n    ;\n    ctx.stroke();\n    ctx.closePath();\n\n    // Draws the corresponding letter within the balloon\n    ctx.fillStyle = 'white'; // Set the color for the text\n    ctx.font = '25px Arial'; // Set the font style\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n    ctx.fillText(this.letter, this.x, this.y);\n  }\n  randomLetter() {\n    // Generates random balloon letters\n    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    let index = Math.floor(Math.random() * 26);\n    return letters[index];\n  }\n  randomColor() {\n    // Generates random balloon color\n    const colors = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];\n    let index = Math.floor(Math.random() * 6);\n    return colors[index];\n  }\n  floatRight() {\n    // Balloon direction to NE\n    this.x += this.dx;\n    this.y -= this.dy * Balloon.dy;\n  }\n  floatLeft() {\n    // Balloon direction to NW\n    this.x -= this.dx;\n    this.y -= this.dy * Balloon.dy;\n  }\n  floatUp() {\n    // Balloon direction to N\n    this.y -= this.dy * Balloon.dy;\n  }\n\n  // }\n  validPos() {\n    // checks to see if Balloon is within the canvas\n    if (this.x > this.radius && this.x < 975 && this.y > this.radius) {\n      return true;\n    }\n    return false;\n  }\n  move() {\n    // Implementing the balloons animation\n    this.moveCounter++;\n    if (!this.validPos()) {\n      // if Balloon is leaving the canvas, this will redirect\n      this.direction = this.directionExcluder();\n      // console.log('change');\n    }\n    if (this.moveCounter < this.moveLimit && this.validPos) {\n      // While within the canvas, the balloon will \n      // move in one direction X amount\n      this.direction();\n    } else {\n      // Once the balloon reaches the direction limit,\n      // the balloon will reset to a new direction\n      this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random() * 3)];\n      this.moveCounter = 0;\n      this.moveLimit = Math.floor(Math.random() * (130 - 30 + 1) + 30);\n    }\n  }\n  directionExcluder() {\n    // this method helps to exclude the direction in which the balloon\n    // was cause to leave the direction\n    let array = [];\n    this.directions.forEach(direction => {\n      if (direction !== this.direction) {\n        array.push(direction);\n      }\n    });\n    return array[Math.floor(Math.random() * 2)];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balloon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVWLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL3NjcmlwdHMvYmFsbG9vbi5qcz83NDllIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhbGxvb24ge1xuICBzdGF0aWMgZHkgPSAxO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBbdGhpcy5mbG9hdExlZnQsIHRoaXMuZmxvYXRSaWdodCwgdGhpcy5mbG9hdFVwXTtcbiAgICB0aGlzLnggPSBNYXRoLmZsb29yKDI1ICsgTWF0aC5yYW5kb20oKSooOTc1IC0gMjUgKyAxKSk7XG4gICAgdGhpcy55ID0gNjI3O1xuICAgIHRoaXMuZHggPSAxO1xuICAgIHRoaXMuZHkgPSAuNjtcbiAgICB0aGlzLnJhZGl1cyA9IDI1O1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IDA7XG4gICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLnJhbmRvbUNvbG9yKCk7XG4gICAgdGhpcy5sZXR0ZXIgPSB0aGlzLnJhbmRvbUxldHRlcigpO1xuICAgIHRoaXMubW92ZUNvdW50ZXIgPSAwO1xuICAgIHRoaXMubW92ZUxpbWl0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDE0MCAtIDQwICsgMSkgKyA0MCk7XG4gICAgLy8gdGhpcy5kaXJlY3Rpb24gPSBbJ3JpZ2h0LXVwJywgJ2xlZnQtdXAnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIDIpXTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFt0aGlzLmZsb2F0TGVmdCwgdGhpcy5mbG9hdFJpZ2h0LCB0aGlzLmZsb2F0VXBdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogMyldO1xuICB9XG5cbiAgZHJhdyhjdHgpIHsgLy8gRHJhd3MgdGhlIGJhbGxvb24gd2l0aCBjb3JyZXNwb25kaW5nIExldHRlclxuICAgIFxuICAgIC8vIERyYXdzIHRoZSBiYWxsb29uXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCB0aGlzLmVuZEFuZ2xlLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpOzsgXG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIC8vIERyYXdzIHRoZSBjb3JyZXNwb25kaW5nIGxldHRlciB3aXRoaW4gdGhlIGJhbGxvb25cbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJzsgLy8gU2V0IHRoZSBjb2xvciBmb3IgdGhlIHRleHRcbiAgICBjdHguZm9udCA9ICcyNXB4IEFyaWFsJzsgLy8gU2V0IHRoZSBmb250IHN0eWxlXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHguZmlsbFRleHQodGhpcy5sZXR0ZXIsIHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIHJhbmRvbUxldHRlcigpIHsgLy8gR2VuZXJhdGVzIHJhbmRvbSBiYWxsb29uIGxldHRlcnNcbiAgICBsZXQgbGV0dGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpO1xuICAgIHJldHVybiBsZXR0ZXJzW2luZGV4XTtcbiAgfVxuXG4gIHJhbmRvbUNvbG9yKCkgeyAvLyBHZW5lcmF0ZXMgcmFuZG9tIGJhbGxvb24gY29sb3JcbiAgICBjb25zdCBjb2xvcnMgPSBbJ3JlZCcsICdvcmFuZ2UnLCAnZ3JlZW4nLCAnYmx1ZScsICdpbmRpZ28nLCAndmlvbGV0J107XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgcmV0dXJuIGNvbG9yc1tpbmRleF07XG5cbiAgfVxuXG4gIGZsb2F0UmlnaHQoKSB7IC8vIEJhbGxvb24gZGlyZWN0aW9uIHRvIE5FXG4gICAgdGhpcy54Kz0gdGhpcy5keDtcbiAgICB0aGlzLnktPSB0aGlzLmR5ICogQmFsbG9vbi5keTtcbiAgfVxuXG4gIGZsb2F0TGVmdCgpeyAvLyBCYWxsb29uIGRpcmVjdGlvbiB0byBOV1xuICAgIHRoaXMueC09IHRoaXMuZHg7XG4gICAgdGhpcy55LT0gdGhpcy5keSAqIEJhbGxvb24uZHk7XG4gIH1cblxuICBmbG9hdFVwKCl7IC8vIEJhbGxvb24gZGlyZWN0aW9uIHRvIE5cbiAgICB0aGlzLnktPSB0aGlzLmR5ICogQmFsbG9vbi5keTtcbiAgfVxuXG5cblxuICBcbiAgLy8gfVxuICB2YWxpZFBvcygpIHsgLy8gY2hlY2tzIHRvIHNlZSBpZiBCYWxsb29uIGlzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgaWYgKCh0aGlzLnggPiB0aGlzLnJhZGl1cyAmJiB0aGlzLnggPCA5NzUpICYmICh0aGlzLnkgPiB0aGlzLnJhZGl1cykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbW92ZSgpeyAvLyBJbXBsZW1lbnRpbmcgdGhlIGJhbGxvb25zIGFuaW1hdGlvblxuICAgIHRoaXMubW92ZUNvdW50ZXIrKztcblxuICAgIGlmICghdGhpcy52YWxpZFBvcygpKSB7IFxuICAgICAgLy8gaWYgQmFsbG9vbiBpcyBsZWF2aW5nIHRoZSBjYW52YXMsIHRoaXMgd2lsbCByZWRpcmVjdFxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbkV4Y2x1ZGVyKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlJyk7XG4gICAgfVxuICAgIFxuICAgIGlmICgodGhpcy5tb3ZlQ291bnRlciA8IHRoaXMubW92ZUxpbWl0KSAmJiB0aGlzLnZhbGlkUG9zKSB7XG4gICAgICAvLyBXaGlsZSB3aXRoaW4gdGhlIGNhbnZhcywgdGhlIGJhbGxvb24gd2lsbCBcbiAgICAgIC8vIG1vdmUgaW4gb25lIGRpcmVjdGlvbiBYIGFtb3VudFxuICAgICAgdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9IGVsc2V7XG4gICAgICAvLyBPbmNlIHRoZSBiYWxsb29uIHJlYWNoZXMgdGhlIGRpcmVjdGlvbiBsaW1pdCxcbiAgICAgIC8vIHRoZSBiYWxsb29uIHdpbGwgcmVzZXQgdG8gYSBuZXcgZGlyZWN0aW9uXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFt0aGlzLmZsb2F0TGVmdCwgdGhpcy5mbG9hdFJpZ2h0LCB0aGlzLmZsb2F0VXBdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogMyldO1xuICAgICAgdGhpcy5tb3ZlQ291bnRlciA9IDA7XG4gICAgICB0aGlzLm1vdmVMaW1pdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMzAgLSAzMCArIDEpICsgMzApO1xuICAgIH1cbiAgfVxuICBcbiAgZGlyZWN0aW9uRXhjbHVkZXIoKSB7XG4gICAgLy8gdGhpcyBtZXRob2QgaGVscHMgdG8gZXhjbHVkZSB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBiYWxsb29uXG4gICAgLy8gd2FzIGNhdXNlIHRvIGxlYXZlIHRoZSBkaXJlY3Rpb25cbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICB0aGlzLmRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICBhcnJheS5wdXNoKGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQmFsbG9vbjtcbiJdLCJuYW1lcyI6WyJCYWxsb29uIiwiZHkiLCJjb25zdHJ1Y3RvciIsImRpcmVjdGlvbnMiLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwiZmxvYXRVcCIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwiZHgiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImNvbG9yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXIiLCJyYW5kb21MZXR0ZXIiLCJtb3ZlQ291bnRlciIsIm1vdmVMaW1pdCIsImRpcmVjdGlvbiIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwibGV0dGVycyIsImluZGV4IiwiY29sb3JzIiwidmFsaWRQb3MiLCJtb3ZlIiwiZGlyZWN0aW9uRXhjbHVkZXIiLCJhcnJheSIsImZvckVhY2giLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/balloon.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balloon */ \"./src/scripts/balloon.js\");\n\nclass Canvas {\n  constructor(width, height) {\n    this.element = document.createElement('canvas');\n    this.element.id = 'gameScreen';\n    document.body.appendChild(this.element);\n    this.ctx = this.element.getContext('2d');\n    this.element.width = width;\n    this.element.height = height;\n    this.balloons = [];\n    this.balloon = new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  addBalloon() {\n    let balloon = new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.balloons.push(balloon);\n    // balloon.draw(this.ctx);\n    return balloon;\n  }\n  animate() {\n    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ctx;\n    ctx.clearRect(0, 0, this.element.width, this.element.height);\n    requestAnimationFrame(() => this.animate());\n    this.balloons.forEach(balloon => {\n      if (balloon.y > this.balloon.radius) {\n        // balloon.y -= 1;\n        // if (balloon.x > 25 && balloon.x < 975)\n        balloon.move();\n        balloon.draw(ctx);\n        // console.log(balloon.validPos());\n      }\n    });\n  }\n\n  // interval(){\n  //   this.addBalloon();\n  //   return setInterval(() => this.addBalloon(), 2000);\n  // }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7QUFDaEMsTUFBTUMsTUFBTSxDQUFDO0VBRVhDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0MsSUFBSSxDQUFDRixPQUFPLENBQUNHLEVBQUUsR0FBRyxZQUFZO0lBQzlCRixRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ00sR0FBRyxHQUFHLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ1AsT0FBTyxDQUFDRixLQUFLLEdBQUdBLEtBQUs7SUFDMUIsSUFBSSxDQUFDRSxPQUFPLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUM1QixJQUFJLENBQUNTLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUlkLGdEQUFPLENBQUMsQ0FBQztFQUM5QjtFQUVBZSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJRCxPQUFPLEdBQUcsSUFBSWQsZ0RBQU8sQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ2EsUUFBUSxDQUFDRyxJQUFJLENBQUNGLE9BQU8sQ0FBQztJQUMzQjtJQUNBLE9BQU9BLE9BQU87RUFDaEI7RUFHQUcsT0FBT0EsQ0FBQSxFQUFnQjtJQUFBLElBQWZOLEdBQUcsR0FBQU8sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSSxDQUFDUCxHQUFHO0lBQ3BCQSxHQUFHLENBQUNVLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQ0UsT0FBTyxDQUFDRCxNQUFNLENBQUM7SUFDNURrQixxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ1UsT0FBTyxDQUFFVCxPQUFPLElBQUs7TUFDakMsSUFBSUEsT0FBTyxDQUFDVSxDQUFDLEdBQUcsSUFBSSxDQUFDVixPQUFPLENBQUNXLE1BQU0sRUFBRTtRQUNuQztRQUNBO1FBQ0FYLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLENBQUM7UUFDZFosT0FBTyxDQUFDYSxJQUFJLENBQUNoQixHQUFHLENBQUM7UUFDakI7TUFDRjtJQUNGLENBQUMsQ0FBQztFQUNKOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0FBQ0Y7QUFNQSwrREFBZVYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGxvb25wb3BwZXIvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbG9vbiBmcm9tIFwiLi9iYWxsb29uXCI7XG5jbGFzcyBDYW52YXMge1xuICBcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuZWxlbWVudC5pZCA9ICdnYW1lU2NyZWVuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7IFxuICAgIHRoaXMuY3R4ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5lbGVtZW50LndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmJhbGxvb25zID0gW107XG4gICAgdGhpcy5iYWxsb29uID0gbmV3IEJhbGxvb24oKTtcbiAgfVxuXG4gIGFkZEJhbGxvb24oKSB7XG4gICAgbGV0IGJhbGxvb24gPSBuZXcgQmFsbG9vbigpO1xuICAgIHRoaXMuYmFsbG9vbnMucHVzaChiYWxsb29uKTtcbiAgICAvLyBiYWxsb29uLmRyYXcodGhpcy5jdHgpO1xuICAgIHJldHVybiBiYWxsb29uO1xuICB9XG5cbiAgXG4gIGFuaW1hdGUoY3R4ID0gdGhpcy5jdHgpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5lbGVtZW50LndpZHRoLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIHRoaXMuYmFsbG9vbnMuZm9yRWFjaCgoYmFsbG9vbikgPT4ge1xuICAgICAgaWYgKGJhbGxvb24ueSA+IHRoaXMuYmFsbG9vbi5yYWRpdXMpIHsgXG4gICAgICAgIC8vIGJhbGxvb24ueSAtPSAxO1xuICAgICAgICAvLyBpZiAoYmFsbG9vbi54ID4gMjUgJiYgYmFsbG9vbi54IDwgOTc1KVxuICAgICAgICBiYWxsb29uLm1vdmUoKTtcbiAgICAgICAgYmFsbG9vbi5kcmF3KGN0eCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJhbGxvb24udmFsaWRQb3MoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBpbnRlcnZhbCgpe1xuICAvLyAgIHRoaXMuYWRkQmFsbG9vbigpO1xuICAvLyAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmFkZEJhbGxvb24oKSwgMjAwMCk7XG4gIC8vIH1cbn1cblxuXG4gIFxuXG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhczsiXSwibmFtZXMiOlsiQmFsbG9vbiIsIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFsbG9vbnMiLCJiYWxsb29uIiwiYWRkQmFsbG9vbiIsInB1c2giLCJhbmltYXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9yRWFjaCIsInkiLCJyYWRpdXMiLCJtb3ZlIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balloon */ \"./src/scripts/balloon.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/scripts/canvas.js\");\n\n\nclass Game {\n  constructor() {\n    Game.score = 10;\n    this.score = 0;\n    this.life = 3;\n    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1000, 600);\n    this.missed = 0;\n    this.popCounter = 0;\n    this.balloonCount = 5;\n    this.attempts = this.popCounter + this.missed;\n    addEventListener(\"keydown\", event => this.pop(event));\n  }\n  start() {\n    this.canvas.balloons.push(new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    this.animate();\n  }\n  animate() {\n    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.canvas.ctx;\n    this.increaseBalloonSpeed();\n    ctx.clearRect(0, 0, 1000, 600);\n    requestAnimationFrame(() => this.animate());\n    this.canvas.balloons.forEach((balloon, index) => {\n      if (balloon.y <= balloon.radius) {\n        this.missed++;\n        console.log(`current life: ${this.life}`);\n        this.loseLife();\n        this.canvas.balloons.splice(index, 1);\n      }\n      if (balloon.y > balloon.radius) {\n        balloon.move();\n        balloon.draw(ctx);\n      }\n    });\n    // this.pop();\n  }\n  loseLife() {\n    // Loses a life when the balloon reaches to the top of the game screen\n    // this.canvas.balloons.forEach((balloon, index) => {\n    //   if (balloon.y <= balloon.radius) {\n    //     let index = this.canvas.balloons.indexOf(balloon);\n    //     this.canvas.balloons.splice(index, 1);\n    //     this.life--;\n    //     this.canvas.addBalloon();\n    //     console.log(`current life: ${this.life}`);\n    //   }\n\n    //   if (this.life === 0) {\n    //     // emptys the array of balloons when game lives equal to 0\n    //     this.canvas.balloons = [];\n    //   }\n    // });\n    this.life--;\n    if (this.life === 0) {\n      // emptys the array of balloons when game lives equal to 0\n      this.canvas.balloons = [];\n      console.log(`Total Balloons: ${this.balloonCount}`);\n      console.log(`Balloons Popped: ${this.popCounter}`);\n      console.log(`Missed balloons: ${this.missed}`);\n      this.attempts = this.popCounter + this.missed;\n      let percentage = Math.floor(this.popCounter / this.attempts * 100);\n      console.log(`Total Attempts: ${this.attempts}`);\n      console.log(`Accuracy: ${percentage}%`);\n    }\n  }\n  pop(event) {\n    if (event.keyCode > 64 && event.keyCode < 91) {\n      // checking to see if the keypress is only alphabetical chars\n      let correctKeyPress = false;\n      for (let i = 0; i < this.canvas.balloons.length; i++) {\n        let balloon = this.canvas.balloons[i];\n        if (event.key.toUpperCase() === balloon.letter) {\n          // if the keypress matches the balloon's letter\n          // the balloon will be removed from the array\n          // Once 1 balloon is removed, another one is being added.\n          this.canvas.balloons.splice(i, 1);\n          this.score++;\n          console.log(`score: ${this.score}`);\n          this.canvas.addBalloon();\n          this.balloonCount++;\n          correctKeyPress = true;\n          // Break after the first matching balloon is removed\n          this.popCounter++;\n          break;\n        }\n      }\n      if (!correctKeyPress) {\n        this.score--;\n        this.missed++;\n        console.log(`score: ${this.score}`);\n      }\n    }\n  }\n  increaseBalloonSpeed() {\n    if (this.score > 0 && this.score % 10 === 0) {\n      _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dy *= 1.0025;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDckMsS0FBSyxFQUFFO1VBQ1owQixPQUFPLENBQUNDLEdBQUcsQ0FBRSxVQUFTLElBQUksQ0FBQzNCLEtBQU0sRUFBQyxDQUFDO1VBQ25DLElBQUksQ0FBQ0UsTUFBTSxDQUFDdUMsVUFBVSxDQUFDLENBQUM7VUFDeEIsSUFBSSxDQUFDcEMsWUFBWSxFQUFFO1VBQ25CK0IsZUFBZSxHQUFHLElBQUk7VUFDdEI7VUFDQSxJQUFJLENBQUNoQyxVQUFVLEVBQUU7VUFDakI7UUFDRjtNQUNGO01BRUEsSUFBSSxDQUFDZ0MsZUFBZSxFQUFFO1FBQ3BCLElBQUksQ0FBQ3BDLEtBQUssRUFBRTtRQUNaLElBQUksQ0FBQ0csTUFBTSxFQUFFO1FBQ2J1QixPQUFPLENBQUNDLEdBQUcsQ0FBRSxVQUFTLElBQUksQ0FBQzNCLEtBQU0sRUFBQyxDQUFDO01BQ3JDO0lBQ0Y7RUFDRjtFQUVBa0Isb0JBQW9CQSxDQUFBLEVBQUU7SUFDcEIsSUFBSSxJQUFJLENBQUNsQixLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7TUFDM0NKLGdEQUFPLENBQUM4QyxFQUFFLElBQUksTUFBTTtJQUN0QjtFQUNGO0FBSUY7QUFFQSwrREFBZTVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsb29uIGZyb20gXCIuL2JhbGxvb25cIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vY2FudmFzXCI7XG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgR2FtZS5zY29yZSA9IDEwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubGlmZSA9IDM7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzICgxMDAwLCA2MDApO1xuICAgIHRoaXMubWlzc2VkID0gMDtcbiAgICB0aGlzLnBvcENvdW50ZXIgPSAwO1xuICAgIHRoaXMuYmFsbG9vbkNvdW50ID0gNTtcbiAgICB0aGlzLmF0dGVtcHRzID0gdGhpcy5wb3BDb3VudGVyICsgdGhpcy5taXNzZWQ7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB0aGlzLnBvcChldmVudCkpO1xuICB9XG4gIFxuICBzdGFydCgpIHtcbiAgICB0aGlzLmNhbnZhcy5iYWxsb29ucy5wdXNoKG5ldyBCYWxsb29uKCksIG5ldyBCYWxsb29uKCksIG5ldyBCYWxsb29uKCksIG5ldyBCYWxsb29uKCksIG5ldyBCYWxsb29uKCkpO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHggPSB0aGlzLmNhbnZhcy5jdHgpe1xuICAgIHRoaXMuaW5jcmVhc2VCYWxsb29uU3BlZWQoKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDYwMCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICB0aGlzLmNhbnZhcy5iYWxsb29ucy5mb3JFYWNoKChiYWxsb29uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGJhbGxvb24ueSA8PSBiYWxsb29uLnJhZGl1cykge1xuICAgICAgICB0aGlzLm1pc3NlZCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBsaWZlOiAke3RoaXMubGlmZX1gKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5iYWxsb29ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGJhbGxvb24ueSA+IGJhbGxvb24ucmFkaXVzKSB7IFxuICAgICAgICBiYWxsb29uLm1vdmUoKTtcbiAgICAgICAgYmFsbG9vbi5kcmF3KGN0eCk7XG4gICAgICB9XG5cblxuICAgIH0pO1xuICAgIC8vIHRoaXMucG9wKCk7XG4gIH1cblxuICBsb3NlTGlmZSgpIHsgXG4gICAgLy8gTG9zZXMgYSBsaWZlIHdoZW4gdGhlIGJhbGxvb24gcmVhY2hlcyB0byB0aGUgdG9wIG9mIHRoZSBnYW1lIHNjcmVlblxuICAgIC8vIHRoaXMuY2FudmFzLmJhbGxvb25zLmZvckVhY2goKGJhbGxvb24sIGluZGV4KSA9PiB7XG4gICAgLy8gICBpZiAoYmFsbG9vbi55IDw9IGJhbGxvb24ucmFkaXVzKSB7XG4gICAgLy8gICAgIGxldCBpbmRleCA9IHRoaXMuY2FudmFzLmJhbGxvb25zLmluZGV4T2YoYmFsbG9vbik7XG4gICAgLy8gICAgIHRoaXMuY2FudmFzLmJhbGxvb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgLy8gICAgIHRoaXMubGlmZS0tO1xuICAgIC8vICAgICB0aGlzLmNhbnZhcy5hZGRCYWxsb29uKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGxpZmU6ICR7dGhpcy5saWZlfWApO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICBpZiAodGhpcy5saWZlID09PSAwKSB7XG4gICAgLy8gICAgIC8vIGVtcHR5cyB0aGUgYXJyYXkgb2YgYmFsbG9vbnMgd2hlbiBnYW1lIGxpdmVzIGVxdWFsIHRvIDBcbiAgICAvLyAgICAgdGhpcy5jYW52YXMuYmFsbG9vbnMgPSBbXTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICB0aGlzLmxpZmUtLTtcblxuICAgIGlmICh0aGlzLmxpZmUgPT09IDApIHtcbiAgICAgIC8vIGVtcHR5cyB0aGUgYXJyYXkgb2YgYmFsbG9vbnMgd2hlbiBnYW1lIGxpdmVzIGVxdWFsIHRvIDBcbiAgICAgIHRoaXMuY2FudmFzLmJhbGxvb25zID0gW107XG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgQmFsbG9vbnM6ICR7dGhpcy5iYWxsb29uQ291bnR9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgQmFsbG9vbnMgUG9wcGVkOiAke3RoaXMucG9wQ291bnRlcn1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBNaXNzZWQgYmFsbG9vbnM6ICR7dGhpcy5taXNzZWR9YCk7XG4gICAgICB0aGlzLmF0dGVtcHRzID0gdGhpcy5wb3BDb3VudGVyICsgdGhpcy5taXNzZWQ7XG4gICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGguZmxvb3IodGhpcy5wb3BDb3VudGVyL3RoaXMuYXR0ZW1wdHMgKiAxMDApO1xuXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgQXR0ZW1wdHM6ICR7dGhpcy5hdHRlbXB0c31gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBBY2N1cmFjeTogJHtwZXJjZW50YWdlfSVgKTtcbiAgICB9XG5cbiAgICBcbiAgfVxuXG5cbiAgcG9wKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPiA2NCAmJiBldmVudC5rZXlDb2RlIDwgOTEpIHtcbiAgICAgIC8vIGNoZWNraW5nIHRvIHNlZSBpZiB0aGUga2V5cHJlc3MgaXMgb25seSBhbHBoYWJldGljYWwgY2hhcnNcbiAgICAgIGxldCBjb3JyZWN0S2V5UHJlc3MgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMuYmFsbG9vbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhbGxvb24gPSB0aGlzLmNhbnZhcy5iYWxsb29uc1tpXTtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSBiYWxsb29uLmxldHRlcikge1xuICAgICAgICAgIC8vIGlmIHRoZSBrZXlwcmVzcyBtYXRjaGVzIHRoZSBiYWxsb29uJ3MgbGV0dGVyXG4gICAgICAgICAgLy8gdGhlIGJhbGxvb24gd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGFycmF5XG4gICAgICAgICAgLy8gT25jZSAxIGJhbGxvb24gaXMgcmVtb3ZlZCwgYW5vdGhlciBvbmUgaXMgYmVpbmcgYWRkZWQuXG4gICAgICAgICAgdGhpcy5jYW52YXMuYmFsbG9vbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc2NvcmU6ICR7dGhpcy5zY29yZX1gKTtcbiAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRCYWxsb29uKCk7XG4gICAgICAgICAgdGhpcy5iYWxsb29uQ291bnQrKztcbiAgICAgICAgICBjb3JyZWN0S2V5UHJlc3MgPSB0cnVlO1xuICAgICAgICAgIC8vIEJyZWFrIGFmdGVyIHRoZSBmaXJzdCBtYXRjaGluZyBiYWxsb29uIGlzIHJlbW92ZWRcbiAgICAgICAgICB0aGlzLnBvcENvdW50ZXIrKztcbiAgICAgICAgICBicmVhazsgXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIGlmICghY29ycmVjdEtleVByZXNzKSB7XG4gICAgICAgIHRoaXMuc2NvcmUtLTtcbiAgICAgICAgdGhpcy5taXNzZWQrKztcbiAgICAgICAgY29uc29sZS5sb2coYHNjb3JlOiAke3RoaXMuc2NvcmV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5jcmVhc2VCYWxsb29uU3BlZWQoKXtcbiAgICBpZiAodGhpcy5zY29yZSA+IDAgJiYgdGhpcy5zY29yZSAlIDEwID09PSAwKSB7XG4gICAgICBCYWxsb29uLmR5ICo9IDEuMDAyNTtcbiAgICB9XG4gIH1cblxuICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJCYWxsb29uIiwiQ2FudmFzIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwic2NvcmUiLCJsaWZlIiwiY2FudmFzIiwibWlzc2VkIiwicG9wQ291bnRlciIsImJhbGxvb25Db3VudCIsImF0dGVtcHRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicG9wIiwic3RhcnQiLCJiYWxsb29ucyIsInB1c2giLCJhbmltYXRlIiwiY3R4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaW5jcmVhc2VCYWxsb29uU3BlZWQiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb3JFYWNoIiwiYmFsbG9vbiIsImluZGV4IiwieSIsInJhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJsb3NlTGlmZSIsInNwbGljZSIsIm1vdmUiLCJkcmF3IiwicGVyY2VudGFnZSIsIk1hdGgiLCJmbG9vciIsImtleUNvZGUiLCJjb3JyZWN0S2V5UHJlc3MiLCJpIiwia2V5IiwidG9VcHBlckNhc2UiLCJsZXR0ZXIiLCJhZGRCYWxsb29uIiwiZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;