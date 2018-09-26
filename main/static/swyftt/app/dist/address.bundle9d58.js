webpackJsonp([34],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Main = __webpack_require__(8);
var Common = __webpack_require__(3);
var AddressComponents = __webpack_require__(187);
function init() {
    Main.init();
    ko.applyBindings(new AddressComponents.AddressVm(), Common.wrapper);
}
init();


/***/ }),

/***/ 187:
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
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var AddressInfoVm = Common.AddressInfoVm;
var ShowAlert = Common.showAlert;
var AlertType = Common.AlertType;
var Address = Common.toAddress;
var isAdmin = Common.isAdmin;
__webpack_require__(188);
/**
 * Contains the logic for the address management page
 */
var AddressVm = /** @class */ (function () {
    function AddressVm() {
        var _this = this;
        this.addressInfoVm = new AddressInfoVm();
        this.secondaryInfoVm = new AddressInfoVm(this.updateLocation, true);
        this.partial = ko.observable('');
        this.isBusy = ko.observable(false);
        this.addresses = ko.observableArray();
        this.sortedAddresses = ko.computed(function () {
            return Enumerable.from(_this.addresses()).orderBy(function (x) { return x.fullAddress(); }).toArray();
        });
        // Set this to true if we need to run the "getAddresses()" again when the current 
        // run is finished.
        this.checkAgain = false;
        this.partial.subscribe(function () {
            if (_this.partial().length >= 3) {
                // If there's an outstanding request, don't run another one right now.
                // Instead, flag that we *need* to run another one, and wait until the current
                // getAddresses() call finishes. There, we'll check to see if this flag has been
                // set, and if it has, we'll run it again there. This is valuable for all sorts of reasons.
                if (!_this.isBusy()) {
                    _this.getAddresses();
                }
                else {
                    _this.checkAgain = true;
                }
            }
            else {
                _this.addresses.destroyAll();
            }
        });
    }
    /**
     * Retrieve matching addresses from the server.
     */
    AddressVm.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, props, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isBusy(true);
                        this.checkAgain = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        address = this.partial();
                        props = [];
                        if (!Util.isThere(address)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Api.getProperties(address)];
                    case 2:
                        props = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.loadAddresses(props);
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        Common.handleGeneralError(err_1);
                        return [3 /*break*/, 6];
                    case 5:
                        // If there's another outstanding request, run it again.
                        this.isBusy(false);
                        if (this.checkAgain) {
                            this.getAddresses();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AddressVm.prototype.createAddress = function () {
        var _this = this;
        Common.createAddress(this.partial(), this.addressInfoVm, this.secondaryInfoVm).then(function (pd) {
            ShowAlert(AlertType.Success, "Created");
            var addr = Address(pd);
            _this.partial(addr);
            _this.getAddresses();
        });
    };
    AddressVm.prototype.updateLocation = function (property) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Api.updatePropertyLocation(property.AddressKey, property.Latitude, property.Longitude)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load up the returned addresses. NB that it's possible to do a sort of "upsert"
     * here (i.e., like what we do on the quotes page), but testing has shown that
     * KO has trouble keeping track of what's in and out if we that, and it turns out
     * that this is responsive enough that we don't really need to go through the extra
     * 15 lines of code.
     */
    AddressVm.prototype.loadAddresses = function (props) {
        var _this = this;
        var newItems = Enumerable.from(props).select(function (x) {
            var itemVm = new AddressItemVm(_this.addressInfoVm, _this.secondaryInfoVm);
            itemVm.load(x);
            return itemVm;
        }).toArray();
        this.addresses(newItems);
    };
    return AddressVm;
}());
exports.AddressVm = AddressVm;
/**
 * Represents an individual address item in a list.
 */
var AddressItemVm = /** @class */ (function () {
    function AddressItemVm(addressInfoVm, secondaryInfoVm) {
        this.addressInfoVm = addressInfoVm;
        this.secondaryInfoVm = secondaryInfoVm;
        this.addressKey = ko.observable('');
        this.fullAddress = ko.observable('');
    }
    AddressItemVm.prototype.load = function (prop) {
        this.addressKey(prop.AddressKey);
        this.fullAddress(prop.FullAddress || '');
    };
    AddressItemVm.prototype.canEditAddress = function () {
        return isAdmin();
    };
    AddressItemVm.prototype.editAddress = function () {
        var _this = this;
        Api.getProperty(this.addressKey()).then(function (pd) {
            _this.addressInfoVm.load(pd);
            _this.addressInfoVm.show();
        });
    };
    AddressItemVm.prototype.editSecondary = function () {
        var _this = this;
        var addressKey = this.addressKey();
        Api.getPropertyLocation(this.addressKey()).then(function (location) {
            if (!location) {
                Common.showError("The address with key " + addressKey + " wasn't found.");
            }
            else {
                _this.secondaryInfoVm.load(location);
                _this.secondaryInfoVm.show();
            }
        });
    };
    AddressItemVm.prototype.getQuote = function () {
        var request = {
            AddressKey: this.addressKey(),
            Address: this.fullAddress()
        };
        Api.createOrGetQuote(request).then(function (data) {
            Storage.setAddress(Common.toAddress(data.QuoteProperty));
            Storage.setAddressKey(data.AddressKey);
            Storage.setQuoteId(data.QuoteId);
            Common.navigate(Constants.pages.Quote);
        }).catch(function (err) {
            Common.handleGeneralError(err);
        });
    };
    return AddressItemVm;
}());
exports.AddressItemVm = AddressItemVm;


/***/ }),

/***/ 188:
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

},[186]);
//# sourceMappingURL=address.bundle.js.map