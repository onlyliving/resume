/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TopInfo */ "./src/components/TopInfo.js");
/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/WorkExperience */ "./src/components/WorkExperience.js");
/* harmony import */ var _components_TechnologyStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TechnologyStack */ "./src/components/TechnologyStack.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _components_SideProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SideProject */ "./src/components/SideProject.js");
/* harmony import */ var _components_Qna__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Qna */ "./src/components/Qna.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      infoLink: [{
        type: 'email',
        link: 'mailto:greensohee88@naver.com',
        desc: 'greensohee88@naver.com',
        display: 'on'
      }, {
        type: 'github',
        link: 'https://github.com/onlyliving/Side-Projects',
        desc: 'https://github.com/onlyliving',
        display: 'on'
      }, {
        type: 'notion',
        link: 'https://www.notion.so/14ef995b935e471abc9b3ab5be30196e',
        desc: '개발 블로그',
        display: 'on'
      }, {
        type: 'insta',
        link: 'https://www.instagram.com/soheegreen',
        desc: '인스타그램',
        display: 'on'
      }, {
        type: 'tistory',
        link: 'http://green-webdesigner.tistory.com/',
        desc: '티스토리',
        display: 'off'
      }],
      profile: [{
        title: '어쩌다 개발자?',
        content: "(strong)let 김소희 = 조경설계 + 웹디자이너 + 웹퍼블리싱 + 웹 프론트엔드 개발;(@)저는 제가 자신 있는 것 하나(item)를 교집합 삼아 여기까지 왔습니다.(@)조경설계에서 웹퍼블리셔로 직군을 변경할 때는 '디자인'이 자신 있어서 할 수 있었고, 웹퍼블리셔에서 웹 프론트엔드 개발로 갈 때에는 '웹 퍼블리싱'을 기반으로 발전할 수 있게 되었습니다."
      }, {
        title: '웹 프론트엔드 개발자로서의 만족도는?',
        content: "기획과 디자인 의도대로 구현하는 것이 재미있습니다. 그리고 기획단에서 생각하지 못한 디테일을 체크해서, 같이 의견을 맞대어 더 나은 결과물로 발전될 때 더욱 보람을 느낍니다. 노력하는 만큼, 코드와 성과물로 고스란히 보이기 때문에 더욱 잘 해내고 싶습니다."
      }],
      work: [{
        company: '(주)휴마트컴퍼니',
        position: '개발팀 - 프론트엔드 개발자',
        period: '2018.6 ~ 2019.12',
        link: 'https://trost.co.kr/',
        skill: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'Zeplin', 'GitLab', 'Trello', 'SourceTree', 'Postman', 'InteliJ', 'Visual Studio Code'],
        workDetail: [{
          head: 'PC 웹페이지 서비스 개발',
          content: ['입사 후 개발 시작 단계 : PC 웹사이트에 서비스를 도입하는 초기 단계 (모바일앱 서비스만 존재)', '기획에 따라 웹페이지 기능 개선 및 구축 (HTML 마크업 및 퍼블리싱, RESTful API 연결 등 기능 구현)', '깃랩(GitLab)으로 이슈 관리 (기획, 마케팅 등과 협의 시에는 트렐로(Trello)로 관리)']
        }, {
          head: '앱 내의 웹페이지 서비스 개발',
          content: ['개발팀 협의로 앱 내에 웹페이지 개발이 필요한 부분은 웹 포지션으로 개발 (개발 변경이 잦은 서비스 페이지 등)']
        }],
        effect: '데이터를 다루는 것을 알게 되었습니다. (서버 개발자와 API 요청과 응답에 대한 규칙 정하기, 언제 어떤 데이터를 불러와야 하는지 등) 웹앱에서 앱과의 통신하는 협업 과정도 기억에 크게 남습니다.'
      }, {
        company: '(주)룸앤스페이스',
        position: '개발팀 - 웹퍼블리셔',
        period: '2016.9 ~ 2018.5',
        link: 'https://roomnspace.co.kr/',
        skill: ['HTML5', 'CSS3', 'jQuery', 'Javascript', 'Adobe photoshop', 'Adobe Illustrator'],
        workDetail: [{
          head: '웹사이트와 모바일웹 구축을 위한 디자인 및 퍼블리싱 작업',
          content: ['입사 후 개발 시작 단계 : 서버 세팅만 되어있는 상태에서 처음부터 개발을 시작하는 단계', '웹 작업 비율(%) = 웹 디자인 작업 70% + 퍼블리싱 30%']
        }],
        effect: '웹디자인(UI, UX)에 대한 감각을 키웠습니다. 서버 개발자와 협업하면서 작업관리 시스템의 필요성을 느꼈습니다. (겨우 두 명이지만 같이 코드를 공유하면서 업데이트되어야 할 코드가 지워지는 등 코드 관리 문제가 있었습니다.) 웹 퍼블리셔로 일하면서 개발에 대한 갈증이 더욱 생겼습니다.'
      }, {
        company: '조경설계 이화원',
        position: '설계팀 - 디자이너',
        period: '2011.3 ~ 2015.10',
        link: 'http://www.ehwawon.kr/2016_ehwawon.pdf',
        skill: ['AutoCAD', 'SketchUp', 'Adobe photoshop', 'Adobe Illustrator'],
        workDetail: [{
          content: ['계획설계/기본설계/실시설계']
        }],
        effect: '세상을 보는 시야가 넓어졌습니다. 길을 걷다가도 바닥 포장재와 패턴, 배수 형태, 어떤 조경수를 심었는지, 옥외 계단 구조물 등 설계가 머릿 속에 대략 그려집니다. 공간과 구조물, 시설물의 디테일을 보면 그 공간에 얼마나 노력이 들어갔는지 알 수 있습니다.'
      }],
      TechnologyStack: ['HTML5 (5)', 'CSS3 (5)', 'JavaScript (4)', 'React.js (2)', 'Webpack (3)'],
      SideProject: [{
        head: '개인 사이드 프로젝트',
        period: '2020.03',
        shortText: '오픈 API를 이용한 배경이미지 검색 구현',
        linkList: [{
          title: '사이드프로젝트 오픈소스(github)',
          link: 'https://github.com/onlyliving/Side-Projects'
        }],
        desc: '오픈 API를 이용한 단기 프로젝트로 의미 있는 서비스가 무엇이 있을까 고민하였습니다. 그러다가 제가 웹디자이너로 일할 때 배경 이미지를 고르는 대에 시간을 많이 소비했던 기억이 떠올랐습니다. 웹 디자이너와 마케팅 업무에 도움이 될 것으로 예상합니다.'
      }, {
        head: '프론트엔드 개발 노트',
        period: '2019.01 ~',
        linkList: [{
          title: '개발 노트(notion)',
          link: 'https://www.notion.so/14ef995b935e471abc9b3ab5be30196e'
        }],
        desc: '그동안 개발 작업을 하면서 필요한 내용을 정리해 둔 개발 노트입니다. 경험한 것을 기록하고, 알아야 하는 모든 것을 기록하려고 합니다.'
      }, {
        head: '스터디 프로젝트\n(도서관리 시스템 만들기)',
        period: '2018.06',
        linkList: [{
          title: '도서관리 시스템 웹 디자인(zeplin)',
          link: 'https://zpl.io/scene/a3oRmkY'
        }],
        desc: '스터디 프로젝트 (도서 관리 시스템 만들기) : 개발 스터디에서 같이 프로젝트를 시작해서 어떠한 성과를 만들어보고 싶었습니다. 어떤 니즈가 있을까 얘기하다가 도서 관리 시스템을 만들어보자는 의견이 나와서 시작하게 되었습니다. 제가 디자인을 할 줄 알아서 제가 디자인을 담당했고 모두의 의견을 받아서 디자인 진행을 하였습니다. 프론트 개발은 다른 개발자분과 같이 하기로 했습니다. 비록 개발 진행 중에 멈춰버렸지만, 의미 있는 작업이었습니다.'
      }, {
        head: '가상선택자를 이용하여 간단한 UI 오픈소스 제공',
        period: '2018.01',
        linkList: [{
          title: 'CSS 가상요소로 버튼 만들기(codepen)',
          link: 'https://codepen.io/greensohee/pen/qpVVOb'
        }, {
          title: 'CSS 가상요소로 글머리 모양 만들기(codepen)',
          link: 'https://codepen.io/greensohee/pen/aEYvXo'
        }],
        desc: '개발 스터디 다니면서 여러 직군의 개발자와 소통하며 코드 리뷰를 했었습니다. 제가 코드 리뷰하는 중에 간단한 도형이나 화살표를 이미지를 쓰지 않고 가상선택자로 구현하는 것을 보고 관심 있어 하는 분들이 계셔서, 자주 쓰는 UI 관련 코드를 오픈소스로 제공하였습니다.'
      }],
      qna: [{
        question: '업무상 강점은 무엇인가요?',
        answer: '웹디자인 경험이 있어서 기획, 디자인팀과 업무 커뮤니케이션이 원만합니다. 필요하면 간단한 디자인은 제가 할 수도 있습니다.<br/>웹페이지 퍼블리싱 작업의 구현 속도가 빠릅니다.<br/>일에 대한 책임감이 있습니다. 당연한 말이지만, 정해진 시간 내에 맡은 업무를 잘 수행하려고 하고, 갑작스런 버그나 이슈가 생기면 적극적으로 나섭니다.'
      }, {
        question: '웹 개발에서 버그 이슈가 생겼을 경우 어떻게 대처하나요?',
        answer: "\uAC1C\uBC1C\uD300\uC5D0\uC11C \uC77C\uD558\uBA74\uC11C \uAC19\uC774 \uACF5\uC720\uD558\uACE0 \uC9C4\uD589\uD588\uB358 \uB300\uCC98 \uBC29\uC548 \uD750\uB984\uC785\uB2C8\uB2E4.<br/><br/>1. \uBC84\uADF8\uB97C \uAC10\uC9C0\uD588\uC744 \uB54C, \uBB34\uC870\uAC74 \uAC1C\uBC1C\uD300\uC5D0 \uBC84\uADF8\uC5D0 \uB300\uD55C \uBB38\uC81C \uD604\uC0C1\uC744 \uACF5\uC720\uD569\uB2C8\uB2E4.<br/>2. \uC0AC\uC6A9\uC790\uAC00 \uBD88\uD3B8\uD568\uC744 \uB290\uB084 \uC218 \uC788\uB294 \uD06C\uB9AC\uD2F0\uCEEC\uD55C \uBB38\uC81C\uC77C \uACBD\uC6B0, CS\uD300\uC5D0\uB3C4 \uB0B4\uC6A9\uC744 \uACF5\uC9C0\uD574\uC11C \uBE60\uB978 \uB300\uC751\uC744 \uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.<br/>3. \uD06C\uB9AC\uD2F0\uCEEC\uD55C \uC774\uC288\uBA74 \uC77C\uB2E8 \uC11C\uBE44\uC2A4\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC9C4\uD589\uB420 \uC218 \uC788\uB3C4\uB85D \uC870\uCC98\uB97C \uD569\uB2C8\uB2E4.<br/>4. \uBC84\uADF8\uC758 \uADFC\uBCF8\uC801\uC778 \uC6D0\uC778\uC744 \uCC3E\uC544\uC11C, \uBC14\uB85C \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uB294\uC9C0 \uC624\uB798 \uAC78\uB9AC\uB294\uC9C0 \uCCB4\uD06C\uD569\uB2C8\uB2E4.<br/>5. \uBC14\uB85C \uC218\uC815\uC774 \uAC00\uB2A5\uD55C \uBD80\uBD84\uC740 \uCD5C\uB300\uD55C \uBE60\uB974\uAC8C \uAC80\uD1A0\uD558\uC5EC \uD14C\uC2A4\uD2B8\uD55C \uD6C4\uC5D0 \uBC30\uD3EC\uD558\uACE0 \uB0B4\uC6A9\uC744 \uC54C\uB9BD\uB2C8\uB2E4.<br/>6. \uC624\uB798 \uAC78\uB9AC\uB294 \uC774\uC288\uB294 CS\uD300\uC5D0\uB3C4 \uC591\uD574\uB97C \uAD6C\uD558\uACE0 \uAC1C\uBC1C\uD300 \uB0B4\uBD80\uC5D0\uC11C \uD569\uC2EC\uD558\uC5EC \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uC5EC \uB300\uCC98\uD569\uB2C8\uB2E4.<br/>7. \uBC84\uADF8 \uC774\uC288\uAC00 \uD574\uACB0\uB418\uBA74 \uAE43\uB7A9 \uC774\uC288 \uBCF4\uB4DC\uC5D0 \uAE30\uB85D\uD558\uACE0, \uAC1C\uBC1C\uD300 \uB0B4\uC5D0\uC11C \uD68C\uACE0\uD558\uB294 \uC2DC\uAC04\uC744 \uAC16\uC2B5\uB2C8\uB2E4. (\uBB38\uC81C\uAC00 \uC65C \uBC1C\uC0DD\uD588\uACE0, \uC5B4\uB5BB\uAC8C \uB300\uC751\uD588\uC73C\uBA70 \uC55E\uC73C\uB85C \uC774 \uC774\uC288\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uC870\uCE58\uD558\uB294 \uAC83\uC774 \uC88B\uC744\uC9C0\uC5D0 \uB300\uD574\uC11C \uC194\uC9C1\uD558\uAC8C \uC598\uAE30\uD569\uB2C8\uB2E4.)<br/>8. \uC774\uD6C4\uC5D0 \uC13C\uD2B8\uB9AC(sentry)\uB97C \uB3C4\uC785\uD558\uC5EC, \uACE0\uAC1D\uC774 \uBB38\uC758\uD558\uAE30 \uC804\uC5D0 \uAC1C\uBC1C\uD300\uC5D0\uC11C \uBA3C\uC800 \uAC10\uC9C0\uD558\uACE0 \uBE60\uB974\uAC8C \uB300\uC751\uD560 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uC600\uC2B5\uB2C8\uB2E4."
      }, // {
      //     question : '어떤 회사를 원하나요?', 
      //     answer: `제가 원하는 회사는 회사와 개인이 같이 성장할 수 있는 곳입니다.<br/>세상을 더 이롭게 하는 서비스인지, 그 회사는 무엇을 중요하게 여기는지 중요합니다.<br/>그리고 회사에서 일이 아닌 사람 때문에 에너지를 소모하고 싶지 않습니다. 건강한 문화를 가진 회사는 조직 간에 싸울 일이 없었습니다. 제 경험상 그렇습니다. 그저 본인의 일만 잘하면 될 뿐입니다. 대신에 성과에 대한 평가는 엄격할 수밖에 없습니다. 물론, 어떤 실수를 한다고 해서 바로 내치진 않을 것입니다. 분명하게 문제를 드러내고 어떻게 해결할지 같이 의견을 나눠서 해결하면 됩니다.<br/>애사심을 생기게 만드는 회사와 같이하고 싶습니다.`
      // },
      {
        question: '일에 대한 가치는 어떤가요?',
        answer: "\uC77C\uC740 \uC0B6\uC5D0\uC11C \uB9CE\uC740 \uBE44\uC911\uC744 \uCC28\uC9C0\uD558\uAE30 \uB54C\uBB38\uC5D0, \uC77C \uD558\uB294 \uAC83\uC774 \uACE7 \uC0B6\uC774\uB77C\uACE0 \uC5EC\uAE41\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC77C\uC740 \uC0AC\uD68C\uC5D0\uC11C '\uB098'\uC758 \uAC00\uCE58\uB97C \uC2E4\uD604\uD560 \uC218 \uC788\uB294 \uC88B\uC740 \uB3C4\uAD6C\uB77C\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.<br/>\uAC1C\uC778 \uCDE8\uD5A5\uC774\uC9C0\uB9CC, \uBAB0\uC785\uD574\uC11C \uC77C \uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD558\uC5EC \uC74C\uC545\uB3C4 \uC798 \uB4E3\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC77C\uC744 \uC798 \uD574\uB098\uAC10\uC73C\uB85C\uC368 \uC800 \uC2A4\uC2A4\uB85C\uB3C4 \uAC19\uC774 \uC798 \uC131\uC7A5\uD574\uB098\uAC00\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.<br/>\uADF8\uB798\uC11C \uC800\uB294 \uC81C\uAC00 \uC880 \uB354 \uC798 \uD560 \uC218 \uC788\uB294, \uC7AC\uBBF8\uC788\uB294, \uC88B\uC740 \uC11C\uBE44\uC2A4\uB97C \uAC00\uC9C4, \uBC1C\uC804 \uAC00\uB2A5\uC131\uC774 \uC788\uB294 \uC77C\uC744 \uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4."
      }, // {
      //     question : '원하는 회사 위치는 어디인가요?',
      //     answer: `1. 판교 2. 서울(강남)`
      // },
      {
        question: '최종학력은 어떻게 되나요?',
        answer: "\uCCAD\uC8FC\uB300\uD559\uAD50 \uD658\uACBD\uC870\uACBD\uD559\uACFC(4\uB144\uC81C)\uB97C \uC878\uC5C5\uD588\uC2B5\uB2C8\uB2E4."
      }, {
        question: '조경설계에서 IT업종(웹 개발)으로 넘어오게 된 계기가 무엇인가요?',
        answer: "\uC870\uACBD\uC124\uACC4\uB3C4 \uBCF4\uB78C\uB418\uACE0 \uAC00\uCE58 \uC788\uB294 \uC9C1\uC5C5\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uD55C \uD68C\uC0AC\uC5D0\uC11C \uC0AC\uC6D0\uC5D0\uC11C \uACFC\uC7A5\uAE4C\uC9C0 \uB2EC\uC558\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uACC4\uC18D \uC774 \uC77C\uC744 \uD560 \uC218 \uC788\uACA0\uB0D0\uB294 \uC2A4\uC2A4\uB85C \uC9C8\uBB38\uC744 \uB358\uC84C\uC744 \uB54C \uC790\uC2E0\uC774 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uC77C\uC744 \uC624\uB798 \uD558\uACE0 \uB098\uC911\uC5D0\uB294 '\uB0B4'\uAC00 \uC124\uACC4\uB97C \uC798 \uC774\uB04C\uC5B4\uAC08 \uC218 \uC788\uC744\uAE4C, \uC9C0\uAE08\uB3C4 \uC7A6\uC740 \uC57C\uADFC\uC5D0 \uBAB8\uC774 \uB108\uBB34 \uD798\uB4E0\uB370 \uC55E\uC73C\uB85C\uB3C4 \uBC84\uD2F8 \uC218 \uC788\uC744\uAE4C\uC5D0 \uB300\uD55C \uC758\uBB38\uC774 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.\uC81C \uC704\uC758 \uC0C1\uC0AC\uB97C \uBCF4\uB354\uB77C\uB3C4 \uD06C\uAC8C \uB2E4\uB974\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC544\uB2C8 \uB354\uC6B1 \uD798\uB4E4\uC5B4 \uBCF4\uC600\uC2B5\uB2C8\uB2E4.<br/><br/>\uADF8\uB798\uC11C \uC880 \uB354 \uC800\uC5D0\uAC8C \uB9DE\uB294 \uC9C1\uC5C5\uC744 \uB2E4\uC2DC \uCC3E\uACE0\uC790 \uD558\uC600\uACE0, \uB514\uC790\uC778\uC744 \uACC4\uC18D \uB2E4\uB904\uC654\uC73C\uB2C8 \uB514\uC790\uC778\uACFC \uAD00\uB828\uB41C \uC77C\uC744 \uCC3E\uACE0 \uC2F6\uC5C8\uC2B5\uB2C8\uB2E4.<br/>\uC6F9 \uC0AC\uC774\uD2B8\uB294 \uCE5C\uC219\uD558\uACE0 \uB9E4\uC77C \uC811\uD569\uB2C8\uB2E4. \uADF8\uB798\uC11C \uD3C9\uC18C\uC5D0\uB3C4 \uB208\uAE38\uC744 \uB044\uB294 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uBC1C\uACAC\uD558\uBA74 '\uC990\uACA8\uCC3E\uAE30'\uC5D0 \uCD94\uAC00\uD558\uACE4 \uD588\uC2B5\uB2C8\uB2E4. \uC6F9\uC0AC\uC774\uD2B8\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC7AC\uBBF8\uC788\uC5B4 \uBCF4\uC5EC\uC11C \uC2DC\uC791\uD558\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4."
      }, {
        question: '퍼블리셔에서 프론트엔드 개발자가 된 계기는 무엇인가요?',
        answer: "\uC6F9 \uD37C\uBE14\uB9AC\uC154\uB85C \uC6F9\uC744 \uB2E4\uB8E8\uAE30 \uC2DC\uC791\uD558\uB2E4\uAC00 \uB514\uC790\uC778 \uC791\uC5C5\uBCF4\uB2E4 \uD504\uB860\uD2B8\uB2E8 \uAC1C\uBC1C\uD558\uB294 \uAC83\uC5D0 \uC695\uC2EC\uC774 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4. \uADF8 \uB2F9\uC2DC\uC5D0 \uC6F9 \uB514\uC790\uC778, HTML \uB9C8\uD06C\uC5C5, CSS\uAE4C\uC9C0\uB294 \uC644\uC804\uD788 \uC800\uC758 \uB2F4\uB2F9\uC774\uC5C8\uACE0, JS \uB3D9\uC801\uC778 \uBD80\uBD84\uC740 \uB370\uC774\uD130 \uC5F0\uACB0 \uC804\uAE4C\uC9C0 \uD560 \uC218 \uC788\uB294 \uC791\uC5C5\uC744 \uBAA8\uB450 \uD574\uC11C \uB118\uAE30\uB294 \uC2DD\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB2E4\uAC00 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC601\uC5ED\uC744 \uB354 \uB9CE\uC774, \uC798 \uB2E4\uB8E8\uACE0 \uC2F6\uC5B4\uC84C\uACE0, \uAC1C\uBC1C \uAD00\uB828\uD558\uC5EC \uC5EC\uB7EC \uC2A4\uD130\uB514(\uD504\uB860\uD2B8 \uBC31\uC5D4\uB4DC \uC2A4\uD130\uB514 \uB4F1)\uB97C \uB2E4\uB2C8\uB2E4\uAC00 \uC88B\uC740 \uC778\uC5F0\uC744 \uB9CC\uB098\uC11C \uC2A4\uD0C0\uD2B8\uC5C5 \uAC1C\uBC1C\uD300\uC5D0\uC11C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uB85C \uC77C\uC744 \uD558\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4"
      }, // {
      //     question : '희망연봉이 있나요?',
      //     answer: `희망연봉은 3600만원 입니다.<br/>연봉협상 가능합니다.`
      // },
      {
        question: '좋아하는 것과 취미활동은 무엇인가요?',
        answer: "\uC790\uC5F0\uACFC \uC6B4\uB3D9\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4.<br/>\uC88B\uC544\uD558\uB294 \uAC83\uC744 \uB098\uC5F4\uD558\uBA74 \uCD08\uB85D, \uC790\uC5F0, \uACF5\uC6D0, \uD074\uB77C\uC774\uBC0D \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4.<br/>\uC6B4\uB3D9\uC740 \uC608\uC804\uC5D0 \uC218\uC601\uACFC \uC790\uC804\uAC70 \uD0C0\uAE30\uB97C \uD588\uC5C8\uB294\uB370 3\uB144 \uC804\uBD80\uD130\uB294 \uACC4\uC18D \uD074\uB77C\uC774\uBC0D\uB9CC \uD588\uC2B5\uB2C8\uB2E4.<br/>\uD074\uB77C\uC774\uBC0D\uB3C4 \uB098\uC774\uAC00 \uB4E4\uC5B4\uC11C\uB3C4 \uAFB8\uC900\uD788 \uD560 \uC218 \uC788\uB294 \uC6B4\uB3D9\uC774\uB77C\uC11C \uB9E4\uB825\uC801\uC778 \uC6B4\uB3D9\uC774\uB77C \uC0DD\uAC01\uB418\uC5B4 \uC811\uD558\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        link: [{
          href: 'https://www.instagram.com/soheegreen',
          title: 'instagram'
        }]
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log("%c ==> App render", 'color:magenta');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "hide-text"
      }, "\uAE40\uC18C\uD76C\uC758 \uC774\uB825\uC11C\uC785\uB2C8\uB2E4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fixed-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fixed-box__scroll-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: this.state.infoLink
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TechnologyStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.TechnologyStack
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "contents-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.profile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: this.state.work
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideProject__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: this.state.SideProject
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Qna__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: this.state.qna
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "copyright"
      }, "\u24D2 sofie FE Resume"))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Profile = /*#__PURE__*/function (_Component) {
  _inherits(Profile, _Component);

  var _super = _createSuper(Profile);

  function Profile() {
    _classCallCheck(this, Profile);

    return _super.apply(this, arguments);
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      console.log("%c ==> Profile render", 'color:magenta');

      var contentTxtChange = function contentTxtChange(contentArr) {
        if (!contentArr) {
          return new Error('contentTxtChange error');
        }

        var num = 0;
        return contentArr.map(function (content) {
          num++;

          if (content.indexOf('(strong') !== -1) {
            content = content.replace('(strong)', '');
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
              key: num,
              className: "txt-sub-strong"
            }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: num
          }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
        });
      };

      var profiles = this.props.data;
      var num = 0;
      var profileListItems = profiles.map(function (profile) {
        num++;
        var contents = profile.content.split('(@)');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: num
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "txt-sub-title"
        }, profile.title), contentTxtChange(contents));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        id: "profileEl",
        className: "content-box content-box--profile is-5-lines-only"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "content-box__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-box__profile-txt"
      }, profileListItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        id: "profileMoreBtn",
        className: "content-box__profile-more-btn"
      }, "more"));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/Qna.js":
/*!*******************************!*\
  !*** ./src/components/Qna.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Qna = /*#__PURE__*/function (_Component) {
  _inherits(Qna, _Component);

  var _super = _createSuper(Qna);

  function Qna() {
    _classCallCheck(this, Qna);

    return _super.apply(this, arguments);
  }

  _createClass(Qna, [{
    key: "render",
    value: function render() {
      console.log("%c ==> Qna render", 'color:magenta');

      if (!this.props.data) {
        return new Error('Qna 데이터가 없음!');
      }

      var lists = this.props.data;
      var listNum = 0;
      var questionValue = '';
      var anwserValue = '';
      var listItems = lists.map(function (list) {
        listNum++;
        questionValue = "q-".concat(listNum);
        anwserValue = "a-".concat(listNum);
        var num = 0;
        console.log(list.answer);

        var answerStrChange = function answerStrChange() {
          var answer = list.answer;
          var answerArr = answer.split('<br/>');
          return answerArr.map(function (answer) {
            console.log(answer);
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              key: answer
            }, answer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          });
        };

        var addLink;

        if (list.link) {
          addLink = list.link.map(function (link) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              key: link.title,
              className: "point-link",
              href: link.href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, link.title);
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: list.question
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
          className: "table-box__q",
          value: questionValue
        }, list.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
          className: "table-box__a",
          value: anwserValue
        }, answerStrChange(), addLink));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "content-box content-box-qna"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "content-box__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Q&A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        className: "table-box"
      }, listItems));
    }
  }]);

  return Qna;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Qna);

/***/ }),

/***/ "./src/components/SideProject.js":
/*!***************************************!*\
  !*** ./src/components/SideProject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SideProject = /*#__PURE__*/function (_Component) {
  _inherits(SideProject, _Component);

  var _super = _createSuper(SideProject);

  function SideProject() {
    _classCallCheck(this, SideProject);

    return _super.apply(this, arguments);
  }

  _createClass(SideProject, [{
    key: "render",
    value: function render() {
      console.log("%c ==> SideProject render", 'color:magenta');

      if (!this.props.data) {
        return new Error('SideProject 데이터가 없음!');
      }

      var projects = this.props.data;
      var projectItems = projects.map(function (project) {
        var links = project.linkList.map(function (link) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: link.title
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: link.link,
            target: "_blank",
            rel: "noopener noreferrer"
          }, link.title));
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: project.head
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "side-project-list__head"
        }, project.head), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "side-project-list__date"
        }, project.period), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "side-project-list__txt"
        }, project.shortText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "side-project-list__link-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "hide-text"
        }, "\uAD00\uB828 \uB9C1\uD06C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "link-list"
        }, links)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, project.desc)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "content-box content-box--side-project"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        id: "sideProjectHead",
        className: "content-box__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Side Project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "side-project-list"
      }, projectItems));
    }
  }]);

  return SideProject;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SideProject);

/***/ }),

/***/ "./src/components/TechnologyStack.js":
/*!*******************************************!*\
  !*** ./src/components/TechnologyStack.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TechnologyStack = /*#__PURE__*/function (_Component) {
  _inherits(TechnologyStack, _Component);

  var _super = _createSuper(TechnologyStack);

  function TechnologyStack() {
    _classCallCheck(this, TechnologyStack);

    return _super.apply(this, arguments);
  }

  _createClass(TechnologyStack, [{
    key: "render",
    value: function render() {
      console.log("%c ==> TechnologyStack render", 'color:magenta');
      var skillArr = [];
      var skillName = '';
      var skillScore = '';
      var skillClassName = '';
      var mainSkills = this.props.data;
      var listItems = mainSkills.map(function (skill) {
        skillArr = skill.split(' ');
        skillName = skillArr[0];
        skillScore = skillArr[1].replace('(', '').replace(')', '');
        skillClassName = "is-graph is-graph-".concat(skillScore);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: skillName
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, skillName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: skillClassName
        }));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "content-box content-box--skills"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "content-box__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Technology Stack")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "content-box__skill-list"
      }, listItems));
    }
  }]);

  return TechnologyStack;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TechnologyStack);

/***/ }),

/***/ "./src/components/TopInfo.js":
/*!***********************************!*\
  !*** ./src/components/TopInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TopInfo = /*#__PURE__*/function (_Component) {
  _inherits(TopInfo, _Component);

  var _super = _createSuper(TopInfo);

  function TopInfo() {
    _classCallCheck(this, TopInfo);

    return _super.apply(this, arguments);
  }

  _createClass(TopInfo, [{
    key: "render",
    value: function render() {
      console.log("%c ==> TopInfo render", 'color:magenta');
      var targetId = '';
      var targetLink = '';
      var targetInnerText = '';
      var infoLinks = this.props.data;
      var listItems = infoLinks.map(function (linkItem) {
        if (linkItem.display === 'on') {
          targetId = 'info-list__' + linkItem.type;
          targetLink = linkItem.link;
          targetInnerText = linkItem.desc;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: linkItem.type,
            className: targetId
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: targetLink,
            target: "_blank",
            rel: "noopener noreferrer"
          }, targetInnerText));
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "content-box content-box--info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "header-top-name"
      }, "\uAE40\uC18C\uD76C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "header-top-name__sub"
      }, "Web Front-end Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "info-list"
      }, listItems));
    }
  }]);

  return TopInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopInfo);

/***/ }),

/***/ "./src/components/WorkExperience.js":
/*!******************************************!*\
  !*** ./src/components/WorkExperience.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var WorkExperience = /*#__PURE__*/function (_Component) {
  _inherits(WorkExperience, _Component);

  var _super = _createSuper(WorkExperience);

  function WorkExperience() {
    _classCallCheck(this, WorkExperience);

    return _super.apply(this, arguments);
  }

  _createClass(WorkExperience, [{
    key: "render",
    value: function render() {
      console.log("%c ==> WorkExperience render", 'color:magenta');

      if (!this.props.data) {
        return new Error('WorkExperience 데이터가 없음!');
      }
      /**
       * 
       * @param {*} datePeriodStr 
       * input ex) 2018.6 ~ 2019.12
       */


      var datePeriod = function datePeriod(datePeriodStr) {
        try {
          var dateArr = datePeriodStr.split(' ~ ');
          var startDate = new Date(dateArr[0]);
          var lastDate = new Date(dateArr[1]);
          var getYear = lastDate.getFullYear() - startDate.getFullYear();
          var getMonth = lastDate.getMonth() - startDate.getMonth();

          if (Math.sign(getMonth) === -1) {
            // 음수인 경우,
            getMonth = 12 + getMonth;
            getYear--;
          }

          return "".concat(getYear, "\uB144 ").concat(getMonth, "\uAC1C\uC6D4");
        } catch (_unused) {
          new Error('날짜 계산에서 오류를 감지함.');
        }
      };

      var works = this.props.data;

      var skillItems = function skillItems(skills) {
        return skills.map(function (skill) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: skill
          }, skill);
        });
      };

      var workDetailItems = function workDetailItems(workDetails) {
        var num = 0;
        return workDetails.map(function (workDetail) {
          num++;
          var listAddClassName = workDetail.head ? 'list-sub' : '';
          var contentsNum = 0;
          var contentItems = workDetail.content.map(function (content) {
            contentsNum++;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: contentsNum,
              className: listAddClassName
            }, content);
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: num,
            className: "experience-list__txt experience-box"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "experience-box__head"
          }, workDetail.head), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, contentItems));
        });
      };

      var workNum = 0;
      var workItem = works.map(function (work) {
        workNum++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: workNum
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "experience-list__name"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, work.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "point-link",
          href: work.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, work.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "experience-list__date"
        }, work.period, ", ", datePeriod(work.period)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "experience-list__item-box experience-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "experience-box__item-list"
        }, skillItems(work.skill))), workDetailItems(work.workDetail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "experience-list__inner-box"
        }, work.effect)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "content-box content-box--experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "content-box__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Work Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "experience-list"
      }, workItem));
    }
  }]);

  return WorkExperience;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WorkExperience);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('root')); // TODO : service worker
// CODELAB: Register service worker.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    var URLPATH = window.location.hostname === 'localhost' ? '/service-worker.js' : '/resume/service-worker.js'; // 저장소에 올릴 떄

    navigator.serviceWorker.register(URLPATH).then(function (reg) {
      console.log('%c Service worker registered.', 'color: sky', reg);
    }).catch(function (err) {
      console.log('%c Service worker registration failed : ', 'color: red', err);
    });
  });
}

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/soheekim/Desktop/바탕화면/study/resume/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map?8ac33dbd8866057faff5