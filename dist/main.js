/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Quicksand&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --column-1: #a2622d;\\r\\n  --column-2: #1b6161;\\r\\n  --column-3: #248224;\\r\\n  --column-4: #a22d22;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  background: url('https://wallpapercave.com/wp/wp2757874.gif'); /* https://cdn.wallpapersafari.com/93/26/Stkyof.gif */\\r\\n  background-size: cover;\\r\\n  background-position: 50% 60%;\\r\\n  background-attachment: fixed;\\r\\n  color: white;\\r\\n  font-family: Quicksand, sans-serif;\\r\\n  overflow-y: hidden;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  letter-spacing: 2px;\\r\\n  text-shadow: 2px 2px 5px black;\\r\\n}\\r\\n\\r\\n.main-title {\\r\\n  text-align: center;\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.drag-container {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.drag-list {\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n/* Columns */\\r\\n.drag-column {\\r\\n  flex: 1;\\r\\n  margin: 0 10px;\\r\\n  position: relative;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  border-radius: 10px;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.backlog-column .header,\\r\\n.backlog-column .solid,\\r\\n.backlog-column .solid:hover,\\r\\n.backlog-column .over {\\r\\n  background-color: var(--column-1);\\r\\n}\\r\\n\\r\\n.progress-column .header,\\r\\n.progress-column .solid,\\r\\n.progress-column .solid:hover,\\r\\n.progress-column .over {\\r\\n  background-color: var(--column-2);\\r\\n}\\r\\n\\r\\n.complete-column .header,\\r\\n.complete-column .solid,\\r\\n.complete-column .solid:hover,\\r\\n.complete-column .over {\\r\\n  background-color: var(--column-3);\\r\\n}\\r\\n\\r\\n.on-hold-column .header,\\r\\n.on-hold-column .solid,\\r\\n.on-hold-column .solid:hover,\\r\\n.on-hold-column .over {\\r\\n  background-color: var(--column-4);\\r\\n}\\r\\n\\r\\n/* Custom Scrollbar */\\r\\n.custom-scroll {\\r\\n  overflow-y: auto;\\r\\n  max-height: 52vh;\\r\\n}\\r\\n\\r\\n.custom-scroll::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);\\r\\n  border-radius: 10px;\\r\\n  background-color: rgba(255, 255, 255, 0.3);\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.custom-scroll::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.custom-scroll::-webkit-scrollbar-thumb {\\r\\n  border-radius: 10px;\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  border-radius: 10px;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.header h1 {\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n/* Drag and Drop */\\r\\n.over {\\r\\n  padding: 50px 10px;\\r\\n}\\r\\n\\r\\n.drag-item-list {\\r\\n  min-height: 50px;\\r\\n}\\r\\n\\r\\n.drag-item {\\r\\n  margin: 10px;\\r\\n  padding: 10px;\\r\\n  height: fit-content;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n  border-radius: 10px;\\r\\n  line-height: 1.5rem;\\r\\n  letter-spacing: 1px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.drag-item:focus {\\r\\n  outline: none;\\r\\n  background-color: white;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n/* Add Button Group */\\r\\n.add-btn-group {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.add-btn {\\r\\n  margin: 10px;\\r\\n  padding: 5px 10px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n  width: fit-content;\\r\\n  border-radius: 5px;\\r\\n  transition: all 0.3s ease-in;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.add-btn:hover {\\r\\n  background-color: rgba(255, 255, 255, 0.9);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.add-btn:active {\\r\\n  transform: scale(0.97);\\r\\n}\\r\\n\\r\\n.solid {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.solid:hover {\\r\\n  transition: unset;\\r\\n  filter: brightness(95%);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.plus-sign {\\r\\n  font-size: 1.5rem;\\r\\n  margin-right: 5px;\\r\\n  position: relative;\\r\\n  top: -3px;\\r\\n}\\r\\n\\r\\n.add-container {\\r\\n  margin: 10px;\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgba(255, 255, 255, 0.9);\\r\\n  min-height: 100px;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.add-item {\\r\\n  width: 100%;\\r\\n  min-height: 100px;\\r\\n  height: auto;\\r\\n  background-color: white;\\r\\n  border-radius: 10px;\\r\\n  margin: 5px auto;\\r\\n  resize: none;\\r\\n  color: black;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.add-item:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* Media Query: Laptop */\\r\\n@media screen and (max-width: 1800px) {\\r\\n  .main-title {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Media Query: Large Smartphone (Vertical) */\\r\\n@media screen and (max-width: 600px) {\\r\\n  body {\\r\\n    overflow-y: auto;\\r\\n  }\\r\\n\\r\\n  .drag-container {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .drag-list {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .drag-column {\\r\\n    margin: 10px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable no-unused-vars */\n\n\nconst addBtns = document.querySelectorAll('.add-btn:not(.solid)');\nconst saveItemBtns = document.querySelectorAll('.solid');\nconst addItemContainers = document.querySelectorAll('.add-container');\nconst addItems = document.querySelectorAll('.add-item');\n// Item Lists\nconst listColumns = document.querySelectorAll('.drag-item-list');\nconst backlogListEl = document.getElementById('backlog-list');\nconst progressListEl = document.getElementById('progress-list');\nconst completeListEl = document.getElementById('complete-list');\nconst onHoldListEl = document.getElementById('on-hold-list');\n\n// Items\nlet updatedOnLoad = false;\n\n// Initialize Arrays\nlet backlogListArray = [];\nlet progressListArray = [];\nlet completeListArray = [];\nlet onHoldListArray = [];\nlet listArrays = [];\n\n// Drag Functionality\nlet draggedItem;\nlet dragging = false;\nlet currentColumn;\n\n// Get Arrays from localStorage if available, set default values if not\nfunction getSavedColumns() {\n  if (localStorage.getItem('backlogItems')) {\n    backlogListArray = JSON.parse(localStorage.backlogItems);\n    progressListArray = JSON.parse(localStorage.progressItems);\n    completeListArray = JSON.parse(localStorage.completeItems);\n    onHoldListArray = JSON.parse(localStorage.onHoldItems);\n  } else {\n    backlogListArray = ['Release the course', 'Sit back and relax'];\n    progressListArray = ['Work on projects', 'Listen to music'];\n    completeListArray = ['Being cool', 'Getting stuff done'];\n    onHoldListArray = ['Being uncool'];\n  }\n}\n\n// Set localStorage Arrays\nfunction updateSavedColumns() {\n  listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray];\n  const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];\n  arrayNames.forEach((arrayName, index) => {\n    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));\n  });\n}\n\n// Filter Array to remove empty values\nfunction filterArray(array) {\n  const filteredArray = array.filter((item) => item !== null);\n  return filteredArray;\n}\n\n// Create DOM Elements for each list item\nfunction createItemEl(columnEl, column, item, index) {\n  // List Item\n  const listEl = document.createElement('li');\n  listEl.textContent = item;\n  listEl.id = index;\n  listEl.classList.add('drag-item');\n  listEl.draggable = true;\n  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);\n  listEl.setAttribute('ondragstart', 'drag(event)');\n  listEl.contentEditable = true;\n  // Append\n  columnEl.appendChild(listEl);\n}\n\n// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage\nfunction updateDOM() {\n  // Check localStorage once\n  if (!updatedOnLoad) {\n    getSavedColumns();\n  }\n  // Backlog Column\n  backlogListEl.textContent = '';\n  backlogListArray.forEach((backlogItem, index) => {\n    createItemEl(backlogListEl, 0, backlogItem, index);\n  });\n  backlogListArray = filterArray(backlogListArray);\n  // Progress Column\n  progressListEl.textContent = '';\n  progressListArray.forEach((progressItem, index) => {\n    createItemEl(progressListEl, 1, progressItem, index);\n  });\n  progressListArray = filterArray(progressListArray);\n  // Complete Column\n  completeListEl.textContent = '';\n  completeListArray.forEach((completeItem, index) => {\n    createItemEl(completeListEl, 2, completeItem, index);\n  });\n  completeListArray = filterArray(completeListArray);\n  // On Hold Column\n  onHoldListEl.textContent = '';\n  onHoldListArray.forEach((onHoldItem, index) => {\n    createItemEl(onHoldListEl, 3, onHoldItem, index);\n  });\n  onHoldListArray = filterArray(onHoldListArray);\n  // Don't run more than once, Update Local Storage\n  updatedOnLoad = true;\n  updateSavedColumns();\n}\n\n// Update Item - Delete if necessary, or update Array value\nfunction updateItem(id, column) {\n  const selectedArray = listArrays[column];\n  const selectedColumn = listColumns[column].children;\n  if (!dragging) {\n    if (!selectedColumn[id].textContent) {\n      delete selectedArray[id];\n    } else {\n      selectedArray[id] = selectedColumn[id].textContent;\n    }\n    updateDOM();\n  }\n}\n\n// Add to Column List, Reset Textbox\nfunction addToColumn(column) {\n  const itemText = addItems[column].textContent;\n  const selectedArray = listArrays[column];\n  selectedArray.push(itemText);\n  addItems[column].textContent = '';\n  updateDOM(column);\n}\n\n// Show Add Item Input Box\nfunction showInputBox(column) {\n  addBtns[column].style.visibility = 'hidden';\n  saveItemBtns[column].style.display = 'flex';\n  addItemContainers[column].style.display = 'flex';\n}\n\n// Hide Item Input Box\nfunction hideInputBox(column) {\n  addBtns[column].style.visibility = 'visible';\n  saveItemBtns[column].style.display = 'none';\n  addItemContainers[column].style.display = 'none';\n  addToColumn(column);\n}\n\n// Allows arrays to reflect Drag and Drop items\nfunction rebuildArrays() {\n  backlogListArray = [];\n  for (let i = 0; i < backlogListEl.children.length; i += 1) {\n    backlogListArray.push(backlogListEl.children[i].textContent);\n  }\n  progressListArray = [];\n  for (let i = 0; i < progressListEl.children.length; i += 1) {\n    progressListArray.push(progressListEl.children[i].textContent);\n  }\n  completeListArray = [];\n  for (let i = 0; i < completeListEl.children.length; i += 1) {\n    completeListArray.push(completeListEl.children[i].textContent);\n  }\n  onHoldListArray = [];\n  for (let i = 0; i < onHoldListEl.children.length; i += 1) {\n    onHoldListArray.push(onHoldListEl.children[i].textContent);\n  }\n  updateDOM();\n}\n\n// When Item Enters Column Area\nfunction dragEnter(column) {\n  listColumns[column].classList.add('over');\n  currentColumn = column;\n}\n\n// When Item Starts Dragging\nfunction drag(e) {\n  draggedItem = e.target;\n  dragging = true;\n}\n\n// Column Allows for Item to Drop\nfunction allowDrop(e) {\n  e.preventDefault();\n}\n\n// Dropping Item in Column\nfunction drop(e) {\n  e.preventDefault();\n  const parent = listColumns[currentColumn];\n  // Remove Background Color/Padding\n  listColumns.forEach((column) => {\n    column.classList.remove('over');\n  });\n  // Add item to Column\n  parent.appendChild(draggedItem);\n  // Dragging complete\n  dragging = false;\n  rebuildArrays();\n}\n\n// On Load\nupdateDOM();\n\n\n//# sourceURL=webpack://my-kanban/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;