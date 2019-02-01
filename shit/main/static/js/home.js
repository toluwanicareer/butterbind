webpackJsonp([9],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ 197:
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
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Main = __webpack_require__(8);
var SingleFamilyResidenceConfirmationModal_1 = __webpack_require__(119);
var UpdatePropertyLocationModal_1 = __webpack_require__(198);
var AddressInfoVm = Common.AddressInfoVm;
__webpack_require__(199);
/**
 * If this is just an anonymous user, we want to log if they don't leave the page without getting a quote.
 */
var logNoQuote = !Storage.hasAuth();
/**
 * If this is just an anonymous user, we want to log if they don't leave the page without at least trying to get a quote.
 */
var logNoQuoteAttempt = logNoQuote;
/**
 * Set this to true if the loading screen needs to be canceled, i.e., as the result of some sort of error.
 */
var cancelLoadingScreen = false;
var UpdatePropertyLocationModal;
$(window).on('beforeunload', function () {
    var event = null;
    if (logNoQuoteAttempt) {
        event = {
            EventName: 'Page Closing With No Quote Attempt',
            Address: exports.vm.getAddress(),
            AddressKey: exports.vm.addressKey,
            Description: ''
        };
    }
    else if (logNoQuote) {
        event = {
            AddressKey: exports.vm.addressKey,
            Address: exports.vm.getAddress(),
            EventName: 'Page Closing With No Quote',
            Description: ''
        };
    }
    if (event)
        HOApi.logQuoteRequestSafe(event);
});
function init() {
    Main.init();
    Storage.removeFromSession('coverage');
    setupAutoComplete('address');
    setupAutoComplete('qaddress');
    ko.applyBindings(exports.vm, Common.wrapper);
    Storage.setUtmParametersFromQueryString();
}
exports.init = init;
function startLoadingScreen() {
    return __awaiter(this, void 0, void 0, function () {
        var messageElements, messageElement, i, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Don't show the loading screen to agents because they will hunt us down and kill us.
                    if (!exports.vm.isUser) {
                        return [2 /*return*/];
                    }
                    cancelLoadingScreen = false;
                    showLoadingScreen();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    messageElements = $("div.loading-lines-container p");
                    messageElement = messageElements[0];
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < messageElements.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, Util.timeout(2000)];
                case 3:
                    _a.sent();
                    if (cancelLoadingScreen) {
                        $(messageElements).removeClass('loading-md', 'loaded-md').addClass('hidden-md');
                        return [3 /*break*/, 5];
                    }
                    $(messageElement).removeClass('loading-md', 'hidden-md').addClass('loaded-md');
                    messageElement = messageElements[i];
                    $(messageElement)
                        .removeClass('hidden-md')
                        .addClass('loading-md');
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    if (!!cancelLoadingScreen) return [3 /*break*/, 7];
                    return [4 /*yield*/, Util.timeout(2000)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function showLoadingScreen() {
    $('.form-payment').hide();
    $('#expand-navbar').hide();
    $('#footer').hide();
    $('#loading-container').addClass('loading-flex-display-ly');
}
function hideLoadingScreen() {
    $('.form-payment').show();
    $('#expand-navbar').show();
    $('#footer').show();
    $('#loading-container').removeClass('loading-flex-display-ly');
}
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
            exports.vm.addressKey = (ui.item.value || '').split(',')[0];
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
                exports.vm.addressKey = (ui.item.value || '').split(',')[0];
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
var HomeVm = /** @class */ (function () {
    function HomeVm() {
        var _this = this;
        this.address = ko.observable('').extend({ required: { message: 'Please enter your address' } });
        this.addressKey = '';
        this.requiredInfoVm = new RequiredInfoVm();
        this.isBusy = ko.observable(false);
        this.isUser = !Storage.hasAuth();
        this.addressInfoVm = new AddressInfoVm();
        this.secondaryInfoVm = new AddressInfoVm();
        this.lastError = "";
        this.initialized = ko.observable(true);
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
        this.address.subscribe(function () {
            _this.addressKey = '';
        });
        UpdatePropertyLocationModal = UpdatePropertyLocationModal_1.init();
    }
    HomeVm.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(false)];
            });
        });
    };
    /**
     * ks 1/17/17 - Nasty-ass code smell all over here. Desperately needs to be refactored. Not today, but soon.
     */
    HomeVm.prototype.send = function (nonSingleFamilyResidenceConfirmed) {
        return __awaiter(this, void 0, void 0, function () {
            var address, mdAddress, fullAddress, loading, creating, quote, getQuoteErr_1, normalized, pd, quote, createAddressAndGetQuoteErr_1, loading, creating, quote, showLoadingScreenAndGetQuoteErr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logNoQuoteAttempt = false;
                        if (this.errors().length !== 0) {
                            console.log(this.errors().length + " validation errors encountered");
                            this.errors.showAllMessages();
                            return [2 /*return*/];
                        }
                        if (!Util.isEmpty(this.addressKey)) return [3 /*break*/, 13];
                        address = this.getAddress();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 12]);
                        return [4 /*yield*/, Common.getHOPropertyModel(address)];
                    case 2:
                        mdAddress = _a.sent();
                        if (!mdAddress) {
                            HOApi.logQuoteRequest({ Address: address, EventName: "Could Not Locate Address" });
                            throw "We could not locate that address. Please try again.";
                        }
                        this.addressKey = mdAddress.AddressKey;
                        fullAddress = Common.toAddress(mdAddress);
                        Storage.setAddress(fullAddress);
                        Storage.setAddressKey(this.addressKey);
                        loading = startLoadingScreen();
                        creating = this.createOrGetQuote();
                        return [4 /*yield*/, Promise.all([creating, loading])];
                    case 3:
                        quote = (_a.sent())[0];
                        if (quote) {
                            exports.vm.goToQuotePage(quote);
                        }
                        return [3 /*break*/, 12];
                    case 4:
                        getQuoteErr_1 = _a.sent();
                        hideLoadingScreen();
                        normalized = Common.normalizeError(getQuoteErr_1);
                        HOApi.logQuoteRequest({
                            Address: address,
                            EventName: "Error Looking Up Address",
                            Description: normalized.message
                        });
                        if (!Storage.hasAuth()) return [3 /*break*/, 10];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, Common.createAddress(address, this.addressInfoVm, this.secondaryInfoVm)];
                    case 6:
                        pd = _a.sent();
                        this.address(pd.FullAddress);
                        this.addressKey = pd.AddressKey;
                        Storage.setLivingSpaceChecked(this.addressKey);
                        return [4 /*yield*/, this.createOrGetQuote(nonSingleFamilyResidenceConfirmed, pd.LivingSpace)];
                    case 7:
                        quote = _a.sent();
                        if (quote) {
                            exports.vm.goToQuotePage(quote);
                        }
                        else {
                            console.error('No quote was returned from the createOrGetQuote() method');
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        createAddressAndGetQuoteErr_1 = _a.sent();
                        Common.handleGeneralError(createAddressAndGetQuoteErr_1);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        Common.handleError("AddressError", getQuoteErr_1, "Address: " + address);
                        _a.label = 11;
                    case 11: return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 16];
                    case 13:
                        _a.trys.push([13, 15, , 16]);
                        loading = startLoadingScreen();
                        creating = this.createOrGetQuote(nonSingleFamilyResidenceConfirmed);
                        return [4 /*yield*/, Promise.all([creating, loading])];
                    case 14:
                        quote = (_a.sent())[0];
                        if (quote) {
                            exports.vm.goToQuotePage(quote);
                        }
                        return [3 /*break*/, 16];
                    case 15:
                        showLoadingScreenAndGetQuoteErr_1 = _a.sent();
                        hideLoadingScreen();
                        Common.handleGeneralError(showLoadingScreenAndGetQuoteErr_1);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Create or get the quote from the API; and if the quote is new, show the required elements modal.
    */
    HomeVm.prototype.createOrGetQuote = function (nonSingleFamilyResidenceConfirmed, livingSpace) {
        return __awaiter(this, void 0, Promise, function () {
            var address, quoteCreateRequest, quote, reason_1, error, previousError, pd, createAddressError_1, ls, getLivingSpaceError_1, agentCanUpdateLocation, customerServiceEmail;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isBusy())
                            return [2 /*return*/, null];
                        this.isBusy(true);
                        address = this.getAddress();
                        quoteCreateRequest = {
                            AddressKey: this.addressKey,
                            Address: address,
                            LivingSpace: livingSpace,
                            ReferringAgent: Storage.getReferringAgent(),
                            NonSingleFamilyResidenceConfirmed: nonSingleFamilyResidenceConfirmed
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 17, 18]);
                        return [4 /*yield*/, HOApi.createOrGetQuote(quoteCreateRequest)];
                    case 2:
                        quote = _a.sent();
                        return [2 /*return*/, quote];
                    case 3:
                        reason_1 = _a.sent();
                        console.log(reason_1);
                        cancelLoadingScreen = true;
                        hideLoadingScreen();
                        error = Common.normalizeError(reason_1);
                        previousError = this.lastError;
                        this.lastError = error.subCode;
                        if (!(error.code === Constants.ErrorCodes.QuoteNotFound)) return [3 /*break*/, 16];
                        if (!(error.subCode === Constants.ErrorCodes.PropertyInvalid && error.subCode !== previousError && Storage.hasAuth())) return [3 /*break*/, 9];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, Common.createAddress(address, this.addressInfoVm, this.secondaryInfoVm)];
                    case 5:
                        pd = _a.sent();
                        this.address(pd.FullAddress);
                        this.addressKey = pd.AddressKey;
                        this.isBusy(false);
                        Storage.setLivingSpaceChecked(this.addressKey);
                        return [4 /*yield*/, this.createOrGetQuote(nonSingleFamilyResidenceConfirmed, pd.LivingSpace)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        createAddressError_1 = _a.sent();
                        // If the dialog box was canceled, reset the error.
                        if (Util.matches(createAddressError_1, "closed")) {
                            this.lastError = "";
                        }
                        else {
                            Common.handleGeneralError(createAddressError_1);
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, null];
                    case 9:
                        if (!(error.subCode === Constants.ErrorCodes.QuotePropertyDataInsufficient)) return [3 /*break*/, 15];
                        _a.label = 10;
                    case 10:
                        _a.trys.push([10, 13, , 14]);
                        return [4 /*yield*/, this.requiredInfoVm.show()];
                    case 11:
                        _a.sent();
                        ls = exports.vm.requiredInfoVm.livingSpace();
                        this.isBusy(false);
                        Storage.setLivingSpaceChecked(this.addressKey);
                        return [4 /*yield*/, this.createOrGetQuote(nonSingleFamilyResidenceConfirmed, ls)];
                    case 12: return [2 /*return*/, _a.sent()];
                    case 13:
                        getLivingSpaceError_1 = _a.sent();
                        Common.handleGeneralError(getLivingSpaceError_1);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/, null];
                    case 15:
                        if (error.subCode === Constants.ErrorCodes.QuoteForNonSingleFamilyResidence && Storage.hasAuth()) {
                            SingleFamilyResidenceConfirmationModal_1.default.show({
                                message: error.message,
                                okFunction: function () { return _this.send(true); }
                            });
                            return [2 /*return*/, null];
                        }
                        if (error.subCode === Constants.ErrorCodes.PropertyMissingPreciseLocation && Storage.hasAuth()) {
                            agentCanUpdateLocation = false;
                            if (agentCanUpdateLocation) {
                                UpdatePropertyLocationModal.show({
                                    addressKey: this.addressKey,
                                    okFunction: function () { return _this.send(true); }
                                });
                            }
                            else {
                                customerServiceEmail = window.SwyfftCustomerServiceEmail;
                                Common.showError("We\u2019re unable to locate this property precisely enough to rate it. Please contact <a href=\"mailto:" + customerServiceEmail + "\">" + customerServiceEmail + "</a>.");
                            }
                            return [2 /*return*/, null];
                        }
                        // This means that that the property is not covered. Show "Important Message" instead of "An Error Occurred".
                        if (error.subCode === Constants.ErrorCodes.PropertyNotCovered) {
                            Common.showError(error.message, "", "Important Message");
                            return [2 /*return*/, null];
                        }
                        // ks 1/17/17 - Can't remember what this is here for and it probably doesn't belong here.
                        if (error.subCode === Constants.ErrorCodes.QuoteNotFound) {
                            Common.navigate(Constants.pages.GetQuote);
                            return [2 /*return*/, null];
                        }
                        _a.label = 16;
                    case 16:
                        Common.handleGeneralError(error);
                        return [2 /*return*/, null];
                    case 17:
                        this.isBusy(false);
                        NProgress.done(true);
                        return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    HomeVm.prototype.goToQuotePage = function (quote) {
        if (!quote.QuoteProperty)
            throw "Quote.QuoteProperty was not defined";
        Storage.setAddress(Common.toAddress(quote.QuoteProperty));
        Storage.setQuoteId(quote.QuoteId);
        logNoQuote = false;
        Common.navigate(Constants.pages.Quote);
    };
    HomeVm.prototype.handleAddressCreation = function (pd) {
        console.log("here5");
    };
    HomeVm.prototype.getAddress = function () {
        var koAddress = Util.asString(this.address());
        var domAddress = Util.asString($('#address').val());
        var address = koAddress.length > domAddress.length ? koAddress : domAddress;
        return address;
    };
    return HomeVm;
}());
exports.HomeVm = HomeVm;
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
exports.vm = new HomeVm();
init();


/***/ }),

/***/ 198:
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var react_bootstrap_1 = __webpack_require__(1);
var Modal_1 = __webpack_require__(22);
var FormFields_1 = __webpack_require__(15);
var HOApi = __webpack_require__(12);
var UpdatePropertyLocationModal = /** @class */ (function (_super) {
    __extends(UpdatePropertyLocationModal, _super);
    function UpdatePropertyLocationModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false,
            latitude: new FormFields_1.Value('latitude', '', { required: true, pattern: 'latitude' }),
            longitude: new FormFields_1.Value('longitude', '', { required: true, pattern: 'longitude' })
        };
        return _this;
    }
    UpdatePropertyLocationModal.prototype.render = function () {
        var _this = this;
        return React.createElement(Modal_1.SwyfftModal, { id: 'update-property-location-modal', className: 'update-property-location-modal-md', size: Modal_1.ModalSize.Large, visible: this.state.visible, title: 'Property Location Required', titleIcon: 'exclamation', message: 'This property requires additional location data. Please provide the latitude and longitude to proceed.', okText: 'OK', okFunction: function () { return _this.onOK(); }, cancelText: 'Cancel', cancelFunction: function () { return _this.onCancel(); }, x: true },
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { sm: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: 'update-property-location-latitude', value: this.state.latitude.value, active: true, onChange: this.onChange.bind(this, 'latitude'), label: 'Latitude', type: 'text', invalidate: !this.state.latitude.valid }),
                    this.state.latitude.error && React.createElement("span", { className: 'modal-error' }, this.state.latitude.error)),
                React.createElement(react_bootstrap_1.Col, { sm: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: 'update-property-location-longitude', value: this.state.longitude.value, active: true, onChange: this.onChange.bind(this, 'longitude'), label: 'Longitude', type: 'text', invalidate: !this.state.longitude.valid }),
                    this.state.longitude.error && React.createElement("span", { className: 'modal-error' }, this.state.longitude.error))));
    };
    UpdatePropertyLocationModal.prototype.show = function (args) {
        this.addressKey = args.addressKey;
        this.setState({
            visible: true,
        });
        this.cancelFunction = args.cancelFunction;
        this.okFunction = args.okFunction;
    };
    UpdatePropertyLocationModal.prototype.hide = function () {
        this.state.latitude.reset();
        this.state.longitude.reset();
        this.setState({
            visible: false
        });
    };
    UpdatePropertyLocationModal.prototype.onChange = function (key, e) {
        var state = this.state;
        state[key].set(e.target.value);
        this.setState(state);
    };
    UpdatePropertyLocationModal.prototype.onCancel = function () {
        this.hide();
        if (this.cancelFunction)
            this.cancelFunction();
    };
    UpdatePropertyLocationModal.prototype.onOK = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lat, lon, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = this.state.latitude.validate();
                        lon = this.state.longitude.validate();
                        this.forceUpdate();
                        if (!(!lat && !lon)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.updatePropertyLocation(this.addressKey, this.state.latitude.value, this.state.longitude.value)];
                    case 2:
                        _a.sent();
                        this.hide();
                        if (this.okFunction)
                            this.okFunction();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UpdatePropertyLocationModal;
}(React.Component));
exports.UpdatePropertyLocationModal = UpdatePropertyLocationModal;
function init() {
    var container = document.createElement('div');
    document.body.appendChild(container);
    return ReactDOM.render(React.createElement(UpdatePropertyLocationModal, null), container);
}
exports.init = init;


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 20:
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

},[197]);
//# sourceMappingURL=home.bundle.js.map