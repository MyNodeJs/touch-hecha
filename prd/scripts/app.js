/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;


	var str=__webpack_require__(3);
	var footer=__webpack_require__(4);

	var common=__webpack_require__(5);

	common.body($('body'),str);
	common.append($('.container'),footer);
	common.switchPage(4);

	window.onload=function () {
	    var myScroll = new IScroll("#index-scroll",{
	        mouseWheel:true,
	        scrollbars:true,
	        interactiveScrollbars:true,
	});
	};

	var myScroll=new IScroll('#index-scroll');
	myScroll.on('scrollEnd',function () {
	    hidescrollbar=true;
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>        <ul>            <li class=\"head-logo\"><a href=\"index.html\"><img src=\"/touch-hecha/images/logo.png\"></a></li>            <li class=\"header-input\">                <img src=\"/touch-hecha/images/search.png\">                <input type=\"text\" value  placeholder=\"搜索\">            </li>            <li><a href=\"shoppingCart\" class=\"iconfont\">&#xe66c;</a></li>        </ul>    </header>    <section id=\"index-scroll\">        <div>            <img class=\"i2\" src=\"/touch-hecha/images/2.jpg\" alt=\"\">            <img class=\"i3\" src=\"/touch-hecha/images/3.png\" alt=\"\">            <video src=\"\"></video>            <img class=\"i4\" src=\"/touch-hecha/images/4.png\" alt=\"\">            <img class=\"i7\" src=\"/touch-hecha/images/7.jpg\" alt=\"\">            <img class=\"i8\" src=\"/touch-hecha/images/8.jpg\" alt=\"\">            <img class=\"i9\" src=\"/touch-hecha/images/9.jpg\" alt=\"\">            <img class=\"i10\" src=\"/touch-hecha/images/10.jpg\" alt=\"\">            <img class=\"i11\" src=\"/touch-hecha/images/11.jpg\" alt=\"\">            <img  class=\"i13\" src=\"/touch-hecha/images/13.jpg\" alt=\"\">            <img class=\"i14\" src=\"/touch-hecha/images/14.jpg\" alt=\"\">            <img class=\"i15\" src=\"/touch-hecha/images/15.jpg\" alt=\"\">            <img class=\"i16\" src=\"/touch-hecha/images/16.jpg\" alt=\"\">            <img class=\"i17\" src=\"/touch-hecha/images/17.jpg\" alt=\"\">            <img class=\"i17\" src=\"/touch-hecha/images/18.jpg\" alt=\"\">            <img class=\"i17\" src=\"/touch-hecha/images/19.jpg\" alt=\"\">        </div>    </section></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li  data-url=\"/touch-hecha/my.html\">            <i class=\"iconfont\">&#xe61a;</i>            <b>我的</b>        </li>        <li data-url=\"/touch-hecha/sortMenu.html\">            <i class=\"iconfont dd\" >&#xe602;</i>            <b>分类</b>        </li>        <li class=\"active\" data-url=\"/touch-hecha/index.html\">            <i class=\"iconfont\">&#xe613;</i>            <b>主页</b>        </li>        <li data-url=\"/touch-hecha/activity.html\">            <i class=\"iconfont\">&#xe61b;</i>            <b>活动</b>        </li>      <li data-url=\"/touch-hecha/machine.html\">            <i class=\"iconfont\">&#x353e;</i>            <b>茶饮机</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var changeLostarage = __webpack_require__(6);

	var common = {
	  renderBody: function ($el,str) {
	      $el.prepend(str);
	  },
	  body:function ($el, str) {
	      $el.prepend(str);
	  },
	  inner:function($el,str){
	    $el.html(str);
	  },
	  append:function($el,str){
	    $el.append(str);
	  },
	  renderHtml:function(str){
	    $('body').prepend(str);
	  },
	  switchPage: function (index) {
	    $('#footer ul li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  },
	  cartNumber:function(){
	    var arr2=changeLostarage(1, 'shoppingCart', 'json');
	    var len=arr2.length;
	    console.log(1);
	    console.log($);
	    console.log(document.querySelector('.headerRight h2'));
	    $('.headerRight h2').html(len);
	  }
	};

	module.exports = common;



/***/ },
/* 6 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/22.
	 */
	module.exports = changeLostarage;

	function changeLostarage(num, name, value) {
	    var argLength = arguments.length;
	    if (num == 1) {
	        if (argLength == 1) {
	            return localStorage;
	        }
	        if (argLength == 2) {
	            return localStorage.getItem(name);
	        }
	        if (argLength == 3) {
	            if (value == "json") {
	                var localStr = localStorage.getItem(name);
	                return JSON.parse(localStr);
	            } else if (value == "number") {
	                var localStr = localStorage.getItem(name);
	                return parseInt(localStr);
	            } else if (value == "string") {
	                return localStorage.getItem(name);
	            } else if (value == "date") {
	                var localStr = localStorage.getItem(name);
	                return new Date(localStr);
	            } else if (typeof value == "object") {
	                if (value instanceof Date) {
	                    str = value + "";
	                } else {
	                    var str = localStorage.getItem(name);
	                    var arr = [];
	                    if (str == null) {
	                        str = "";
	                    } else {
	                        var obj = JSON.parse(str);
	                        arr = obj;
	                    }
	                    arr.push(value);
	                    str = JSON.stringify(arr);
	                }
	                localStorage.setItem(name, str);
	            } else {
	                localStorage.setItem(name, value);
	            }
	        }
	    }
	    if (num == 0) {
	        if (argLength == 1) {
	            localStorage.clear()
	        } else {
	            for (var i = 1; i < argLength; i++) {
	                localStorage.removeItem(arguments[i]);
	            }
	        }
	    }
	}

	function changeLocalhost(num, name, value) {
	    var argLength = arguments.length;
	    if (num == 1) {
	        var type = typeof value;
	        if (type == "object") {
	            var str;
	            if (value instanceof Date) {
	                str = value + "&&" + "type:" + type;
	            }
	        }
	    }
	    if (num == 0) {
	        if (argLength == 1) {
	            localStorage.clear()
	        } else {
	            for (var i = 1; i < argLength; i++) {
	                localStorage.removeItem(arguments[i]);
	            }
	        }
	    }
	}



/***/ }
/******/ ]);
