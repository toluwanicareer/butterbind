webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PurchaseComponents = __webpack_require__(193);
var Common = __webpack_require__(3);
__webpack_require__(199);
try {
    PurchaseComponents.init();
}
catch (ex) {
    Common.handleGeneralError(ex);
}


/***/ }),

/***/ 193:
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(4);
var HOApi = __webpack_require__(12);
var EmailApi = __webpack_require__(26);
var Common = __webpack_require__(3);
var Constants = __webpack_require__(5);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Validations = __webpack_require__(20);
var Main = __webpack_require__(8);
var FormFields_1 = __webpack_require__(13);
var Checker_1 = __webpack_require__(116);
var PaymentSelect_1 = __webpack_require__(194);
var PurchaseSuccessfulRibbon_1 = __webpack_require__(195);
var PurchaseHeader_1 = __webpack_require__(196);
var DateWrapper_1 = __webpack_require__(117);
var HubContactBtn_1 = __webpack_require__(197);
var MortgageForm_1 = __webpack_require__(118);
var AddressForm_1 = __webpack_require__(120);
var Events_1 = __webpack_require__(198);
var ValClass = __webpack_require__(59);
var Helpers = __webpack_require__(119);
var HubContactModal_1 = __webpack_require__(121);
var OptinModal_1 = __webpack_require__(122);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var react_bootstrap_1 = __webpack_require__(1);
var FieldTitle = function (props) {
    if (props.active)
        return (React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { xs: 6, md: 4 },
                React.createElement("h4", { className: "section-header-md" }, props.children))));
    else
        return React.createElement("span", { hidden: true });
};
var FieldTitle2 = function (props) {
    if (props.active)
        return (React.createElement("h4", { className: "top-payment-header-ly" },
            "You are paying with ",
            props.type));
    else
        return React.createElement("span", { hidden: true });
};
var AddInsured = function (props) {
    var firstName = props.myId + "f", lastName = props.myId + "l";
    return (React.createElement("div", null,
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { md: 5 },
                React.createElement(FormFields_1.FieldWrapper, { id: firstName, autoComplete: firstName, value: props.person.firstName, active: true, onChange: function (event) { return props.stateSet(props.person.setThis({ first: event.currentTarget.value })); }, label: "First Name", type: "text", maxLength: 50 })),
            React.createElement(react_bootstrap_1.Col, { md: 5 },
                React.createElement(FormFields_1.FieldWrapper, { id: lastName, autoComplete: lastName, value: props.person.lastName, active: true, onChange: function (event) { return props.stateSet(props.person.setThis({ last: event.currentTarget.value })); }, label: "Last Name", type: "text", maxLength: 50 })),
            React.createElement(react_bootstrap_1.Col, { md: 2, lg: 2 },
                React.createElement("button", { type: "button", className: "reset-button-ly reset-button-md reset-button-st", onClick: function (event) { props.remove(); } },
                    React.createElement("img", { src: "/images/purchase-reset-button.svg" }),
                    " ")))));
};
var AddAddButton = function (props) {
    return (React.createElement("input", { type: "button", id: "btnAdditionalInsured", className: "additional-ins-btn-md additional-ins-btn-st", value: "+ ADDITIONAL INSURED", onClick: function (event) { return props.onClick(); } }));
};
var AddInsuredList = function (props) {
    return (React.createElement("div", { className: "add-insured-row-ly row" },
        React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 12, lg: 12 },
            props.people.length > 0 && React.createElement("h4", { className: "section-header-md" }, "ADDITIONAL INSURED"),
            props.people.map(function (person, i, people) {
                return (React.createElement(AddInsured, { key: i, myId: props.baseId + i, person: person, stateSet: function (newVal) {
                        props.people[i] = newVal;
                        props.stateSet(props.people);
                    }, remove: function () {
                        var newAr = props.people.filter(function (x, j) { return j !== i; });
                        props.stateSet(newAr);
                    } }));
            }),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 4, lg: 4, mdOffset: 8, lgOffset: 8 },
                    React.createElement(AddAddButton, { onClick: function () {
                            props.people.push(new ValClass.Persona());
                            props.stateSet(props.people);
                        } }))))));
};
var PurchaseContainer = /** @class */ (function (_super) {
    __extends(PurchaseContainer, _super);
    function PurchaseContainer(props) {
        var _this = _super.call(this, props) || this;
        var email = '';
        var phone = '';
        if (props.ci) {
            email = props.ci.Email;
            phone = props.ci.Phone;
        }
        var pd = props.quote.QuoteProperty;
        _this.state = {
            paymentType: 'select',
            contactBank: false,
            //form values
            frequency: 'escrow',
            effectiveDate: new ValClass.Date("Please enter the date you would like your policy to take effect"),
            firstName: new ValClass.Value("Please enter your first name"),
            lastName: new ValClass.Value("Please enter your last name"),
            phone: new ValClass.Value("Please enter a valid phone number"),
            email: new ValClass.Value("Please enter a valid email address"),
            additionalInsureds: [],
            //card
            cardFirst: new ValClass.Value("Please enter the cardholder's first name"),
            cardLast: new ValClass.Value("Please enter the cardholder's last name"),
            cardNumber: new ValClass.Value("Please enter a valid card number"),
            cardExp: new ValClass.Date("Please enter your card's expiration date"),
            cvn: new ValClass.Value("Please enter the CVN number from the back of your card"),
            //eCheck
            acctNumber: new ValClass.Value(''),
            routeNumber: new ValClass.Value(''),
            acctOwner: new ValClass.Value(''),
            acctType: null,
            showValidation: false,
            termsAndConditions: false,
            newPurchase: false,
            contactPrev: false,
            insuredName: new ValClass.Value('Please enter the name of the primary insured'),
            insCompany: new ValClass.Value('Please enter the name of the insurance company'),
            policy: new ValClass.Value(''),
            eSig: new ValClass.Value(''),
            submitBtnEnabled: false
        };
        // Wire up defaults and error handling.
        _this.state.email.stateSet({
            value: email,
            problem: Validations.validateEmail(email)
                ? ''
                : "Please enter a valid email address",
            dirty: !!email
        });
        _this.state.phone.stateSet({
            value: phone,
            problem: Validations.validatePhoneNumber(phone)
                ? ''
                : "Please enter a valid phone number",
            dirty: !!phone
        });
        return _this;
    }
    PurchaseContainer.prototype.bindBillingAddressRef = function (ref) {
        if (ref) {
            this.getBillingAddressInfo = ref.getFormAddress.bind(ref);
            this.getBillingAddressErrors = ref.getInvalidKeys.bind(ref);
        }
    };
    PurchaseContainer.prototype.bindMailingAddressRef = function (ref) {
        if (ref) {
            this.getMailingAddressInfo = ref.getFormAddress.bind(ref);
            this.getMailingAddressErrors = ref.getInvalidKeys.bind(ref);
        }
    };
    PurchaseContainer.prototype.bindEscrowRef = function (ref) {
        if (ref) {
            this.getEscrowInfo = ref.getFormData.bind(ref);
            this.getEscrowErrors = ref.getInvalidKeys.bind(ref);
        }
    };
    PurchaseContainer.prototype.bindMortgageRef = function (ref) {
        if (ref) {
            this.getMortgageInfo = ref.getFormData.bind(ref);
            this.getMortgageErrors = ref.getInvalidKeys.bind(ref);
        }
    };
    PurchaseContainer.prototype.handleOptin = function () {
        var utmParameters = Storage.getUtmParameters();
        if (!Storage.hasAuth() && utmParameters && utmParameters.campaign === 'hi-ag-acq' && Storage.getCookie('swyfft-optin-purchase') !== 'true') {
            setTimeout(function () {
                OptinModal_1.default.show(utmParameters, function (isSignedUp) {
                    Storage.setCookie('swyfft-optin-purchase', isSignedUp.toString(), isSignedUp ? 365 : 30);
                });
            }, 3000);
        }
    };
    PurchaseContainer.prototype.onPaymentSelection = function (choice) {
        this.setState({
            paymentType: choice,
            frequency: 'escrow' === choice ? 'escrow' : this.state.frequency
        });
        console.log("Setting paymentType to " + choice);
    };
    PurchaseContainer.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var effDate, valErrors, pr, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        effDate = this.state.effectiveDate.moment();
                        if (effDate >= moment("20170706", "YYYYMMDD") && this.props.quote.CarrierCode.toUpperCase() === "NSIC") {
                            Common.showConfirm({
                                message: "The effective date for this quote must be earlier than 7/6/2017. You may click below to generate a quote that will work with that effective date.",
                                okText: "Generate",
                                okFunction: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.regenerateQuote()];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); },
                                type: Common.AlertType.Error
                            });
                            return [2 /*return*/];
                        }
                        valErrors = this.getInvalidKeys();
                        if (!!valErrors.length) {
                            Common.showError('<ul><li>' + valErrors.join('</li><li>') + '</li></ul>');
                            this.setState({ showValidation: true });
                            return [2 /*return*/];
                        }
                        Storage.setEmail(this.state.email.value);
                        Storage.setCoverageDate(effDate.toDate());
                        pr = this.getPurchaseRequest();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.purchasePolicy(this.props.quote.QuoteId, pr, this.props.activity)];
                    case 2:
                        _a.sent();
                        this.props.finish(this.state.email.value, this.state.effectiveDate.moment().format('l'), this.state.paymentType !== 'escrow', pr);
                        Events_1.Event.track(Events_1.EventType.Purchase);
                        window.scrollTo(0, 0);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        Common.handleGeneralError(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseContainer.prototype.regenerateQuote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pd, quoteCreateRequest, newQuote, reason_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pd = this.props.quote.QuoteProperty;
                        quoteCreateRequest = {
                            AddressKey: pd.AddressKey,
                            Address: Common.toAddress(pd),
                            LivingSpace: pd.LivingSpace,
                            ReferringAgent: Storage.getReferringAgent()
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.createQuote(quoteCreateRequest)];
                    case 2:
                        newQuote = _a.sent();
                        if (!newQuote.QuoteProperty)
                            throw "Quote.QuoteProperty was not defined";
                        Storage.setQuoteId(newQuote.QuoteId);
                        Common.navigate(Constants.pages.Quote);
                        return [3 /*break*/, 4];
                    case 3:
                        reason_1 = _a.sent();
                        error = Common.normalizeError(reason_1);
                        Common.handleGeneralError(error);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseContainer.prototype.getPurchaseRequest = function () {
        var pr = {
            QuoteId: this.props.quote.QuoteId,
            EffectiveDate: this.state.effectiveDate.toDate(),
            PremiumType: this.state.frequency,
            PaymentType: this.state.paymentType === 'eCheck'
                ? Constants.PaymentTypes[Constants.PaymentTypes.ECheck]
                : Constants.PaymentTypes[Constants.PaymentTypes.CreditCard],
            Insured: {
                FirstName: this.state.firstName.value.trim(),
                LastName: this.state.lastName.value.trim(),
                NameOnPolicy: this.state.firstName.value.trim() + " " + this.state.lastName.value.trim(),
                IsPrimary: true
            },
            AdditionalInsureds: this.state.additionalInsureds.reduce(function (arr, i) {
                if (i.filledOut) {
                    arr.push({
                        FirstName: i.firstName.trim(),
                        LastName: i.lastName.trim(),
                        NameOnPolicy: i.firstName.trim() + " " + i.lastName.trim(),
                        IsPrimary: false
                    });
                }
                return arr;
            }, []),
            MortgageInfo: this.state.paymentType === "escrow"
                ? this.getEscrowInfo()
                : this.getMortgageInfo(),
            CreditCard: {
                Number: this.state.cardNumber.value,
                Expires: this.state.cardExp.toExpString(),
                Cvv: this.state.cvn.value,
                FirstName: this.state.firstName.value,
                LastName: this.state.lastName.value,
                Phone: this.state.phone.value,
                Email: this.state.email.value
            },
            ECheck: this.state.paymentType === 'eCheck'
                ? {
                    AccountOwner: this.state.acctOwner.value,
                    AccountType: this.state.acctType || '',
                    RoutingNumber: this.state.routeNumber.value,
                    AccountNumber: this.state.acctNumber.value
                }
                : undefined,
            BillingAddress: this.getBillingAddressInfo(),
            MailingAddress: this.getMailingAddressInfo(),
            NewPurchase: this.state.newPurchase
        };
        return pr;
    };
    PurchaseContainer.prototype.getInvalidKeys = function () {
        var state = this.state, keyset = Object.keys(state), payType = state.paymentType;
        var errors = payType === "escrow"
            ? this.getEscrowErrors()
            : this.getMortgageErrors();
        var mailingAddressErrors = this.getMailingAddressErrors();
        if (mailingAddressErrors && mailingAddressErrors.length > 0) {
            errors = errors.concat(mailingAddressErrors);
        }
        var billingAddressErrors = this.getBillingAddressErrors();
        if (billingAddressErrors && billingAddressErrors.length > 0) {
            errors = errors.concat(billingAddressErrors);
        }
        return keyset.reduce(function (previous, key) {
            var val = '';
            if (state[key] instanceof ValClass.Value)
                val = state[key].value;
            else if (state[key] instanceof ValClass.Date)
                val = state[key].toDate();
            switch (key) {
                case 'firstName':
                case 'lastName':
                case 'phone':
                case 'email':
                case 'effectiveDate':
                    if (!!state[key].errorMessage) {
                        previous.push(state[key].errorMessage);
                        console.log(key + " has an invalid value: " + val);
                    }
                    break;
                case 'frequency':
                    if (payType !== 'escrow' && state[key] === 'escrow') {
                        previous.push('Please select Monthly or Annual payments');
                    }
                    break;
                case 'termsAndConditions':
                    if (!state.termsAndConditions) {
                        previous.push('Please review and accept our Terms & Conditions');
                    }
                    break;
                case 'cardFirst':
                case 'cardLast':
                case 'cardNumber':
                case 'cardExp':
                case 'cvn':
                    if (payType === 'card' && !!state[key].errorMessage) {
                        previous.push(state[key].errorMessage);
                        console.log(key + " has an invalid value: " + val);
                    }
                    break;
                case 'acctNumber':
                case 'routeNumber':
                case 'acctOwner':
                    if (payType === 'eCheck' && !!state[key].errorMessage) {
                        previous.push(state[key].errorMessage);
                        console.log(key + " has an invalid value: " + val);
                    }
                    break;
                case 'acctType':
                    if (payType === 'eCheck' && null === state[key])
                        previous.push('Please choose checking or savings account');
                    break;
                default:
            }
            return previous;
        }, errors);
    };
    PurchaseContainer.prototype.isAgent = function () {
        return !!Storage.hasAuth();
    };
    PurchaseContainer.prototype.interceptEnterKey = function (event) {
        var keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
            event.preventDefault();
        }
    };
    PurchaseContainer.prototype.render = function () {
        var _this = this;
        var independentAgent = Common.isInRole(Constants.AccessRole.IndependentAgent);
        if (this.props.active)
            return (React.createElement("div", null,
                React.createElement(PaymentSelect_1.default, { active: this.state.paymentType === 'select', stateSet: function (pt) { return _this.onPaymentSelection(pt); } }),
                React.createElement("div", { className: "headspace-ly" }),
                React.createElement(PurchaseHeader_1.default, { quote: this.props.quote, paymentType: this.state.paymentType, isHubCustomer: this.props.isHubCustomer }),
                React.createElement("div", { className: "payment-form-container-md" },
                    React.createElement("form", { onKeyUp: this.interceptEnterKey, onKeyPress: this.interceptEnterKey, onSubmit: function (event) {
                            event.preventDefault();
                            _this.onSubmit();
                        }, className: "container", autoComplete: this.isAgent() ? "off" : "on", id: "payment-form" },
                        React.createElement(react_bootstrap_1.Row, null,
                            React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 10, lg: 10, mdOffset: 1, lgOffset: 1, className: "parent-container-ly" },
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { hidden: !this.isAgent(), xs: 12, sm: 12, md: 12, lg: 12, className: "agent-options-container-md" },
                                        React.createElement(FieldTitle2, { type: "credit card", active: 'card' === this.state.paymentType }),
                                        React.createElement(FieldTitle2, { type: "escrow", active: 'escrow' === this.state.paymentType }),
                                        React.createElement(FieldTitle2, { type: "echeck account", active: 'eCheck' === this.state.paymentType }),
                                        React.createElement("a", { href: "#", onClick: function (event) { return _this.setState({ paymentType: 'select' }); } }, "change payment type"))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { hidden: this.state.paymentType === 'escrow', xs: 12, sm: 12, md: 12, lg: 12 },
                                        React.createElement("label", { hidden: this.state.paymentType === 'escrow', className: "input-field-label-md" }, "PAYMENT TYPE:"),
                                        React.createElement(react_bootstrap_1.Row, { className: "container" },
                                            React.createElement(Checker_1.default, { id: "pay-monthly", label: "MONTHLY - " + Common.formatCurrencyUS(this.props.quote.MonthlyPayment) + " /mo", active: this.state.paymentType !== 'escrow', checked: this.state.frequency === 'monthly', onClick: function (x) { return _this.setState({ frequency: 'monthly' }); }, secondaryLabel: true, secondaryLabelValues: [this.props.quote.GrossDownPayment, this.props.quote.MonthlyPayment] })),
                                        React.createElement(react_bootstrap_1.Row, { className: "container" },
                                            React.createElement(Checker_1.default, { id: "pay-annually", label: "ANNUAL - " + Common.formatCurrencyUS(this.props.quote.GrossAnnualPayment) + " /yr", active: this.state.paymentType !== 'escrow', checked: this.state.frequency === 'annual', onClick: function (x) { return _this.setState({ frequency: 'annual' }); } })))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 12, lg: 12 },
                                        React.createElement(DateWrapper_1.default, { id: "startdate", label: "Coverage Start Date:", active: true, invalidate: (this.state.showValidation || this.state.effectiveDate.dirty) &&
                                                !!this.state.effectiveDate.errorMessage, value: this.state.effectiveDate, withDay: true, stateSet: function (x) { return _this.setState({
                                                effectiveDate: x
                                            }); }, onBlur: function () {
                                                console
                                                    .log('minDate=' +
                                                    _this.props.minDate.format() +
                                                    '; maxDate=' +
                                                    _this.props.maxDate.format() +
                                                    '; effDate=' +
                                                    _this.state.effectiveDate.toDate());
                                                _this.setState({
                                                    effectiveDate: _this.state.effectiveDate.checkValid(true, function (d) { return d.isSameOrAfter(_this.props.minDate) && d.isSameOrBefore(_this.props.maxDate)
                                                        ? ''
                                                        : 'Please enter a coverage start date between ' + _this.props.minDate.format('l') + ' and ' + _this.props.maxDate.format('l'); })
                                                });
                                            } }))),
                                React.createElement("h4", { className: "section-header-md" }, "primary insured"),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 6, sm: 6, md: 6, lg: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "firstName", label: "First Name", autoComplete: this.isAgent() ? 'swyfftFirstName' : '', active: true, invalidate: (this.state.showValidation || this.state.firstName.dirty) &&
                                                !!this.state.firstName.errorMessage, value: this.state.firstName.value, type: "text", onChange: function (event) { return _this.setState({
                                                firstName: _this.state.firstName.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function (event) { return _this.setState({
                                                cardFirst: !_this.state.cardFirst.value ? _this.state.cardFirst.stateSet({
                                                    value: _this.state.firstName.value,
                                                    problem: Validations.validateField(_this.state.firstName.value)
                                                        ? ''
                                                        : "Please enter a valid cardholder's first name"
                                                }) : _this.state.cardFirst,
                                                acctOwner: ((!_this.state.acctOwner.value && _this.state.lastName.value) ||
                                                    (_this.state.acctOwner.value && (_this.state.acctOwner.value != _this.state.firstName.value + " " + _this.state.lastName.value))) ?
                                                    _this.state.acctOwner.stateSet({
                                                        value: (_this.state.firstName.value && _this.state.lastName.value) ?
                                                            _this.state.firstName.value + " " + _this.state.lastName.value :
                                                            "",
                                                        problem: ""
                                                    }) : _this.state.acctOwner,
                                                firstName: _this.state.firstName.stateSet({
                                                    problem: Validations.validateField(_this.state.firstName.value)
                                                        ? ''
                                                        : "Please enter a valid first name that is less than 50 characters in length",
                                                    dirty: true
                                                })
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 6, sm: 6, md: 6, lg: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "lastName", label: "Last Name", autoComplete: this.isAgent() ? 'swyfftLastName' : '', active: true, invalidate: (this.state.showValidation || this.state.lastName.dirty) &&
                                                !!this.state.lastName.errorMessage, value: this.state.lastName.value, type: "text", onChange: function (event) { return _this.setState({
                                                lastName: _this.state.lastName.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function (event) { return _this.setState({
                                                cardLast: !_this.state.cardLast.value ? _this.state.cardLast.stateSet({
                                                    value: _this.state.lastName.value,
                                                    problem: Validations.validateField(_this.state.lastName.value)
                                                        ? ''
                                                        : "Please enter a valid cardholder's last name"
                                                }) : _this.state.cardLast,
                                                acctOwner: ((!_this.state.acctOwner.value && _this.state.firstName.value) ||
                                                    (_this.state.acctOwner.value && (_this.state.acctOwner.value != _this.state.firstName.value + " " + _this.state.lastName.value))) ?
                                                    _this.state.acctOwner.stateSet({
                                                        value: (_this.state.firstName.value && _this.state.lastName.value) ?
                                                            _this.state.firstName.value + " " + _this.state.lastName.value :
                                                            "",
                                                        problem: ""
                                                    }) : _this.state.acctOwner,
                                                lastName: _this.state.lastName.stateSet({
                                                    problem: Validations.validateField(_this.state.lastName.value)
                                                        ? ''
                                                        : "Please enter a valid last name that is less than 50 characters in length",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 6, lg: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "phone", label: "Phone", autoComplete: this.isAgent() ? 'swyfftPhone' : '', value: this.state.phone.value, active: true, invalidate: (this.state.showValidation || this.state.phone.dirty) &&
                                                !!this.state.phone.errorMessage, type: "tel", onChange: function (event) { return _this.setState({
                                                phone: _this.state.phone.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function () { return _this.setState({
                                                phone: _this.state.phone.stateSet({
                                                    problem: Validations.validatePhoneNumber(_this.state.phone.value)
                                                        ? ''
                                                        : "Please enter a valid phone number",
                                                    dirty: true
                                                })
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 6, lg: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "email", label: "Email", autoComplete: this.isAgent() ? 'swyfftEmail' : '', active: true, maxLength: 320, invalidate: (this.state.showValidation || this.state.email.dirty) &&
                                                !!this.state.email.errorMessage, value: this.state.email.value, type: "email", onChange: function (event) { return _this.setState({
                                                email: _this.state.email.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function () { return _this.setState({
                                                email: _this.state.email.stateSet({
                                                    problem: Validations.validateEmail(_this.state.email.value)
                                                        ? ''
                                                        : "Please enter a valid email address",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(AddressForm_1.default, { id: "mailing-address", prefix: "mailing", isAgent: this.isAgent(), showValidation: this.state.showValidation, defaultAddress: this.props.quote.QuoteProperty, ref: this.bindMailingAddressRef.bind(this), visible: false }),
                                React.createElement(AddInsuredList, { baseId: "add-ins", people: this.state.additionalInsureds, stateSet: function (newVal) { return _this.setState({
                                        additionalInsureds: newVal
                                    }); } }),
                                React.createElement(FieldTitle, { active: 'card' === this.state.paymentType }, "credit card info"),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "card-first", label: "First Name", active: 'card' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.cardFirst.dirty) &&
                                                !!this.state.cardFirst.errorMessage, value: this.state.cardFirst.value, type: "text", onChange: function (event) { return _this.setState({
                                                cardFirst: _this.state.cardFirst.stateSet({
                                                    value: event.currentTarget.value,
                                                    problem: Validations.validateField(_this.state.cardFirst.value)
                                                        ? ''
                                                        : "Please enter a valid cardholder's first name",
                                                    dirty: true
                                                })
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "card-last", label: "Last Name", active: 'card' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.cardLast.dirty) &&
                                                !!this.state.cardLast.errorMessage, value: this.state.cardLast.value, type: "text", onChange: function (event) { return _this.setState({
                                                cardLast: _this.state.cardLast.stateSet({
                                                    value: event.currentTarget.value,
                                                    problem: Validations.validateField(_this.state.cardLast.value)
                                                        ? ''
                                                        : "Please enter a valid cardholder's last name",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "cardn", label: "Card Number", active: 'card' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.cardNumber.dirty) &&
                                                !!this.state.cardNumber.errorMessage, value: this.state.cardNumber.value, type: "text", onChange: function (event) { return _this.setState({
                                                cardNumber: _this.state.cardNumber.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function () { return _this.setState({
                                                //typescript insists that validateCardNumber can return 0. This should return false if vCN returns false or 0
                                                cardNumber: _this.state.cardNumber.stateSet({
                                                    value: Util.reduce(_this.state.cardNumber.value),
                                                    problem: !!Validations.validateCardNumber(Util.reduce(_this.state.cardNumber.value))
                                                        ? ''
                                                        : "Please enter a valid card number",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 9, sm: 9, md: 4, lg: 4 },
                                        React.createElement(DateWrapper_1.default, { id: "cardx", label: "Exp", active: 'card' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.cardExp.dirty) &&
                                                !!this.state.cardExp.errorMessage, value: this.state.cardExp, withDay: false, stateSet: function (x) { return _this.setState({
                                                cardExp: x
                                            }); }, onBlur: function () { return _this.setState({
                                                cardExp: _this.state.cardExp.checkValid(false, function (d) { return Validations.validateExpirationDate(d)
                                                    ? ''
                                                    : "Your card appears to be expired"; })
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 3, sm: 3, md: 2, lg: 2, mdOffset: 2, lgOffset: 2 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "cvn", label: "CVN", active: 'card' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.cvn.dirty) &&
                                                !!this.state.cvn.errorMessage, value: this.state.cvn.value, type: "number", onChange: function (event) { return _this.setState({
                                                cvn: _this.state.cvn.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function () { return _this.setState({
                                                cvn: _this.state.cvn.stateSet({
                                                    problem: Validations.validateCvn(_this.state.cvn.value)
                                                        ? ''
                                                        : "Please enter the CVN from the back of your card",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(AddressForm_1.default, { id: "billing-address", prefix: "billing", isAgent: this.isAgent(), showValidation: this.state.showValidation, defaultAddress: this.props.quote.QuoteProperty, ref: this.bindBillingAddressRef.bind(this), visible: true }),
                                React.createElement(FieldTitle, { active: 'escrow' === this.state.paymentType }, "mortgage information"),
                                this.state.paymentType === "escrow" &&
                                    React.createElement("div", null,
                                        React.createElement(react_bootstrap_1.Row, null,
                                            React.createElement(react_bootstrap_1.Col, { xs: 12 },
                                                React.createElement("p", { className: "post-purchase-section-p-md" }, "If you have a mortgage, it is very important that your lender/mortgagee be listed on your insurance policy."
                                                    + " In addition, we will provide your lender with your policy and invoice so that all premium payments are processed timely and there is no lapse in your insurance coverage."
                                                    + " Please provide that information below.")))),
                                React.createElement(MortgageForm_1.default, { id: "escrow", active: this.state.paymentType === "escrow", showValidation: this.state.showValidation, showFax: true, ref: this.bindEscrowRef.bind(this) }),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, lg: 6 },
                                        React.createElement(Checker_1.default, { id: "newpurchase", label: "THIS IS A NEW PURCHASE", active: this.props.active, checked: this.state.newPurchase, onClick: function (x) { return _this.setState({
                                                newPurchase: x
                                            }); } }))),
                                React.createElement(FieldTitle, { active: 'eCheck' === this.state.paymentType }, "echeck account info"),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "acctNumber", label: "Account Number", active: 'eCheck' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.acctNumber.dirty) &&
                                                !!this.state.acctNumber.errorMessage, value: this.state.acctNumber.value, type: "text", onChange: function (event) { return _this.setState({
                                                acctNumber: _this.state.acctNumber.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function (event) { return _this.setState({
                                                acctNumber: _this.state.acctNumber.stateSet({
                                                    problem: Validations.validateAccountNumber(_this.state.acctNumber.value)
                                                        ? ''
                                                        : "Please enter a valid account number",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, md: 5 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "routeNumber", name: "routeNumber", autoComplete: "routeNumber", label: "Routing Number", active: 'eCheck' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.routeNumber.dirty) &&
                                                !!this.state.routeNumber.errorMessage, value: this.state.routeNumber.value, type: "text", onChange: function (event) { return _this.setState({
                                                routeNumber: _this.state.routeNumber.stateSet({ value: event.currentTarget.value })
                                            }); }, onBlur: function (event) { return _this.setState({
                                                routeNumber: _this.state.routeNumber.stateSet({
                                                    problem: Validations.validateRoutingNumber(_this.state.routeNumber.value)
                                                        ? ''
                                                        : "Please enter a valid routing number",
                                                    dirty: true
                                                })
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, md: 7 },
                                        React.createElement(FormFields_1.FieldWrapper, { id: "acctOwner", name: "acctOwner", autoComplete: "acctOwner", label: "Account Owner", active: 'eCheck' === this.state.paymentType, invalidate: (this.state.showValidation || this.state.acctOwner.dirty) &&
                                                !!this.state.acctOwner.errorMessage, value: this.state.acctOwner.value, type: "text", onChange: function (event) { return _this.setState({
                                                acctOwner: _this.state.acctOwner.stateSet({
                                                    value: event.currentTarget.value,
                                                    problem: Validations.validateAdditionalInfoField(_this.state.acctOwner.value, 150)
                                                        ? ''
                                                        : "Please enter a name under 150 characters for the account owner",
                                                    dirty: true
                                                })
                                            }); } }))),
                                React.createElement(react_bootstrap_1.Row, { className: "container", hidden: 'eCheck' !== this.state.paymentType },
                                    React.createElement("div", null, "ACCOUNT TYPE")),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "echeck-checklabel-container-ly" },
                                        React.createElement(Checker_1.default, { id: "chk-acct", label: "CHECKING", active: 'eCheck' === this.state.paymentType, checked: 'checking' === this.state.acctType, onClick: function (x) { return _this.setState({
                                                acctType: 'checking'
                                            }); } })),
                                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "echeck-checklabel-container-ly" },
                                        React.createElement(Checker_1.default, { id: "sav-acct", label: "SAVINGS", active: 'eCheck' === this.state.paymentType, checked: 'savings' === this.state.acctType, onClick: function (x) { return _this.setState({
                                                acctType: 'savings'
                                            }); } }))),
                                React.createElement(FieldTitle, { active: 'escrow' !== this.state.paymentType }, "mortgage information"),
                                this.state.paymentType !== "escrow" &&
                                    React.createElement("div", null,
                                        React.createElement(react_bootstrap_1.Row, null,
                                            React.createElement(react_bootstrap_1.Col, { xs: 12 },
                                                React.createElement("p", { className: "post-purchase-section-p-md" }, "If you have a mortgage, it is very important that your lender/mortgagee be listed on your insurance policy.  Please provide that information below.")))),
                                React.createElement(MortgageForm_1.default, { id: "mortgage", active: this.state.paymentType !== "escrow", showValidation: this.state.showValidation, ref: this.bindMortgageRef.bind(this) }),
                                React.createElement("h4", { className: "section-header-md" }, "Terms & Conditions"),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, md: 10 },
                                        React.createElement(Checker_1.default, { id: "termsCheckbox", label: "I ACCEPT THE TERMS & CONDITIONS", active: this.props.active, checked: this.state.termsAndConditions, onClick: function (x) { return _this.setState({
                                                termsAndConditions: !_this.state.termsAndConditions
                                            }); }, externalUrl: "/privacy" }))),
                                React.createElement(react_bootstrap_1.Row, null,
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 4, lg: 3, mdOffset: 4, lgOffset: 9 },
                                        React.createElement("input", { className: "buy-policy-btn-md", type: "submit", id: "buy-btn", value: "Buy Policy" }))))),
                        " "))));
        else
            return React.createElement("span", { hidden: true });
    };
    return PurchaseContainer;
}(React.Component));
exports.PurchaseContainer = PurchaseContainer;
var PurchaseOverseer = /** @class */ (function (_super) {
    __extends(PurchaseOverseer, _super);
    function PurchaseOverseer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            purchaseComplete: false,
            showMortgage: true,
            showRibbon: false,
            showHubModal: false,
            email: "",
            startDate: "",
            downloadUrl: "",
            insuredName: ""
        };
        return _this;
    }
    PurchaseOverseer.prototype.finishPurchase = function (email, startDate, isEscrow, pr) {
        var _this = this;
        this.setState({
            purchaseComplete: true,
            showMortgage: isEscrow,
            showRibbon: !!Storage.getHubContacted() || !Main.isQuoteFromHub(this.props.quote.LastAgencyName),
            showHubModal: Main.isQuoteFromHub(this.props.quote.LastAgencyName) && !Storage.getHubContacted(),
            email: email,
            startDate: startDate,
            downloadUrl: "" /*For future implementation of a download link on the ribbon page*/,
            insuredName: pr.Insured.FirstName + " " + pr.Insured.LastName
        });
        if (this.state.showHubModal)
            HubContactModal_1.default.show({
                okText: "SEND QUOTE TO BROKER",
                okFunction: function (emailRequest) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, EmailApi.emailHubQuote(this.props.quote.QuoteId, emailRequest)];
                            case 1:
                                _a.sent();
                                Storage.setHubContacted("true");
                                Common.navigate(Constants.pages.Home);
                                return [2 /*return*/];
                        }
                    });
                }); },
                cancelFunction: function () { return Common.navigate(Constants.pages.Home); },
                purchaseSuccessDetails: {
                    startDate: startDate,
                    email: email
                }
            });
    };
    PurchaseOverseer.prototype.isHubQuote = function () {
        return !!this.props.quote.LastAgencyName && this.props.quote.LastAgencyName.toLowerCase().indexOf(Constants.agencyNames.HubInternational) >= 0;
    };
    PurchaseOverseer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { type: "hidden", id: "quoteId", value: this.props.quote.QuoteId }),
            React.createElement(PurchaseContainer, { quote: this.props.quote, finish: function (email, date, isEscrow, pr) { return _this.finishPurchase(email, date, isEscrow, pr); }, active: true, minDate: this.props.minDate, maxDate: this.props.maxDate, ci: this.props.ci, insuredName: this.state.insuredName, activity: this.props.activity, isHubCustomer: this.isHubQuote() && !Storage.hasAuth() }),
            React.createElement(PurchaseSuccessfulRibbon_1.default, { active: this.state.showRibbon, email: this.state.email, startDate: this.state.startDate, downloadUrl: this.state.downloadUrl }),
            !Storage.getHubContacted() && this.isHubQuote() && !Storage.hasAuth() &&
                React.createElement(HubContactBtn_1.default, { active: this.state.showHubModal, onClick: function () { return HubContactModal_1.default.show({
                        okText: "SEND QUOTE TO BROKER",
                        okFunction: function (emailRequest) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, EmailApi.emailHubQuote(this.props.quote.QuoteId, emailRequest)];
                                    case 1:
                                        _a.sent();
                                        Storage.setHubContacted("true");
                                        return [2 /*return*/];
                                }
                            });
                        }); }
                    }); } })));
    };
    return PurchaseOverseer;
}(React.Component));
var startPurchase = function (quote, minDate, activity) { return __awaiter(_this, void 0, void 0, function () {
    var ci, err_2, mainElement, maxDate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ci = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, HOApi.getCustomerInfo(quote.QuoteId)];
            case 2:
                ci = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 4];
            case 4:
                mainElement = document.getElementById('main');
                if (!mainElement)
                    throw "The 'main' target element was not found";
                minDate = minDate.startOf('day');
                maxDate = moment().add(90, 'days').endOf('day');
                if (Main.isQuoteFromHub(quote.LastAgencyName))
                    Main.loadHubUi();
                ReactDOM.render(React.createElement(PurchaseOverseer, { quote: quote, minDate: minDate, maxDate: maxDate, ci: ci, activity: activity }), mainElement);
                return [2 /*return*/];
        }
    });
}); };
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var queryString, quote, _a, quoteGuid, quoteId, addressKey, minDate, activity, isReentry, minStart, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    Main.init();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 11, , 13]);
                    queryString = window.location.search;
                    quote = null;
                    if (!queryString) return [3 /*break*/, 8];
                    _a = Util.getQueryVariables("quoteguid", "quoteid", "addresskey", "mindate", "activity"), quoteGuid = _a[0], quoteId = _a[1], addressKey = _a[2], minDate = _a[3], activity = _a[4];
                    isReentry = activity in Constants.reentries;
                    minStart = !!minDate ? moment(minDate, "M-D-YYYY") : moment();
                    if (!quoteId) return [3 /*break*/, 3];
                    return [4 /*yield*/, Common.getQuoteById(quoteId, !isReentry)];
                case 2:
                    quote = _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!quoteGuid) return [3 /*break*/, 5];
                    return [4 /*yield*/, Common.getQuoteById(quoteGuid, !isReentry)];
                case 4:
                    // We need to support this type of URL for backward compatability:
                    //  http://local.swyfft.com/purchase?quoteguid=f7fb8e87-add3-4e4c-b804-e1bcbd06bb0d
                    quote = _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (!addressKey) return [3 /*break*/, 7];
                    return [4 /*yield*/, Common.getQuoteByAddressKey(addressKey)];
                case 6:
                    quote = _b.sent();
                    _b.label = 7;
                case 7:
                    if (quote) {
                        startPurchase(quote, minStart, isReentry ? activity : '');
                    }
                    else {
                        Common.navigate(Constants.pages.Root);
                    }
                    return [3 /*break*/, 10];
                case 8: return [4 /*yield*/, Helpers.getQuoteData()];
                case 9:
                    quote = _b.sent();
                    startPurchase(quote, moment(), '');
                    _b.label = 10;
                case 10: return [3 /*break*/, 13];
                case 11:
                    err_3 = _b.sent();
                    return [4 /*yield*/, Common.handleGeneralError(err_3)];
                case 12:
                    _b.sent();
                    Common.navigate(Constants.pages.Root);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports.init = init;


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_bootstrap_1 = __webpack_require__(1);
var PaymentSelect = function (props) {
    var myClass = ["full-overlay-ly"];
    myClass.push(props.active ? "overlay-on-st" : "overlay-off-st");
    return (React.createElement("div", { className: myClass.join(' ') },
        React.createElement(react_bootstrap_1.Grid, { className: "payment-choice-container-ly" },
            React.createElement("h2", { className: "overlay-header-bs" }, "choose payment type:"),
            React.createElement("div", { className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4" },
                React.createElement("input", { className: "purchase-overlay-btn-bs", type: "button", id: "card-ovr", value: "Credit Card", onClick: function () { return props.stateSet('card'); } }),
                React.createElement("input", { className: "purchase-overlay-btn-bs", type: "button", id: "escrow-ovr", value: "Escrow", onClick: function () { return props.stateSet('escrow'); } }),
                React.createElement("input", { className: "purchase-overlay-btn-bs", type: "button", id: "echeck-ovr", value: "eCheck", onClick: function () { return props.stateSet('eCheck'); } })))));
};
exports.default = PaymentSelect;


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PurchaseSuccessful = function (props) {
    var myClass = ["modal"];
    myClass.push(props.active ? "modal-on-st success-modal-container-md" : "modal-off-st");
    var bgClass = ["full-overlay-ly"];
    bgClass.push(props.active ? "overlay-on-st ribbon-overlay-on-st" : "overlay-off-st");
    return (React.createElement("div", { className: bgClass.join(' ') },
        React.createElement("div", { className: myClass.join(' ') },
            React.createElement("input", { type: "button", onClick: props.closeMe, className: "modal-close-button-ly" }),
            React.createElement("h2", { className: "overlay-header-bs" }, "POLICY PURCHASED!"),
            React.createElement("div", { className: "ribbon-container-ly" },
                React.createElement("img", { src: "/images/ribbon.svg" })),
            React.createElement("p", { className: "ribbon-blurb-ly" },
                "Your policy is being sent to your email ",
                React.createElement("span", { id: "ribbon-email" }, props.email),
                "."),
            React.createElement("p", { className: "ribbon-blurb-ly" },
                "Full coverage starts on ",
                React.createElement("span", { id: "ribbon-start" }, props.startDate),
                " at 12:01am"))));
};
exports.default = PurchaseSuccessful;


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var Storage = __webpack_require__(10);
var React = __webpack_require__(0);
var react_bootstrap_1 = __webpack_require__(1);
var PurchaseHeader = function (props) {
    var isAgent = Storage.hasAuth();
    return (React.createElement("div", { className: "header-row-ly " + (props.isHubCustomer ? 'hub-header-margin-ly' : '') },
        React.createElement("div", { className: "container " + (isAgent ? 'agent-header-ly' : '') },
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 10, lg: 10, mdOffset: 1, lgOffset: 1, className: "header-container-ly" },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 6, sm: 6, md: 5, lg: 6 },
                            React.createElement(react_bootstrap_1.Col, { xs: 2, sm: 2, md: 2, lg: 1, className: "header-logo-container-ly" },
                                React.createElement("img", { src: "/images/purchase-header-logo.svg" })),
                            React.createElement(react_bootstrap_1.Col, { xs: 10, sm: 10, md: 10, lg: 11, className: "header-tag-bs" },
                                React.createElement("span", null, "POLICY FOR"),
                                React.createElement("br", null),
                                props.quote.QuoteProperty.FullAddress)),
                        React.createElement(react_bootstrap_1.Col, { xs: 6, sm: 6, md: 6, lg: 5, mdOffset: 1, lgOffset: 1 },
                            React.createElement(react_bootstrap_1.Row, null,
                                React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, mdHidden: true, lgHidden: true },
                                    React.createElement("h5", { className: "price-instance-container-ly annual-price-md" },
                                        React.createElement("span", null,
                                            "$",
                                            Common.formatGrossAnnualPayment(props.quote.GrossAnnualPayment)),
                                        "/yr")),
                                props.paymentType !== 'escrow' &&
                                    React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, mdHidden: true, lgHidden: true },
                                        React.createElement("h5", { className: "price-instance-container-ly monthly-price-md" },
                                            React.createElement("span", null, Common.formatCurrencyUS(props.quote.MonthlyPayment)),
                                            "/mo"))),
                            React.createElement(react_bootstrap_1.Row, null,
                                props.paymentType !== 'escrow'
                                    ? React.createElement(react_bootstrap_1.Col, { xsHidden: true, smHidden: true, md: 6, lg: 6 },
                                        React.createElement("section", { className: "annual-cost-border-md" },
                                            React.createElement("h4", { className: "header-cost-title-bs" }, "Annual Cost"),
                                            React.createElement("h5", { className: "header-cost-price-bs" },
                                                "$",
                                                Common.formatGrossAnnualPayment(props.quote.GrossAnnualPayment))))
                                    : React.createElement(react_bootstrap_1.Col, { xsHidden: true, smHidden: true, md: 12, lg: 12 },
                                        React.createElement("section", { className: "annual-cost-border-md annual-cost-escrow-md" },
                                            React.createElement("h4", { className: "header-cost-title-bs" }, "Annual Cost"),
                                            React.createElement("h5", { className: "header-cost-price-bs" },
                                                "$",
                                                Common.formatGrossAnnualPayment(props.quote.GrossAnnualPayment)))),
                                props.paymentType !== 'escrow' &&
                                    React.createElement(react_bootstrap_1.Col, { xsHidden: true, smHidden: true, md: 6, lg: 6 },
                                        React.createElement("h4", { className: "header-cost-title-bs" }, "Monthly Cost"),
                                        React.createElement("h5", { className: "header-cost-price-bs" }, Common.formatCurrencyUS(props.quote.MonthlyPayment))))))),
                " "))));
};
exports.default = PurchaseHeader;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HubContactBtn = /** @class */ (function (_super) {
    __extends(HubContactBtn, _super);
    function HubContactBtn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: true
        };
        return _this;
    }
    HubContactBtn.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", { id: "hubButtonContainer", className: "hub-contact-btn-container-ly" }, this.state.visible &&
            React.createElement("button", { id: "btnContactHub", className: "glyphicon glyphicon-envelope btn hub-contact-btn-md hub-contact-btn-ly", onClick: function (event) { return _this.props.onClick(); } }, "Contact HUB Broker")));
    };
    HubContactBtn.prototype.hide = function () {
        this.setState({
            visible: false
        });
    };
    HubContactBtn.prototype.show = function () {
        this.setState({
            visible: true
        });
    };
    return HubContactBtn;
}(React.Component));
exports.default = HubContactBtn;


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Storage = __webpack_require__(10);
var Events = /** @class */ (function () {
    function Events() {
        this.yahooPixelId = '10056678';
        this.yahooProjectId = '10000';
    }
    Events.prototype.track = function (type) {
        switch (type) {
            case EventType.Purchase:
                this.trackPurchase();
        }
    };
    Events.prototype.trackPurchase = function () {
        var isAgent = Storage.hasAuth(), utm = Storage.getUtmParameters();
        if (typeof (fbq) === 'function')
            fbq('trackCustom', "Purchase" + (isAgent ? 'Agent' : 'DTC'), utm && utm.campaign ? utm : null);
        if (typeof (ga) === 'function')
            ga('send', 'event', {
                eventCategory: 'button',
                eventAction: 'purchase',
                eventValue: isAgent ? 'Agent' : 'DTC'
            });
        if (typeof (dotq) === 'object' && dotq.push && typeof (dotq.push) === 'function')
            dotq.push({
                projectId: this.yahooProjectId,
                properties: {
                    pixelId: this.yahooPixelId,
                    qstrings: {
                        et: 'custom',
                        ec: 'button',
                        ea: 'purchase',
                        ev: isAgent ? 'Agent' : 'DTC'
                    }
                }
            });
        if (typeof (obApi) === 'function')
            obApi('track', "Purchase" + (isAgent ? 'Agent' : 'DTC'));
        // LinkedIn doesn't provide any APIs to track clicks; they do event tracking by loading pixels onto a page,
        // so we have to improvise and make a GET to the pixel image URL.
        var url = "https://dc.ads.linkedin.com/collect/?pid=294177&conversionId=" + (isAgent ? '470497' : '470489') + "&fmt=gif";
        var img = document.createElement('img');
        img.setAttribute('src', url);
        document.body.appendChild(img);
    };
    return Events;
}());
var EventType;
(function (EventType) {
    EventType[EventType["Purchase"] = 0] = "Purchase";
})(EventType = exports.EventType || (exports.EventType = {}));
var events = new Events();
exports.Event = events;


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = numeral;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = ES6Promise;

/***/ })

},[192]);
//# sourceMappingURL=purchase.bundle.js.map