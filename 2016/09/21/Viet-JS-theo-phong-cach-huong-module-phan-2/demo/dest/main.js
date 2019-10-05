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

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _circle = __webpack_require__(1);

	var _circle2 = _interopRequireDefault(_circle);

	var _dog = __webpack_require__(3);

	var _dog2 = _interopRequireDefault(_dog);

	var _square = __webpack_require__(8);

	var _square2 = _interopRequireDefault(_square);

	var _blink = __webpack_require__(4);

	var _blink2 = _interopRequireDefault(_blink);

	var _spin = __webpack_require__(6);

	var _spin2 = _interopRequireDefault(_spin);

	var _bounce = __webpack_require__(7);

	var _bounce2 = _interopRequireDefault(_bounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);

	        this.actions = [_blink2.default, _spin2.default, _bounce2.default];
	        this.bodies = [];
	        this.render();
	    }

	    _createClass(App, [{
	        key: "render",
	        value: function render() {
	            this.container = document.getElementById("container");
	            var body1 = new _circle2.default(80, 150, 20);
	            var body2 = new _dog2.default(180, 150);
	            var body3 = new _square2.default(400, 150);
	            this.addBody(body1);
	            this.addBody(body2);
	            this.addBody(body3);
	            this.addAnimate();
	        }
	    }, {
	        key: "addAnimate",
	        value: function addAnimate() {
	            var _this = this;

	            this.bodies.forEach(function (body) {
	                var action = _this.getRandomAction();
	                body.setBehavior(action);
	            });

	            // setTimeout(this.addAnimate.bind(this), 1000*60);
	        }
	    }, {
	        key: "getRandomAction",
	        value: function getRandomAction() {
	            var num = Math.floor(Math.random() * this.actions.length);
	            var action = new this.actions[num]();
	            this.actions.splice(num, 1);
	            return action;
	        }
	    }, {
	        key: "addBody",
	        value: function addBody(body) {
	            this.container.appendChild(body.getShape());
	            this.bodies.push(body);
	        }
	    }]);

	    return App;
	}();

	window.app = new App();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _body = __webpack_require__(2);

	var _body2 = _interopRequireDefault(_body);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cicle = function (_Body) {
	    _inherits(Cicle, _Body);

	    function Cicle(x, y, r) {
	        _classCallCheck(this, Cicle);

	        var _this = _possibleConstructorReturn(this, (Cicle.__proto__ || Object.getPrototypeOf(Cicle)).call(this, x, y));

	        if (!r) r = 20;
	        _this.radius = r;
	        _this.render();
	        _this.defaultStyle();
	        return _this;
	    }

	    _createClass(Cicle, [{
	        key: "render",
	        value: function render() {
	            this.shape = document.createElement("div");
	            this.shape.style.width = 2 * this.radius + 'px';
	            this.shape.style.height = 2 * this.radius + 'px';
	            this.shape.style.borderRadius = '50%';

	            return this.shape;
	        }
	    }, {
	        key: "defaultStyle",
	        value: function defaultStyle() {
	            _get(Cicle.prototype.__proto__ || Object.getPrototypeOf(Cicle.prototype), "defaultStyle", this).call(this);
	            this.shape.style.backgroundColor = "red";
	        }
	    }]);

	    return Cicle;
	}(_body2.default);

	exports.default = Cicle;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Body = function () {
	    function Body(x, y) {
	        _classCallCheck(this, Body);

	        if (typeof x === 'number' || typeof y === 'number') {
	            this.x = x;
	            this.y = y;
	        }
	    }

	    _createClass(Body, [{
	        key: 'defaultStyle',
	        value: function defaultStyle() {
	            this.shape.setAttribute('class', 'body');
	            this.shape.style.position = 'absolute';
	            this.shape.style.top = '0';
	            this.shape.style.left = '0';
	            this.shape.style.bacgroundColor = '#000';
	            this.shape.style.color = '#fff';
	            this.moveTo(this.x, this.y);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.shape = document.createElement("div");
	            return this.shape;
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.shape.style.visibility = "";
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.shape.style.visibility = "hidden";
	        }
	    }, {
	        key: 'getShape',
	        value: function getShape() {
	            return this.shape;
	        }
	    }, {
	        key: 'moveTo',
	        value: function moveTo(x, y) {
	            if (typeof x !== 'number' || typeof y !== 'number') return;
	            this.shape.style.top = y + 'px';
	            this.shape.style.left = x + 'px';
	        }
	    }, {
	        key: 'setBehavior',
	        value: function setBehavior(behavior) {
	            this.behavior = behavior;
	            behavior.setBody(this);
	        }
	    }, {
	        key: 'addTo',
	        value: function addTo(container) {
	            if (!container || typeof container.appendChild !== 'function') return;
	            container.appendChild(this.getShape());
	        }
	    }]);

	    return Body;
	}();

	exports.default = Body;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _body = __webpack_require__(2);

	var _body2 = _interopRequireDefault(_body);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dog = function (_Body) {
	    _inherits(Dog, _Body);

	    function Dog(x, y) {
	        _classCallCheck(this, Dog);

	        var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, x, y));

	        _this.render();
	        _this.defaultStyle();
	        return _this;
	    }

	    _createClass(Dog, [{
	        key: 'render',
	        value: function render() {
	            _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'render', this).call(this);
	        }
	    }, {
	        key: 'defaultStyle',
	        value: function defaultStyle() {
	            _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'defaultStyle', this).call(this);
	            this.shape.style.backgroundImage = 'url("dog.png")';
	            this.shape.style.backgroundSize = "100% 100%";
	            this.shape.style.width = '150px';
	            this.shape.style.height = '80px';
	        }
	    }]);

	    return Dog;
	}(_body2.default);

	exports.default = Dog;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _action = __webpack_require__(5);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blink = function (_Action) {
	    _inherits(Blink, _Action);

	    function Blink(speed) {
	        _classCallCheck(this, Blink);

	        if (!speed) speed = 1000;
	        return _possibleConstructorReturn(this, (Blink.__proto__ || Object.getPrototypeOf(Blink)).call(this, speed));
	    }

	    _createClass(Blink, [{
	        key: 'init',
	        value: function init() {
	            this.lastTime = -this.loopTime;
	            this.state = -1;
	        }
	    }, {
	        key: 'animate',
	        value: function animate() {
	            window.setTimeout(this.nextFrane.bind(this), this.loopTime);
	        }
	    }, {
	        key: 'nextFrane',
	        value: function nextFrane() {
	            if (this.state === 1) {
	                this.body.show();
	            } else {
	                this.body.hide();
	            }
	            this.state = -this.state;
	            this.animate();
	        }
	    }]);

	    return Blink;
	}(_action2.default);

	exports.default = Blink;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Action = function () {
	    function Action(speed) {
	        _classCallCheck(this, Action);

	        if (!speed) speed = 20;
	        this.loopTime = speed;
	    }

	    _createClass(Action, [{
	        key: "setBody",
	        value: function setBody(body) {
	            this.body = body;
	            this.init();
	            this.animate();
	        }
	    }, {
	        key: "init",
	        value: function init() {}
	    }, {
	        key: "animate",
	        value: function animate() {}
	    }]);

	    return Action;
	}();

	exports.default = Action;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _action = __webpack_require__(5);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spin = function (_Action) {
	    _inherits(Spin, _Action);

	    function Spin(speed) {
	        _classCallCheck(this, Spin);

	        if (!speed) speed = 3;
	        return _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, speed));
	    }

	    _createClass(Spin, [{
	        key: 'init',
	        value: function init() {
	            this.angle = 0;
	            this.lastTime = null;
	        }
	    }, {
	        key: 'animate',
	        value: function animate() {
	            window.requestAnimationFrame(this.nextFrane.bind(this));
	        }
	    }, {
	        key: 'nextFrane',
	        value: function nextFrane(time) {
	            if (this.lastTime && time - this.lastTime < this.loopTime / 24) return;
	            this.lastTime = time;
	            if (this.angle >= 360) {
	                this.angle = 0;
	            } else {
	                this.angle += 15;
	            }
	            this.body.shape.style.transform = "rotate(" + this.angle + 'deg)';
	            this.animate();
	        }
	    }]);

	    return Spin;
	}(_action2.default);

	exports.default = Spin;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _action = __webpack_require__(5);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bounce = function (_Action) {
	    _inherits(Bounce, _Action);

	    function Bounce(speed) {
	        _classCallCheck(this, Bounce);

	        if (!speed) speed = 2000;
	        return _possibleConstructorReturn(this, (Bounce.__proto__ || Object.getPrototypeOf(Bounce)).call(this, speed));
	    }

	    _createClass(Bounce, [{
	        key: "init",
	        value: function init() {
	            this.lastTime = null;
	            this.state = -1;
	        }
	    }, {
	        key: "animate",
	        value: function animate() {
	            window.setTimeout(this.nextFrane.bind(this), 50);
	            window.setInterval(this.nextFrane.bind(this), this.loopTime + 50);
	        }
	    }, {
	        key: "nextFrane",
	        value: function nextFrane() {
	            this.up();
	            setTimeout(this.down.bind(this), this.loopTime / 2);
	        }
	    }, {
	        key: "up",
	        value: function up() {

	            this.body.shape.style.transition = "all ease-out 1s";
	            this.body.moveTo(this.body.x, this.body.y - 100);
	        }
	    }, {
	        key: "down",
	        value: function down() {

	            this.body.shape.style.transition = "all ease-in 1s";
	            this.body.moveTo(this.body.x, this.body.y + 100);
	        }
	    }]);

	    return Bounce;
	}(_action2.default);

	exports.default = Bounce;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _body = __webpack_require__(2);

	var _body2 = _interopRequireDefault(_body);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Square = function (_Body) {
	    _inherits(Square, _Body);

	    function Square(x, y, l) {
	        _classCallCheck(this, Square);

	        var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, x, y));

	        if (!l) {
	            l = 40;
	        }
	        _this.length = l;
	        _this.render();
	        _this.defaultStyle();
	        return _this;
	    }

	    _createClass(Square, [{
	        key: "render",
	        value: function render() {
	            this.shape = document.createElement("div");
	            this.shape.style.width = this.length + 'px';
	            this.shape.style.height = this.length + 'px';

	            return this.shape;
	        }
	    }, {
	        key: "defaultStyle",
	        value: function defaultStyle() {
	            _get(Square.prototype.__proto__ || Object.getPrototypeOf(Square.prototype), "defaultStyle", this).call(this);
	            this.shape.style.backgroundColor = "green";
	        }
	    }]);

	    return Square;
	}(_body2.default);

	exports.default = Square;

/***/ }
/******/ ]);