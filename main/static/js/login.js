webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var Main = __webpack_require__(8);
var Storage = __webpack_require__(10);
var FormFields_1 = __webpack_require__(15);
var Login_1 = __webpack_require__(60);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Login = __webpack_require__(201);
var Util_1 = __webpack_require__(9);
__webpack_require__(29);
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        var query = Util_1.getQueryObject();
        _this.state = {
            errorMessage: '',
            errors: [],
            userId: new FormFields_1.Value('email address', query.userid || '', { required: true }),
            password: new FormFields_1.Value('password', query.password || '', { required: true }),
            rememberMe: false,
            initialized: false
        };
        if (query.userid && query.password) {
            Common.logout().then(function () { return _this.login(null, true); });
        }
        else if (Storage.hasAuth()) {
            Common.navigate('index.html');
        }
        return _this;
    }
    LoginPage.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { id: 'wrapper' },
            React.createElement(Login_1.default, null),
            React.createElement("div", null,
                React.createElement("section", { className: 'login-area' },
                    React.createElement("div", { className: 'container' },
                        React.createElement("div", { className: 'row' },
                            React.createElement("div", { className: 'col-xs-12' },
                                React.createElement("form", { className: 'form-login', autoComplete: 'off', onSubmit: function (e) { return _this.login(e); } },
                                    React.createElement("div", { className: 'login-holder', onChange: this.onChange.bind(this) },
                                        React.createElement("div", { className: 'form-group' },
                                            React.createElement("div", { className: 'input-holder' },
                                                React.createElement(FormFields_1.FieldWrapper, { id: 'login-AgentID', name: 'agentID', className: 'agent-id-bs', inputClassName: 'custom-form-control login-input-bs', labelClassName: 'input-label-bs', type: 'text', value: this.state.userId.value, invalidate: !this.state.userId.valid, placeholder: 'Agent ID', active: true, onChange: function () { }, label: 'Your Email' }),
                                                React.createElement("span", { className: 'error-label-bs' }, this.state.userId.error))),
                                        React.createElement("div", { className: 'form-group' },
                                            React.createElement("div", { className: 'input-holder' },
                                                React.createElement(FormFields_1.FieldWrapper, { id: 'login-Password', name: 'agentPassword', className: 'agent-password-bs', inputClassName: 'custom-form-control login-input-bs', labelClassName: 'input-label-bs', type: 'password', value: this.state.password.value, invalidate: !this.state.password.valid, placeholder: 'Password', active: true, onChange: function () { }, label: 'Password' }),
                                                React.createElement("span", { className: 'error-label-bs' }, this.state.password.error))),
                                        React.createElement("div", { className: 'form-group' },
                                            React.createElement("label", { onClick: this.onCheck.bind(this), className: 'add' },
                                                React.createElement("span", { className: "jcf-checkbox checkbox-field-md " + (this.state.rememberMe ? 'jcf-checked' : '') },
                                                    React.createElement("input", { id: 'remember_me', type: 'checkbox', value: 'remember-me', checked: this.state.rememberMe, style: { position: 'absolute', height: '100%', width: '100%', opacity: 0, margin: 0 } })),
                                                React.createElement("label", { className: 'input-label-bs' }, "Remember me"))),
                                        React.createElement("div", null,
                                            React.createElement("label", { id: 'unauthorizedErrorLabel', className: 'errorLabel' }, this.state.errorMessage)),
                                        React.createElement("div", { className: 'row' },
                                            React.createElement("div", { className: 'col-xs-12 col-sm-12 col-lg-3 col-md-3' },
                                                React.createElement("input", { type: 'submit', value: 'Submit', className: 'btn btn-default login-btn-bs', id: 'login-button' }))),
                                        React.createElement("div", { className: 'row' },
                                            React.createElement("div", { className: 'col-xs-12' },
                                                React.createElement("a", { href: '/Login/ForgottenPassword', className: 'forgotten-password-bs' }, "Forgot your password?")))))))))));
    };
    LoginPage.prototype.onChange = function (e) {
        var target = e.target, key;
        if (target.name === 'agentID')
            key = 'userId';
        else if (target.name === 'agentPassword')
            key = 'password';
        if (key) {
            var state = this.state;
            var value = state[key];
            value.set(e.target.value);
            this.setState(state);
        }
    };
    LoginPage.prototype.onCheck = function (e) {
        this.setState({
            rememberMe: !this.state.rememberMe
        });
        e.preventDefault();
    };
    LoginPage.prototype.login = function (e, isLoggedInFromQueryString) {
        if (isLoggedInFromQueryString === void 0) { isLoggedInFromQueryString = false; }
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (e)
                            e.preventDefault();
                        this.setState({
                            errorMessage: ''
                        });
                        this.state.userId.validate();
                        this.state.password.validate();
                        if (this.state.userId.error || this.state.password.error) {
                            console.error(this.state.errors.length + " validation errors encountered");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Login.login(this.state.userId.value, this.state.password.value, this.state.rememberMe, isLoggedInFromQueryString)];
                    case 1:
                        error = _a.sent();
                        this.setState({
                            initialized: true,
                            errorMessage: error ? error : ''
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginPage;
}(React.Component));
function init() {
    Main.init();
    var main = document.querySelector('#main');
    if (main)
        ReactDOM.render(React.createElement(LoginPage, null), main);
}
exports.init = init;
init();


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __webpack_require__(9);
var Storage = __webpack_require__(10);
var Constants = __webpack_require__(7);
var Common = __webpack_require__(3);
var Api = __webpack_require__(24);
function login(userId, password, rememberMe, isLoggedInFromQueryString) {
    if (isLoggedInFromQueryString === void 0) { isLoggedInFromQueryString = false; }
    return __awaiter(this, void 0, void 0, function () {
        var data, rememberMe_1, roles, returnUrl, reason_1, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    Storage.setRememberMe(rememberMe);
                    return [4 /*yield*/, Api.login({
                            UserName: userId,
                            Password: password,
                            IsLoggedInFromQueryString: isLoggedInFromQueryString,
                        })];
                case 1:
                    data = _a.sent();
                    if (data.token) {
                        rememberMe_1 = Storage.getRememberMe();
                        Storage.setAuth(data.token, rememberMe_1);
                        roles = data.roles;
                        Storage.setRoles(roles);
                        Storage.setLoginDetails(data.details);
                        returnUrl = decodeURIComponent(Util.getQueryVariable('returnUrl') || Constants.pages.Root);
                        Common.navigate(returnUrl);
                    }
                    else {
                        Common.handleError('Login', 'The login returned an unexpected result. Contact customersupport@swyfft.com for assistance.', "User Roles: " + Storage.getRoles().toString());
                        console.error(data);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    reason_1 = _a.sent();
                    error = Common.normalizeError(reason_1);
                    if (error.code === '401')
                        return [2 /*return*/, error.message];
                    Common.handleGeneralError(reason_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, ''];
            }
        });
    });
}
exports.login = login;


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = numeral;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ES6Promise;

/***/ })

},[200]);
//# sourceMappingURL=login.bundle.js.map