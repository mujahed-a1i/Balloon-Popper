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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/balloon */ \"./src/scripts/balloon.js\");\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const screen = document.getElementById(\"gameScreen\");\n  // const screenCtx = screen.getContext(\"2d\");\n  // screenCtx.fillStyle = \"blue\";\n  // screenCtx.fillRect(10, 10, 100, 100)\n  const gameScreen = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1000, 600);\n  gameScreen.addBalloon();\n  gameScreen.animate();\n\n  // let b2 = new Balloon();   \n  // b2.draw(screenCtx);  \n  // b2.fly(screenCtx);\n\n  console.log(screen);\n  console.log(b2.letter);\n  // window.b2 = b2;\n  // console.log(screenCtx)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ0Y7QUFFdENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTztFQUduRDtFQUNBO0VBQ0E7RUFDQTtFQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJSCx1REFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7RUFDeENHLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDdkJELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7O0VBRXBCO0VBQ0E7RUFDQTs7RUFFQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQztFQUNuQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO0VBQ3RCO0VBQ0E7QUFJRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxvb24gZnJvbSBcIi4vc2NyaXB0cy9iYWxsb29uXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiAge1xuXG5cbiAgLy8gY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU2NyZWVuXCIpO1xuICAvLyBjb25zdCBzY3JlZW5DdHggPSBzY3JlZW4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyBzY3JlZW5DdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gIC8vIHNjcmVlbkN0eC5maWxsUmVjdCgxMCwgMTAsIDEwMCwgMTAwKVxuICBjb25zdCBnYW1lU2NyZWVuID0gbmV3IENhbnZhcygxMDAwLCA2MDApO1xuICBnYW1lU2NyZWVuLmFkZEJhbGxvb24oKTtcbiAgZ2FtZVNjcmVlbi5hbmltYXRlKCk7XG5cbiAgLy8gbGV0IGIyID0gbmV3IEJhbGxvb24oKTsgICBcbiAgLy8gYjIuZHJhdyhzY3JlZW5DdHgpOyAgXG4gIC8vIGIyLmZseShzY3JlZW5DdHgpO1xuICBcbiAgY29uc29sZS5sb2coc2NyZWVuKTtcbiAgY29uc29sZS5sb2coYjIubGV0dGVyKTtcbiAgLy8gd2luZG93LmIyID0gYjI7XG4gIC8vIGNvbnNvbGUubG9nKHNjcmVlbkN0eClcbiAgXG4gIFxuXG59KTsiXSwibmFtZXMiOlsiQmFsbG9vbiIsIkNhbnZhcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVTY3JlZW4iLCJhZGRCYWxsb29uIiwiYW5pbWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzY3JlZW4iLCJiMiIsImxldHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/balloon.js":
/*!********************************!*\
  !*** ./src/scripts/balloon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Balloon {\n  constructor() {\n    this.x = Math.floor(25 + Math.random() * (975 - 25 + 1));\n    this.y = 630;\n    this.radius = 25;\n    this.startAngle = 0;\n    this.endAngle = 2 * Math.PI;\n    this.color = this.randomColor();\n    this.letter = this.randomLetter();\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);\n    ctx.fill();\n    ctx.font = \"5px serif\";\n    ctx.fillText(this.letter, 20, 20);\n    ctx.stroke();\n    ctx.closePath();\n  }\n  randomLetter() {\n    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    let index = Math.floor(Math.random() * 26);\n    return letters[index];\n  }\n  randomColor() {\n    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];\n    let index = Math.floor(Math.random() * 7);\n    return colors[index];\n  }\n  fly(ctx) {\n    let that = this;\n    if (this.y === 25) {\n      this.clearCircle(ctx, this.x, this.y, this.radius);\n    }\n    if (this.y > 25) {\n      ctx.clearRect(0, 0, 1000, 600);\n      requestAnimationFrame(() => this.fly(ctx));\n      // requestAnimationFrame(this.fly.bind(this));\n      // let dx = Math.floor(Math.random() * (1 - -1) + -1);\n      // this.x += dx;\n      this.y -= 1;\n      // console.log(this.y);\n      this.draw(ctx);\n    }\n  }\n\n  // clearCircle(context,x,y,radius) {\n  //   // context.save();\n  //   context.beginPath();\n  //   context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);\n  //   context.clip();\n  //   context.clearRect(this.x-radius,this.y-radius,this.radius*2,this.radius*2);\n  //   // context.restore();\n  // }\n\n  // pop(ctx) {\n  //   if (this.y === 25) {\n\n  //   }\n  // }\n}\n\n// let b1 = new Balloon();\n// console.log(b1.letter);\n// console.log(b1.color);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balloon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEdBQUcsQ0FBQztJQUNoQjtFQUVGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0FBS0Y7O0FBRUE7QUFDQTtBQUNBOztBQUdBLCtEQUFlaEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGxvb25wb3BwZXIvLi9zcmMvc2NyaXB0cy9iYWxsb29uLmpzPzc0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbG9vbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoMjUgKyBNYXRoLnJhbmRvbSgpKig5NzUgLSAyNSArIDEpKTtcbiAgICB0aGlzLnkgPSA2MzA7XG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xuICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5yYW5kb21Db2xvcigpO1xuICAgIHRoaXMubGV0dGVyID0gdGhpcy5yYW5kb21MZXR0ZXIoKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCB0aGlzLmVuZEFuZ2xlLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5mb250ID0gXCI1cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQodGhpcy5sZXR0ZXIsIDIwLCAyMCk7IFxuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICByYW5kb21MZXR0ZXIoKSB7XG4gICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KTtcbiAgICByZXR1cm4gbGV0dGVyc1tpbmRleF07XG4gIH1cblxuICByYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBbJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ2dyZWVuJywgJ2JsdWUnLCAnaW5kaWdvJywgJ3Zpb2xldCddO1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIHJldHVybiBjb2xvcnNbaW5kZXhdO1xuXG4gIH1cblxuICBmbHkoY3R4KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLnkgPT09IDI1KSB7XG4gICAgICB0aGlzLmNsZWFyQ2lyY2xlKGN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gMjUpIHsgXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDYwMCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5mbHkoY3R4KSk7XG4gICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mbHkuYmluZCh0aGlzKSk7XG4gICAgICAvLyBsZXQgZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSAtIC0xKSArIC0xKTtcbiAgICAgIC8vIHRoaXMueCArPSBkeDtcbiAgICAgIHRoaXMueSAtPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy55KTtcbiAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIC8vIGNsZWFyQ2lyY2xlKGNvbnRleHQseCx5LHJhZGl1cykge1xuICAvLyAgIC8vIGNvbnRleHQuc2F2ZSgpO1xuICAvLyAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIC8vICAgY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAvLyAgIGNvbnRleHQuY2xpcCgpO1xuICAvLyAgIGNvbnRleHQuY2xlYXJSZWN0KHRoaXMueC1yYWRpdXMsdGhpcy55LXJhZGl1cyx0aGlzLnJhZGl1cyoyLHRoaXMucmFkaXVzKjIpO1xuICAvLyAgIC8vIGNvbnRleHQucmVzdG9yZSgpO1xuICAvLyB9XG5cbiAgLy8gcG9wKGN0eCkge1xuICAvLyAgIGlmICh0aGlzLnkgPT09IDI1KSB7XG5cbiAgLy8gICB9XG4gIC8vIH1cblxuXG5cbiAgXG59XG5cbi8vIGxldCBiMSA9IG5ldyBCYWxsb29uKCk7XG4vLyBjb25zb2xlLmxvZyhiMS5sZXR0ZXIpO1xuLy8gY29uc29sZS5sb2coYjEuY29sb3IpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb247XG4iXSwibmFtZXMiOlsiQmFsbG9vbiIsImNvbnN0cnVjdG9yIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImNvbG9yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXIiLCJyYW5kb21MZXR0ZXIiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsImZvbnQiLCJmaWxsVGV4dCIsInN0cm9rZSIsImNsb3NlUGF0aCIsImxldHRlcnMiLCJpbmRleCIsImNvbG9ycyIsImZseSIsInRoYXQiLCJjbGVhckNpcmNsZSIsImNsZWFyUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/balloon.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balloon */ \"./src/scripts/balloon.js\");\n\nclass Canvas {\n  constructor(width, height) {\n    this.element = document.createElement('canvas');\n    this.element.id = 'gameScreen';\n    document.body.appendChild(this.element);\n    this.ctx = this.element.getContext('2d');\n    this.element.width = width;\n    this.element.height = height;\n    this.balloons = [];\n  }\n  addBalloon() {\n    let balloon = new _balloon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.balloons.push(balloon);\n    balloon.draw(this.ctx);\n    return balloon;\n  }\n  animate() {\n    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ctx;\n    this.balloons.forEach(balloon => {\n      if (balloon.y > 25) {\n        ctx.clearRect(0, 0, 1000, 600);\n        requestAnimationFrame(() => balloon.fly(ctx));\n        balloon.y -= 1;\n        // console.log(balloon.y);\n        balloon.draw(ctx);\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7QUFDaEMsTUFBTUMsTUFBTSxDQUFDO0VBQ1hDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0MsSUFBSSxDQUFDRixPQUFPLENBQUNHLEVBQUUsR0FBRyxZQUFZO0lBQzlCRixRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ00sR0FBRyxHQUFHLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ1AsT0FBTyxDQUFDRixLQUFLLEdBQUdBLEtBQUs7SUFDMUIsSUFBSSxDQUFDRSxPQUFPLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUM1QixJQUFJLENBQUNTLFFBQVEsR0FBRyxFQUFFO0VBQ3BCO0VBRUFDLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUlDLE9BQU8sR0FBRyxJQUFJZixnREFBTyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDYSxRQUFRLENBQUNHLElBQUksQ0FBQ0QsT0FBTyxDQUFDO0lBQzNCQSxPQUFPLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUNOLEdBQUcsQ0FBQztJQUN0QixPQUFPSSxPQUFPO0VBQ2hCO0VBRUFHLE9BQU9BLENBQUEsRUFBZ0I7SUFBQSxJQUFmUCxHQUFHLEdBQUFRLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQ1IsR0FBRztJQUNwQixJQUFJLENBQUNFLFFBQVEsQ0FBQ1MsT0FBTyxDQUFFUCxPQUFPLElBQUs7TUFDakMsSUFBSUEsT0FBTyxDQUFDUSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2xCWixHQUFHLENBQUNhLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDOUJDLHFCQUFxQixDQUFDLE1BQU1WLE9BQU8sQ0FBQ1csR0FBRyxDQUFDZixHQUFHLENBQUMsQ0FBQztRQUU3Q0ksT0FBTyxDQUFDUSxDQUFDLElBQUksQ0FBQztRQUNkO1FBQ0FSLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDTixHQUFHLENBQUM7TUFDbkI7SUFDRixDQUFDLENBQUM7RUFDSjtBQUlGO0FBRUEsK0RBQWVWLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxsb29ucG9wcGVyLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxvb24gZnJvbSBcIi4vYmFsbG9vblwiO1xuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuZWxlbWVudC5pZCA9ICdnYW1lU2NyZWVuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuYmFsbG9vbnMgPSBbXTtcbiAgfVxuXG4gIGFkZEJhbGxvb24oKSB7XG4gICAgbGV0IGJhbGxvb24gPSBuZXcgQmFsbG9vbigpO1xuICAgIHRoaXMuYmFsbG9vbnMucHVzaChiYWxsb29uKTtcbiAgICBiYWxsb29uLmRyYXcodGhpcy5jdHgpO1xuICAgIHJldHVybiBiYWxsb29uO1xuICB9XG5cbiAgYW5pbWF0ZShjdHggPSB0aGlzLmN0eCl7XG4gICAgdGhpcy5iYWxsb29ucy5mb3JFYWNoKChiYWxsb29uKSA9PiB7XG4gICAgICBpZiAoYmFsbG9vbi55ID4gMjUpIHsgXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgNjAwKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGJhbGxvb24uZmx5KGN0eCkpO1xuXG4gICAgICAgIGJhbGxvb24ueSAtPSAxO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYWxsb29uLnkpO1xuICAgICAgICBiYWxsb29uLmRyYXcoY3R4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhczsiXSwibmFtZXMiOlsiQmFsbG9vbiIsIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFsbG9vbnMiLCJhZGRCYWxsb29uIiwiYmFsbG9vbiIsInB1c2giLCJkcmF3IiwiYW5pbWF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZvckVhY2giLCJ5IiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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