/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuToggleEvent = function menuToggleEvent(targetEl) {
  var questionEl = targetEl;

  var _loop = function _loop(i) {
    targetEl[i].addEventListener('click', function () {
      for (var j = 0; j < questionEl.length; j += 1) {
        questionEl[j].classList.remove('is-show');
      }

      var answerNum = 'a-' + questionEl[i].getAttribute('value').split('q-')[1];
      var answerEl = document.querySelectorAll(".table-box__a[value='".concat(answerNum, "']"))[0];

      if (answerEl.classList.contains('is-show')) {
        return answerEl.classList.remove('is-show');
      }

      return answerEl.classList.add('is-show');
    });
  };

  for (var i = 0; i < questionEl.length; i += 1) {
    _loop(i);
  }
};

var scrollEventCheck = function scrollEventCheck(targetTop) {
  return targetTop <= window.innerHeight;
};

var mobildMediaQuery = window.matchMedia("(max-width: 767px)");

var mobileScrollEvent = function mobileScrollEvent(mediaValue, targetEl) {
  if (!mediaValue.matches || !targetEl) {
    return false;
  }

  for (var i = 0; i < targetEl.length; i += 1) {
    var targetTop = targetEl[i].getBoundingClientRect().top;

    if (!scrollEventCheck(targetTop)) {
      targetEl[i].classList.add('is-scroll-animation');
    }
  }

  window.addEventListener("scroll", function () {
    for (var _i = 0; _i < targetEl.length; _i += 1) {
      var _targetTop = targetEl[_i].getBoundingClientRect().top;

      if (scrollEventCheck(_targetTop)) {
        targetEl[_i].classList.add('is-scroll-animation-show');
      } else {
        targetEl[_i].classList.remove('is-scroll-animation-show');
      }
    }
  });
  return true;
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('profileMoreBtn').addEventListener('click', function (v) {
    if (document.getElementById('profileEl').classList.contains('is-5-lines-only')) {
      document.getElementById('profileEl').classList.remove('is-5-lines-only');
      document.getElementById('profileMoreBtn').innerText = 'hide';
    } else {
      document.getElementById('profileEl').classList.add('is-5-lines-only');
      document.getElementById('profileMoreBtn').innerText = 'more';
    }
  });

  if (document.getElementsByClassName('table-box__q')) {
    menuToggleEvent(document.getElementsByClassName('table-box__q'));
  }

  if (document.querySelectorAll('.side-project-list > li')) {
    var _loop2 = function _loop2(i) {
      document.querySelectorAll('.side-project-list > li')[i].addEventListener('click', function () {
        for (var j = 0; j < document.querySelectorAll('.side-project-list > li').length; j += 1) {
          document.querySelectorAll('.side-project-list > li')[j].classList.remove('is-active');
        }

        document.querySelectorAll('.side-project-list > li')[i].classList.add('is-active');
      });
    };

    for (var i = 0; i < document.querySelectorAll('.side-project-list > li').length; i += 1) {
      _loop2(i);
    }
  }

  if (document.getElementById('sideProjectLinkText')) {
    document.getElementById('sideProjectLinkText').addEventListener('click', function () {
      document.querySelectorAll('.side-project-list > li')[0].click();
    });
  }

  mobileScrollEvent(mobildMediaQuery, document.querySelectorAll('li'));
});

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./src/event.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/soheekim/Desktop/바탕화면/study/resume/src/event.js */"./src/event.js");


/***/ })

/******/ });
//# sourceMappingURL=event.bundle.js.map?d3bfa8d1011ba4b07966