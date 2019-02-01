webpackJsonp([43],{

/***/ 172:
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
var HOApi = __webpack_require__(12);
var Common = __webpack_require__(3);
var Constants = __webpack_require__(7);
var Element = __webpack_require__(75);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Main = __webpack_require__(8);
var AddressInfoVm = Common.AddressInfoVm;
var moment = __webpack_require__(4);
__webpack_require__(175);
function init() {
    Main.init();
    Storage.removeFromSession('coverage');
    setupAutoComplete('address');
    setupAutoComplete('qaddress');
    ko.applyBindings(exports.vm, Common.wrapper);
    //HG 12/6/16: hidden for now due to layout issues, will reinsert once initial styling is complete
    $('#footer').hide();
}
exports.init = init;
function setupAutoComplete(id) {
    var $target = $("#" + id);
    $target.autocomplete({
        showHeader: true,
        minLength: 4,
        delay: 400,
        source: function (request, response) {
            return Common.getAddressAutoCompleteLabels(request, response);
        },
        select: function (event, ui) {
            event.preventDefault();
            $target.val(ui.item.label);
            Storage.setAddress(ui.item.label);
            exports.vm.addressKey = ui.item.value;
            Storage.setAddressKey(exports.vm.addressKey);
        },
        focus: function (event, ui) {
            event.preventDefault();
            $target.val(ui.item.label);
            exports.vm.addressKey = ui.item.value;
            Storage.setAddressKey(exports.vm.addressKey);
        },
        change: function (event, ui) {
            if (ui.item != null) {
                if (ui.item.value !== "" || ui.item.value != null || ui.item.value !== "") {
                    exports.vm.addressKey = ui.item.value;
                }
                else {
                    exports.vm.addressKey = ui.item.value;
                }
                Storage.setAddressKey(exports.vm.addressKey);
            }
            else {
                exports.vm.addressKey = "";
            }
            if ($target.val() !== "" || $target.val() !== null) {
                $target.removeClass('alert-danger');
                $("#" + id + "ErrorLabel").css('display', 'none');
            }
        }
    });
}
var AboutVm = /** @class */ (function () {
    function AboutVm() {
        this.address = ko.observable('').extend({ required: { message: 'Please enter your address' } });
        this.addressKey = '';
        this.privacyVm = new PrivacyVm();
        this.quoteVm = new QuoteVm();
        this.requiredInfoVm = new RequiredInfoVm();
        this.isBusy = ko.observable(false);
        this.isUser = !Storage.hasAuth();
        this.addressInfoVm = new AddressInfoVm();
        this.secondaryInfoVm = new AddressInfoVm();
        this.lastError = "";
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
    }
    AboutVm.prototype.submit = function () {
        var _this = this;
        if (this.errors().length !== 0) {
            console.log(this.errors().length + " validation errors encountered");
            this.errors.showAllMessages();
            return;
        }
        if (Util.isEmpty(this.addressKey)) {
            var address_1 = this.address();
            Common.getHOPropertyModel(address_1).then(function (mdAddress) {
                if (!mdAddress) {
                    HOApi.logQuoteRequest({ Address: address_1, EventName: "Could Not Locate Address" });
                    throw "We could not locate that address. Please try again.";
                }
                _this.addressKey = mdAddress.AddressKey;
                var fullAddress = Common.toAddress(mdAddress);
                Storage.setAddress(fullAddress);
                Storage.setAddressKey(_this.addressKey);
                _this.createOrGetQuote();
            }).catch(function (err) {
                var normalized = Common.normalizeError(err);
                HOApi.logQuoteRequest({
                    Address: address_1,
                    EventName: "Error Looking Up Address",
                    Description: normalized.message
                });
                if (Storage.hasAuth()) {
                    Common.createAddress(_this.address(), _this.addressInfoVm, _this.secondaryInfoVm);
                }
                else {
                    Common.handleError("AddressError", err, "Address: " + address_1);
                }
            });
        }
        else {
            this.createOrGetQuote();
        }
    };
    /**
    * Create or get the quote from the API; and if the quote is new, show the required elements modal.
    */
    AboutVm.prototype.createOrGetQuote = function (livingSpace) {
        return __awaiter(this, void 0, void 0, function () {
            var quoteCreateRequest, quote, reason_1, error, previousError, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isBusy())
                            return [2 /*return*/];
                        this.isBusy(true);
                        quoteCreateRequest = {
                            AddressKey: this.addressKey,
                            Address: this.address(),
                            LivingSpace: livingSpace,
                            ReferringAgent: Storage.getReferringAgent()
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 10, 11]);
                        return [4 /*yield*/, HOApi.createOrGetQuote(quoteCreateRequest)];
                    case 2:
                        quote = _a.sent();
                        this.goToQuotePage(quote);
                        return [3 /*break*/, 11];
                    case 3:
                        reason_1 = _a.sent();
                        error = Common.normalizeError(reason_1);
                        previousError = this.lastError;
                        this.lastError = error.subCode;
                        if (!(error.code === Constants.ErrorCodes.QuoteNotFound)) return [3 /*break*/, 9];
                        // This means there was some weird address stuff going on, and we should prompt the agent to create a new address.
                        // We check to see if this was the same error as last time around, so that we don't just keep showing the same address modal.
                        // There may be a better way to do that than this, but this is quick and dirty. So far the only instance where it seems
                        // to happen is when Google Maps can't find the address' county, and when that happens, things are already pretty
                        // far off the rails.
                        if (error.subCode === Constants.ErrorCodes.PropertyInvalid && error.subCode !== previousError && Storage.hasAuth()) {
                            Common.createAddress(this.address(), this.addressInfoVm, this.secondaryInfoVm).then(function (pd) {
                                _this.address(pd.FullAddress);
                                _this.addressKey = pd.AddressKey;
                                _this.createOrGetQuote(pd.LivingSpace);
                            }).catch(function (err) {
                                Common.handleGeneralError(err);
                            });
                            return [2 /*return*/];
                        }
                        if (!(error.subCode === Constants.ErrorCodes.QuotePropertyDataInsufficient)) return [3 /*break*/, 8];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.requiredInfoVm.show()];
                    case 5:
                        _a.sent();
                        this.createOrGetQuote(exports.vm.requiredInfoVm.livingSpace());
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        Common.handleGeneralError(err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                    case 8:
                        // This means that that the property is not covered. Show "Important Message" instead of "An Error Occurred".
                        if (error.subCode === Constants.ErrorCodes.PropertyNotCovered) {
                            Common.showError(error.message, "", "Important Message");
                            return [2 /*return*/];
                        }
                        if (error.subCode === Constants.ErrorCodes.QuoteNotFound) {
                            Common.navigate(Constants.pages.GetQuote);
                            return [2 /*return*/];
                        }
                        _a.label = 9;
                    case 9:
                        Common.handleGeneralError(error);
                        return [3 /*break*/, 11];
                    case 10:
                        this.isBusy(false);
                        NProgress.done(true);
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AboutVm.prototype.handleAddressCreation = function (pd) {
        console.log("here5");
    };
    AboutVm.prototype.goToQuotePage = function (quote) {
        if (!quote.QuoteProperty)
            throw "Quote.QuoteProperty was not defined";
        Storage.setAddress(Common.toAddress(quote.QuoteProperty));
        Storage.setAddressKey(quote.AddressKey);
        Storage.setQuoteId(quote.QuoteId);
        Common.navigate(Constants.pages.Quote);
    };
    return AboutVm;
}());
exports.AboutVm = AboutVm;
var PrivacyVm = /** @class */ (function (_super) {
    __extends(PrivacyVm, _super);
    function PrivacyVm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivacyVm;
}(Common.ModalVm));
exports.PrivacyVm = PrivacyVm;
/**
 * The VM connected to the RequiredSliders modal.
 */
var QuoteVm = /** @class */ (function (_super) {
    __extends(QuoteVm, _super);
    function QuoteVm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueChange = function (name, value) {
            console.log("Element " + name + " set to value " + value);
            if (Util.matches(name, Constants.ElementNames.grade)) {
                _this.patchQuote();
            }
        };
        _this.disabled = ko.observable(false);
        _this.elementGroupVm = new Element.ElementGroupVm(_this);
        _this.isLoading = false;
        _this.isBusy = ko.observable(false);
        _this.annualPremium = ko.observable(0);
        _this.maxReplacementCost = ko.observable(0);
        _this.replacementCost = ko.observable(0).extend({
            validation: [{
                    validator: function (value) { return value > 0; },
                    message: 'The estimated home value must be greater than 0'
                }, {
                    validator: function (value) { return value < (_this.maxReplacementCost() || 0); },
                    message: "The estimated home value is over the limit"
                }]
        });
        _this.standardReplacementCost = ko.observable(0);
        _this.saleBasedReplacementCost = ko.observable(0);
        _this.replacementCostPerSqFoot = ko.observable(0);
        _this.replacementCostRate = ko.computed(function () { return (_this.annualPremium() / (_this.replacementCost() / 100)).toFixed(2); });
        /**
         * Is at least an agent (e.g., agent or admin)
         */
        _this.isAgent = ko.observable(Storage.hasAuth());
        /**
         * Is an admin (not user or agent)
         */
        _this.isAdmin = ko.observable(Common.isAdmin());
        return _this;
    }
    QuoteVm.prototype.load = function (quote, elementGroup) {
        this.quote = quote;
        this.elementGroup = elementGroup;
        if (!quote.Params)
            throw "Quote.Params was not set";
        if (!quote.Params.MaxReplacementCost)
            throw "Quote.Params.MaxReplacementCost was not set";
        this.annualPremium(quote.AnnualPremium);
        this.replacementCost(quote.ReplacementCost || 0);
        this.saleBasedReplacementCost(quote.SaleBasedReplacementCost || 0);
        this.standardReplacementCost(quote.StandardReplacementCost || 0);
        this.replacementCostPerSqFoot(quote.ReplacementCostPerSqFoot || 0);
        this.maxReplacementCost(quote.Params.MaxReplacementCost);
        var elements = Enumerable.from(quote.Elements);
        var matchingElements = Enumerable.from(elementGroup.ElementNames)
            .select(function (x) { return elements.firstOrDefault(function (el) { return el.ElementName === x; }); })
            .toArray();
        this.elementGroupVm.load(elementGroup.Description, 0, matchingElements, this.replacementCost());
    };
    QuoteVm.prototype.ok = function () {
        var _this = this;
        this.patchQuote()
            .then(function () { return _super.prototype.ok.call(_this); })
            .catch(function (err) {
            var normalized = Common.normalizeError(err);
            alert(normalized.message);
        });
    };
    /**
     * Handle incoming changes from the KO view - unless (and this is important)
     * we're in the process of loading up the view models, in which case we obviously need to ignore
     * those changes.
     */
    QuoteVm.prototype.patchQuote = function () {
        return __awaiter(this, void 0, Promise, function () {
            var patch, quote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isBusy() || this.isLoading)
                            return [2 /*return*/, null];
                        patch = {
                            QuoteId: this.quote.QuoteId,
                            ConfiguredOn: moment().toDate(),
                            Elements: []
                        };
                        patch.Elements = Enumerable.from(this.elementGroupVm.elements())
                            .select(function (x) { return ({
                            ElementName: x.name(),
                            Value: x.value(),
                            Id: x.id() || 0,
                        }); }).toArray();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        this.isBusy(true);
                        return [4 /*yield*/, HOApi.patchQuote(patch)];
                    case 2:
                        quote = _a.sent();
                        this.load(quote, this.elementGroup);
                        return [2 /*return*/, quote];
                    case 3:
                        this.isBusy(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return QuoteVm;
}(Common.ModalVm));
exports.QuoteVm = QuoteVm;
/**
 * The VM connected to the RequiredInfo (square footage) modal.
 */
var RequiredInfoVm = /** @class */ (function (_super) {
    __extends(RequiredInfoVm, _super);
    function RequiredInfoVm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.livingSpace = ko.observable(0)
            .extend({ required: true })
            .extend({ min: 500 })
            .extend({ max: 10000 });
        // NB: this needs to come after all the definition of all the fields to be validated
        _this.errors = ko.validation.group(_this);
        return _this;
    }
    RequiredInfoVm.prototype.ok = function () {
        if (this.errors().length !== 0) {
            console.log(this.errors().length + " validation errors encountered");
            this.errors.showAllMessages();
        }
        else {
            _super.prototype.ok.call(this);
        }
    };
    return RequiredInfoVm;
}(Common.ModalVm));
exports.RequiredInfoVm = RequiredInfoVm;
exports.vm = new AboutVm();
init();


/***/ }),

/***/ 175:
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

},[172]);
//# sourceMappingURL=aboutPrivacy.bundle.js.map