webpackJsonp([39],{

/***/ 194:
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
var Storage = __webpack_require__(10);
var EmailApi = __webpack_require__(25);
var Common = __webpack_require__(3);
var Main = __webpack_require__(8);
__webpack_require__(195);
var ContactVm = /** @class */ (function () {
    function ContactVm() {
        this.isBusy = ko.observable(false);
        this.name = ko.observable(Storage.getAgentName() || '').extend({ required: true, maxLength: 50 });
        this.address = ko.observable('').extend({ maxLength: 100 });
        this.email = ko.observable(Storage.getUserName() || '').extend({ required: true, email: true });
        this.customerName = ko.observable('').extend({ required: false, maxLength: 100 });
        this.policyNumber = ko.observable('').extend({ required: false });
        this.policyAddress = ko.observable('').extend({ required: false, maxLength: 100 });
        this.policyZip = ko.observable('').extend({ required: false, maxLength: 10 });
        this.phone = ko.observable('').extend({ phoneUS: true });
        this.subject = ko.observable('').extend({ maxLength: 100 });
        this.body = ko.observable('').extend({ trimToMaxLength: 400 });
        this.contactType = ko.observable('');
        this.contactTypeIsValid = ko.observable(true);
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
        this.address(Storage.getAddress());
    }
    ContactVm.prototype.sendEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var latestPolicy, model, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.contactTypeIsValid(this.contactType() !== 'default');
                        if ((!this.contactTypeIsValid()) || (this.errors().length !== 0)) {
                            Common.showAlert(Common.AlertType.Warning, "Please review the form and try again.");
                            console.log(this.errors().length + " validation errors encountered");
                            this.errors.showAllMessages();
                            return [2 /*return*/];
                        }
                        if (!this.contactType().toString().startsWith("change")) return [3 /*break*/, 2];
                        if (this.policyNumber().length === 0) {
                            Common.showAlert(Common.AlertType.Warning, "Please enter a policy number and try again.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, EmailApi.verifyPolicyNumber(this.policyNumber())];
                    case 1:
                        if ((_a.sent()) === false) {
                            Common.showAlert(Common.AlertType.Warning, "Policy number could not be found, please review it and try again.");
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        if (!this.contactType().toString().startsWith("validate")) return [3 /*break*/, 5];
                        if (this.policyNumber().length === 0) {
                            Common.showAlert(Common.AlertType.Warning, "Please enter a policy number and try again.");
                            return [2 /*return*/];
                        }
                        if (this.policyZip().length < 5) {
                            Common.showAlert(Common.AlertType.Warning, "Please enter a valid zip code.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, EmailApi.verifyPolicyNumber(this.policyNumber())];
                    case 3:
                        if ((_a.sent()) === false) {
                            Common.showAlert(Common.AlertType.Warning, "Policy number could not be found, please review it and try again.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, EmailApi.latestPolicyNumber(this.policyNumber())];
                    case 4:
                        latestPolicy = _a.sent();
                        window.open("/api/ims/declarationpage/" + latestPolicy, "_blank");
                        _a.label = 5;
                    case 5:
                        model = {
                            Name: this.name(),
                            Address: this.address(),
                            EmailAddress: this.email(),
                            Phone: this.phone(),
                            Subject: this.subject(),
                            Body: this.body(),
                            ContactType: this.contactType(),
                            ZipCode: this.policyZip()
                        };
                        if (this.customerName)
                            model.CustomerName = this.customerName();
                        if (this.policyNumber)
                            model.PolicyNumber = this.policyNumber();
                        if (this.policyAddress)
                            model.PolicyAddress = this.policyAddress();
                        if (this.policyZip)
                            model.ZipCode = this.policyZip();
                        this.isBusy(true);
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, 9, 10]);
                        return [4 /*yield*/, EmailApi.sendContactUsEmail(model)];
                    case 7:
                        _a.sent();
                        Common.showAlert(Common.AlertType.Success, "Thank you for contacting us. Your message has been sent, and someone will be in touch!");
                        this.goHome();
                        return [3 /*break*/, 10];
                    case 8:
                        err_1 = _a.sent();
                        Common.handleGeneralError(err_1);
                        return [3 /*break*/, 10];
                    case 9:
                        this.isBusy(false);
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    //redirects user to home page after support email has been successfully sent. 
    ContactVm.prototype.goHome = function () {
        var loc = window.location;
        var url = loc.protocol + "//" + loc.host;
        setTimeout(function () {
            window.location.href = url;
        }, 3500);
    };
    return ContactVm;
}());
exports.ContactVm = ContactVm;
function init() {
    var vm = new ContactVm();
    ko.applyBindings(vm, Common.wrapper);
    Main.init();
}
exports.init = init;
init();


/***/ }),

/***/ 195:
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

},[194]);
//# sourceMappingURL=contact.bundle.js.map