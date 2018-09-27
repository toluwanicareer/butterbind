webpackJsonp([6],{

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

/***/ 216:
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
var Api = __webpack_require__(12);
var Common = __webpack_require__(3);
var Constants = __webpack_require__(7);
var Element = __webpack_require__(75);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Main = __webpack_require__(8);
var QuoteVms = __webpack_require__(217);
var OptinModal_1 = __webpack_require__(126);
__webpack_require__(218);
exports.quoteGrade = "Average";
// Setup the overall page Knockout VM
exports.quoteVm = new QuoteVms.QuoteVm();
/**
 * Handle incoming changes from the KO view - unless (and this is important)
 * we're in the process of loading up the view models, in which case we obviously need to ignore
 * those changes.
 */
exports.quoteVm.valueChangeHandler = function (name, value) {
    if (exports.quoteVm.isLoading || exports.quoteVm.disabled()) {
        return;
    }
    exports.quoteVm.disableInput();
    // Sometimes two updates can fire almost simultaneously (for instance, when someone updates the replacement cost,
    // but doesn't "tab" out, and then directly updates another slider.
    // Only patching after a timeout allows us to batch them together in one update.
    setTimeout(function () {
        var quoteModel = exports.quoteVm.quote();
        if (!quoteModel)
            throw "Quote was not defined.";
        var element = Enumerable.from(quoteModel.Elements).firstOrDefault(function (x) { return x.ElementName === name; });
        if (!element || element.Value === value) {
            exports.quoteVm.enableInput();
            return;
        }
        console.log("Value of element " + name + " has changed from " + element.Value + " to " + value);
        // Grab any elements whose value happens to have changed.
        // Realistically, this is only ever going to be "n" (direct numeric input) type elements.
        var elements = Enumerable.from(exports.quoteVm.elementGroups())
            .selectMany(function (x) { return x.elements(); })
            .where(function (x) { return x.el.ElementType === 'n' && x.isDirty() && x.isValid() && x.name() !== name; })
            .select(function (x) { return new QuoteVms.ElementDto(x.name(), x.value()); })
            .toArray();
        // Always include the specified element
        elements.push(new QuoteVms.ElementDto(name, value));
        exports.quoteVm.patchQuote(elements);
    }, 10);
};
exports.quoteVm.isBusy.subscribe(function (isBusy) {
    var opacity = isBusy ? ".35" : "1.0";
    $("#sliderSection").find('.jcf-radio').css("opacity", opacity);
    $("#sliderSection").find("input").prop("disabled", isBusy);
});
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var isReprice, error, main, confirmation, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    isReprice = window['isReprice'];
                    if (isReprice) {
                        Common.state.isReprice = true;
                        Common.state.installmentOption = window['premiumType'];
                        // Store the information in local storage, to be used by the Quote.ts script as part of its reprice flow.
                        Storage.setRepriceQuoteId(window["quoteId"]);
                        Storage.setRepriceModel({
                            LastBoundImsQuoteGuid: window['lastBoundImsQuoteGuid'],
                            CurrentImsQuoteGuid: window['currentImsQuoteGuid'],
                            PremiumType: window['premiumType'],
                            ImsQuoteHistory: window['imsQuoteHistory'].length > 1
                                ? window['imsQuoteHistory'].split(',')
                                : window['imsQuoteHistory'],
                            SetupInstallmentBilling: window['setupInstallmentBilling'],
                            IsRenewal: window['renewPolicy']
                        });
                        error = window['error'];
                        if (Util.isThere(error)) {
                            console.error(error);
                        }
                    }
                    Main.init();
                    loadAddressKey();
                    return [4 /*yield*/, loadQuote()];
                case 1:
                    _a.sent();
                    openCloseModifyModal();
                    $('#footer').hide();
                    $('input[name=emailQuote]').keydown(function (e) {
                        if (e.keyCode === 32) {
                            e.preventDefault();
                        }
                    });
                    $(window).resize(function () {
                        exports.quoteVm.setIsDesktop();
                        $(".dialog-form").dialog("option", "position", "center");
                    });
                    // See http://knockoutjs.com/documentation/deferred-updates.html
                    ko['options'].deferUpdates = true;
                    exports.quoteVm.setIsDesktop();
                    main = document.querySelector('#main');
                    if (main) {
                        ko.cleanNode(main);
                        ko.applyBindings(exports.quoteVm, main);
                    }
                    confirmation = document.querySelector('#confirmation');
                    if (confirmation) {
                        ko.cleanNode(confirmation);
                        ko.applyBindings(exports.quoteVm.confirmationVm, confirmation);
                    }
                    setQuoteSummaryTopMargin();
                    if (isReprice) {
                        $('#sliders').show();
                        Element.agentViewRender(exports.quoteVm.isAgent());
                    }
                    else {
                        $('#emailIDTxtBox').blur();
                    }
                    handleOptin();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    Common.handleGeneralError(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
function handleOptin() {
    var utmParameters = Storage.getUtmParameters();
    if (!Storage.hasAuth() && utmParameters && utmParameters.campaign === 'hi-ag-acq' && Storage.getCookie('swyfft-optin-quote') === null) {
        setTimeout(function () {
            OptinModal_1.default.show(utmParameters, function (isSignedUp) {
                Storage.setCookie('swyfft-optin-quote', isSignedUp.toString(), isSignedUp ? 365 : 30);
            });
        }, 3000);
    }
}
exports.handleOptin = handleOptin;
function openCloseModifyModal() {
    //open&close functionality when clicking anywhere on collapsed or expanded element row.
    $(document).on('click', '.quote-element', function (e) {
        if (exports.quoteVm.isAgent())
            return;
        if (e.target.id === "ReplacementCostInput")
            return;
        $(this).children('.element-row-md').children('.modify-info-ly').find('img').first().toggleClass('rotate-icon-st');
        $(this).children('.element-row-md').children('.modify-li-expanded-ly').slideToggle();
    });
}
exports.openCloseModifyModal = openCloseModifyModal;
function handleQuoteHeaderScroll() {
    var modifyElements = $('#sliders');
    $(window).on('scroll', modifyElements, revealQuoteHeader);
}
exports.handleQuoteHeaderScroll = handleQuoteHeaderScroll;
function revealQuoteHeader() {
    var topHeight = Util.asNumber($(window).scrollTop());
    var offset = $('#sliders').offset();
    if (offset) {
        var previewHeight = offset.top - Util.asNumber($('#header').outerHeight()) - Util.asNumber($('#agent-quote-preview-header-container').outerHeight()) - 25;
        //grabs 'important messages' element height, and subtracts it from previewHeight if found.
        var premiumErrorsContainerHeight = 0 || $('#premium-errors-container').outerHeight();
        if (premiumErrorsContainerHeight)
            previewHeight -= premiumErrorsContainerHeight;
        previewHeight -= agentNavBarHeightChecker();
        $('#spacer').toggleClass('show-block-content', (topHeight > 575));
        $('#agent-quote-preview-header-container')
            .toggleClass('show-fixed-content', (topHeight > previewHeight));
        setSecondaryHeaderTopPosition();
    }
}
exports.revealQuoteHeader = revealQuoteHeader;
//the agent navbar lives outside the primary header for certain breakpoints. It is 30px in height if separate, and 60px when part of the primary header. This checks the height to determine if it is within or outside the primary header, in order to apply subsequent spacing and scroll distance.
function agentNavBarHeightChecker() {
    if (exports.quoteVm.displayPremiumErrors())
        return 0;
    var agentNavBarHeight = $('#quote-menubar').outerHeight();
    if (agentNavBarHeight && exports.quoteVm.isAgent() && agentNavBarHeight < 60)
        return agentNavBarHeight;
    return 0;
}
exports.agentNavBarHeightChecker = agentNavBarHeightChecker;
//Sets the fixed position of the secondary header. Accomodates viewport size and conditional presence of fixed "Important Messages" section.
function setSecondaryHeaderTopPosition() {
    var errorContainerHeight = 0 || $('#premium-errors-container').outerHeight();
    var primaryHeaderHeight = $('#header').outerHeight();
    var totalHeight = 0;
    if (errorContainerHeight && exports.quoteVm.premiumErrors().length)
        totalHeight += errorContainerHeight;
    if (primaryHeaderHeight)
        totalHeight += primaryHeaderHeight;
    totalHeight += agentNavBarHeightChecker();
    $('div#agent-quote-preview-header-container').css('top', totalHeight);
}
exports.setSecondaryHeaderTopPosition = setSecondaryHeaderTopPosition;
//Sets top margin for quote summary/primary deductible section. Accomodates viewport size and conditional presence of fixed "Important Messages" section.
function setQuoteSummaryTopMargin() {
    var premiumErrorsContainerHeight = 0 || $('#premium-errors-container').outerHeight();
    var quoteSummaryContainerEl = $('div.quote-preview-container-ly');
    if (premiumErrorsContainerHeight)
        $(quoteSummaryContainerEl).css('margin-top', function (index, current) {
            return parseInt(current, 10) + premiumErrorsContainerHeight + 'px';
        });
}
exports.setQuoteSummaryTopMargin = setQuoteSummaryTopMargin;
exports.quoteVm.showModifyElementsHandler = function () { return showModifyElements(); };
exports.quoteVm.revealQuoteHeaderHandler = function () { return revealQuoteHeader(); };
function showModifyElements() {
    handleQuoteHeaderScroll();
    $('#sliders').slideDown(10, function () {
        //headerHt no longer used, leaving it here since it may be needed in order to fix the show/hide header position for customers. 
        var headerHt = Util.asNumber($('#header').outerHeight());
        var premiumErrorsContainerHeight = 0 || $('#premium-errors-container').outerHeight();
        var agentHeaderHt = Util.asNumber($('#agent-quote-preview-header-container').outerHeight());
        var offset = $('#sliders').offset();
        if (offset) {
            var scrollSet = agentHeaderHt + headerHt;
            if (premiumErrorsContainerHeight)
                scrollSet += premiumErrorsContainerHeight;
            scrollSet -= agentNavBarHeightChecker();
            $('html, body').animate({ scrollTop: offset.top - scrollSet }, 1300);
        }
        $('#footer').show();
    });
    Element.agentViewRender(exports.quoteVm.isAgent());
}
function setStorageAddressDetails(address, addressKey) {
    Storage.setAddressKey(addressKey);
    Storage.setAddress(address);
}
exports.setStorageAddressDetails = setStorageAddressDetails;
function handleQuoteReprice() {
    return __awaiter(this, void 0, void 0, function () {
        var quoteId, quote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Common.isAtLeastAgent()) {
                        throw Constants.ErrorMessages.authFailed;
                    }
                    quoteId = Storage.getRepriceQuoteId();
                    if (!quoteId)
                        throw "QuoteId was not set";
                    return [4 /*yield*/, initiateReprice(quoteId)];
                case 1:
                    quote = _a.sent();
                    if (quote) {
                        if (Main.isQuoteFromHub(quote.LastAgencyName))
                            Main.loadHubUi();
                        return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.handleQuoteReprice = handleQuoteReprice;
function handleQuoteFromQueryString() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, addressKey, quoteGuid, quoteId, quote;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = Util.getQueryVariables('addresskey', 'quoteguid', 'quoteid'), addressKey = _a[0], quoteGuid = _a[1], quoteId = _a[2];
                    quote = null;
                    if (!Util.isThere(addressKey)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Common.getQuoteByAddressKey(addressKey || '')];
                case 1:
                    quote = _b.sent();
                    return [3 /*break*/, 6];
                case 2:
                    if (!quoteGuid) return [3 /*break*/, 4];
                    return [4 /*yield*/, Common.getQuoteById(quoteGuid)];
                case 3:
                    // We need to support this type of URL for backward compatability:
                    //  http://local.swyfft.com/quote?quoteguid=f7fb8e87-add3-4e4c-b804-e1bcbd06bb0d
                    quote = _b.sent();
                    return [3 /*break*/, 6];
                case 4:
                    if (!quoteId) return [3 /*break*/, 6];
                    return [4 /*yield*/, Common.getQuoteById(quoteId)];
                case 5:
                    quote = _b.sent();
                    _b.label = 6;
                case 6:
                    if (!quote) return [3 /*break*/, 8];
                    return [4 /*yield*/, Common.getElementDescriptionsByState(quote.StateCode)];
                case 7:
                    _b.sent();
                    exports.quoteVm.load(quote);
                    Storage.setQuoteId(quote.QuoteId);
                    setStorageAddressDetails(exports.quoteVm.address(), exports.quoteVm.addressKey());
                    if (Main.isQuoteFromHub(quote.LastAgencyName))
                        Main.loadHubUi();
                    return [2 /*return*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.handleQuoteFromQueryString = handleQuoteFromQueryString;
function handleQuoteFromScratch() {
    return __awaiter(this, void 0, void 0, function () {
        var localQuoteId, quote, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    localQuoteId = Storage.getQuoteId();
                    // If there's no real quote, return to the home page.
                    if (!localQuoteId) {
                        Common.navigate(Constants.pages.Root);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, Api.getQuoteByQuoteId(localQuoteId)];
                case 2:
                    quote = _a.sent();
                    return [4 /*yield*/, Common.getElementDescriptionsByState(quote.StateCode)];
                case 3:
                    _a.sent();
                    exports.quoteVm.load(quote);
                    Storage.setQuoteId(quote.QuoteId);
                    setStorageAddressDetails(exports.quoteVm.address(), exports.quoteVm.addressKey());
                    if (Main.isQuoteFromHub(quote.LastAgencyName))
                        Main.loadHubUi();
                    return [2 /*return*/];
                case 4:
                    err_2 = _a.sent();
                    Common.handleGeneralError(err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.handleQuoteFromScratch = handleQuoteFromScratch;
/**
 * Load up the quote data, handling all the weird initial states and purposes for which this page can be loaded
 */
function loadQuote() {
    return __awaiter(this, void 0, void 0, function () {
        var queryString;
        return __generator(this, function (_a) {
            queryString = window.location.search;
            if (Common.state.isReprice) {
                return [2 /*return*/, handleQuoteReprice()];
            }
            else if (queryString !== "") {
                return [2 /*return*/, handleQuoteFromQueryString()];
            }
            //if no query string or reprice, request the quote directly. 
            else {
                return [2 /*return*/, handleQuoteFromScratch()];
            }
            return [2 /*return*/];
        });
    });
}
exports.loadQuote = loadQuote;
function loadAddressKey() {
    var addr = Storage.getAddressKey();
    if (addr) {
        exports.addressKey = addr;
    }
}
exports.loadAddressKey = loadAddressKey;
$(document).keydown(function (e) {
    var key = e.which || e.keyCode;
    if (key === 116) {
        Storage.setIsRenderedAgain(false);
    }
});
$(window).on("unload", function () {
    Storage.setIsRenderedAgain(false);
});
/**
 * Initiate the "reprice" workflow by loading the specified existing quote for repricing
 */
function initiateReprice(quoteId) {
    return __awaiter(this, void 0, Promise, function () {
        var repriceModel, quote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Beginning QuoteReprice');
                    repriceModel = Storage.getRepriceModel();
                    if (!repriceModel || Util.isEmpty(repriceModel.LastBoundImsQuoteGuid)) {
                        console.error('No quoteId was found');
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, Api.initiateReprice(quoteId, repriceModel)];
                case 1:
                    quote = _a.sent();
                    return [4 /*yield*/, Common.getElementDescriptionsByState(quote.StateCode)];
                case 2:
                    _a.sent();
                    exports.quoteVm.isReprice(true);
                    exports.quoteVm.load(quote);
                    exports.quoteVm.initialAnnualPremium(exports.quoteVm.annualPremium());
                    exports.quoteVm.initialMonthlyPayment(exports.quoteVm.monthlyPayment());
                    if (Util.isEmpty(repriceModel.CurrentImsQuoteGuid)) {
                        exports.quoteVm.disableInput();
                    }
                    return [2 /*return*/, quote];
            }
        });
    });
}
exports.initiateReprice = initiateReprice;
init();


/***/ }),

/***/ 217:
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
var EmailApi = __webpack_require__(25);
var MembershipApi = __webpack_require__(24);
var HOApi = __webpack_require__(12);
var Common = __webpack_require__(3);
var Element = __webpack_require__(75);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var moment = __webpack_require__(4);
var Constants = __webpack_require__(7);
var SingleFamilyResidenceConfirmationModal_1 = __webpack_require__(119);
var HubContactModal_1 = __webpack_require__(125);
var isOnlyAgent = Common.isOnlyAgent;
// ks 3/15/17 - This is the portion of the quote page that DOES NOT know about the DOM. It should get bigger and bigger over time,
// and we should be migrating more and more stuff over to this side of the quote page, so that it can be easily testable.
// If you throw anything in here that knows about the DOM, prepare for a brief but exciting lecture about separation of concerns.
exports.dateTimeFormat = 'YYYY-MM-DD LT';
var quoteElements;
var QuoteVm = /** @class */ (function () {
    function QuoteVm() {
        var _this = this;
        // Setup the Knockout VM we're using for the email modal
        this.emailVm = new EmailVm();
        this.detailsVm = new QuoteDetailsVm();
        this.quote = ko.observable();
        this.isLoaded = ko.observable(false);
        this.address = ko.observable('');
        this.stateCode = '';
        this.streetViewUrl = ko.observable('');
        this.zillowUrl = ko.observable('');
        this.addressKey = ko.observable('');
        this.quoteId = ko.observable('');
        this.lastAgentName = ko.observable('');
        this.lastAgencyId = ko.observable('');
        this.lastAgencyName = ko.observable('');
        this.primaryElementName = ko.observable('');
        this.primaryElementDescription = ko.observable('');
        this.deductibleElementVm = new DeductibleVm(this);
        this.rcElementVm = new RcVm(this);
        this.confirmationVm = new ConfirmationVm(this);
        this.isBusy = ko.observable(false);
        this.isReadOnly = ko.observable(false);
        this.isReprice = ko.observable(false);
        this.isRenewal = ko.observable(false);
        this.isSetBill = ko.observable(false);
        this.hubContacted = ko.observable(false);
        this.hubIgnored = ko.observable(false);
        /**
         * Is at least an agent (e.g., agent or admin)
         */
        this.isAgent = ko.observable(Storage.hasAuth());
        /**
         * Is an admin (not user or agent)
         */
        this.isAdmin = ko.observable(Common.isAdmin());
        this.installmentOption = ko.observable('');
        this.annualPremium = ko.observable(0);
        this.grossAnnualPayment = ko.observable(0);
        this.monthlyPayment = ko.observable(0).extend({ numeric: 2 });
        /**
         * This will get overridden by the quote coming down, but give it an initial value so we don't show an error right away.
         */
        this.maxReplacementCost = ko.observable(10000000);
        this.replacementCost = ko.observable(0).extend({
            validation: [{
                    validator: function (value) { return !_this.isLoaded || !_this.isAgent() || value > 0; },
                    message: 'The estimated home value must be greater than 0'
                }]
        });
        this.defaultReplacementCost = ko.observable(0);
        this.standardReplacementCost = ko.observable(0);
        this.saleBasedReplacementCost = ko.observable(0);
        this.replacementCostPerSqFoot = ko.observable(0);
        this.replacementCostRate = ko.computed(function () { return (_this.annualPremium() / (_this.replacementCost() / 100)).toFixed(2); });
        this.premiumErrors = ko.observableArray();
        this.quoteFees = ko.observableArray();
        this.quoteWarnings = ko.observableArray();
        this.annualQuoteFees = ko.observableArray();
        this.displayPremiumErrors = ko.observable(false);
        this.displayQuoteWarnings = ko.observable(false);
        this.isPurchased = ko.observable(false);
        /** This is set at the beginning during a reprice and is not updated as the quote changes  */
        this.initialAnnualPremium = ko.observable(0);
        this.annualFeesTotal = ko.observable(0);
        /** This is set at the beginning during a reprice and is not updated as the quote changes  */
        this.initialMonthlyPayment = ko.observable(0);
        this.annualDiff = ko.computed(function () { return _this.annualPremium() - _this.initialAnnualPremium(); }).extend({ numeric: 0 });
        this.monthlyDiff = ko.computed(function () { return _this.monthlyPayment() - _this.initialMonthlyPayment(); }).extend({ numeric: 2 });
        this.manualPremiumAdjustment = ko.observable(0).extend({
            validation: [{
                    validator: function (value) {
                        var manualPremiumAdjustment = Util.asNumber(value);
                        var adjustedPremium = _this.getAdjustedMonthlyPayment(manualPremiumAdjustment);
                        return adjustedPremium > 0;
                    },
                    message: 'The net adjusted premium must be greater than zero'
                }]
        });
        this.isDesktop = ko.observable(true);
        this.elementGroups = ko.observableArray();
        this.sortedElementGroups = ko.computed(function () {
            return Enumerable.from(_this.elementGroups()).orderBy(function (x) { return x.order(); }).toArray();
        });
        /**
         * The value of the manualPremiumAdjustment when the quote is first loaded.
         * This is needed so that we can show the adjusted monthly premium in real-time
         * as the agent is typing it into the box.
         */
        this.initialAdjustment = 0;
        this.isLoading = false;
        this.isNonSingleResidencePropertyConfirmed = false;
        /**
         * The monthly premium after any manual premiums have been applied (for display purposes only).
         */
        this.adjustedMonthlyPayment = ko.computed(function () {
            var manualPremiumAdjustment = Util.asNumber(_this.manualPremiumAdjustment());
            return _this.getAdjustedMonthlyPayment(manualPremiumAdjustment);
        });
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
        this.noErrors = ko.computed(function () {
            if (_this.errors().length !== 0)
                return false;
            for (var _i = 0, _a = _this.elementGroups(); _i < _a.length; _i++) {
                var groupVm = _a[_i];
                for (var _b = 0, _c = groupVm.elements(); _b < _c.length; _b++) {
                    var elementVm = _c[_b];
                    if (elementVm.errors().length !== 0)
                        return false;
                }
            }
            return true;
        });
        this.hasErrors = ko.pureComputed(function () { return !_this.noErrors(); });
        this.disabled = ko.pureComputed(function () {
            return _this.isBusy() || _this.isReadOnly();
        });
        this.adminCustomizeEnabled = ko.computed(function () {
            return !_this.disabled() && _this.noErrors();
        });
        this.userBuyEnabled = ko.pureComputed(function () {
            return _this.noErrors() && !_this.isPurchased() && !_this.premiumErrors().length;
        });
        this.repriceSubmitEnabled = ko.computed(function () {
            return _this.noErrors() && _this.isReprice();
        });
        this.editPaymentVisible = ko.pureComputed(function () {
            return _this.repriceSubmitEnabled() && (_this.isRenewal() || _this.isSetBill());
        });
        this.resetValuesEnabled = ko.pureComputed(function () {
            return _this.noErrors() && !_this.isPurchased();
        });
    }
    /**
     * currency formatting helper, currently used to format changing annual premium values
     */
    QuoteVm.prototype.formatCurrencyUS = function (amount) { return Common.formatCurrencyUS(amount); };
    /**
     * grossAnnual formatting helper, currently used to format grossAnnualPremium shown on quote and purchase headers.
     */
    QuoteVm.prototype.formatGrossAnnualPayment = function (amount) { return Common.formatGrossAnnualPayment(amount); };
    QuoteVm.prototype.formatBubblePremium = function (amount) { return Common.formatBubblePremium(amount); };
    QuoteVm.prototype.getAdjustedMonthlyPayment = function (manualPremiumAdjustment) {
        var annualDiff = manualPremiumAdjustment - this.initialAdjustment;
        var monthlyDiff = annualDiff / 12;
        var newPremium = Util.asNumber(this.monthlyPayment()) + monthlyDiff;
        return Util.round(newPremium, -2);
    };
    QuoteVm.prototype.loadElementGroups = function (quoteElements) {
        var _this = this;
        Enumerable.from(quoteElements)
            // ReSharper disable once DoubleNegationOfBoolean
            .where(function (x) { return !!x.Viewable; })
            .groupBy(function (x) { return x.Group; })
            .forEach(function (group) {
            var order = _this.getElementGroupOrder(group.key() || '');
            var groupVm = Enumerable.from(_this.elementGroups())
                .firstOrDefault(function (x) { return x.name() === group.key(); });
            if (!groupVm) {
                groupVm = new Element.ElementGroupVm(_this);
                _this.elementGroups.push(groupVm);
            }
            groupVm.load(group.key(), order, group.toArray(), _this.replacementCost() || 0);
            return groupVm;
        });
    };
    QuoteVm.prototype.load = function (quote) {
        var _this = this;
        try {
            this.isLoading = true;
            var repriceModel = Storage.getRepriceModel();
            this.installmentOption(Common.state.installmentOption);
            this.isRenewal(repriceModel != null && repriceModel.IsRenewal);
            this.isSetBill(repriceModel != null && repriceModel.SetupInstallmentBilling);
            this.quote(quote);
            this.isPurchased(quote.Purchased);
            this.quoteId(quote.QuoteId);
            this.addressKey(quote.AddressKey);
            this.initialAdjustment = Util.round(Util.asNumber(quote.ManualPremiumAdjustment), 2);
            this.manualPremiumAdjustment(this.initialAdjustment);
            if (!quote.MonthlyPayment)
                throw "Quote.MonthlyPayment was not set";
            this.monthlyPayment(quote.MonthlyPayment);
            this.annualFeesTotal(quote.AnnualFeesTotal);
            this.lastAgentName(quote.LastAgentName || '');
            this.lastAgencyId(quote.LastAgencyId || '');
            this.lastAgencyName(quote.LastAgencyName || '');
            this.primaryElementName(quote.PrimaryElementName || Constants.ElementNames.deductible);
            var deductibleElement = Enumerable.from(quote.Elements)
                .first(function (x) { return x.ElementName === _this.primaryElementName(); });
            this.primaryElementDescription(deductibleElement.ElementDisplay || Constants.ElementNames.deductible);
            var quoteModel = this.quote();
            if (!quoteModel)
                throw "Quote was not set.";
            quoteElements = quoteModel ? quoteModel.Elements : [];
            var pd = quote.QuoteProperty;
            if (!pd)
                throw "Quote.QuoteProperty was not set";
            var address = pd.Street1 + ", " + pd.City + ", " + pd.StateCode + " " + pd.Zip;
            this.address(address);
            this.stateCode = pd.StateCode;
            this.streetViewUrl("https://www.google.com/maps/place/" + encodeURIComponent(address));
            this.zillowUrl(this.getZillowUrl(address));
            //if (Common.state.isReprice && Util.matches(this.installmentOption(), Models.PremiumTypes[Models.PremiumTypes.Monthly])) {
            //    if (!quote.DownPayment) throw "Quote.DownPayment was not set";
            //    this.annualPremium(Common.getTotalMonthlyPayments(quote.DownPayment, quote.MonthlyPayment));
            //} else {
            if (!quote.AnnualPremium)
                throw "Quote.AnnualPremium was not set";
            this.annualPremium(quote.AnnualPremium);
            //}
            if (!quote.GrossAnnualPayment)
                throw "Quote.GrossAnnualPayment was not set";
            this.grossAnnualPayment(quote.GrossAnnualPayment);
            var rcElement = Enumerable.from(quote.Elements).firstOrDefault(function (x) { return x.ElementName === Constants.ElementNames.replacementCost; });
            var rcElementValue = parseFloat(String(rcElement.Value));
            if (!quote.Params)
                throw "Quote.Params was not set";
            this.maxReplacementCost(quote.Params.MaxReplacementCost);
            if (!quote.ReplacementCost)
                throw "Quote.ReplacementCost was not set";
            //HG 6/6/17: NOT ACTUAL REPLACEMENT COST! Use quote.Elements.ReplacementCost to get the accurate RC value.
            this.replacementCost(rcElementValue);
            this.saleBasedReplacementCost(quote.SaleBasedReplacementCost || 0);
            this.standardReplacementCost(quote.StandardReplacementCost || 0);
            this.replacementCostPerSqFoot(quote.ReplacementCostPerSqFoot || 0);
            this.displayPremiumErrors(false);
            this.displayQuoteWarnings(false);
            this.deductibleElementVm.load(deductibleElement);
            // Set the replacement cost we display in the UI correctly.
            // We used to use the quote.ReplacementCost, but because we can sometimes want an overridden value
            // to show up in the UI, use that here.
            if (rcElement && Util.isNumeric(rcElement.DefaultValue)) {
                this.defaultReplacementCost(Math.max(Util.asNumber(rcElement.DefaultValue), Util.asNumber(rcElement.MinValue)));
            }
            else {
                this.defaultReplacementCost(quote.ReplacementCost);
            }
            this.rcElementVm.load(rcElement);
            // Copy over any PremiumErrors on the Quote model.
            this.premiumErrors([]);
            Enumerable.from(quote.QuotePremiumErrors)
                .forEach(function (premiumError) {
                var errorVm = new QuotePremiumErrorVm(premiumError);
                _this.checkPremiumErrors(errorVm);
            });
            // Copy over any QuoteFees on the Quote model.
            this.quoteFees([]);
            Enumerable.from(quote.QuoteFees)
                .forEach(function (quoteFee) {
                var feeVm = new QuoteFeeVm(quoteFee);
                _this.pushQuoteFees(feeVm);
            });
            // Copy over any QuoteWarnings on the Quote model.
            this.quoteWarnings([]);
            Enumerable.from(quote.QuoteWarnings)
                .forEach(function (quoteWarning) {
                var warningVm = new QuoteWarningVm(quoteWarning);
                _this.quoteWarnings.push(warningVm);
            });
            this.annualQuoteFees(this.filterAnnualFees(this.quoteFees()));
            if (this.premiumErrors().length > 0)
                this.displayPremiumErrors(true);
            if (this.quoteWarnings().length > 0) {
                this.displayQuoteWarnings(true);
                Common.showAlert(Common.AlertType.Warning, "Your Wind/Hail deductible choices have changed based on your recent adjustments, please check the \'Warning\' section for details.", "swyfftWarningAlert");
            }
            this.clearPremiumErrorIcons();
            this.clearQuoteWarningIcons();
            // Upsert the groups. NB that this currently assumes no group will ever be removed.
            // ReSharper disable once DoubleNegationOfBoolean
            this.loadElementGroups(quote.Elements);
            this.isLoaded(true);
            this.hubContacted(false);
            this.hubIgnored(false);
            this.displayPremiumErrorIcons();
            this.displayQuoteWarningIcons();
        }
        finally {
            // Wait 50 ms before we signal that things are loaded and stabilized.
            // This is a nasty-ass hack, but not sure how else to handle the fact we do
            // setTimeouts() in other portions of our code.
            setTimeout(function () { return _this.isLoading = false; }, 50);
        }
    };
    /**
     * Handle incoming changes from the KO view - unless (and this is important)
     * we're in the process of loading up the view models, in which case we obviously need to ignore
     * those changes.
     */
    QuoteVm.prototype.valueChange = function (name, value) {
        if (this.isPurchased() && !this.isReprice())
            return;
        if (this.valueChangeHandler) {
            this.valueChangeHandler(name, value);
        }
    };
    QuoteVm.prototype.showModifyElements = function () {
        if (this.showModifyElementsHandler) {
            this.showModifyElementsHandler();
        }
    };
    QuoteVm.prototype.revealQuoteHeader = function () {
        if (this.revealQuoteHeaderHandler) {
            this.revealQuoteHeaderHandler();
        }
    };
    /**
     * Hacky-ass way to figure out the right order to sort element groups in.
     * This really should be an attribute somewhere in the DB, not in the client.
     */
    QuoteVm.prototype.getElementGroupOrder = function (key) {
        key = key.toLowerCase();
        if (key === "property coverages")
            return 0;
        if (key === "additional coverages")
            return 1;
        if (key === "deductibles")
            return 2;
        if (key === "construction and risk characteristics")
            return 3;
        if (key === "agents")
            return 4;
        return 0;
    };
    QuoteVm.prototype.getZillowUrl = function (address) {
        var spaceRe = new RegExp(' ', 'g');
        var highwayRe = new RegExp('highway', 'i');
        var addr = address.replace(spaceRe, '-').replace(highwayRe, 'Hwy');
        return "http://www.zillow.com/homes/1_ah/" + addr + "_rb/";
    };
    QuoteVm.prototype.enableInput = function () {
        this.isReadOnly(false);
        this.isBusy(false);
    };
    QuoteVm.prototype.disableInput = function () {
        this.isReadOnly(true);
        this.isBusy(true);
    };
    /**
     * Call the API with the updated quote information, and get back the new complete state of the quote
     */
    QuoteVm.prototype.patchQuote = function (elements, gaEventAction) {
        return __awaiter(this, void 0, void 0, function () {
            var quoteModel, patch, updated, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        quoteModel = this.quote();
                        if (!quoteModel)
                            throw "Quote was not defined.";
                        patch = {
                            QuoteId: quoteModel.QuoteId,
                            ManualPremiumAdjustment: Util.asNumber(this.manualPremiumAdjustment()),
                            ConfiguredOn: quoteModel.ConfiguredOn,
                            Elements: [],
                            gaEventAction: ''
                        };
                        if (elements) {
                            patch.Elements = elements.map(function (x) { return ({ ElementName: x.name, Value: x.value }); });
                        }
                        if (gaEventAction) {
                            patch.gaEventAction = gaEventAction;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        this.disableInput();
                        return [4 /*yield*/, HOApi.patchQuote(patch)];
                    case 2:
                        updated = _a.sent();
                        Storage.setIsRenderedAgain(true);
                        return [4 /*yield*/, this.load(updated)];
                    case 3:
                        _a.sent();
                        if (updated.IsReadOnly) {
                            this.disableInput();
                        }
                        else {
                            this.enableInput();
                        }
                        return [2 /*return*/, updated];
                    case 4:
                        err_1 = _a.sent();
                        Common.handleGeneralError(err_1);
                        return [2 /*return*/, null];
                    case 5:
                        if (this.patchQuoteHandler) {
                            this.patchQuoteHandler(quoteModel);
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    QuoteVm.prototype.updateQuote = function () {
        if (this.errors().length !== 0) {
            console.log(this.errors().length + " validation errors encountered");
            this.errors.showAllMessages();
        }
        else {
            this.patchQuote();
        }
    };
    QuoteVm.prototype.checkPremiumErrors = function (err) {
        var errMatch = null;
        var _loop_1 = function (i) {
            var errorElementName = this_1.premiumErrors()[i].elementName;
            errMatch = ko.utils.arrayFirst(this_1.premiumErrors(), function (item) {
                return errorElementName === item.elementName;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.premiumErrors().length; i++) {
            _loop_1(i);
        }
        if (!errMatch) {
            this.premiumErrors.push(err);
        }
        this.displayPremiumErrorIcons();
    };
    QuoteVm.prototype.pushQuoteFees = function (fee) {
        var feeMatch = null;
        var quoteModel = this.quote();
        if (!quoteModel)
            throw "Quote was not defined.";
        var _loop_2 = function (i) {
            var feeName = quoteModel.QuoteFees[i].Name;
            feeMatch = ko.utils.arrayFirst(this_2.quoteFees(), function (item) {
                return feeName === item.name();
            });
        };
        var this_2 = this;
        for (var i = 0; i < quoteModel.QuoteFees.length; i++) {
            _loop_2(i);
        }
        if (!feeMatch) {
            this.quoteFees.push(fee);
        }
    };
    QuoteVm.prototype.pushQuoteWarnings = function (warning) {
        this.quoteWarnings.push(warning);
    };
    //returns only annual fees
    QuoteVm.prototype.filterAnnualFees = function (fees) {
        var annualFees = fees
            .filter(function (fee) { return fee.type() === Constants.ElementNames.QuoteFeeTypeAnnual; });
        return annualFees;
    };
    //iterates through all elements and turns off icon display, prior to enabling for selected elements.
    QuoteVm.prototype.clearPremiumErrorIcons = function () {
        for (var _i = 0, _a = this.elementGroups(); _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, _c = group.elements(); _b < _c.length; _b++) {
                var elementVm = _c[_b];
                elementVm.premiumErrorIconDisplayHandler(false);
            }
        }
    };
    QuoteVm.prototype.displayPremiumErrorIcons = function () {
        for (var _i = 0, _a = this.premiumErrors(); _i < _a.length; _i++) {
            var err = _a[_i];
            for (var _b = 0, _c = this.elementGroups(); _b < _c.length; _b++) {
                var groupVm = _c[_b];
                for (var _d = 0, _e = groupVm.elements(); _d < _e.length; _d++) {
                    var elementVm = _e[_d];
                    (elementVm.name() === err.elementName())
                        ? elementVm.premiumErrorIconDisplayHandler(true)
                        : elementVm.premiumErrorIconDisplayHandler(false);
                }
            }
        }
    };
    //iterates through all elements and turns off icon display, prior to enabling for selected elements.
    QuoteVm.prototype.clearQuoteWarningIcons = function () {
        for (var _i = 0, _a = this.elementGroups(); _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, _c = group.elements(); _b < _c.length; _b++) {
                var elementVm = _c[_b];
                elementVm.quoteWarningIconDisplayHandler(false);
            }
        }
    };
    QuoteVm.prototype.displayQuoteWarningIcons = function () {
        for (var _i = 0, _a = this.quoteWarnings(); _i < _a.length; _i++) {
            var warningVm = _a[_i];
            for (var _b = 0, _c = this.elementGroups(); _b < _c.length; _b++) {
                var groupVm = _c[_b];
                for (var _d = 0, _e = groupVm.elements(); _d < _e.length; _d++) {
                    var elementVm = _e[_d];
                    (elementVm.name() === this.primaryElementName())
                        ? elementVm.quoteWarningIconDisplayHandler(true)
                        : elementVm.quoteWarningIconDisplayHandler(false);
                }
            }
        }
    };
    /**
     * Create a new quote for the current address
     */
    QuoteVm.prototype.resetQuote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var quoteModel, request, livingSpaceElement, updated, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        quoteModel = this.quote();
                        if (!quoteModel)
                            throw "Quote was not defined.";
                        request = {
                            AddressKey: quoteModel.AddressKey,
                            Address: quoteModel.QuoteProperty.FullAddress,
                            NonSingleFamilyResidenceConfirmed: true
                        };
                        // If the LivingSpace value from QuoteProperty isn't set, try to get it from the LivingSpace element.
                        // Note that this means that quotes which didn't initially have a living space won't get this reset.
                        if (!quoteModel.QuoteProperty.LivingSpace) {
                            livingSpaceElement = Enumerable.from(quoteModel.Elements).firstOrDefault(function (x) { return x.ElementName === Constants.ElementNames.livingSpace; });
                            if (livingSpaceElement && Util.isNumeric(livingSpaceElement.Value)) {
                                request.LivingSpace = Util.asNumber(livingSpaceElement.Value);
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.createQuote(request)];
                    case 2:
                        updated = _a.sent();
                        this.load(updated);
                        Storage.setQuoteId(updated.QuoteId);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        Common.handleGeneralError(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QuoteVm.prototype.buy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("submitting");
                        if (!(this.errors().length !== 0)) return [3 /*break*/, 1];
                        console.log(this.errors().length + " validation errors encountered");
                        this.errors.showAllMessages();
                        return [3 /*break*/, 12];
                    case 1:
                        if (!(this.premiumErrors().length > 0)) return [3 /*break*/, 2];
                        this.displayPremiumErrors(true);
                        return [2 /*return*/];
                    case 2:
                        if (!isOnlyAgent()) return [3 /*break*/, 11];
                        return [4 /*yield*/, MembershipApi.agentEOValid()];
                    case 3:
                        if (!!(_a.sent())) return [3 /*break*/, 5];
                        return [4 /*yield*/, Common.showAlertAsync(Common.AlertType.Warning, 'Please note your Errors and Omissions Coverage has expired. To avoid interruption when using the Swyfft platform, please forward your updated Errors and Omissions information to marketingteam@swyfft.com. Thank you.', "eo-warning")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5: return [4 /*yield*/, MembershipApi.agentLicenseValid(this.stateCode)];
                    case 6:
                        if (!!(_a.sent())) return [3 /*break*/, 8];
                        return [4 /*yield*/, Common.showAlertAsync(Common.AlertType.Warning, 'Please note your license for this state has expired. To avoid interruption when using the Swyfft platform, please forward your updated license information to marketingteam@swyfft.com. Thank you.', "eo-warning")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                    case 8: return [4 /*yield*/, MembershipApi.agentEOExpires(10)];
                    case 9:
                        if (!_a.sent()) return [3 /*break*/, 11];
                        return [4 /*yield*/, Common.showAlertAsync(Common.AlertType.Warning, 'Please note your Errors and Omissions Coverage will expire soon. To avoid interruption when using the Swyfft platform, please forward your updated Errors and Omissions information to marketingteam@swyfft.com. Thank you.', "eo-warning")];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        this.displayPremiumErrors(false);
                        this.purchaseQuote();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    QuoteVm.prototype.purchaseQuote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var quoteModel_1, annualPremium, updated, getPremiumErr_1, err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        quoteModel_1 = this.quote();
                        if (!quoteModel_1)
                            throw "Quote was not defined.";
                        return [4 /*yield*/, HOApi.getQuotePremium(quoteModel_1.QuoteId)];
                    case 1:
                        annualPremium = _a.sent();
                        if (!(annualPremium !== quoteModel_1.AnnualPremium)) return [3 /*break*/, 6];
                        console.log("The local quote's premium was $" + quoteModel_1.AnnualPremium + ", but the remote quote had $" + annualPremium);
                        Common.showAlert(Common.AlertType.Warning, "The quote has changed. We've reloaded it so you can review before purchasing.");
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Common.getQuoteById(quoteModel_1.QuoteId)];
                    case 3:
                        updated = _a.sent();
                        this.load(updated);
                        return [3 /*break*/, 5];
                    case 4:
                        getPremiumErr_1 = _a.sent();
                        Common.handleGeneralError(getPremiumErr_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                    case 6:
                        // Check to make sure the quoted property is a single family residence.
                        if (!this.isNonSingleResidencePropertyConfirmed && (quoteModel_1.QuoteProperty.LandUseCode !== 163 || quoteModel_1.QuoteProperty.PropertyIndicatorCode !== 10)) {
                            SingleFamilyResidenceConfirmationModal_1.default.show({
                                okFunction: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, HOApi.setNonSingleFamilyResidencePurchaseConfirmation(quoteModel_1.QuoteId)];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, this.repurchaseQuote()];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                            });
                            return [2 /*return*/];
                        }
                        // ks 2/17/16 - If the loss elements and living space elements have been adjusted,
                        // go straight to the purchase page. Otherwise, confirm one or the other or both.
                        return [4 /*yield*/, this.confirmationVm.load(quoteModel_1)];
                    case 7:
                        // ks 2/17/16 - If the loss elements and living space elements have been adjusted,
                        // go straight to the purchase page. Otherwise, confirm one or the other or both.
                        _a.sent();
                        if (this.confirmationVm.allValid()) {
                            Common.navigate(Constants.pages.Purchase);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.confirmationVm.show()];
                    case 8:
                        _a.sent();
                        if (!this.confirmationVm.changed()) {
                            Common.navigate(Constants.pages.Purchase);
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        err_3 = _a.sent();
                        Common.handleGeneralError(err_3);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QuoteVm.prototype.repurchaseQuote = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isNonSingleResidencePropertyConfirmed = true;
                        return [4 /*yield*/, this.purchaseQuote()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuoteVm.prototype.reset = function () {
        if (confirm('Do you want to reset the quote values to their defaults?')) {
            this.resetQuote();
        }
    };
    QuoteVm.prototype.setIsDesktop = function () {
        this.isDesktop(window.innerWidth >= 1024);
    };
    QuoteVm.prototype.submit = function () {
        if (this.errors().length !== 0) {
            console.log(this.errors().length + " validation errors encountered");
            this.errors.showAllMessages();
        }
        else {
            this.acceptReprice();
        }
    };
    /**
    * Submit the current quote as purchased to IMS (i.e., handle the "Submit" button on the reprice version of the page)
    */
    QuoteVm.prototype.acceptReprice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repriceModel, quoteModel, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repriceModel = Storage.getRepriceModel();
                        if (!Common.state.isReprice || !repriceModel) {
                            console.error('This does not appear to be a valid state for a reprice operation');
                            return [2 /*return*/];
                        }
                        quoteModel = this.quote();
                        if (!quoteModel)
                            throw "Quote was not defined.";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.acceptReprice(quoteModel.QuoteId, repriceModel)];
                    case 2:
                        _a.sent();
                        Common.navigate(Constants.pages.Home);
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        Common.handleGeneralError(err_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Navigate to purchase page to edit payment information before submitting
     */
    QuoteVm.prototype.editPayment = function () {
        var quoteModel = this.quote();
        if (!quoteModel)
            throw "Quote was not defined.";
        if (this.errors().length !== 0) {
            console.log(this.errors().length + " validation errors encountered");
            this.errors.showAllMessages();
        }
        else {
            var repriceModel = Storage.getRepriceModel();
            if (!Common.state.isReprice || !repriceModel) {
                console.error('This does not appear to be a valid state for a reprice operation');
                return;
            }
            if (this.isRenewal() || this.isSetBill()) {
                Common.navigate(Constants.pages.Purchase +
                    ("?id=" + quoteModel.QuoteId + "&activity=" + (this.isRenewal() ? Constants.reentries.renew : Constants.reentries.rewrite)));
            }
            else {
                console.error('This button is not yet valid for any transactions other than renewal');
            }
        }
    };
    QuoteVm.prototype.showPrintDialog = function () {
        window.print();
    };
    QuoteVm.prototype.showEmailDialog = function () {
        var quoteModel = this.quote();
        if (!quoteModel)
            throw "Quote was not defined.";
        this.emailVm.show(quoteModel, this.isAgent());
    };
    QuoteVm.prototype.showHubModal = function () {
        var _this = this;
        HubContactModal_1.default.show({
            okText: "CONTACT A HUB AGENT",
            okFunction: function (emailRequest) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, EmailApi.emailHubQuote(this.quoteId(), emailRequest)];
                        case 1:
                            _a.sent();
                            this.hubContacted(true);
                            Storage.setHubContacted("true");
                            return [2 /*return*/];
                    }
                });
            }); },
            cancelFunction: function () {
                _this.hubIgnored(true);
                _this.buy();
            }
        });
        return;
    };
    QuoteVm.prototype.showQuoteDetailDialog = function () {
        var _this = this;
        HOApi.getQuoteDetails(this.quoteId()).then(function (data) {
            Storage.setQuoteDetails(data);
            _this.detailsVm.show(data, _this.address());
        }).catch(function (e) { Common.handleGeneralError(e); });
    };
    return QuoteVm;
}());
exports.QuoteVm = QuoteVm;
var QuotePremiumErrorVm = /** @class */ (function () {
    function QuotePremiumErrorVm(error) {
        this.elementName = ko.observable('');
        this.message = ko.observable('');
        this.orderBy = ko.observable();
        this.elementName(error.ElementName);
        this.message(error.Message);
        this.orderBy(error.OrderNumber || 0);
    }
    QuotePremiumErrorVm.prototype.fetchDisplayName = function () {
        var _this = this;
        var el = quoteElements.filter(function (el) { return el.ElementName === _this.elementName(); })[0];
        // If the element was found within quoteElements, return el.ElementDisplay. Otherwise, return an empty string.
        // EW 2017-06-26: Not all QoutePremiumErrors link back to a real element, i.e., Purchase Moratoriums are linked
        // to the County element.
        return el ? el.ElementDisplay : '';
    };
    return QuotePremiumErrorVm;
}());
exports.QuotePremiumErrorVm = QuotePremiumErrorVm;
var QuoteFeeVm = /** @class */ (function () {
    function QuoteFeeVm(fee) {
        this.name = ko.observable('');
        this.type = ko.observable('');
        this.displayName = ko.observable('');
        this.value = ko.observable('');
        this.orderBy = ko.observable();
        this.name(fee.Name);
        this.type(fee.Type);
        this.displayName(fee.DisplayName);
        this.value(fee.Value.toFixed(2));
        this.orderBy(fee.OrderNumber || 0);
    }
    QuoteFeeVm.prototype.sortFees = function (fees) {
        fees = Enumerable.from(fees).orderBy(function (x) { return x.orderBy(); }).toArray();
        return fees;
    };
    return QuoteFeeVm;
}());
exports.QuoteFeeVm = QuoteFeeVm;
var QuoteWarningVm = /** @class */ (function () {
    function QuoteWarningVm(warning) {
        this.warningInstance = ko.observable('');
        this.warningInstance(warning);
    }
    return QuoteWarningVm;
}());
exports.QuoteWarningVm = QuoteWarningVm;
var QuoteEventVm = /** @class */ (function () {
    function QuoteEventVm(event) {
        this.agent = ko.observable('');
        this.event = ko.observable('');
        this.notes = ko.observable('');
        this.annualPremium = ko.observable(0);
        this.ipAddress = ko.observable('');
        this.location = ko.observable('');
        this.createDate = ko.observable('');
        this.agent(event.Agent);
        this.event(event.Event);
        this.notes(event.Notes);
        this.annualPremium(event.AnnualPremium);
        this.ipAddress(event.IpAddress);
        this.location(event.Location);
        this.createDate(moment(event.CreateDate).format(exports.dateTimeFormat));
    }
    return QuoteEventVm;
}());
exports.QuoteEventVm = QuoteEventVm;
var QuoteDetailsVm = /** @class */ (function () {
    function QuoteDetailsVm() {
        var _this = this;
        this.showModal = ko.observable(false);
        this.address = ko.observable('');
        this.quoteId = ko.observable('');
        this.createDate = ko.observable('');
        this.modifiedOn = ko.observable('');
        this.quoteEvents = ko.observableArray();
        this.searchString = ko.observable('');
        this.filteredQuoteEvents = ko.computed(function () {
            if (Util.isEmpty(_this.searchString()))
                return _this.quoteEvents();
            var lSearch = _this.searchString().toLowerCase().split(/[\s,]+/);
            return Enumerable.from(_this.quoteEvents()).where(function (q) {
                for (var i = 0; i < lSearch.length; i++) {
                    if ((q.agent() || '').toLowerCase().indexOf(lSearch[i]) === -1 &&
                        (q.event() || '').toLowerCase().indexOf(lSearch[i]) === -1 &&
                        (q.notes() || '').toLowerCase().indexOf(lSearch[i]) === -1 &&
                        (q.annualPremium() || '').toString().toLowerCase().indexOf(lSearch[i]) === -1 &&
                        (q.ipAddress() || '').toLowerCase().indexOf(lSearch[i]) === -1 &&
                        (q.location() || '').toLowerCase().indexOf(lSearch[i]) === -1 &&
                        q.createDate().toLowerCase().indexOf(lSearch[i]) === -1) {
                        return false;
                    }
                }
                return true;
            }).toArray();
        }, this);
        this.isBusy = ko.observable(false);
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
    }
    QuoteDetailsVm.prototype.show = function (details, address) {
        var _this = this;
        this.errors.showAllMessages(false);
        this.address(address);
        this.quoteId(details.QuoteId);
        this.createDate(moment(details.CreateDate).format(exports.dateTimeFormat));
        this.modifiedOn(moment(details.ModifiedOn).format(exports.dateTimeFormat));
        this.quoteEvents([]);
        Enumerable.from(details.QuoteEvents)
            .forEach(function (event) {
            var eventVm = new QuoteEventVm(event);
            _this.quoteEvents.push(eventVm);
        });
        this.showModal(true);
        Common.state.isDialogOpen = true;
    };
    QuoteDetailsVm.prototype.close = function () {
        this.showModal(false);
        Common.state.isDialogOpen = false;
    };
    return QuoteDetailsVm;
}());
exports.QuoteDetailsVm = QuoteDetailsVm;
/**
 * The VM which manages the replacement cost input field at the top of the quote page.
 */
var RcVm = /** @class */ (function () {
    function RcVm(quoteVm) {
        this.quoteVm = quoteVm;
        this.element = new Element.ElementVm(quoteVm);
    }
    RcVm.prototype.load = function (localRcElement) {
        this.element.load(localRcElement);
    };
    return RcVm;
}());
exports.RcVm = RcVm;
/**
 * The VM which manages the primary deductible choices at the top of the quote page.
 */
var DeductibleVm = /** @class */ (function () {
    function DeductibleVm(quoteVm) {
        this.quoteVm = quoteVm;
        this.visibleChoices = ko.observableArray();
        this.currentPosition = ko.observable();
        this.element = new Element.ElementVm(quoteVm);
    }
    /**
     * Sometimes (frequently) there are more deductible choices than we want to display in the main bubble at the top of the page.
     * When that's the case, we need to have a semi-intelligent way of selecting which ones to display.
     * The logic goes:
     * - If there's a choice that matches the current value of the element, add it.
     * - If there's a choice that has its "showOnPrimary" set, add it.
     * - Add the rest of the choices in order until we have a total of 3.
     * - Sort them.
     */
    DeductibleVm.prototype.load = function (deductibleElement) {
        this.element.choices([]);
        this.element.load(deductibleElement);
        // If this element came down from the server with exactly the right number of choices, show those.
        var visibleChoices;
        if (this.element.choices().length <= 3) {
            visibleChoices = this.element.choices();
        }
        else {
            // Otherwise, load those choices semi-intelligently.
            // Add any choice that matches the selected value of the element.
            visibleChoices = [];
            visibleChoices = this.getSelectedChoice(visibleChoices);
            // Add any choices that have the "showOnPrimary()" flag set.
            this.getMandatoryDisplayChoices(visibleChoices);
            // Add any remaining choices in order.
            this.getRemainingChoices(visibleChoices);
        }
        // Sort the visible choices
        this.visibleChoices(this.sortVisibleChoices(visibleChoices));
        //Assign visible choices after running through WindHail sorting check
        this.visibleChoices(this.sortWindHailChoices(this.visibleChoices()));
        //set current index/position
        var selectedIndex = this.selectedIndex();
        this.currentPosition(selectedIndex);
    };
    DeductibleVm.prototype.selectedIndex = function () {
        var choices = this.visibleChoices();
        if (choices.length) {
            for (var i = 0; i < choices.length; i++) {
                if (Util.matches(choices[i].value(), this.element.value())) {
                    return i;
                }
            }
        }
        return -1;
    };
    // Add any choice that matches the selected value of the element.
    DeductibleVm.prototype.getSelectedChoice = function (visibleChoices) {
        var _this = this;
        var selectedChoice = Enumerable.from(this.element.choices())
            .firstOrDefault(function (c) { return Util.matches(c.value(), _this.element.value()); });
        if (selectedChoice && visibleChoices.indexOf(selectedChoice) === -1)
            visibleChoices.push(selectedChoice);
        return visibleChoices;
    };
    // Add any choices that have the "showOnPrimary()" flag set.
    DeductibleVm.prototype.getMandatoryDisplayChoices = function (visibleChoices) {
        for (var _i = 0, _a = this.element.choices(); _i < _a.length; _i++) {
            var choice = _a[_i];
            if (visibleChoices.length >= 3)
                break;
            if (choice.showOnPrimary() && visibleChoices.indexOf(choice) < 0) {
                visibleChoices.push(choice);
            }
        }
    };
    // Add any remaining choices in order.
    DeductibleVm.prototype.getRemainingChoices = function (visibleChoices) {
        for (var _i = 0, _a = this.element.choices(); _i < _a.length; _i++) {
            var choice = _a[_i];
            if (visibleChoices.length >= 3)
                break;
            if (visibleChoices.indexOf(choice) < 0) {
                visibleChoices.push(choice);
            }
        }
    };
    // Sort the visible choices
    DeductibleVm.prototype.sortVisibleChoices = function (visibleChoices) {
        var sortedChoices = Enumerable.from(visibleChoices).orderBy(function (x) { return x.index(); }).toArray();
        return sortedChoices;
    };
    //If primary deductible choices contain percentage and integer values, sort them so that integers show up first (eg. 1000, 2000, 3%, 5%)
    DeductibleVm.prototype.sortWindHailChoices = function (visibleChoices) {
        var _this = this;
        var percentageArray = visibleChoices.filter(function (choice) { return parseFloat(choice.value()) < 1; });
        var integerArray = visibleChoices.filter(function (choice) { return parseFloat(choice.value()) > 1; });
        if (percentageArray.length > 0) {
            visibleChoices = integerArray.concat(percentageArray);
            visibleChoices.sort(function (a, b) {
                return _this.normalizePercentageChoices(a) - _this.normalizePercentageChoices(b);
            });
        }
        return visibleChoices;
    };
    //multiplies choice value by rC, in order to sort by actual deductible cash value
    DeductibleVm.prototype.normalizePercentageChoices = function (choice) {
        var numericValue = parseFloat(choice.value());
        var quoteModel = this.quoteVm.quote();
        if (!quoteModel)
            throw "Quote was not defined.";
        if (numericValue < 1) {
            var rCElementValue = Util.asNumber(quoteModel.Elements.filter(function (el) { return el.ElementName === Constants.ElementNames.replacementCost; })[0].Value);
            return (numericValue * rCElementValue);
        }
        else {
            return numericValue;
        }
    };
    return DeductibleVm;
}());
exports.DeductibleVm = DeductibleVm;
/**
 * The ViewModel for the confirmation modal we show when someone clicks the Buy button, and hasn't specified or confirmed
 * values for certain key elements (typically Loss History and Living Space, but in CA also Year Built).
 */
var ConfirmationVm = /** @class */ (function (_super) {
    __extends(ConfirmationVm, _super);
    function ConfirmationVm(quoteVm) {
        var _this = _super.call(this) || this;
        _this.quoteVm = quoteVm;
        //#region Initialization
        _this.confirmationPanel = "confirmation";
        _this.panel = ko.observable('');
        _this.elements = ko.observableArray();
        _this.currentValue = ko.observable('');
        _this.allValid = ko.pureComputed(function () {
            return _this.elements().every(function (self) { return _this.isConfirmed(self); });
        });
        _this.originalAnnualPremium = 0;
        _this.displayChoiceErrors = ko.observable(false);
        return _this;
    }
    /**
     * True if something important has changed, i.e., numLosses was set to > 1, or living space changed.
     */
    ConfirmationVm.prototype.changed = function () {
        return this.quote.AnnualPremium !== this.originalAnnualPremium;
    };
    ConfirmationVm.prototype.load = function (quote) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.quote = quote;
                        this.panel('');
                        this.livingSpaceChecked = Storage.getLivingSpaceChecked(this.quoteVm.addressKey());
                        _a = this;
                        return [4 /*yield*/, HOApi.getRequiredElementGroup(quote.AddressKey)];
                    case 1:
                        _a.elementGroup = _b.sent();
                        if (!quote.AnnualPremium)
                            throw "Quote.AnnualPremium was not set";
                        this.originalAnnualPremium = quote.AnnualPremium;
                        this.elements.removeAll();
                        this.createElementViewModels(this.elementGroup);
                        this.displayChoiceErrors(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationVm.prototype.createElementViewModels = function (elementGroup) {
        var _this = this;
        elementGroup.ElementNames.forEach(function (elementName) {
            var elementInstance = Enumerable.from(_this.quote.Elements).first(function (x) { return x.ElementName === elementName; });
            var evm = new Element.ElementVm(_this.quoteVm);
            evm.load(elementInstance);
            if (!_this.isConfirmed(evm) && !(elementName === Constants.ElementNames.livingSpace && _this.livingSpaceChecked)) {
                _this.elements.push(evm);
            }
        });
    };
    ConfirmationVm.prototype.show = function () {
        this.showElements();
        return _super.prototype.show.call(this);
    };
    ConfirmationVm.prototype.showElements = function () {
        var _this = this;
        if (!this.elements().length) {
            this.showConfirmation();
            return;
        }
        this.elements().forEach(function (element) {
            var eVm = element;
            if (!_this.isConfirmed(eVm)) {
                eVm.isEditable(true);
            }
            else {
                eVm.isEditable(false);
            }
        });
    };
    ConfirmationVm.prototype.isConfirmed = function (evm) {
        if (evm.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Boolean)
            return false;
        return !!evm.el.UpdatedOn && evm.isValid();
    };
    /**
     * If anything important has changed, shows the final confirmation panel,
     * otherwise closes the modal.
     */
    ConfirmationVm.prototype.showConfirmation = function () {
        if (this.changed()) {
            console.log("premium changed from " + this.originalAnnualPremium + " to " + this.quote.AnnualPremium);
            this.panel(this.confirmationPanel);
        }
        else {
            this.ok();
        }
    };
    //#endregion
    //#region Panel Methods
    ConfirmationVm.prototype.rangeCheck = function (evm) {
        var val = parseFloat(evm.value());
        var min = evm.minValue();
        var max = evm.maxValue();
        if (min != null && val < min)
            return false;
        if (max != null && val > max)
            return false;
        return true;
    };
    ConfirmationVm.prototype.checkBool = function (evm) {
        if (evm.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Boolean && evm.el.CorrectValue !== undefined)
            return evm.value() === evm.targetValue();
        return true;
    };
    ConfirmationVm.prototype.confirmAllElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elDtoArray, _i, _a, element, localDtoInstance, quote;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.showModal())
                            return [2 /*return*/];
                        elDtoArray = [];
                        for (_i = 0, _a = this.elements(); _i < _a.length; _i++) {
                            element = _a[_i];
                            if ('' === element.value() || !element.isValid()) {
                                this.displayChoiceErrors(true);
                                alert("Please provide a valid entry for " + element.el.ElementDisplay + ".");
                                return [2 /*return*/];
                            }
                            if (!this.rangeCheck(element)) {
                                alert("Please provide a value between " + element.minValue() + " and " + element.maxValue() + " for " + element.el.ElementDisplay);
                                return [2 /*return*/];
                            }
                            if (!this.checkBool(element)) {
                                this.displayChoiceErrors(true);
                                alert(element.warning() || "Please confirm the statement by selecting " + element.targetString() + " before continuing.");
                                return [2 /*return*/];
                            }
                            localDtoInstance = new ElementDto(element.el.ElementName, element.value());
                            elDtoArray.push(localDtoInstance);
                        }
                        ;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 3, 4]);
                        this.isBusy(true);
                        return [4 /*yield*/, this.quoteVm.patchQuote(elDtoArray, 'Confirmation Modal Update')];
                    case 2:
                        quote = _b.sent();
                        if (quote) {
                            this.quote = quote;
                            this.showConfirmation();
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.isBusy(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ConfirmationVm;
}(Common.ModalVm));
exports.ConfirmationVm = ConfirmationVm;
var EmailVm = /** @class */ (function () {
    function EmailVm() {
        this.showModal = ko.observable(false);
        this.address = ko.observable('');
        this.isBusy = ko.observable(false);
        this.annualPremium = ko.observable();
        this.grossAnnualPayment = ko.observable();
        this.monthlyPayment = ko.observable();
        this.submitted = ko.observable(false);
        this.message = ko.observable('');
        this.isAgent = ko.observable(false);
        //Note that the RegEx pattern extender must come before the email extender, otherwise the 'email: false' validation error message will be shown every time.
        this.email = ko.observable('')
            .extend({ pattern: { message: 'Email address cannot contain spaces.', params: '^\\S*$' } })
            .extend({ required: true, email: true });
        this.phone = ko.observable('')
            .extend({ stripAlphas: true, phoneUS: true, maxLength: 20 });
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
    }
    EmailVm.prototype.show = function (quote, isAgent) {
        this.errors.showAllMessages(false);
        this.quote = quote;
        this.address(quote.QuoteProperty.FullAddress);
        this.annualPremium(quote.AnnualPremium);
        this.monthlyPayment(quote.MonthlyPayment);
        this.grossAnnualPayment(quote.GrossAnnualPayment);
        this.isAgent(isAgent);
        this.submitted(false);
        this.showModal(true);
        Common.state.isDialogOpen = true;
    };
    EmailVm.prototype.sendEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var emailQuoteInfo, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted(true);
                        if (!(this.errors().length !== 0)) return [3 /*break*/, 1];
                        console.log(this.errors().length + " validation errors encountered");
                        this.errors.showAllMessages();
                        return [3 /*break*/, 6];
                    case 1:
                        emailQuoteInfo = {
                            Email: this.email(),
                            Phone: this.phone(),
                            Message: this.message()
                        };
                        this.isBusy(true);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        if (!this.quote.QuoteProperty)
                            throw "Quote.QuoteProperty is not defined";
                        return [4 /*yield*/, EmailApi.emailQuote(this.quote.QuoteId, this.quote.QuoteProperty.Email, emailQuoteInfo)];
                    case 3:
                        _a.sent();
                        Common.showAlert(Common.AlertType.Success, 'The quote has been successfully mailed.');
                        return [3 /*break*/, 6];
                    case 4:
                        err_5 = _a.sent();
                        Common.handleGeneralError(err_5);
                        return [3 /*break*/, 6];
                    case 5:
                        this.isBusy(false);
                        this.close();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EmailVm.prototype.close = function () {
        this.showModal(false);
        Common.state.isDialogOpen = false;
    };
    return EmailVm;
}());
exports.EmailVm = EmailVm;
var ElementDto = /** @class */ (function () {
    function ElementDto(name, value) {
        this.name = name;
        this.value = value;
    }
    return ElementDto;
}());
exports.ElementDto = ElementDto;


/***/ }),

/***/ 218:
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

},[216]);
//# sourceMappingURL=quote.bundle.js.map