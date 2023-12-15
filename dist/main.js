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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/balloon */ \"./src/scripts/balloon.js\");\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const screen = document.getElementById(\"gameScreen\");\n  // const screenCtx = screen.getContext(\"2d\");\n  // screenCtx.fillStyle = \"blue\";\n  // screenCtx.fillRect(10, 10, 100, 100)\n  const gameScreen = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1000, 600);\n  gameScreen.interval();\n  gameScreen.animate();\n\n  // let b2 = new Balloon();   \n  // b2.draw(screenCtx);  \n  // b2.fly(screenCtx);\n  // window.b2 = b2;\n  // console.log(screenCtx)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ0Y7QUFFdENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTztFQUduRDtFQUNBO0VBQ0E7RUFDQTtFQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJSCx1REFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7RUFDeENHLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDckJELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7O0VBRXBCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFJRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxvb24gZnJvbSBcIi4vc2NyaXB0cy9iYWxsb29uXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiAge1xuXG5cbiAgLy8gY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU2NyZWVuXCIpO1xuICAvLyBjb25zdCBzY3JlZW5DdHggPSBzY3JlZW4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyBzY3JlZW5DdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gIC8vIHNjcmVlbkN0eC5maWxsUmVjdCgxMCwgMTAsIDEwMCwgMTAwKVxuICBjb25zdCBnYW1lU2NyZWVuID0gbmV3IENhbnZhcygxMDAwLCA2MDApO1xuICBnYW1lU2NyZWVuLmludGVydmFsKCk7XG4gIGdhbWVTY3JlZW4uYW5pbWF0ZSgpO1xuXG4gIC8vIGxldCBiMiA9IG5ldyBCYWxsb29uKCk7ICAgXG4gIC8vIGIyLmRyYXcoc2NyZWVuQ3R4KTsgIFxuICAvLyBiMi5mbHkoc2NyZWVuQ3R4KTtcbiAgLy8gd2luZG93LmIyID0gYjI7XG4gIC8vIGNvbnNvbGUubG9nKHNjcmVlbkN0eClcbiAgXG4gIFxuXG59KTsiXSwibmFtZXMiOlsiQmFsbG9vbiIsIkNhbnZhcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVTY3JlZW4iLCJpbnRlcnZhbCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/balloon.js":
/*!********************************!*\
  !*** ./src/scripts/balloon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Balloon {\n  constructor() {\n    this.x = Math.floor(25 + Math.random() * (975 - 25 + 1));\n    this.y = 630;\n    this.radius = 25;\n    this.startAngle = 0;\n    this.endAngle = 2 * Math.PI;\n    this.color = this.randomColor();\n    this.letter = this.randomLetter();\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);\n    ctx.fill();\n    ;\n    ctx.stroke();\n    ctx.closePath();\n  }\n  randomLetter() {\n    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    let index = Math.floor(Math.random() * 26);\n    return letters[index];\n  }\n  randomColor() {\n    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];\n    let index = Math.floor(Math.random() * 7);\n    return colors[index];\n  }\n}\n\n// let b1 = new Balloon();\n// console.log(b1.letter);\n// console.log(b1.color);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balloon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsb29uLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDWkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUcsQ0FBQztJQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLEdBQUdOLElBQUksQ0FBQ08sRUFBRTtJQUMzQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDbkM7RUFFQUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ04sS0FBSztJQUMxQkssR0FBRyxDQUFDRSxTQUFTLENBQUMsQ0FBQztJQUNmRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDSSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQztJQUM1RE8sR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUFDO0lBQ1hKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLENBQUM7SUFDWkwsR0FBRyxDQUFDTSxTQUFTLENBQUMsQ0FBQztFQUNqQjtFQUVBUixZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJUyxPQUFPLEdBQUcsNEJBQTRCO0lBQzFDLElBQUlDLEtBQUssR0FBR3JCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFDLE9BQU9rQixPQUFPLENBQUNDLEtBQUssQ0FBQztFQUN2QjtFQUVBWixXQUFXQSxDQUFBLEVBQUc7SUFDWixNQUFNYSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDL0UsSUFBSUQsS0FBSyxHQUFHckIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsT0FBT29CLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDO0VBRXRCO0FBT0Y7O0FBRUE7QUFDQTtBQUNBOztBQUdBLCtEQUFleEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGxvb25wb3BwZXIvLi9zcmMvc2NyaXB0cy9iYWxsb29uLmpzPzc0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbG9vbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoMjUgKyBNYXRoLnJhbmRvbSgpKig5NzUgLSAyNSArIDEpKTtcbiAgICB0aGlzLnkgPSA2MzA7XG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xuICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5yYW5kb21Db2xvcigpO1xuICAgIHRoaXMubGV0dGVyID0gdGhpcy5yYW5kb21MZXR0ZXIoKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCB0aGlzLmVuZEFuZ2xlLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpOzsgXG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJhbmRvbUxldHRlcigpIHtcbiAgICBsZXQgbGV0dGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpO1xuICAgIHJldHVybiBsZXR0ZXJzW2luZGV4XTtcbiAgfVxuXG4gIHJhbmRvbUNvbG9yKCkge1xuICAgIGNvbnN0IGNvbG9ycyA9IFsncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmx1ZScsICdpbmRpZ28nLCAndmlvbGV0J107XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgcmV0dXJuIGNvbG9yc1tpbmRleF07XG5cbiAgfVxuXG5cblxuXG5cbiAgXG59XG5cbi8vIGxldCBiMSA9IG5ldyBCYWxsb29uKCk7XG4vLyBjb25zb2xlLmxvZyhiMS5sZXR0ZXIpO1xuLy8gY29uc29sZS5sb2coYjEuY29sb3IpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb247XG4iXSwibmFtZXMiOlsiQmFsbG9vbiIsImNvbnN0cnVjdG9yIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImNvbG9yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXIiLCJyYW5kb21MZXR0ZXIiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInN0cm9rZSIsImNsb3NlUGF0aCIsImxldHRlcnMiLCJpbmRleCIsImNvbG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/balloon.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balloon */ \"./src/scripts/balloon.js\");\n\nclass Canvas {\n  constructor(width, height) {\n    this.element = document.createElement('canvas');\n    this.element.id = 'gameScreen';\n    document.body.appendChild(this.element);\n    this.ctx = this.element.getContext('2d');\n    this.element.width = width;\n    this.element.height = height;\n    this.balloons = [];\n  }\n  addBalloon() {\n    let balloon = new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.balloons.push(balloon);\n    balloon.draw(this.ctx);\n    return balloon;\n  }\n  animate() {\n    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ctx;\n    ctx.clearRect(0, 0, 1000, 600);\n    requestAnimationFrame(() => this.animate());\n    this.balloons.forEach(balloon => {\n      if (balloon.y > 25) {\n        balloon.y -= 1;\n        // console.log(balloon.y);\n        balloon.draw(ctx);\n      }\n    });\n  }\n  interval() {\n    this.addBalloon();\n    return setInterval(() => this.addBalloon(), 2000);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7QUFDaEMsTUFBTUMsTUFBTSxDQUFDO0VBQ1hDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0MsSUFBSSxDQUFDRixPQUFPLENBQUNHLEVBQUUsR0FBRyxZQUFZO0lBQzlCRixRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ00sR0FBRyxHQUFHLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ1AsT0FBTyxDQUFDRixLQUFLLEdBQUdBLEtBQUs7SUFDMUIsSUFBSSxDQUFDRSxPQUFPLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUM1QixJQUFJLENBQUNTLFFBQVEsR0FBRyxFQUFFO0VBQ3BCO0VBRUFDLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUlDLE9BQU8sR0FBRyxJQUFJZixnREFBTyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDYSxRQUFRLENBQUNHLElBQUksQ0FBQ0QsT0FBTyxDQUFDO0lBQzNCQSxPQUFPLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUNOLEdBQUcsQ0FBQztJQUN0QixPQUFPSSxPQUFPO0VBQ2hCO0VBRUFHLE9BQU9BLENBQUEsRUFBZ0I7SUFBQSxJQUFmUCxHQUFHLEdBQUFRLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQ1IsR0FBRztJQUNwQkEsR0FBRyxDQUFDVyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQzlCQyxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUNMLFFBQVEsQ0FBQ1csT0FBTyxDQUFFVCxPQUFPLElBQUs7TUFDakMsSUFBSUEsT0FBTyxDQUFDVSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2xCVixPQUFPLENBQUNVLENBQUMsSUFBSSxDQUFDO1FBQ2Q7UUFDQVYsT0FBTyxDQUFDRSxJQUFJLENBQUNOLEdBQUcsQ0FBQztNQUNuQjtJQUVGLENBQUMsQ0FBQztFQUVKO0VBRUFlLFFBQVFBLENBQUEsRUFBRTtJQUNSLElBQUksQ0FBQ1osVUFBVSxDQUFDLENBQUM7SUFDakIsT0FBT2EsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDYixVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNuRDtBQUNGO0FBTUEsK0RBQWViLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxvb24gZnJvbSBcIi4vYmFsbG9vblwiO1xuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuZWxlbWVudC5pZCA9ICdnYW1lU2NyZWVuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuYmFsbG9vbnMgPSBbXTtcbiAgfVxuXG4gIGFkZEJhbGxvb24oKSB7XG4gICAgbGV0IGJhbGxvb24gPSBuZXcgQmFsbG9vbigpO1xuICAgIHRoaXMuYmFsbG9vbnMucHVzaChiYWxsb29uKTtcbiAgICBiYWxsb29uLmRyYXcodGhpcy5jdHgpO1xuICAgIHJldHVybiBiYWxsb29uO1xuICB9XG5cbiAgYW5pbWF0ZShjdHggPSB0aGlzLmN0eCl7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA2MDApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XG4gICAgdGhpcy5iYWxsb29ucy5mb3JFYWNoKChiYWxsb29uKSA9PiB7XG4gICAgICBpZiAoYmFsbG9vbi55ID4gMjUpIHsgXG4gICAgICAgIGJhbGxvb24ueSAtPSAxO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYWxsb29uLnkpO1xuICAgICAgICBiYWxsb29uLmRyYXcoY3R4KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIFxuICB9XG5cbiAgaW50ZXJ2YWwoKXtcbiAgICB0aGlzLmFkZEJhbGxvb24oKTtcbiAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5hZGRCYWxsb29uKCksIDIwMDApO1xuICB9XG59XG5cblxuICBcblxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7Il0sIm5hbWVzIjpbIkJhbGxvb24iLCJDYW52YXMiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhbGxvb25zIiwiYWRkQmFsbG9vbiIsImJhbGxvb24iLCJwdXNoIiwiZHJhdyIsImFuaW1hdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb3JFYWNoIiwieSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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