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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/balloon */ \"./src/scripts/balloon.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const screen = document.getElementById(\"gameScreen\");\n  const screenCtx = screen.getContext(\"2d\");\n  // screenCtx.fillStyle = \"blue\";\n  // screenCtx.fillRect(10, 10, 100, 100)\n  let b2 = new _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  b2.draw(screenCtx);\n  console.log(screen);\n  console.log(b2.letter);\n  window.b2 = b2;\n  // console.log(screenCtx)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0M7QUFFeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTztFQUduRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUN6QztFQUNBO0VBQ0EsSUFBSUMsRUFBRSxHQUFHLElBQUlQLHdEQUFPLENBQUMsQ0FBQztFQUN0Qk8sRUFBRSxDQUFDQyxJQUFJLENBQUNILFNBQVMsQ0FBQztFQUdsQkksT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQztFQUNuQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNILEVBQUUsQ0FBQ0ksTUFBTSxDQUFDO0VBQ3RCQyxNQUFNLENBQUNMLEVBQUUsR0FBR0EsRUFBRTtFQUNkO0FBR0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsbG9vbnBvcHBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsb29uIGZyb20gXCIuL3NjcmlwdHMvYmFsbG9vblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gIHtcblxuXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVNjcmVlblwiKTtcbiAgY29uc3Qgc2NyZWVuQ3R4ID0gc2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcbiAgLy8gc2NyZWVuQ3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAvLyBzY3JlZW5DdHguZmlsbFJlY3QoMTAsIDEwLCAxMDAsIDEwMClcbiAgbGV0IGIyID0gbmV3IEJhbGxvb24oKTsgICBcbiAgYjIuZHJhdyhzY3JlZW5DdHgpOyAgXG5cbiAgXG4gIGNvbnNvbGUubG9nKHNjcmVlbik7XG4gIGNvbnNvbGUubG9nKGIyLmxldHRlcik7XG4gIHdpbmRvdy5iMiA9IGIyO1xuICAvLyBjb25zb2xlLmxvZyhzY3JlZW5DdHgpXG4gIFxuXG59KTsiXSwibmFtZXMiOlsiQmFsbG9vbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwic2NyZWVuQ3R4IiwiZ2V0Q29udGV4dCIsImIyIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJsZXR0ZXIiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/balloon.js":
/*!********************************!*\
  !*** ./src/scripts/balloon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Balloon {\n  constructor() {\n    this.pos = [100, 75];\n    this.vel = 1;\n    this.radius = 25;\n    this.startAngle = 0;\n    this.endAngle = 2 * Math.PI;\n    this.color = this.randomColor();\n    this.letter = this.randomLetter();\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, this.endAngle, true);\n    ctx.fill();\n    ctx.stroke();\n    ctx.closePath();\n    let balloonCTX = this.getContext('2d');\n  }\n  randomLetter() {\n    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    let index = Math.floor(Math.random() * 26);\n    return letters[index];\n  }\n  randomColor() {\n    // const letters = '0123456789ABCDEF';\n    // let color = '#';\n    // for (let i = 0; i < 6; i++) {\n    //   color += letters[Math.floor(Math.random() * 16)];\n    // }\n    // return color;\n    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];\n    let index = Math.floor(Math.random() * 7);\n    return colors[index];\n  }\n}\n\n// let b1 = new Balloon();\n// console.log(b1.letter);\n// console.log(b1.color);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balloon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsb29uLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDWkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUM7SUFDWixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0VBQ25DO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNSQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNOLEtBQUs7SUFDMUJLLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7SUFDZkYsR0FBRyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDZixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQztJQUN0RVEsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNWSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQ1pMLEdBQUcsQ0FBQ00sU0FBUyxDQUFDLENBQUM7SUFFZixJQUFJQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3hDO0VBRUFWLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUlXLE9BQU8sR0FBRyw0QkFBNEI7SUFDMUMsSUFBSUMsS0FBSyxHQUFHakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDbEIsSUFBSSxDQUFDbUIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUMsT0FBT0gsT0FBTyxDQUFDQyxLQUFLLENBQUM7RUFDdkI7RUFFQWQsV0FBV0EsQ0FBQSxFQUFHO0lBQ1o7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsTUFBTWlCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUMvRSxJQUFJSCxLQUFLLEdBQUdqQixJQUFJLENBQUNrQixLQUFLLENBQUNsQixJQUFJLENBQUNtQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxPQUFPQyxNQUFNLENBQUNILEtBQUssQ0FBQztFQUV0QjtBQUdGOztBQUVBO0FBQ0E7QUFDQTs7QUFHQSwrREFBZXhCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL3NjcmlwdHMvYmFsbG9vbi5qcz83NDllIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhbGxvb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBvcyA9IFsxMDAsIDc1XTtcbiAgICB0aGlzLnZlbCA9IDE7XG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xuICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5yYW5kb21Db2xvcigpO1xuICAgIHRoaXMubGV0dGVyID0gdGhpcy5yYW5kb21MZXR0ZXIoKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgdGhpcy5lbmRBbmdsZSwgdHJ1ZSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgbGV0IGJhbGxvb25DVFggPSB0aGlzLmdldENvbnRleHQoJzJkJylcbiAgfVxuXG4gIHJhbmRvbUxldHRlcigpIHtcbiAgICBsZXQgbGV0dGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpO1xuICAgIHJldHVybiBsZXR0ZXJzW2luZGV4XTtcbiAgfVxuXG4gIHJhbmRvbUNvbG9yKCkge1xuICAgIC8vIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgLy8gbGV0IGNvbG9yID0gJyMnO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgLy8gICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBjb2xvcjtcbiAgICBjb25zdCBjb2xvcnMgPSBbJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ2dyZWVuJywgJ2JsdWUnLCAnaW5kaWdvJywgJ3Zpb2xldCddO1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIHJldHVybiBjb2xvcnNbaW5kZXhdO1xuXG4gIH1cblxuICBcbn1cblxuLy8gbGV0IGIxID0gbmV3IEJhbGxvb24oKTtcbi8vIGNvbnNvbGUubG9nKGIxLmxldHRlcik7XG4vLyBjb25zb2xlLmxvZyhiMS5jb2xvcik7XG5cblxuZXhwb3J0IGRlZmF1bHQgQmFsbG9vbjtcbiJdLCJuYW1lcyI6WyJCYWxsb29uIiwiY29uc3RydWN0b3IiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJNYXRoIiwiUEkiLCJjb2xvciIsInJhbmRvbUNvbG9yIiwibGV0dGVyIiwicmFuZG9tTGV0dGVyIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJiYWxsb29uQ1RYIiwiZ2V0Q29udGV4dCIsImxldHRlcnMiLCJpbmRleCIsImZsb29yIiwicmFuZG9tIiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/balloon.js\n");

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