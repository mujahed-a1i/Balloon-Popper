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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/balloon */ \"./src/scripts/balloon.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const screen = document.getElementById(\"gameScreen\");\n  const screenCtx = screen.getContext(\"2d\");\n  // screenCtx.fillStyle = \"blue\";\n  // screenCtx.fillRect(10, 10, 100, 100)\n\n  let b2 = new _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  b2.draw(screenCtx);\n  b2.animate(screenCtx);\n  console.log(screen);\n  console.log(b2.letter);\n  // window.b2 = b2;\n  // console.log(screenCtx)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0M7QUFFeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTztFQUduRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUN6QztFQUNBOztFQUVBLElBQUlDLEVBQUUsR0FBRyxJQUFJUCx3REFBTyxDQUFDLENBQUM7RUFDdEJPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDSCxTQUFTLENBQUM7RUFDbEJFLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDSixTQUFTLENBQUM7RUFFckJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixNQUFNLENBQUM7RUFDbkJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixFQUFFLENBQUNLLE1BQU0sQ0FBQztFQUN0QjtFQUNBO0FBSUYsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsbG9vbnBvcHBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsb29uIGZyb20gXCIuL3NjcmlwdHMvYmFsbG9vblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gIHtcblxuXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbiAgY29uc3Qgc2NyZWVuQ3R4ID0gc2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcbiAgLy8gc2NyZWVuQ3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAvLyBzY3JlZW5DdHguZmlsbFJlY3QoMTAsIDEwLCAxMDAsIDEwMClcblxuICBsZXQgYjIgPSBuZXcgQmFsbG9vbigpOyAgIFxuICBiMi5kcmF3KHNjcmVlbkN0eCk7ICBcbiAgYjIuYW5pbWF0ZShzY3JlZW5DdHgpO1xuICBcbiAgY29uc29sZS5sb2coc2NyZWVuKTtcbiAgY29uc29sZS5sb2coYjIubGV0dGVyKTtcbiAgLy8gd2luZG93LmIyID0gYjI7XG4gIC8vIGNvbnNvbGUubG9nKHNjcmVlbkN0eClcbiAgXG4gIFxuXG59KTsiXSwibmFtZXMiOlsiQmFsbG9vbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwic2NyZWVuQ3R4IiwiZ2V0Q29udGV4dCIsImIyIiwiZHJhdyIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIiwibGV0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/balloon.js":
/*!********************************!*\
  !*** ./src/scripts/balloon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Balloon {\n  constructor() {\n    this.x = Math.floor(25 + Math.random() * (975 - 25 + 1));\n    this.y = 630;\n    this.vel = 1;\n    this.radius = 25;\n    this.startAngle = 0;\n    this.endAngle = 2 * Math.PI;\n    this.color = this.randomColor();\n    this.letter = this.randomLetter();\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);\n    ctx.fill();\n    ctx.font = \"5px serif\";\n    ctx.fillText(this.letter, 20, 20);\n    ctx.stroke();\n    ctx.closePath();\n  }\n  randomLetter() {\n    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    let index = Math.floor(Math.random() * 26);\n    return letters[index];\n  }\n  randomColor() {\n    // const letters = '0123456789ABCDEF';\n    // let color = '#';\n    // for (let i = 0; i < 6; i++) {\n    //   color += letters[Math.floor(Math.random() * 16)];\n    // }\n    // return color;\n    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];\n    let index = Math.floor(Math.random() * 7);\n    return colors[index];\n  }\n  animate(ctx) {\n    let that = this;\n    if (this.y === 25) {\n      this.clearCircle(ctx, this.x, this.y, this.radius);\n    }\n    if (this.y > 25) {\n      ctx.clearRect(0, 0, 1000, 600);\n      requestAnimationFrame(() => this.animate(ctx));\n      // requestAnimationFrame(this.animate.bind(this));\n      // let dx = Math.floor(Math.random() * (1 - -1) + -1);\n      // this.x += dx;\n\n      this.y -= 1;\n      // console.log(this.y);\n      this.draw(ctx);\n    }\n  }\n  clearCircle(context, x, y, radius) {\n    // context.save();\n    context.beginPath();\n    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);\n    context.clip();\n    context.clearRect(this.x - radius, this.y - radius, this.radius * 2, this.radius * 2);\n    // context.restore();\n  }\n\n  // pop(ctx) {\n  //   if (this.y === 25) {\n\n  //   }\n  // }\n}\n\n// let b1 = new Balloon();\n// console.log(b1.letter);\n// console.log(b1.color);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balloon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7TUFHQSxJQUFJLENBQUNYLENBQUMsSUFBSSxDQUFDO01BQ1g7TUFDQSxJQUFJLENBQUNVLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2hCO0VBRUY7RUFFQWMsV0FBV0EsQ0FBQ0csT0FBTyxFQUFDaEMsQ0FBQyxFQUFDSSxDQUFDLEVBQUNFLE1BQU0sRUFBRTtJQUM5QjtJQUNBMEIsT0FBTyxDQUFDZixTQUFTLENBQUMsQ0FBQztJQUNuQmUsT0FBTyxDQUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQ0ksQ0FBQyxFQUFFLElBQUksQ0FBQ0UsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNMLElBQUksQ0FBQ1EsRUFBRSxFQUFFLElBQUksQ0FBQztJQUM1RHVCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDZEQsT0FBTyxDQUFDRixTQUFTLENBQUMsSUFBSSxDQUFDOUIsQ0FBQyxHQUFDTSxNQUFNLEVBQUMsSUFBSSxDQUFDRixDQUFDLEdBQUNFLE1BQU0sRUFBQyxJQUFJLENBQUNBLE1BQU0sR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQSxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQzFFO0VBQ0Y7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0FBS0Y7O0FBRUE7QUFDQTtBQUNBOztBQUdBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsbG9vbnBvcHBlci8uL3NyYy9zY3JpcHRzL2JhbGxvb24uanM/NzQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsb29uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gTWF0aC5mbG9vcigyNSArIE1hdGgucmFuZG9tKCkqKDk3NSAtIDI1ICsgMSkpO1xuICAgIHRoaXMueSA9IDYzMDtcbiAgICB0aGlzLnZlbCA9IDE7XG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xuICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5yYW5kb21Db2xvcigpO1xuICAgIHRoaXMubGV0dGVyID0gdGhpcy5yYW5kb21MZXR0ZXIoKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCB0aGlzLmVuZEFuZ2xlLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5mb250ID0gXCI1cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQodGhpcy5sZXR0ZXIsIDIwLCAyMCk7IFxuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cblxuICB9XG5cbiAgcmFuZG9tTGV0dGVyKCkge1xuICAgIGxldCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNik7XG4gICAgcmV0dXJuIGxldHRlcnNbaW5kZXhdO1xuICB9XG5cbiAgcmFuZG9tQ29sb3IoKSB7XG4gICAgLy8gY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICAvLyBsZXQgY29sb3IgPSAnIyc7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAvLyAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIGNvbG9yO1xuICAgIGNvbnN0IGNvbG9ycyA9IFsncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmx1ZScsICdpbmRpZ28nLCAndmlvbGV0J107XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgcmV0dXJuIGNvbG9yc1tpbmRleF07XG5cbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLnkgPT09IDI1KSB7XG4gICAgICB0aGlzLmNsZWFyQ2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gMjUpIHsgXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDYwMCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKGN0eCkpO1xuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIC8vIGxldCBkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxIC0gLTEpICsgLTEpO1xuICAgICAgLy8gdGhpcy54ICs9IGR4O1xuXG4gICAgICBcbiAgICAgIHRoaXMueSAtPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy55KTtcbiAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGNsZWFyQ2lyY2xlKGNvbnRleHQseCx5LHJhZGl1cykge1xuICAgIC8vIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAgIGNvbnRleHQuY2xpcCgpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KHRoaXMueC1yYWRpdXMsdGhpcy55LXJhZGl1cyx0aGlzLnJhZGl1cyoyLHRoaXMucmFkaXVzKjIpO1xuICAgIC8vIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLy8gcG9wKGN0eCkge1xuICAvLyAgIGlmICh0aGlzLnkgPT09IDI1KSB7XG5cbiAgLy8gICB9XG4gIC8vIH1cblxuXG5cbiAgXG59XG5cbi8vIGxldCBiMSA9IG5ldyBCYWxsb29uKCk7XG4vLyBjb25zb2xlLmxvZyhiMS5sZXR0ZXIpO1xuLy8gY29uc29sZS5sb2coYjEuY29sb3IpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb247XG4iXSwibmFtZXMiOlsiQmFsbG9vbiIsImNvbnN0cnVjdG9yIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJ2ZWwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImNvbG9yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXIiLCJyYW5kb21MZXR0ZXIiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsImZvbnQiLCJmaWxsVGV4dCIsInN0cm9rZSIsImNsb3NlUGF0aCIsImxldHRlcnMiLCJpbmRleCIsImNvbG9ycyIsImFuaW1hdGUiLCJ0aGF0IiwiY2xlYXJDaXJjbGUiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250ZXh0IiwiY2xpcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/balloon.js\n");

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