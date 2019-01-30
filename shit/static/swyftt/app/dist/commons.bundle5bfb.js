/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		50: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = __webpack_require__(9);
var Models = __webpack_require__(49);
//#region Generic Methods
/**
 *  Saves a value to local storage
 */
function saveLocalData(key, value) {
    try {
        if (value === null || typeof value === "undefined") {
            value = "";
        }
        localStorage.setItem(key, value.toString());
    }
    catch (e) {
        throw new Models.ApiError("Local Storage", 'We are unable to process your request. This can sometimes be caused by private browsing mode in some browsers.', "Unable to set local storage key " + key + " to value " + value + " (err=" + e + ")");
    }
}
exports.saveLocalData = saveLocalData;
;
/**
 *  Saves a value to session storage
 */
function saveSessionData(key, value) {
    try {
        if (value === null || typeof value === "undefined") {
            value = "";
        }
        sessionStorage.setItem(key, value.toString());
    }
    catch (e) {
        throw new Models.ApiError("Local Storage", 'We are unable to process your request. This can sometimes be caused by private browsing mode in some browsers.', "Unable to set local storage key " + key + " to value " + value + " (err=" + e + ")");
    }
}
exports.saveSessionData = saveSessionData;
;
/**
 *  Returns a value from local storage.
 */
function getLocalData(key) {
    return localStorage.getItem(key);
}
exports.getLocalData = getLocalData;
/**
 *  Returns a value from session storage.
 */
function getSessionData(key) {
    return sessionStorage.getItem(key);
}
exports.getSessionData = getSessionData;
/**
 * Clears out both local and session storage
 */
function clear() {
    sessionStorage.clear();
    localStorage.clear();
}
exports.clear = clear;
/**
 * Removes a value from session storage
 */
function removeFromSession(key) {
    sessionStorage.removeItem(key);
}
exports.removeFromSession = removeFromSession;
/**
 * Removes a value from local storage
 */
function removeFromLocal(key) {
    localStorage.removeItem(key);
}
exports.removeFromLocal = removeFromLocal;
/**
 *  Saves a value to the site's cookies
 */
function setCookie(cname, cvalue, exdays) {
    var cookie;
    cvalue = encodeURIComponent(cvalue || '');
    if (exdays > 0) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        cookie = [cname, '=', cvalue, ';', expires].join('');
    }
    else {
        cookie = [cname, '=', cvalue].join('');
    }
    cookie += '%3b%20path%3d/index.html';
    document.cookie = cookie;
}
exports.setCookie = setCookie;
/**
 * Retrieves a value from the site's cookies
 */
function getCookie(cname) {
    var result = document.cookie.match(new RegExp(cname + '=([^;]+)'));
    if (result) {
        var cvalue = decodeURIComponent(result[1]);
        return cvalue;
    }
    return null;
}
exports.getCookie = getCookie;
/**
 * Deletes a value from the site's cookies
 */
function deleteCookie(cname) {
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}
exports.deleteCookie = deleteCookie;
/**
 * If no names are passed in, clears all cookies.
 * If names are passed in, clears just those cookies matching the names.
 */
function clearCookies() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    if (names && names.length) {
        for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
            var name = names_1[_a];
            deleteCookie(name);
        }
    }
    else {
        var cookies = document.cookie.split(";");
        for (var _b = 0, cookies_1 = cookies; _b < cookies_1.length; _b++) {
            var cookie = cookies_1[_b];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            deleteCookie(name);
        }
    }
}
exports.clearCookies = clearCookies;
//#endregion
//#region Typed Methods
function setRememberMe(val) {
    saveLocalData("rememberMe", val);
}
exports.setRememberMe = setRememberMe;
function getRememberMe() {
    return Util.toBoolean(getLocalData("rememberMe"));
}
exports.getRememberMe = getRememberMe;
function setIsRenderedAgain(val) {
    saveLocalData("isRenderedAgain", val);
}
exports.setIsRenderedAgain = setIsRenderedAgain;
function getIsRenderedAgain() {
    return Util.toBoolean(getLocalData("isRenderedAgain"));
}
exports.getIsRenderedAgain = getIsRenderedAgain;
function setLastCancellationRequest(quoteId) {
    saveLocalData("lastCancellationRequest", quoteId);
}
exports.setLastCancellationRequest = setLastCancellationRequest;
function getLastCancellationRequest() {
    return Util.asNumberNullable(getLocalData("lastCancellationRequest"));
}
exports.getLastCancellationRequest = getLastCancellationRequest;
function getUserName() {
    var localUserName = getLocalData("username");
    var loginDetails = getLoginDetails();
    //HG 9/29/17: Temporary logic that grabs the username from localStorage.
    if (localUserName) {
        if (loginDetails) {
            loginDetails.userName = localUserName;
            removeFromLocal("username");
        }
        var user = { userName: localUserName };
        saveLocalData("loginDetails", JSON.stringify(user));
        removeFromLocal("username");
    }
    //HG 9/29/17: Permanent logic that grabs the username from loginDetails.
    return loginDetails ? loginDetails.userName : null;
}
exports.getUserName = getUserName;
function getAgentName() {
    var localAgentName = getLocalData("agentname");
    var loginDetails = getLoginDetails();
    //HG 9/29/17: Temporary logic that grabs the username from localStorage.
    if (localAgentName) {
        if (loginDetails) {
            loginDetails.agentName = localAgentName;
            removeFromLocal("agentname");
        }
        var user = { agentName: localAgentName };
        saveLocalData("loginDetails", JSON.stringify(user));
        removeFromLocal("agentname");
    }
    //HG 9/29/17: Permanent logic that grabs the username from loginDetails.
    return loginDetails ? loginDetails.agentName : null;
}
exports.getAgentName = getAgentName;
function setHubContacted(val) {
    saveSessionData("hubContacted", val);
}
exports.setHubContacted = setHubContacted;
function getHubContacted() {
    return getSessionData("hubContacted");
}
exports.getHubContacted = getHubContacted;
function getAgencyFromLoginDetails() {
    var loginDetails = getLocalData("loginDetails");
    if (!loginDetails)
        return null;
    loginDetails = JSON.parse(loginDetails);
    //conditional below is needed for successful TS compile.
    if (!loginDetails)
        return null;
    var agencyName = loginDetails["agencyName"];
    return agencyName;
}
exports.getAgencyFromLoginDetails = getAgencyFromLoginDetails;
function getAgencyFromSessionData() {
    var agencySessionDetails = getSessionData("agencyName");
    return (agencySessionDetails ? agencySessionDetails : null);
}
exports.getAgencyFromSessionData = getAgencyFromSessionData;
function setAgencyToSessionData(val) {
    if (typeof val === "undefined")
        return;
    saveSessionData("agencyName", val);
}
exports.setAgencyToSessionData = setAgencyToSessionData;
function setLoginDetails(val) {
    saveLocalData("loginDetails", JSON.stringify(val));
}
exports.setLoginDetails = setLoginDetails;
function getLoginDetails() {
    var json = getLocalData("loginDetails");
    if (!json)
        return null;
    return JSON.parse(json);
}
exports.getLoginDetails = getLoginDetails;
function setRepriceModel(val) {
    saveLocalData("repriceApiModel", JSON.stringify(val));
}
exports.setRepriceModel = setRepriceModel;
function getRepriceModel() {
    var json = getLocalData("repriceApiModel");
    if (!json)
        return null;
    return JSON.parse(json);
}
exports.getRepriceModel = getRepriceModel;
function setRepriceQuoteId(quoteId) {
    saveLocalData("repriceQuoteId", quoteId);
}
exports.setRepriceQuoteId = setRepriceQuoteId;
function getRepriceQuoteId() {
    return getLocalData("repriceQuoteId");
}
exports.getRepriceQuoteId = getRepriceQuoteId;
function setAddressKey(val) {
    saveLocalData("addressKey", val);
}
exports.setAddressKey = setAddressKey;
function getAddressKey() {
    return getLocalData("addressKey");
}
exports.getAddressKey = getAddressKey;
function setEmail(val) {
    saveLocalData("email", val);
}
exports.setEmail = setEmail;
function getEmail() {
    return getLocalData("email");
}
exports.getEmail = getEmail;
function setErrorCode(val) {
    saveLocalData("errorCode", val);
}
exports.setErrorCode = setErrorCode;
function getErrorCode() {
    return getLocalData("errorCode");
}
exports.getErrorCode = getErrorCode;
function setErrorText(val) {
    saveLocalData("errorText", val);
}
exports.setErrorText = setErrorText;
function getErrorText() {
    return getLocalData("errorText");
}
exports.getErrorText = getErrorText;
function setCoverageDate(coverageDate) {
    saveLocalData("coverageDate", coverageDate);
}
exports.setCoverageDate = setCoverageDate;
function getCoverageDate() {
    var coverageDate = getLocalData("coverageDate");
    if (Util.isEmpty(coverageDate))
        return null;
    return new Date(coverageDate || '');
}
exports.getCoverageDate = getCoverageDate;
/**
 * Stores the user's authentication token in a cookie.
 */
function setAuth(auth, rememberMe) {
    var timeout = rememberMe ? 30 : 0;
    setCookie("authorization", auth, timeout);
    setRememberMe(rememberMe);
}
exports.setAuth = setAuth;
/**
 * Returns a boolean representing whether the user is logged in or not.
 * Note that it does NOT check the *validity* of the login, so don't use this for any security checks, but only for UI
 * customization purposes.
 */
function hasAuth() {
    return !!getCookie("authorization");
}
exports.hasAuth = hasAuth;
/**
 * Stores the agent who directed the user to our site
 */
function setReferringAgent(agent) {
    sessionStorage.setItem("referringAgent", agent || '');
}
exports.setReferringAgent = setReferringAgent;
function getReferringAgent() {
    return sessionStorage.getItem("referringAgent");
}
exports.getReferringAgent = getReferringAgent;
/**
 * Stores the role passed down by the last successful API call
 */
function setRoles(roles) {
    var json = JSON.stringify(roles);
    saveLocalData("roles", json);
}
exports.setRoles = setRoles;
/**
 * Returns the role passed down by the last successful API call.
 * This will be accurate, God willing and the creek don't rise and nobody's messed with it,
 * but should NOT be relied upon for genuine security.
 */
function getRoles() {
    var json = getLocalData("roles");
    if (!json)
        return [];
    return JSON.parse(json);
}
exports.getRoles = getRoles;
function setAddress(address) {
    saveLocalData('address', address);
}
exports.setAddress = setAddress;
function getAddress() {
    var address = getLocalData('address');
    return address || '';
}
exports.getAddress = getAddress;
function setOnlyMyQuotes(value) {
    saveLocalData('onlyMyQuotes', value);
}
exports.setOnlyMyQuotes = setOnlyMyQuotes;
function getOnlyMyQuotes() {
    return Util.toBoolean(getLocalData('onlyMyQuotes'));
}
exports.getOnlyMyQuotes = getOnlyMyQuotes;
function setQuoteId(quoteId) {
    saveLocalData('quoteId', quoteId);
}
exports.setQuoteId = setQuoteId;
function getQuoteId() {
    return getLocalData('quoteId') || '';
}
exports.getQuoteId = getQuoteId;
function setElementDescriptions(descriptions) {
    saveSessionData('elementDescriptions', JSON.stringify(descriptions));
}
exports.setElementDescriptions = setElementDescriptions;
function getElementDescriptions() {
    var descriptions = getSessionData('elementDescriptions');
    return descriptions ? JSON.parse(descriptions) : '';
}
exports.getElementDescriptions = getElementDescriptions;
function setQuote(quote) {
    // As a fail-safe: sometimes we try to store an error in place of a legitimate quote object.
    if (quote.hasOwnProperty("readyState")) {
        throw "Invalid quote object";
    }
    saveLocalData('quoteData', JSON.stringify(quote));
}
exports.setQuote = setQuote;
function getQuote() {
    var json = getLocalData('quoteData');
    if (Util.isEmpty(json))
        return null;
    return JSON.parse(json || '');
}
exports.getQuote = getQuote;
function setQuoteDetails(details) {
    // As a fail-safe: sometimes we try to store an error in place of a legitimate quote object.
    if (details.hasOwnProperty("readyState")) {
        throw "Invalid quote details object";
    }
    saveLocalData('quoteDetailsData', JSON.stringify(details));
}
exports.setQuoteDetails = setQuoteDetails;
function getQuoteDetails() {
    var json = getLocalData('quoteDetailsData');
    if (Util.isEmpty(json))
        return null;
    return JSON.parse(json || '');
}
exports.getQuoteDetails = getQuoteDetails;
function setLastLocation(location) {
    saveLocalData('lastLocation', JSON.stringify(location));
}
exports.setLastLocation = setLastLocation;
function getLastLocation() {
    var json = getLocalData('lastLocation');
    if (Util.isEmpty(json))
        return null;
    return JSON.parse(json || '');
}
exports.getLastLocation = getLastLocation;
function setLivingSpaceChecked(addressKey) {
    try {
        saveLocalData('livingSpaceChecked', addressKey);
    }
    catch (e) {
        if (!(e instanceof Models.ApiError)) {
            throw e;
        }
        console.log(e);
    }
}
exports.setLivingSpaceChecked = setLivingSpaceChecked;
function getLivingSpaceChecked(addressKey) {
    return addressKey === getLocalData('livingSpaceChecked');
}
exports.getLivingSpaceChecked = getLivingSpaceChecked;
function setUtmParametersFromQueryString() {
    var query = Util.getQueryObject();
    if (query.utm_campaign && query.utm_source && query.utm_medium) {
        setCookie('utm_campaign', query.utm_campaign, 0);
        setCookie('utm_source', query.utm_source, 0);
        setCookie('utm_medium', query.utm_medium, 0);
    }
}
exports.setUtmParametersFromQueryString = setUtmParametersFromQueryString;
function getUtmParameters() {
    return {
        campaign: getCookie('utm_campaign'),
        source: getCookie('utm_source'),
        medium: getCookie('utm_medium')
    };
}
exports.getUtmParameters = getUtmParameters;
//#endregion


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var ApiCaller = __webpack_require__(28);
//#region Admin Methods
function getAgents() {
    var url = "api/agents";
    return ApiCaller.$get(url);
}
exports.getAgents = getAgents;
function getAgent(agentId) {
    var url = "api/agents/" + agentId;
    return ApiCaller.$get(url);
}
exports.getAgent = getAgent;
function getMortgagees(filter) {
    return ApiCaller.$get("api/mortgagees?filter=" + filter);
}
exports.getMortgagees = getMortgagees;
function getEmailTemplates() {
    return ApiCaller.$get("api/emailtemplates");
}
exports.getEmailTemplates = getEmailTemplates;
function getAppointee(start, count, filter, progress) {
    return ApiCaller.$get("api/appointed?start=" + start + "&count=" + count + "&filter=" + encodeURIComponent(filter), progress || null);
}
exports.getAppointee = getAppointee;
function setAppointedDate(appointee) {
    return ApiCaller.$post('api/appointed', appointee);
}
exports.setAppointedDate = setAppointedDate;
function saveMortgagee(model) {
    return ApiCaller.$post('api/mortgagees', model, NProgress);
}
exports.saveMortgagee = saveMortgagee;
function deleteMortgagee(model) {
    return ApiCaller.$delete('api/mortgagees', model, NProgress);
}
exports.deleteMortgagee = deleteMortgagee;
function saveTemplate(model) {
    return ApiCaller.$post('api/emailtemplates', model, NProgress);
}
exports.saveTemplate = saveTemplate;
function deleteTemplate(model) {
    return ApiCaller.$delete('api/emailtemplates', model, NProgress);
}
exports.deleteTemplate = deleteTemplate;
function getExpirationMonth(nAddMonths) {
    var url = "api/ExpiringCreditCards?addMonths=" + nAddMonths;
    return ApiCaller.$get(url);
}
exports.getExpirationMonth = getExpirationMonth;
function getPolicyExpirationMonth(nAddMonths) {
    var url = "api/ExpiringPolicies?addMonths=" + nAddMonths;
    return ApiCaller.$get(url);
}
exports.getPolicyExpirationMonth = getPolicyExpirationMonth;
function getPaymentServiceUrl() {
    var url = "api/PaymentServiceUrl";
    return ApiCaller.$get(url);
}
exports.getPaymentServiceUrl = getPaymentServiceUrl;
function getPolicyServiceUrl() {
    var url = "api/PolicyServiceUrl";
    return ApiCaller.$get(url);
}
exports.getPolicyServiceUrl = getPolicyServiceUrl;
function getImsValidationNotes() {
    var url = 'api/ims/validationnotes';
    return ApiCaller.$get(url);
}
exports.getImsValidationNotes = getImsValidationNotes;
function getImsPurchaseRequests() {
    var url = 'api/ims/purchaserequests';
    return ApiCaller.$get(url);
}
exports.getImsPurchaseRequests = getImsPurchaseRequests;
function getQueueTasks() {
    var url = 'api/tasks/queuetasks';
    return ApiCaller.$get(url);
}
exports.getQueueTasks = getQueueTasks;
function getQueueTask(id) {
    var url = "api/tasks/" + id;
    return ApiCaller.$get(url);
}
exports.getQueueTask = getQueueTask;
function getFailedTasks() {
    var url = 'api/tasks/failedtasks';
    return ApiCaller.$get(url);
}
exports.getFailedTasks = getFailedTasks;
function getFailedTask(id) {
    var url = "api/tasks/failed/" + id;
    return ApiCaller.$get(url);
}
exports.getFailedTask = getFailedTask;
function restartQueueTask(id) {
    var url = "api/tasks/restart/" + id;
    Common.loadingVm.message('Restarting queue task ...');
    return ApiCaller.$put(url, null, Common.loadingVm, 'restart queue task');
}
exports.restartQueueTask = restartQueueTask;
function deleteQueueTask(id) {
    var url = "api/tasks/delete/" + id;
    return ApiCaller.$delete(url, null);
}
exports.deleteQueueTask = deleteQueueTask;
function getImsPurchaseRequest(quoteId) {
    var url = "api/ims/purchaserequests/" + quoteId;
    return ApiCaller.$get(url);
}
exports.getImsPurchaseRequest = getImsPurchaseRequest;
function processImsPurchaseRequest(quoteId) {
    var url = "api/ims/purchaserequests/" + quoteId;
    Common.loadingVm.message('Resubmitting purchase request to IMS...');
    return ApiCaller.$put(url, null, Common.loadingVm, 'resubmit ims purchase request');
}
exports.processImsPurchaseRequest = processImsPurchaseRequest;
function deleteImsPurchaseRequest(quoteId) {
    var url = "api/ims/purchaserequests/" + quoteId;
    return ApiCaller.$delete(url, null);
}
exports.deleteImsPurchaseRequest = deleteImsPurchaseRequest;
function getSearchedQuotes(searchTerm) {
    var url = "api/quotemanagement/searchquotes/" + searchTerm;
    return ApiCaller.$get(url);
}
exports.getSearchedQuotes = getSearchedQuotes;
function getRenewals(status, skip, take) {
    var url = "api/renewmanagement/getrenewals/" + status + "/" + skip + "/" + take;
    return ApiCaller.$get(url);
}
exports.getRenewals = getRenewals;
function getAdditionalInterests(policyNumber) {
    var url = "api/additionalinterestmanagement/getadditionalinterests/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.getAdditionalInterests = getAdditionalInterests;
function canAdditionalInterestBeEdited(policyNumber) {
    var url = "api/additionalinterestmanagement/canadditionalinterestbeedited/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.canAdditionalInterestBeEdited = canAdditionalInterestBeEdited;
function canAdditionalInterestBeEndorsed(policyNumber) {
    var url = "api/additionalinterestmanagement/canadditionalinterestbeendorsed/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.canAdditionalInterestBeEndorsed = canAdditionalInterestBeEndorsed;
function addAdditionalInterest(model) {
    var url = "api/additionalinterestmanagement/addadditionalinterest";
    Common.loadingVm.message('Adding additional interest ...');
    return ApiCaller.$post(url, model, Common.loadingVm, 'Adding additional interest');
}
exports.addAdditionalInterest = addAdditionalInterest;
function updateAdditionalInterest(model) {
    var url = "api/additionalinterestmanagement/updateadditionalinterest";
    Common.loadingVm.message('Updating additional interest ...');
    return ApiCaller.$post(url, model, Common.loadingVm, 'Updating additional interest');
}
exports.updateAdditionalInterest = updateAdditionalInterest;
function deleteAdditionalInterest(policyId, additionalInterestId) {
    var url = "api/additionalinterestmanagement/deleteadditionalinterest/" + policyId + "/" + additionalInterestId;
    return ApiCaller.$get(url);
}
exports.deleteAdditionalInterest = deleteAdditionalInterest;
function bindEndorsement(policyNumber) {
    var url = "api/additionalinterestmanagement/bindendorsement/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.bindEndorsement = bindEndorsement;
function cancelEndorsement(policyId) {
    var url = "api/additionalinterestmanagement/cancelendorsement/" + policyId;
    return ApiCaller.$get(url);
}
exports.cancelEndorsement = cancelEndorsement;
function addRenewalNote(renewalNote) {
    var url = "api/renewmanagement/addrenewalnote";
    Common.loadingVm.message('Adding note...');
    return ApiCaller.$post(url, renewalNote, Common.loadingVm, 'create note');
}
exports.addRenewalNote = addRenewalNote;
function getRelatedQuotes(quoteId) {
    var url = "api/quotemanagement/relatedquotes/" + quoteId;
    return ApiCaller.$get(url);
}
exports.getRelatedQuotes = getRelatedQuotes;
function getRelatedAgents(quoteId) {
    var url = "api/quotemanagement/relatedagents/" + quoteId;
    return ApiCaller.$get(url);
}
exports.getRelatedAgents = getRelatedAgents;
function setLastAgentId(userId, quoteId) {
    var url = "api/quotemanagement/setlastagentid/" + userId + "/" + quoteId;
    return ApiCaller.$put(url, null);
}
exports.setLastAgentId = setLastAgentId;
function orderClueReport(quoteId) {
    var url = "api/tasks/ordercluereport/" + quoteId;
    return ApiCaller.$get(url);
}
exports.orderClueReport = orderClueReport;
function cancelPolicy(quoteId) {
    var url = "api/tasks/cancelpolicy/" + quoteId;
    return ApiCaller.$get(url);
}
exports.cancelPolicy = cancelPolicy;
function changePolicyStatus(renewalId, status) {
    var url = "api/renewmanagement/setrenewalstatus/" + renewalId + "/" + status;
    return ApiCaller.$get(url);
}
exports.changePolicyStatus = changePolicyStatus;
function isPolicyCancelled(policyNumber) {
    var url = "api/renewmanagement/ispolicycancelled/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.isPolicyCancelled = isPolicyCancelled;
function retryRenew(renewalId) {
    var url = "api/renewmanagement/retryrenew/" + renewalId;
    return ApiCaller.$get(url);
}
exports.retryRenew = retryRenew;
function reinstatePolicy(quoteId) {
    var url = "api/tasks/reinstatepolicy/" + quoteId;
    return ApiCaller.$get(url);
}
exports.reinstatePolicy = reinstatePolicy;
function deleteAllBadTasks(quoteId) {
    var url = "api/tasks/deleteallbadtasks/" + quoteId;
    return ApiCaller.$get(url);
}
exports.deleteAllBadTasks = deleteAllBadTasks;
function validatePdf(quoteId) {
    var url = "api/validatepdf/" + quoteId;
    return ApiCaller.$get(url);
}
exports.validatePdf = validatePdf;
/**
 * Add a rule override to the database for a given address
 * or update an existing rule with a new expiration date.
 */
function addOrUpdateOverride(addressKey, rule, expiration) {
    var url = "api/overrides/" + addressKey + "?rule=" + rule + "&expiration=" + encodeURIComponent(expiration.toUTCString());
    Common.loadingVm.message('Adding override...');
    return ApiCaller.$put(url, null, null, "add override");
}
exports.addOrUpdateOverride = addOrUpdateOverride;
function deleteOverride(addressKey, rule) {
    var url = "api/overrides/" + addressKey + "?rule=" + rule;
    Common.loadingVm.message('Deleting override...');
    return ApiCaller.$delete(url, null, null, "delete override");
}
exports.deleteOverride = deleteOverride;
function getOverrides() {
    var url = "api/overrides/all";
    Common.loadingVm.message('Retrieving overrides...');
    return ApiCaller.$get(url, null, "get overrides");
}
exports.getOverrides = getOverrides;
function getAllMapLayerTypes() {
    var url = "api/riskmap/layers/all";
    return ApiCaller.$get(url);
}
exports.getAllMapLayerTypes = getAllMapLayerTypes;
function getMapPolygons(request) {
    var url = "api/riskmap/polygons";
    return ApiCaller.$post(url, request);
}
exports.getMapPolygons = getMapPolygons;
function getPolicyFaxPageData(quoteId) {
    return ApiCaller.$get("api/ims/getPolicyFaxPageData/" + quoteId);
}
exports.getPolicyFaxPageData = getPolicyFaxPageData;
function updateFaxNumber(model, renewal) {
    return ApiCaller.$post("api/ims/" + (renewal ? 'updateAdditionalInterestRenewal' : 'updateAdditionalInterest'), model, NProgress);
}
exports.updateFaxNumber = updateFaxNumber;
/**
 * Add or update Purchase Moratoria.
 */
function addPurchaseMoratoria(moratoriaToAdd) {
    var url = "api/purchasemoratorium/add";
    return ApiCaller.$put(url, moratoriaToAdd, null, "add moratorium");
}
exports.addPurchaseMoratoria = addPurchaseMoratoria;
function updatePurchaseMoratoria(moratoriaToUpdate) {
    var url = "api/purchasemoratorium/update";
    return ApiCaller.$put(url, moratoriaToUpdate, null, "update moratorium");
}
exports.updatePurchaseMoratoria = updatePurchaseMoratoria;
function deletePurchaseMoratoria(ids) {
    var url = "api/purchasemoratorium/delete";
    return ApiCaller.$delete(url, ids, null, "delete moratorium");
}
exports.deletePurchaseMoratoria = deletePurchaseMoratoria;
function getPurchaseMoratoria() {
    var url = "api/purchasemoratorium/all";
    return ApiCaller.$get(url, null, "get moratoria");
}
exports.getPurchaseMoratoria = getPurchaseMoratoria;
function getStates() {
    var url = "api/purchasemoratorium/states";
    return ApiCaller.$get(url, null, "get states");
}
exports.getStates = getStates;
function getActiveStateCounties() {
    var url = "api/purchasemoratorium/counties";
    return ApiCaller.$get(url, null, "get active counties");
}
exports.getActiveStateCounties = getActiveStateCounties;
function getPartnerAgents() {
    var url = 'api/partnermanagement/imsagents';
    return ApiCaller.$get(url);
}
exports.getPartnerAgents = getPartnerAgents;
function getPartnerAccounts() {
    var url = 'api/partnermanagement/partneraccounts';
    return ApiCaller.$get(url);
}
exports.getPartnerAccounts = getPartnerAccounts;
function getPartnerApiKey(partnerId) {
    var url = "api/partnermanagement/apikey?partnerAccountId=" + encodeURIComponent(partnerId);
    return ApiCaller.$get(url);
}
exports.getPartnerApiKey = getPartnerApiKey;
function registerPartnerAccount(partnerAccount) {
    var url = 'api/partnermanagement/register';
    return ApiCaller.$post(url, partnerAccount, null, "register partner account");
}
exports.registerPartnerAccount = registerPartnerAccount;
function updatePartnerAccount(partnerAccount) {
    var url = 'api/partnermanagement';
    return ApiCaller.$put(url, partnerAccount, null, "update partner account");
}
exports.updatePartnerAccount = updatePartnerAccount;
//card methods
function getCardExpiration() {
    var promise = ApiCaller.$get("api/cardexpiration", NProgress, 'get card expiration');
    return promise;
}
exports.getCardExpiration = getCardExpiration;
//payment profile methods
function getPaymentProfileFromPolicyNumber(policyNumber) {
    return ApiCaller.$get("api/payments/payment-profile-additionalinterest?policyNumber=" + policyNumber, NProgress, 'get quote payment profile by policy number');
}
exports.getPaymentProfileFromPolicyNumber = getPaymentProfileFromPolicyNumber;
function updatePaymentProfile(paymentProfile) {
    return ApiCaller.$post('api/payments/update-policy-bank-info', paymentProfile, Common.loadingVm, 'update payment profile');
}
exports.updatePaymentProfile = updatePaymentProfile;
function isBankInfoDifferent(paymentProfile) {
    return ApiCaller.$post("api/payments/is-bank-info-different", paymentProfile, Common.loadingVm, 'is bank info different');
}
exports.isBankInfoDifferent = isBankInfoDifferent;
//#endregion


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Portal__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LegacyPortal__ = __webpack_require__(182);





var Portal = void 0;

if (__WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.createPortal) {
  Portal = __WEBPACK_IMPORTED_MODULE_1__Portal__["a" /* default */];
} else {
  Portal = __WEBPACK_IMPORTED_MODULE_2__LegacyPortal__["a" /* default */];
}

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(51);
  var warning = __webpack_require__(76);
  var ReactPropTypesSecret = __webpack_require__(77);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 117:
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var TooltipPlacement;
(function (TooltipPlacement) {
    TooltipPlacement["Bottom"] = "bottom-cp";
    TooltipPlacement["BottomLeft"] = "bottom-left-cp";
    TooltipPlacement["BottomRight"] = "bottom-right-cp";
})(TooltipPlacement = exports.TooltipPlacement || (exports.TooltipPlacement = {}));
var TooltipEvent;
(function (TooltipEvent) {
    TooltipEvent["Focus"] = "onFocus";
    TooltipEvent["Blur"] = "onBlur";
    TooltipEvent["MouseEnter"] = "onMouseEnter";
    TooltipEvent["MouseLeave"] = "onMouseLeave";
})(TooltipEvent = exports.TooltipEvent || (exports.TooltipEvent = {}));
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var placement = this.props.placement || TooltipPlacement.Bottom;
        return React.createElement("div", { className: "tooltip-cp " + (this.props.className || '') },
            React.createElement("div", __assign({ className: 'tooltip-children-cp' }, this.buildEventProps()), this.props.children),
            React.createElement("div", { className: "tooltip-content-wrapper-cp " + placement + " " + (this.state.visible ? 'tooltip-content-wrapper-visible-cp' : '') },
                React.createElement("div", { className: 'tooltip-arrow-cp' }),
                React.createElement("div", { className: 'tooltip-content-cp' },
                    React.createElement("span", { className: "tooltip-title-cp " + (this.props.title ? 'tooltip-title-visible-cp' : '') }, this.props.title),
                    React.createElement("span", { className: 'tooltip-message-cp' }, this.props.message))));
    };
    Tooltip.prototype.buildEventProps = function () {
        var props = {}, onEvent = this.props.onEvent || TooltipEvent.MouseEnter, offEvent = this.props.offEvent || TooltipEvent.MouseLeave;
        props[onEvent] = this.show.bind(this, true);
        props[offEvent] = this.show.bind(this, false);
        return props;
    };
    Tooltip.prototype.show = function (visible) {
        this.setState({ visible: this.props.disabled ? false : visible });
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;


/***/ }),

/***/ 119:
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
var ReactDOM = __webpack_require__(2);
var Modal_1 = __webpack_require__(22);
var SingleFamilyResidenceModal = /** @class */ (function (_super) {
    __extends(SingleFamilyResidenceModal, _super);
    function SingleFamilyResidenceModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    SingleFamilyResidenceModal.prototype.render = function () {
        var _this = this;
        return React.createElement(Modal_1.SwyfftModal, { id: 'single-family-residence-modal', className: 'single-family-residence-modal-md', size: Modal_1.ModalSize.Large, visible: this.state.visible, title: 'Please confirm your single family residence', titleIcon: 'exclamation', message: this.state.message || 'Swyfft only insures residential homes. Please confirm that this is a single family residence (or if not in MA, a 50% or greater owner-occupied duplex is acceptable), permanently attached to a foundation.', okText: 'Yes, confirmed!', okFunction: function () { return _this.onOK(); }, cancelText: 'Cancel', cancelFunction: function () { return _this.onCancel(); }, x: true });
    };
    SingleFamilyResidenceModal.prototype.show = function (args) {
        this.setState({
            visible: true,
            message: args.message
        });
        this.cancelFunction = args.cancelFunction;
        this.okFunction = args.okFunction;
    };
    SingleFamilyResidenceModal.prototype.hide = function () {
        this.setState({
            visible: false
        });
    };
    SingleFamilyResidenceModal.prototype.onCancel = function () {
        this.hide();
        if (this.cancelFunction)
            this.cancelFunction();
    };
    SingleFamilyResidenceModal.prototype.onOK = function () {
        this.hide();
        if (this.okFunction)
            this.okFunction();
    };
    return SingleFamilyResidenceModal;
}(React.Component));
var container = document.createElement('div');
document.body.appendChild(container);
var modal = ReactDOM.render(React.createElement(SingleFamilyResidenceModal, null), container);
exports.default = modal;


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var Constants = __webpack_require__(7);
var Storage = __webpack_require__(10);
var ApiCaller = __webpack_require__(28);
/** The Swyfft.Api namespace holds the various static methods used to access the Swyfft REST API */
// QuotesController
function createOrGetQuote(createRequest) {
    var utm = Storage.getUtmParameters();
    if (utm) {
        createRequest.UtmCampaign = utm.campaign;
        createRequest.UtmSource = utm.source;
        createRequest.UtmMedium = utm.medium;
    }
    var promise = ApiCaller.$put('api/quotes', createRequest, NProgress, 'create or get quote');
    return promise;
}
exports.createOrGetQuote = createOrGetQuote;
// QuotesController
function createQuote(quote) {
    var utm = Storage.getUtmParameters();
    if (utm) {
        quote.UtmCampaign = utm.campaign;
        quote.UtmSource = utm.source;
        quote.UtmMedium = utm.medium;
    }
    Common.loadingVm.message('Creating quote...');
    return ApiCaller.$post('api/quotes/index.html', quote, Common.loadingVm, 'create quote');
}
exports.createQuote = createQuote;
// QuotesController
function getQuoteByQuoteId(quoteId) {
    var promise = ApiCaller.$get("api/quotes/quoteid/" + quoteId, NProgress, 'get quote by quoteId');
    return promise;
}
exports.getQuoteByQuoteId = getQuoteByQuoteId;
// QuotesController
function getQuoteByQuoteIdNoRisk(quoteId) {
    var promise = ApiCaller.$get("api/quotes/quoteid/" + quoteId + "?checkRisk=false", NProgress, 'get quote by quoteId');
    return promise;
}
exports.getQuoteByQuoteIdNoRisk = getQuoteByQuoteIdNoRisk;
// QuotesController
function getQuotePremium(quoteId) {
    var url = "api/quotes/" + quoteId + "/premium";
    return ApiCaller.$get(url);
}
exports.getQuotePremium = getQuotePremium;
// QuotesController
function getCustomerInfo(quoteId) {
    var url = "api/quotes/" + quoteId + "/customerinfo";
    return ApiCaller.$get(url);
}
exports.getCustomerInfo = getCustomerInfo;
// QuotesController
function getQuotesByLatLong(ne, sw) {
    var url = "api/quotesbyLatLong?lat1=" + ne.lat() + "&long1=" + ne.lng() + "&lat2=" + sw.lat() + "&long2=" + sw.lng() + "&purchased=&emailed=&addresskey=&onlyMyQuotes=false";
    Common.loadingVm.message('Retrieving quotes...');
    return ApiCaller.$get(url, Common.loadingVm, 'get quotes by latlong');
}
exports.getQuotesByLatLong = getQuotesByLatLong;
// QuotesController
function getQuotes(lookup, progress) {
    var l = lookup;
    var url = "api/quotes?purchased=" + l.isPurchased + "&emailed=" + l.isEmailed + "&endorsement=" + l.isEndorsement + "&onlyMyQuotes=" + l.onlyMyQuotes + "&start=" + l.start + "&count=" + l.count + "&search=" + encodeURIComponent(l.search);
    if (progress === null) {
        Common.loadingVm.message('Retrieving quotes...');
        progress = Common.loadingVm;
    }
    return ApiCaller.$get(url, progress, 'get quotes');
}
exports.getQuotes = getQuotes;
// QuotesController
function patchQuote(patch) {
    var elementName = '';
    var elementValue = '';
    if (patch.Elements) {
        var element = patch.Elements[0];
        if (element) {
            elementName = element.ElementName;
            elementValue = element.Value;
        }
    }
    var gaEventAction = patch.gaEventAction || 'update quote';
    var url = "api/quotes";
    return ApiCaller.$patch(url, patch, NProgress, gaEventAction);
}
exports.patchQuote = patchQuote;
/**
 * Retrieves the set of required elements for a given zipCode.
 */
// QuotesController
function getRequiredElementGroup(addressKey) {
    var url = "api/requiredelementgroup/" + addressKey;
    return ApiCaller.$get(url);
}
exports.getRequiredElementGroup = getRequiredElementGroup;
/**
 * Retrieves the set of element descriptions for a given stateCode
 */
// ElementsController
function getElementDescriptions(stateKey) {
    var url = "api/elements/descriptions/homeowner/" + stateKey;
    return ApiCaller.$get(url);
}
exports.getElementDescriptions = getElementDescriptions;
// QuotesController
function getQuoteDetails(quoteId) {
    var url = "api/quotes/" + quoteId + "/details";
    return ApiCaller.$get(url);
}
exports.getQuoteDetails = getQuoteDetails;
// QuotesController
function setNonSingleFamilyResidencePurchaseConfirmation(quoteId) {
    return ApiCaller.$put("api/quotes/confirm/" + quoteId, {}, NProgress, 'confirm non single family residence on purchase');
}
exports.setNonSingleFamilyResidencePurchaseConfirmation = setNonSingleFamilyResidencePurchaseConfirmation;
/**
 * Retrieves a quote in IMS format (generally for repricing purposes, since the IMS format has the necessary data)
 */
// QuotesController
function getQuoteForRepriceTest(repriceQuoteId) {
    var url = "api/quotes/" + repriceQuoteId + "/repricetest";
    return ApiCaller.$get(url);
}
exports.getQuoteForRepriceTest = getQuoteForRepriceTest;
function purchasePolicy(quoteId, paymentInfo, activity) {
    var postfix = '';
    if (activity in Constants.reentries)
        postfix = "/" + activity;
    var url = "api/quotes/" + quoteId + "/purchase" + postfix;
    Common.loadingVm.message('Purchasing your policy...');
    return ApiCaller.$post(url, paymentInfo, Common.loadingVm, 'purchase');
}
exports.purchasePolicy = purchasePolicy;
function initiateReprice(quoteId, repriceModel) {
    var url = "api/quotes/" + quoteId + "/initiatereprice";
    Common.loadingVm.message('Initiating quote reprice...');
    return ApiCaller.$post(url, repriceModel, Common.loadingVm, 'initiate reprice');
}
exports.initiateReprice = initiateReprice;
function acceptReprice(quoteId, repriceModel) {
    var url = "api/quotes/" + quoteId + "/acceptreprice";
    Common.loadingVm.message('Accepting quote reprice...');
    return ApiCaller.$post(url, repriceModel, Common.loadingVm, 'accept reprice');
}
exports.acceptReprice = acceptReprice;
/**
 * Logs an unsuccessful attempt to lookup an address.
 */
function logQuoteRequest(event) {
    return ApiCaller.$post('api/log/quoterequest', event, null);
}
exports.logQuoteRequest = logQuoteRequest;
/**
 * Logs an unsuccessful attempt to lookup an address using a technique that allows it to succeed even as the page is navigating away.
 */
function logQuoteRequestSafe(event) {
    var url = "api/log/quoterequest?eventName=" + encodeURIComponent(event.EventName) +
        ("&addressKey=" + encodeURIComponent(event.AddressKey || '')) +
        ("&address=" + encodeURIComponent(event.Address)) +
        ("&description=" + encodeURIComponent(event.Description || ''));
    ApiCaller.$sendBeacon(url);
}
exports.logQuoteRequestSafe = logQuoteRequestSafe;
function getPropertyLocation(addressKey) {
    var url = "api/propertyLocation/" + addressKey;
    return ApiCaller.$get(url);
}
exports.getPropertyLocation = getPropertyLocation;
function updatePropertyLocation(addressKey, latitude, longitude) {
    var url = "api/propertyLocation/index.html";
    return ApiCaller.$put(url, {
        AddressKey: addressKey,
        Latitude: latitude,
        Longitude: longitude
    });
}
exports.updatePropertyLocation = updatePropertyLocation;
function getProperty(addressKey) {
    var url = "api/property/" + encodeURIComponent(addressKey);
    return ApiCaller.$get(url);
}
exports.getProperty = getProperty;
function putProperty(pd) {
    var url = 'api/property/index.html';
    return ApiCaller.$put(url, pd);
}
exports.putProperty = putProperty;
function getProperties(address, max) {
    address = address.trim();
    if (!address)
        return Promise.resolve([]);
    var url = "api/properties?address=" + encodeURIComponent(address);
    if (max)
        url += "&max=" + max;
    return ApiCaller.$get(url, null, "get properties");
}
exports.getProperties = getProperties;
function parseAddress(address) {
    var url = "api/address?address=" + encodeURIComponent(address);
    return ApiCaller.$get(url, null);
}
exports.parseAddress = parseAddress;
function updatePurchaseForReentry(quoteId, oldQuoteId, purchaseRequest) {
    var url = "api/quotes/" + quoteId + "/updatepurchase?oldQuoteId=" + oldQuoteId;
    Common.loadingVm.message('Accepting quote reprice...');
    return ApiCaller.$post(url, purchaseRequest, Common.loadingVm, 'accept reprice');
}
exports.updatePurchaseForReentry = updatePurchaseForReentry;
function getPurchaseRequestForReprice(lastBoundGuid, quoteHistory) {
    var url = "api/quotes/" + lastBoundGuid + "/purchaserequest";
    return ApiCaller.$post(url, quoteHistory, Common.loadingVm, 'getting purchase request');
}
exports.getPurchaseRequestForReprice = getPurchaseRequestForReprice;
function getZip(zip) {
    var url = "api/zip/" + zip;
    return ApiCaller.$get(url);
}
exports.getZip = getZip;
// MarketingQuoteController
function getQuoteByAddress(address) {
    var url = "api/quotes/address/" + encodeURIComponent(address);
    return ApiCaller.$get(url, null, 'get quote by address');
}
exports.getQuoteByAddress = getQuoteByAddress;
// MarketingQuoteController
function getQuoteByAddressKey(addressKey) {
    var promise = ApiCaller.$get("api/quotes/addresskey/" + addressKey, NProgress, 'get quote by address key');
    return promise;
}
exports.getQuoteByAddressKey = getQuoteByAddressKey;
// TestController
function getRemoteQuote(baseUrl, address) {
    var url = "api/test/remotequote?baseUrl=" + encodeURIComponent(baseUrl) + "&address=" + encodeURIComponent(address);
    return ApiCaller.$get(url);
}
exports.getRemoteQuote = getRemoteQuote;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var React = __webpack_require__(0);
var react_bootstrap_1 = __webpack_require__(1);
var Checker = function (props) {
    if (props.active)
        return (React.createElement("div", { className: "form-group container" },
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 1, lg: 1, className: "checkbox-container-ly" },
                    React.createElement("input", { type: "checkbox", className: "input-checkbox-md", id: props.id, checked: props.checked, onChange: function (e) { props.onClick(!props.checked); } }),
                    React.createElement("label", { htmlFor: props.id, className: "checkbox-field-md input-field-st" })),
                React.createElement(react_bootstrap_1.Col, { xs: 11, lg: 11 },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 11, xsOffset: 1, sm: 12, smOffset: 0 }, (props.externalUrl)
                            ? React.createElement("a", { href: props.externalUrl, target: "_blank" },
                                React.createElement("h4", { id: props.id, className: "checkbox-label-md" }, props.label))
                            : React.createElement("h4", { id: props.id, className: "checkbox-label-md checkbox-label-ly" }, props.label))),
                    props.secondaryLabel &&
                        props.secondaryLabelValues &&
                        props.checked &&
                        React.createElement(react_bootstrap_1.Row, null,
                            React.createElement(react_bootstrap_1.Col, { xs: 11, xsOffset: 1, sm: 12, smOffset: 0 },
                                React.createElement("h5", { className: "secondary-label-md secondary-label-ly" },
                                    "First down payment of ",
                                    React.createElement("span", { id: "downPayment" }, Common.formatCurrencyUS(props.secondaryLabelValues[0])),
                                    ", 11 monthly payments of ",
                                    React.createElement("span", { id: "monthlyPayment" }, Common.formatCurrencyUS(props.secondaryLabelValues[1])),
                                    ".")))))));
    else
        return (React.createElement("span", { hidden: true }));
};
exports.default = Checker;


/***/ }),

/***/ 121:
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
var react_bootstrap_1 = __webpack_require__(1);
var DateWrapper = /** @class */ (function (_super) {
    __extends(DateWrapper, _super);
    function DateWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            focused: false,
            dontBlur: false
        };
        return _this;
    }
    DateWrapper.prototype.focusOn = function () {
        if (this.state.dontBlur)
            return;
        this.setState({
            focused: true,
            dontBlur: false
        });
    };
    DateWrapper.prototype.focusOff = function () {
        if (this.state.dontBlur)
            return;
        if (!!this.props.onBlur)
            this.props.onBlur();
        this.setState({
            focused: false,
            dontBlur: false
        });
    };
    DateWrapper.prototype.render = function () {
        var _this = this;
        if (this.props.active) {
            //Column Layout: xs or sm = 3 3 6 or 4 8; md or lg = 3 3 4 or 3 4
            var colUnit = this.props.withDay ? 3 : 4;
            var foClass = this.state.focused ? ' date-focus-st' : '';
            return (React.createElement("div", { className: "purchase-date-ly", id: this.props.id },
                React.createElement("label", { className: "input-field-label-md" }, this.props.label),
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: colUnit, md: 4 },
                        React.createElement(react_bootstrap_1.FormGroup, { controlId: this.props.id + 'M', className: "date-input-ly", validationState: this.props.invalidate ? 'error' : undefined },
                            React.createElement(react_bootstrap_1.ControlLabel, { srOnly: true },
                                this.props.label + ' Month',
                                " "),
                            React.createElement(react_bootstrap_1.FormControl, { value: this.props.value.mVal, type: "number", placeholder: "mm", className: "input-field-md input-field-st" + foClass, onChange: function (event) {
                                    //have to hack around typescript here because it's wrong
                                    var monthValueInstance = event.currentTarget.value;
                                    if (monthValueInstance.length > 2)
                                        return;
                                    _this.props.stateSet(_this.props.value.setM(monthValueInstance));
                                    if (monthValueInstance.length === 2) {
                                        var next_1 = document.getElementById(_this.props.id + (_this.props.withDay ? 'D' : 'Y'));
                                        _this.setState({
                                            focused: true,
                                            dontBlur: true
                                        }, function () {
                                            if (next_1)
                                                next_1.focus();
                                            _this.setState({
                                                focused: true,
                                                dontBlur: false
                                            });
                                        });
                                    }
                                }, onFocus: function () { return _this.focusOn(); }, onBlur: function (event) {
                                    var monthValueInstance = event.currentTarget.value;
                                    if (monthValueInstance.length < 2) {
                                        _this.props.stateSet(_this.props.value.setM('0' + monthValueInstance));
                                    }
                                    _this.focusOff();
                                } }))),
                    this.props.withDay &&
                        React.createElement(react_bootstrap_1.Col, { xs: 3 },
                            React.createElement(react_bootstrap_1.FormGroup, { controlId: this.props.id + 'D', className: "date-input-ly", validationState: this.props.invalidate ? 'error' : undefined },
                                React.createElement(react_bootstrap_1.ControlLabel, { srOnly: true }, this.props.label + ' Day'),
                                React.createElement(react_bootstrap_1.FormControl, { value: this.props.value.dVal, type: "number", className: "input-field-md input-field-st" + foClass, placeholder: "dd", onChange: function (event) {
                                        //have to hack around typescript here because it's wrong
                                        var dayValueInstance = event.currentTarget.value;
                                        if (dayValueInstance.length > 2)
                                            return;
                                        _this.props.stateSet(_this.props.value.setD(dayValueInstance));
                                        if (dayValueInstance.length === 2) {
                                            var next_2 = document.getElementById(_this.props.id + 'Y');
                                            _this.setState({
                                                focused: true,
                                                dontBlur: true
                                            }, function () {
                                                if (next_2)
                                                    next_2.focus();
                                                _this.setState({
                                                    focused: true,
                                                    dontBlur: false
                                                });
                                            });
                                        }
                                    }, onFocus: function () { return _this.focusOn(); }, onBlur: function (event) {
                                        var dayValueInstance = event.currentTarget.value;
                                        if (dayValueInstance.length < 2) {
                                            _this.props.stateSet(_this.props.value.setD('0' + dayValueInstance));
                                        }
                                        _this.focusOff();
                                    } }))),
                    React.createElement(react_bootstrap_1.Col, { xs: colUnit * 2, md: 4 },
                        React.createElement(react_bootstrap_1.FormGroup, { controlId: this.props.id + 'Y', validationState: this.props.invalidate ? 'error' : undefined },
                            React.createElement(react_bootstrap_1.ControlLabel, { srOnly: true }, this.props.label + ' Year'),
                            React.createElement(react_bootstrap_1.FormControl, { value: this.props.value.yVal, type: "number", className: "input-field-md input-field-st" + foClass, placeholder: "yyyy", onChange: function (event) {
                                    //have to hack around typescript here because it's wrong
                                    var yearValueInstance = event.currentTarget.value;
                                    if (yearValueInstance.length > 4)
                                        return;
                                    _this.props.stateSet(_this.props.value.setY(yearValueInstance));
                                }, onFocus: function () { return _this.focusOn(); }, onBlur: function (event) {
                                    var yearValueInstance = event.currentTarget.value;
                                    if (yearValueInstance.length === 2) {
                                        _this.props.stateSet(_this.props.value.setY('20' + yearValueInstance));
                                    }
                                    _this.focusOff();
                                } }))))));
        }
        else
            return React.createElement("span", { hidden: true, id: this.props.id });
    };
    return DateWrapper;
}(React.Component));
exports.default = DateWrapper;


/***/ }),

/***/ 122:
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
var ValClass = __webpack_require__(61);
var react_bootstrap_1 = __webpack_require__(1);
var FormFields_1 = __webpack_require__(15);
var Validations = __webpack_require__(21);
var Helpers = __webpack_require__(123);
var MortgageForm = /** @class */ (function (_super) {
    __extends(MortgageForm, _super);
    function MortgageForm(props) {
        var _this = _super.call(this, props) || this;
        var initState = {
            ContactBankRequested: false,
            BankName: new ValClass.Value(''),
            BankStreet1: new ValClass.Value(''),
            BankStreet2: new ValClass.Value(''),
            BankCity: new ValClass.Value(''),
            BankStateCode: new ValClass.Value(''),
            BankZip: new ValClass.Value(''),
            BankFax: new ValClass.Value(''),
            LoanNumber: new ValClass.Value(''),
        };
        if (props.oldMortgageInfo) {
            initState.BankName.stateSet({ value: props.oldMortgageInfo.BankName });
            initState.BankStreet1.stateSet({ value: props.oldMortgageInfo.BankStreet1 });
            initState.BankStreet2.stateSet({ value: props.oldMortgageInfo.BankStreet2 });
            initState.BankCity.stateSet({ value: props.oldMortgageInfo.BankCity });
            initState.BankStateCode.stateSet({ value: props.oldMortgageInfo.BankStateCode });
            initState.BankZip.stateSet({ value: props.oldMortgageInfo.BankZip });
            initState.BankFax.stateSet({ value: props.oldMortgageInfo.BankFax });
            initState.LoanNumber.stateSet({ value: props.oldMortgageInfo.LoanNumber });
            console.log("Setting old mortgage info. BankName: " + initState.BankName.value);
        }
        _this.state = initState;
        return _this;
    }
    MortgageForm.prototype.getFormData = function () {
        return {
            ContactBankRequested: this.state.ContactBankRequested,
            BankName: this.state.BankName.value,
            BankStreet1: this.state.BankStreet1.value,
            BankStreet2: this.state.BankStreet2.value,
            BankCity: this.state.BankCity.value,
            BankStateCode: this.state.BankStateCode.value,
            BankZip: this.state.BankZip.value,
            BankFax: this.state.BankFax.value,
            LoanNumber: this.state.LoanNumber.value,
        };
    };
    MortgageForm.prototype.getInvalidKeys = function () {
        var _this = this;
        var keyset = Object.keys(this.state);
        return keyset.reduce(function (previous, key) {
            if (_this.state[key] instanceof ValClass.Value && !!_this.state[key].errorMessage) {
                previous.push(_this.state[key].errorMessage);
                console.log(key + " has an invalid value: " + _this.state[key].value);
            }
            return previous;
        }, []);
    };
    MortgageForm.prototype.onBankSelected = function (mortgagee) {
        this.setState({
            BankName: this.state.BankName.stateSet({ value: mortgagee.CompanyName }),
            BankStreet1: this.state.BankStreet1.stateSet({ value: mortgagee.Street1 }),
            BankStreet2: this.state.BankStreet2.stateSet({ value: mortgagee.Street2 }),
            BankCity: this.state.BankCity.stateSet({ value: mortgagee.City }),
            BankStateCode: this.state.BankStateCode.stateSet({ value: mortgagee.StateCode }),
            BankZip: this.state.BankZip.stateSet({ value: mortgagee.Zip }),
            BankFax: this.state.BankFax.stateSet({ value: mortgagee.Fax }),
        });
    };
    MortgageForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6 },
                    React.createElement(FormFields_1.BankNameAutocomplete, { id: "bank-name-" + this.props.id, label: "BANK NAME", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankName.dirty) &&
                            !!this.state.BankName.errorMessage, value: this.state.BankName.value, onSelect: function (mortgagee) { return _this.onBankSelected(mortgagee); }, onChange: function (event) { return _this.setState({
                            BankName: _this.state.BankName.stateSet({ value: event.currentTarget.value })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankName: _this.state.BankName.stateSet({
                                problem: Validations.validateAdditionalInfoField(_this.state.BankName.value, 200)
                                    ? ''
                                    : "Please enter a valid bank name (under 200 characters)",
                                dirty: true
                            })
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "loan-number-" + this.props.id, label: "LOAN NUMBER", active: this.props.active, invalidate: (this.props.showValidation || this.state.LoanNumber.dirty) &&
                            !!this.state.LoanNumber.errorMessage, value: this.state.LoanNumber.value, type: "text", onChange: function (event) { return _this.setState({
                            LoanNumber: _this.state.LoanNumber.stateSet({ value: event.currentTarget.value })
                        }); }, onBlur: function (event) { return _this.setState({
                            LoanNumber: _this.state.LoanNumber.stateSet({
                                problem: Validations.validateAdditionalInfoField(_this.state.LoanNumber.value, 100)
                                    ? ''
                                    : "Please enter a valid loan number (under 100 characters)",
                                dirty: true
                            })
                        }); } }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, lg: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-fax-" + this.props.id, ref: function (c) { return _this.bankFax = c; }, label: "FAX", active: this.props.active && !!this.props.showFax, invalidate: (this.props.showValidation || this.state.BankFax.dirty) &&
                            !!this.state.BankFax.errorMessage, value: this.state.BankFax.value, type: "text", onChange: function (event) { return _this.setState({
                            BankFax: _this.state.BankFax.stateSet({
                                value: event.currentTarget.value,
                                problem: _this.props.showFax &&
                                    (!_this.state.BankFax.value || Validations.validateOptionalPhoneNumber(event.currentTarget.value))
                                    ? ''
                                    : 'Please enter a valid bank fax number',
                                dirty: true
                            })
                        }); }, onBlur: function () { return _this.setState({
                            BankFax: _this.state.BankFax.stateSet({
                                problem: _this.props.showFax &&
                                    (!_this.state.BankFax.value || Validations.validateOptionalPhoneNumber(_this.state.BankFax.value))
                                    ? ''
                                    : 'Please enter a valid bank fax number',
                                dirty: true
                            })
                        }); } }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-street1-" + this.props.id, ref: function (c) { return _this.bankStreetOne = c; }, label: "BANK ADDRESS", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankStreet1.dirty) &&
                            !!this.state.BankStreet1.errorMessage, value: this.state.BankStreet1.value, placeholder: "street address", type: "text", onChange: function (event) { return _this.setState({
                            BankStreet1: _this.state.BankStreet1.stateSet({
                                value: event.currentTarget.value,
                                problem: Validations.validateAdditionalInfoField(event.currentTarget.value, 200)
                                    ? ''
                                    : "Please enter a valid bank address (under 200 characters)",
                                dirty: true
                            })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankStreet1: _this.state.BankStreet1.stateSet({
                                problem: Validations.validateAdditionalInfoField(_this.state.BankStreet1.value, 200)
                                    ? ''
                                    : "Please enter a valid bank address (under 200 characters)",
                                dirty: true
                            })
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 12 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-street2-" + this.props.id, ref: function (c) { return _this.bankStreetTwo = c; }, label: "", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankStreet2.dirty) &&
                            !!this.state.BankStreet2.errorMessage, value: this.state.BankStreet2.value, placeholder: "suite or unit #", type: "text", onChange: function (event) { return _this.setState({
                            BankStreet2: _this.state.BankStreet2.stateSet({
                                value: event.currentTarget.value,
                                problem: Validations.validateAdditionalInfoField(event.currentTarget.value, 100)
                                    ? ''
                                    : "Please enter a valid suite or unit # (under 100 characters)",
                                dirty: true
                            })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankStreet2: _this.state.BankStreet2.stateSet({
                                problem: Validations.validateAdditionalInfoField(_this.state.BankStreet2.value, 100)
                                    ? ''
                                    : "Please enter a valid suite or unit # (under 100 characters)",
                                dirty: true
                            })
                        }); } }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 5, lg: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-city-" + this.props.id, ref: function (c) { return _this.bankCity = c; }, label: "CITY", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankCity.dirty) &&
                            !!this.state.BankCity.errorMessage, value: this.state.BankCity.value, type: "text", onChange: function (event) { return _this.setState({
                            BankCity: _this.state.BankCity.stateSet({
                                value: event.currentTarget.value,
                                problem: Validations.validateAdditionalInfoField(event.currentTarget.value, 100)
                                    ? ''
                                    : "Please enter a valid city (under 100 characters)",
                                dirty: true
                            })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankCity: _this.state.BankCity.stateSet({
                                problem: Validations.validateAdditionalInfoField(_this.state.BankCity.value, 100)
                                    ? ''
                                    : "Please enter a valid city (under 100 characters)",
                                dirty: true
                            })
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 3, sm: 3, md: 2, lg: 2 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-state-code-" + this.props.id, label: "STATE", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankStateCode.dirty) &&
                            !!this.state.BankStateCode.errorMessage, value: this.state.BankStateCode.value, type: "text", onChange: function (event) { return _this.setState({
                            BankStateCode: _this.state.BankStateCode.stateSet({ value: event.currentTarget.value })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankStateCode: _this.state.BankStateCode.stateSet(Helpers.mergeStateCode(_this.state.BankStateCode.value))
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 9, sm: 12, md: 5, lg: 4 },
                    React.createElement(FormFields_1.FieldWrapper, { id: "bank-zip-" + this.props.id, ref: function (c) { return _this.bankZip = c; }, label: "ZIP", active: this.props.active, invalidate: (this.props.showValidation || this.state.BankZip.dirty) &&
                            !!this.state.BankZip.errorMessage, value: this.state.BankZip.value, type: "text", onChange: function (event) { return _this.setState({
                            BankZip: _this.state.BankZip.stateSet({
                                value: event.currentTarget.value,
                                problem: Validations.validateMortgageCompanyZip(event.currentTarget.value)
                                    ? ''
                                    : "Please enter a valid zip code",
                                dirty: true
                            })
                        }); }, onBlur: function (event) { return _this.setState({
                            BankZip: _this.state.BankZip.stateSet({
                                problem: Validations.validateMortgageCompanyZip(_this.state.BankZip.value)
                                    ? ''
                                    : "Please enter a valid zip code",
                                dirty: true
                            })
                        }); } })))));
    };
    return MortgageForm;
}(React.Component));
exports.default = MortgageForm;


/***/ }),

/***/ 123:
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
var Common = __webpack_require__(3);
var Storage = __webpack_require__(10);
var Validations = __webpack_require__(21);
function mergeStateCode(state) {
    if (!Validations.validateOptionalState(state))
        return {
            problem: 'Please enter a valid state name or code',
            dirty: true
        };
    var retVal = {
        problem: '',
        dirty: true
    };
    if (state.length > 2)
        retVal.value = Validations.getStateCodeByName(state);
    return retVal;
}
exports.mergeStateCode = mergeStateCode;
function getQuoteData() {
    return __awaiter(this, void 0, Promise, function () {
        var quoteId, quote, reason_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quoteId = Storage.getQuoteId();
                    if (!quoteId) {
                        throw "Sorry, we couldn't tell which quote you're trying to purchase.";
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Common.getQuoteById(quoteId)];
                case 2:
                    quote = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    reason_1 = _a.sent();
                    Common.handleGeneralError(reason_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, quote];
            }
        });
    });
}
exports.getQuoteData = getQuoteData;


/***/ }),

/***/ 124:
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
var Util = __webpack_require__(9);
var Storage = __webpack_require__(10);
var React = __webpack_require__(0);
var ValClass = __webpack_require__(61);
var Validations = __webpack_require__(21);
var FormFields_1 = __webpack_require__(15);
var react_bootstrap_1 = __webpack_require__(1);
var AddressForm = /** @class */ (function (_super) {
    __extends(AddressForm, _super);
    function AddressForm(props) {
        var _this = _super.call(this, props) || this;
        var initState = {
            address1: new ValClass.Value(''),
            address2: new ValClass.Value(''),
            city: new ValClass.Value(''),
            state: new ValClass.Value(''),
            zip: new ValClass.Value('')
        };
        if (props.defaultAddress) {
            initState.address1.stateSet({ value: props.defaultAddress.Street1 });
            initState.address2.stateSet({ value: props.defaultAddress.Street2 || '' });
            initState.city.stateSet({ value: props.defaultAddress.City });
            initState.state.stateSet({ value: props.defaultAddress.StateCode });
            initState.zip.stateSet({ value: props.defaultAddress.Zip });
        }
        _this.state = initState;
        return _this;
    }
    AddressForm.prototype.getFormAddress = function () {
        return {
            Street1: this.state.address1.value,
            Street2: this.state.address2.value,
            City: this.state.city.value,
            StateCode: this.state.state.value,
            Zip: this.state.zip.value
        };
    };
    AddressForm.prototype.getInvalidKeys = function () {
        var _this = this;
        var keyset = Object.keys(this.state);
        return keyset.reduce(function (previous, key) {
            var form = _this;
            if (form.state[key] instanceof ValClass.Value && !!form.state[key].errorMessage) {
                previous.push(form.state[key].errorMessage);
                console.log(key + " has an invalid value: " + form.state[key].value);
            }
            return previous;
        }, []);
    };
    AddressForm.prototype.render = function () {
        var _this = this;
        var lclPrefix = this.props.prefix ? this.props.prefix + " " : ""; // Prefix with space before for string interpolation where needed
        var lclPrefixCapital = lclPrefix[0].toUpperCase() + lclPrefix.slice(1); // Same but with capitalized first letter
        var title = lclPrefix + "address";
        var controlPrefix = this.props.prefix ? this.props.prefix + "-" : "";
        var isAgent = Storage.hasAuth();
        return (React.createElement("div", { className: this.props.visible ? "" : "hidden" },
            this.props.isAgent ?
                React.createElement("h4", { className: "section-header-md" },
                    "customer's ",
                    title) :
                React.createElement("h4", { className: "section-header-md" }, title),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12 },
                    React.createElement(FormFields_1.FieldWrapper, { id: controlPrefix + "address1", label: lclPrefixCapital + "Address", active: true, invalidate: (this.props.showValidation || this.state.address1.dirty) &&
                            !!this.state.address1.errorMessage, value: this.state.address1.value, placeholder: "street address", type: "text", autoComplete: isAgent ? "swyfft" + lclPrefixCapital.trim() + "Address" : '', onChange: function (event) { return _this.setState({
                            address1: _this.state.address1.stateSet({
                                value: event.currentTarget.value
                            })
                        }); }, onBlur: function () { return _this.setState({
                            address1: _this.state.address1.stateSet({
                                problem: !Util.isEmpty(_this.state.address1.value)
                                    ? ''
                                    : "Please enter your " + lclPrefix + "address",
                                dirty: true
                            })
                        }); } }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12 },
                    React.createElement(FormFields_1.FieldWrapper, { id: controlPrefix + "address2", label: "", active: true, invalidate: (this.props.showValidation || this.state.address2.dirty) &&
                            !!this.state.address2.errorMessage, value: this.state.address2.value, placeholder: "apt or unit #", type: "text", autoComplete: isAgent ? "swyfft" + lclPrefixCapital.trim() + "Address2" : '', onChange: function (event) { return _this.setState({
                            address2: _this.state.address2.stateSet({ value: event.currentTarget.value })
                        }); } }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 5, lg: 6 },
                    React.createElement(FormFields_1.FieldWrapper, { id: controlPrefix + "city", label: "City", active: true, invalidate: (this.props.showValidation || this.state.city.dirty) &&
                            !!this.state.city.errorMessage, value: this.state.city.value, type: "text", autoComplete: isAgent ? "swyfft" + lclPrefixCapital.trim() + "City" : '', onChange: function (event) { return _this.setState({
                            city: _this.state.city.stateSet({
                                value: event.currentTarget.value
                            })
                        }); }, onBlur: function () { return _this.setState({
                            city: _this.state.city.stateSet({
                                problem: Validations.validateField(_this.state.city.value)
                                    ? ''
                                    : "Please enter a valid " + lclPrefix + "address city",
                                dirty: true
                            })
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 3, sm: 3, md: 2, lg: 2 },
                    React.createElement(FormFields_1.FieldWrapper, { id: controlPrefix + "state", label: "State", active: true, invalidate: (this.props.showValidation || this.state.state.dirty) &&
                            !!this.state.state.errorMessage, value: this.state.state.value, type: "text", autoComplete: isAgent ? "swyfft" + lclPrefixCapital.trim() + "State" : '', onChange: function (event) {
                            if (event.currentTarget.value.length < 3)
                                _this.setState({
                                    state: _this.state.state.stateSet({ value: event.currentTarget.value })
                                });
                        }, onBlur: function () { return _this.setState({
                            state: _this.state.state.stateSet({
                                problem: Validations.validateStateCode(_this.state.state.value)
                                    ? ''
                                    : "Please enter your " + lclPrefix + "address state",
                                dirty: true
                            })
                        }); } })),
                React.createElement(react_bootstrap_1.Col, { xs: 9, sm: 12, md: 5, lg: 4 },
                    React.createElement(FormFields_1.FieldWrapper, { id: controlPrefix + "zip", label: "Zip", active: true, invalidate: (this.props.showValidation || this.state.zip.dirty) &&
                            !!this.state.zip.errorMessage, value: this.state.zip.value, type: "text", autoComplete: isAgent ? "swyfft" + lclPrefixCapital.trim() + "ZipCode" : '', onChange: function (event) {
                            if (event.currentTarget.value.length < 6)
                                _this.setState({
                                    zip: _this.state.zip.stateSet({ value: event.currentTarget.value })
                                });
                        }, onBlur: function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var newState, zipInfo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        newState = {};
                                        newState.zip = this.state.zip.stateSet({
                                            problem: Validations.validateZip(this.state.zip.value)
                                                ? ''
                                                : "Please enter a valid " + lclPrefix + "address zip code",
                                            dirty: true
                                        });
                                        if (!!newState.zip.errorMessage) return [3 /*break*/, 2];
                                        console.log('Zip is valid');
                                        if (!(Util.isEmpty(this.state.city.value) ||
                                            Util.isEmpty(this.state.state.value))) return [3 /*break*/, 2];
                                        console.log('Missing data for city or state: calling zip lookup');
                                        return [4 /*yield*/, HOApi.getZip(newState.zip.value)];
                                    case 1:
                                        zipInfo = _a.sent();
                                        try {
                                            if (!!zipInfo) {
                                                if (Util.isEmpty(this.state.city.value)) {
                                                    newState.city = this.state.city
                                                        .stateSet({
                                                        value: zipInfo.City,
                                                        problem: ''
                                                    });
                                                }
                                                if (Util.isEmpty(this.state.state.value)) {
                                                    newState.state = this.state.state
                                                        .stateSet({
                                                        value: zipInfo.StateCode,
                                                        problem: ''
                                                    });
                                                }
                                            }
                                        }
                                        catch (err) {
                                            console.error("Unable to set zip: " + err);
                                        }
                                        _a.label = 2;
                                    case 2:
                                        this.setState(newState);
                                        return [2 /*return*/];
                                }
                            });
                        }); } })))));
    };
    AddressForm.defaultProps = {
        visible: true
    };
    return AddressForm;
}(React.Component));
exports.default = AddressForm;


/***/ }),

/***/ 125:
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
var ReactDOM = __webpack_require__(2);
var Modal_1 = __webpack_require__(22);
var HubContactModal = /** @class */ (function (_super) {
    __extends(HubContactModal, _super);
    function HubContactModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    HubContactModal.prototype.render = function () {
        var _this = this;
        return React.createElement(Modal_1.HubModal, { id: 'hubContactModal', className: 'hub-modal-container-md', size: Modal_1.ModalSize.Large, visible: this.state.visible, title: 'Get in touch with an expert', okText: this.okText || '', okFunction: function (emailRequest) { return _this.onOK(emailRequest); }, cancelText: 'continue with purchase', cancelFunction: function () { return _this.onCancel(); }, continueFunction: function () { return _this.onContinue(); }, x: true, purchaseSuccessDetails: this.purchaseSuccessDetails });
    };
    HubContactModal.prototype.show = function (args) {
        this.okText = args.okText;
        this.cancelFunction = args.cancelFunction;
        this.okFunction = args.okFunction;
        this.continueFunction = args.continueFunction;
        this.purchaseSuccessDetails = args.purchaseSuccessDetails;
        this.setState({
            visible: true
        });
    };
    HubContactModal.prototype.hide = function () {
        this.setState({
            visible: false
        });
    };
    HubContactModal.prototype.onCancel = function () {
        this.hide();
        if (this.cancelFunction)
            this.cancelFunction();
    };
    HubContactModal.prototype.onContinue = function () {
        this.hide();
        if (this.continueFunction)
            this.continueFunction();
    };
    HubContactModal.prototype.onOK = function (emailRequest) {
        this.hide();
        if (this.okFunction)
            this.okFunction(emailRequest);
    };
    return HubContactModal;
}(React.Component));
var container = document.createElement('div');
document.body.appendChild(container);
var hubModal = ReactDOM.render(React.createElement(HubContactModal, null), container);
exports.default = hubModal;


/***/ }),

/***/ 126:
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
var Common = __webpack_require__(3);
var MembershipApi = __webpack_require__(24);
var WrappedFormGroup = /** @class */ (function (_super) {
    __extends(WrappedFormGroup, _super);
    function WrappedFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrappedFormGroup.prototype.render = function () {
        var value = this.props.value;
        return React.createElement(react_bootstrap_1.FormGroup, { className: "optin-form-group-md " + (this.props.children ? 'optin-dropdown-form-md' : 'optin-input-form-group-md'), controlId: this.props.id, validationState: value.valid ? undefined : 'error' },
            React.createElement(react_bootstrap_1.ControlLabel, { className: 'optin-input-field-label-md' }, this.props.label),
            React.createElement(react_bootstrap_1.FormControl, { value: this.props.value.value, name: this.props.name, placeholder: this.props.placeholder || this.props.label, type: this.props.type || 'text', className: 'optin-input-field-md', componentClass: this.props.children ? 'select' : undefined }, this.props.children),
            React.createElement("div", { className: 'optin-error-md' }, value.valid ? '' : value.error));
    };
    return WrappedFormGroup;
}(React.Component));
var OptinModal = /** @class */ (function (_super) {
    __extends(OptinModal, _super);
    function OptinModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false,
            loading: false,
            finished: false,
            firstName: new FormFields_1.Value('first name', '', { required: true }),
            lastName: new FormFields_1.Value('last name', '', { required: true }),
            company: new FormFields_1.Value('company', '', { required: true }),
            email: new FormFields_1.Value('email address', '', { required: true, pattern: 'email' }),
            phone: new FormFields_1.Value('phone number', '', { required: true, pattern: 'phone' }),
        };
        return _this;
    }
    OptinModal.prototype.render = function () {
        return React.createElement(Modal_1.NewSwyfftModal, { id: 'quote-optin-modal', className: "optin-modal-md " + (this.state.finished ? 'finished' : ''), size: Modal_1.ModalSize.Large, visible: this.state.visible, title: this.getTitle(), subtitle: this.getSubtitle(), cancelFunction: this.onCancel.bind(this), x: true }, !this.state.finished &&
            React.createElement("form", { onChange: this.onChange.bind(this) },
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                        React.createElement(WrappedFormGroup, { id: 'optin-first-name', name: 'firstName', value: this.state.firstName, placeholder: 'First', label: 'First name' })),
                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                        React.createElement(WrappedFormGroup, { id: 'optin-last-name', name: 'lastName', value: this.state.lastName, placeholder: 'Last', label: 'Last name' }))),
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                        React.createElement(WrappedFormGroup, { id: 'optin-company', name: 'company', value: this.state.company, placeholder: 'e.g. Brokers Inc.', label: 'Company' })),
                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                        React.createElement(WrappedFormGroup, { id: 'optin-email', name: 'email', value: this.state.email, placeholder: 'sample@gmail.com', label: 'Your work email' }))),
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: 6 },
                        React.createElement(WrappedFormGroup, { id: 'optin-phone', name: 'phone', value: this.state.phone, placeholder: '(###) ###-####', label: 'Phone #' }))),
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: 6, xsOffset: 6 },
                        React.createElement("button", { type: 'button', disabled: this.state.loading, onClick: this.onSignUp.bind(this) }, "Sign Up"))),
                React.createElement(react_bootstrap_1.Row, null,
                    React.createElement(react_bootstrap_1.Col, { xs: 12 },
                        React.createElement("span", { className: 'optin-footer' },
                            "Already have an account? ",
                            React.createElement("a", { href: '/Login' }, "Login"),
                            " to get started.")))));
    };
    OptinModal.prototype.getTitle = function () {
        return this.state.finished ? 'Thank you!' : 'Don\'t forget to sign up!';
    };
    OptinModal.prototype.getSubtitle = function () {
        return this.state.finished ? 'A Swyfft representative will reach out soon to get you appointed.' : 'If you\'re ready to write business with Swyfft, give us some details so we can get you appointed.';
    };
    OptinModal.prototype.show = function (parameters, onClose) {
        this.parameters = parameters;
        this.onClose = onClose;
        this.setState({
            visible: true
        });
    };
    OptinModal.prototype.hide = function () {
        this.setState({
            visible: false
        });
        if (this.onClose)
            this.onClose(this.state.finished);
    };
    OptinModal.prototype.onChange = function (e) {
        var state = this.state;
        state[e.target.name].set(e.target.value);
        this.setState(state);
    };
    OptinModal.prototype.onCancel = function () {
        this.hide();
    };
    OptinModal.prototype.onSignUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isValid = Object.keys(this.state).map(function (key) {
                            var prop = _this.state[key];
                            return prop.validate ? prop.validate() : undefined;
                        }).every(function (e) { return !e; });
                        this.forceUpdate();
                        if (!isValid)
                            return [2 /*return*/];
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, MembershipApi.optin({
                                FirstName: this.state.firstName.value,
                                LastName: this.state.lastName.value,
                                Email: this.state.email.value,
                                PhoneNumber: this.state.phone.value,
                                CompanyName: this.state.company.value,
                                UtmSource: this.parameters.source,
                                UtmCampaign: this.parameters.campaign,
                                UtmMedium: this.parameters.medium
                            })];
                    case 2:
                        _a.sent();
                        this.setState({ loading: false, finished: true });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        Common.handleGeneralError(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return OptinModal;
}(React.Component));
exports.OptinModal = OptinModal;
var container = document.createElement('div');
document.body.appendChild(container);
var modal = ReactDOM.render(React.createElement(OptinModal, null), container);
exports.default = modal;


/***/ }),

/***/ 127:
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
var ContinuousProgress = /** @class */ (function (_super) {
    __extends(ContinuousProgress, _super);
    function ContinuousProgress(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    ContinuousProgress.prototype.start = function () {
        this.setState({ visible: true });
    };
    ContinuousProgress.prototype.done = function (forceShow) {
        this.setState({ visible: false });
    };
    ContinuousProgress.prototype.render = function () {
        return React.createElement("div", { className: 'continuous-progress' },
            React.createElement("div", { className: "spinner " + (this.state.visible ? '' : 'hidden') }));
    };
    return ContinuousProgress;
}(React.Component));
exports.ContinuousProgress = ContinuousProgress;


/***/ }),

/***/ 128:
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
var Component_1 = __webpack_require__(52);
var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.onScrollHandler = _this.onScroll.bind(_this);
        _this.state = {
            models: []
        };
        return _this;
    }
    InfiniteScroll.prototype.getModels = function () {
        return this.state.models;
    };
    InfiniteScroll.prototype.setModels = function (models) {
        this.setState({
            models: models
        });
    };
    InfiniteScroll.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.onScrollHandler);
        this.mounted = true;
        this.update();
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.onScrollHandler);
        this.mounted = false;
    };
    InfiniteScroll.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.start = 0;
                this.count = this.props.initialCount || this.props.count;
                this.loading = false;
                this.more = true;
                this.setState({
                    models: []
                }, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.get()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    InfiniteScroll.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oldCount, oldMore;
            var _this = this;
            return __generator(this, function (_a) {
                oldCount = this.count, oldMore = this.more;
                this.count = this.start;
                this.start = 0;
                this.more = true;
                this.loading = false;
                this.setState({
                    models: []
                }, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.get()];
                            case 1:
                                _a.sent();
                                this.count = oldCount;
                                this.more = oldMore;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    InfiniteScroll.prototype.onScroll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var body, html, pageHeight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = document.body, html = document.documentElement, pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                        if (pageHeight - window.scrollY >= 1400)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.get()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InfiniteScroll.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var models;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.loading || !this.more || !this.props.get)
                            return [2 /*return*/];
                        this.loading = true;
                        return [4 /*yield*/, this.props.get(this.start, this.count)];
                    case 1:
                        models = _a.sent();
                        this.mounted && this.setState({
                            models: this.state.models.concat(models)
                        }, function () {
                            _this.more = models.length === _this.count;
                            if (_this.more)
                                _this.start = (isNaN(_this.start) ? 0 : _this.start) + _this.count;
                            _this.loading = false;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InfiniteScroll.prototype.render = function () {
        return this.state.models && this.state.models.length > 0 ?
            this.state.models.map(this.props.build.bind(this)) :
            null;
    };
    return InfiniteScroll;
}(Component_1.default));
exports.default = InfiniteScroll;


/***/ }),

/***/ 129:
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Models = __webpack_require__(49);
var Common = __webpack_require__(3);
var Storage = __webpack_require__(10);
var CommApi = __webpack_require__(62);
var CommercialErrorModal_1 = __webpack_require__(274);
var RenderedCommercialErrorModal;
function getCommQuoteFromScratch() {
    return __awaiter(this, void 0, Promise, function () {
        var quoteId, quote, reason_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quoteId = Storage.getQuoteId();
                    if (!quoteId) {
                        throw "No QuoteId was found";
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, CommApi.getQuoteByQuoteId(quoteId)];
                case 2:
                    quote = _a.sent();
                    return [2 /*return*/, quote];
                case 3:
                    reason_1 = _a.sent();
                    //TODO: replace with error handler once error modals are merged
                    throw reason_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getCommQuoteFromScratch = getCommQuoteFromScratch;
function getCommQuoteById(quoteId) {
    var getQuote = CommApi.getQuoteByQuoteId(quoteId);
    return getQuote.then(function (quote) {
        Storage.setAddressKey(quote.Locations[0].QuoteProperty.AddressKey);
        Storage.setQuoteId(quote.QuoteId);
        return quote;
    });
}
exports.getCommQuoteById = getCommQuoteById;
//07/02/18: Not needed for MVP, commented out in case it is needed for future versions
//export function getCommQuoteByAddressKey(addressKey: string): Promise<Models.CommercialQuoteModel> {
//    const getQuote = CommApi.getQuoteByAddressKey(addressKey);
//    return getQuote.then(quote => {
//        Storage.setAddressKey(quote.Locations[0].QuoteProperty.AddressKey);
//        Storage.setQuoteId(quote.QuoteId);
//        return quote;
//    });
//}
/**
 * Call the MD service with the full commercial address string and grab the commercial address key.
 */
function getCommercialPropertyModel(address) {
    return __awaiter(this, void 0, Promise, function () {
        var swAddresses, swAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!address)
                        return [2 /*return*/, null];
                    return [4 /*yield*/, CommApi.getCommercialProperties(address)];
                case 1:
                    swAddresses = _a.sent();
                    swAddress = Common.handleSwyfftPropertyModels(swAddresses);
                    if (swAddress) {
                        return [2 /*return*/, swAddress];
                    }
                    // CW 20180809 The API call above now handles the query to MD so this code is no longer necessary
                    //             but preserved per request in PR 3195
                    //const mdResponse = await Common.getPropertiesFromMd(address);
                    //const mdAddress = Common.handleMdPropertyModels(address, mdResponse.Results);
                    //if (mdAddress) {
                    //    return {
                    //        AddressKey: (mdAddress.AddressKey || '').split(',')[0],
                    //        Street1: mdAddress.AddressLine1,
                    //        City: mdAddress.City,
                    //        StateCode: mdAddress.State,
                    //        Zip: mdAddress.PostalCode,
                    //        FullAddress: mdAddress.AddressLine1 + ', ' + mdAddress.City + ' ' + mdAddress.State + ' ' + mdAddress.PostalCode
                    //    };
                    //}
                    throw "We were unable to identify that address. Please try again.";
            }
        });
    });
}
exports.getCommercialPropertyModel = getCommercialPropertyModel;
function getCommAddressMatches(address) {
    return __awaiter(this, void 0, Promise, function () {
        var swResponse, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!address)
                        return [2 /*return*/, []];
                    return [4 /*yield*/, CommApi.getCommercialProperties(address)];
                case 1:
                    swResponse = _a.sent();
                    if (swResponse.length > 0) {
                        return [2 /*return*/, Common.toMdResults(swResponse)];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    Common.logErrorSafe(new Models.ApiError("getCommAddressMatches", "ERROR", "getCommAddressMatches failed", null, err_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, null];
            }
        });
    });
}
exports.getCommAddressMatches = getCommAddressMatches;
function handleGeneralError(reason) {
    console.error(reason);
    //normalize error reason text prior to instantiating modal.
    var err = Common.normalizeError(reason);
    return Common.saveAndShowError(err, showModalHandler);
}
exports.handleGeneralError = handleGeneralError;
function showModalHandler(message, reference, severity) {
    if (!RenderedCommercialErrorModal) {
        var container = document.createElement('div');
        document.body.appendChild(container);
        RenderedCommercialErrorModal = ReactDOM.render(React.createElement(CommercialErrorModal_1.default), container);
    }
    return RenderedCommercialErrorModal.show({ message: message, severity: severity || '' });
}


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(290);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(33) && !__webpack_require__(55)(function(){
  return Object.defineProperty(__webpack_require__(135)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(54)
  , document = __webpack_require__(26).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(34)
  , toIObject    = __webpack_require__(35)
  , arrayIndexOf = __webpack_require__(292)(false)
  , IE_PROTO     = __webpack_require__(83)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(138);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(81);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(179)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(180)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 15:
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var react_bootstrap_1 = __webpack_require__(1);
var HOApi = __webpack_require__(12);
var AdminApi = __webpack_require__(11);
var Common = __webpack_require__(3);
var Constants = __webpack_require__(7);
__webpack_require__(20);
var Rule = /** @class */ (function () {
    function Rule(validator, error, label) {
        this.label = label || '';
        this.validator = validator;
        this.error = error;
    }
    Rule.prototype.validate = function (value) {
        var result = this.validator(value);
        return {
            valid: result,
            error: this.error
        };
    };
    return Rule;
}());
exports.Rule = Rule;
var Value = /** @class */ (function () {
    function Value(name, value, rules, error) {
        var _this = this;
        this.emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.name = name;
        this.value = value || '';
        this.rules = [];
        this.valid = true;
        if (rules) {
            var _loop_1 = function () {
                var pattern = rules[specifier], rule = null;
                if (specifier === 'required')
                    rule = new Rule(function (value) { return !!value; }, error || "Please enter a value for " + name + ".", 'specifier:required');
                else if (pattern === 'email')
                    rule = new Rule(function (value) { return !value || _this.emailRegEx.test(value); }, error || "Please enter a valid " + name + ".", 'pattern:email');
                else if (pattern === 'phone')
                    rule = new Rule(function (value) { return !value || (value.replace(/\D/g, '') || []).length === 10; }, error || "Please enter a valid " + name + ".", 'pattern:phone');
                else if (pattern === 'phoneOrEmail')
                    rule = new Rule(function (value) { return !value || (value.replace(/\D/g, '') || []).length === 10 || _this.emailRegEx.test(value); }, error || "Please enter a valid " + name + ".", 'pattern:phoneOrEmail');
                else if (pattern === 'zip')
                    rule = new Rule(function (value) { return !value || /(^\d{5}$)/.test(value); }, error || "Please enter a valid " + name + ".", 'pattern:zip');
                else if (pattern === 'zip+4')
                    rule = new Rule(function (value) { return !value || /(^\d{5}-\d{4}$)/.test(value); }, error || "Please enter a valid " + name + ".", 'pattern:zip+4');
                else if (pattern === 'zipany')
                    rule = new Rule(function (value) { return !value || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value); }, error || "Please enter a valid " + name + ".", 'pattern:zipany');
                else if (pattern instanceof RegExp)
                    rule = new Rule(function (value) { return pattern.test(value); }, error || "Please enter a valid " + name + ".", "pattern:regex:" + pattern);
                else if (specifier === 'length')
                    rule = new Rule(function (value) { return value.length >= parseInt(pattern); }, error || "The " + name + " should be longer than " + pattern + " characters.", 'specifier:length');
                else if (pattern === 'latitude' || pattern === 'longitude')
                    rule = new Rule(function (value) { return !isNaN(value) && value >= -90 && value <= 90 && value !== 0; }, error || "The " + name + " needs to be a number between -90 and 90.", 'pattern:latlon');
                if (rule) {
                    this_1.rules.push(rule);
                }
            };
            var this_1 = this;
            for (var specifier in rules) {
                _loop_1();
            }
        }
    }
    Value.prototype.set = function (value) {
        this.value = value === undefined ? '' : value;
        this.valid = true;
        return this;
    };
    Value.prototype.reset = function () {
        this.error = '';
        this.set(undefined);
    };
    Value.prototype.validate = function () {
        this.valid = true;
        for (var i = 0; this.valid && i < this.rules.length; i++) {
            var result = this.rules[i].validate(this.value);
            if (!result.valid) {
                this.valid = false;
                return this.error = result.error;
            }
        }
        return this.error = null;
    };
    return Value;
}());
exports.Value = Value;
;
var FieldWrapper = /** @class */ (function (_super) {
    __extends(FieldWrapper, _super);
    function FieldWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldWrapper.prototype.render = function () {
        var _this = this;
        if (this.props.active)
            return (React.createElement(react_bootstrap_1.FormGroup, { controlId: this.props.id, validationState: this.props.invalidate ? 'error' : undefined, className: this.props.className || '' },
                React.createElement(react_bootstrap_1.ControlLabel, { className: "input-field-label-md " + (this.props.labelClassName || '') }, this.props.label),
                React.createElement("span", { className: "input-field-error-md " + (this.props.error ? '' : 'input-field-error-hidden-md') }, this.props.error),
                this.props.readonly ?
                    React.createElement("span", { className: "readonly" }, this.props.value) :
                    React.createElement("div", { className: "form-control-wrapper " + (this.props.options ? 'select' : '') },
                        React.createElement(react_bootstrap_1.FormControl, { componentClass: this.props.type === 'select' ? 'select' : 'input', name: this.props.name, autoComplete: this.props.autoComplete === undefined ? "on" : this.props.autoComplete, onChange: this.onChange.bind(this), value: this.props.value, className: "input-field-md input-field-st " + this.props.inputClassName, placeholder: this.props.placeholder, type: this.props.type, onFocus: function () {
                                if (!!_this.props.onFocus)
                                    _this.props.onFocus();
                            }, onBlur: function () {
                                if (!!_this.props.onBlur)
                                    _this.props.onBlur();
                            }, children: this.props.options ? this.props.options.map(function (o) { return React.createElement("option", { value: o.value }, o.text); }) : undefined }),
                        this.props.options ? React.createElement("div", { className: 'arrow-selector' }, "\u25BC") : React.createElement("div", null))));
        else
            return React.createElement("span", { hidden: true });
    };
    FieldWrapper.prototype.onChange = function (event) {
        var target = event.target, maxLength = this.props.maxLength;
        if (maxLength && target.value.length > maxLength)
            target.value = target.value.substring(0, maxLength);
        this.props.onChange(event, this.props.name);
    };
    return FieldWrapper;
}(React.Component));
exports.FieldWrapper = FieldWrapper;
var BankNameAutocomplete = /** @class */ (function (_super) {
    __extends(BankNameAutocomplete, _super);
    function BankNameAutocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            maxLength: 100,
            filter: '',
            mortgagees: [],
            visible: false
        };
        return _this;
    }
    BankNameAutocomplete.prototype.componentDidMount = function () {
        this.mounted = true;
        this.getMortgageCompanies();
        this.onBodyClickHandler = this.onBodyClick.bind(this);
        document.querySelector('body').addEventListener('click', this.onBodyClickHandler);
    };
    BankNameAutocomplete.prototype.componentWillUnmount = function () {
        this.mounted = false;
        document.querySelector('body').removeEventListener('click', this.onBodyClickHandler);
    };
    BankNameAutocomplete.prototype.getMortgageCompanies = function () {
        var _this = this;
        return AdminApi.getMortgagees(this.state.filter).then(function (mortgagees) {
            if (_this.mounted)
                _this.setState({
                    mortgagees: _this.mortgagees = mortgagees
                });
        }).catch(function (e) { Common.handleGeneralError(e); });
    };
    BankNameAutocomplete.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "bank-name-bs" },
            React.createElement("div", { className: "bank-name-autocomplete-bs" + (this.state.visible ? '' : ' hidden') },
                React.createElement("div", null, this.renderMortgagees())),
            React.createElement(FieldWrapper, { id: this.props.id, label: this.props.label, active: this.props.active, invalidate: this.props.invalidate, value: this.props.value, type: "text", maxLength: this.state.maxLength, onChange: function (event) { return _this.onChange(event); }, onFocus: function () { return _this.onFocus(); }, onBlur: function () { return _this.onBlur(); } }));
    };
    BankNameAutocomplete.prototype.renderMortgagees = function () {
        var _this = this;
        return this.state.mortgagees.map(function (mortgagee, i) {
            return React.createElement("div", { key: i, className: "mortgagee", onClick: function () { return _this.onSelect(mortgagee); } },
                React.createElement("span", { className: "company-name" }, mortgagee.CompanyName));
        });
    };
    BankNameAutocomplete.prototype.onBodyClick = function (e) {
        if (!this.mounted)
            return;
        if (!isAncestor(e.target, 'bank-name'))
            this.setState({
                visible: false
            });
        function isAncestor(element, className) {
            while (element.parentNode) {
                element = element.parentNode;
                if ((element.className || '').indexOf(className) > -1)
                    return true;
            }
            return false;
        }
    };
    BankNameAutocomplete.prototype.onChange = function (event) {
        var filtered = [], value = event.target.value.toLowerCase();
        this.mortgagees.forEach(function (mortgagee) {
            if (mortgagee.CompanyName.toLowerCase().indexOf(value) > -1)
                filtered.push(mortgagee);
        });
        this.setState({
            mortgagees: filtered
        });
        this.props.onChange(event, this.props.name);
    };
    BankNameAutocomplete.prototype.onSelect = function (mortgagee) {
        this.setState({
            visible: false
        });
        this.props.onSelect(mortgagee);
    };
    BankNameAutocomplete.prototype.onFocus = function () {
        this.setState({
            visible: true
        });
    };
    BankNameAutocomplete.prototype.onBlur = function () {
        if (this.props.onBlur)
            this.props.onBlur();
    };
    return BankNameAutocomplete;
}(React.Component));
exports.BankNameAutocomplete = BankNameAutocomplete;
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props, get, display) {
        var _this = _super.call(this, props) || this;
        _this.maxLength = _this.props.maxResults || 100;
        _this.get = get;
        _this.display = display;
        _this.hideOnBodyClick = _this.props.hideOnBodyClick === undefined ? true : _this.props.hideOnBodyClick;
        _this.state = {
            value: '',
            results: [],
            visible: false,
            selectedIndex: -1
        };
        return _this;
    }
    Autocomplete.prototype.componentDidMount = function () {
        this.onBodyClickHandler = this.onBodyClick.bind(this);
        document.querySelector('body').addEventListener('click', this.onBodyClickHandler);
    };
    Autocomplete.prototype.componentWillUnmount = function () {
        document.querySelector('body').removeEventListener('click', this.onBodyClickHandler);
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: (this.props.className || '') + " autocomplete" },
            React.createElement("label", { className: this.props.labelClassName || '' }, this.props.label),
            React.createElement("div", { className: this.props.inputWrapperClassName || '' },
                React.createElement("input", { className: this.props.inputClassName || '', type: 'text', value: this.state.value, id: this.props.id || '', autoComplete: 'off', onChange: this.onChange.bind(this), onKeyDown: this.onKeyDown.bind(this) }),
                React.createElement("div", { className: "selector" + (this.state.visible ? '' : ' autocomplete-hidden') + " " + (this.props.selectorClassName || '') },
                    React.createElement("div", null, this.state.results.map(function (result, i) {
                        return React.createElement("div", { className: "property " + (_this.state.selectedIndex === i ? 'selected' : ''), key: i, onClick: _this.onSelect.bind(_this, result), onMouseEnter: _this.onHover.bind(_this, i), onMouseLeave: _this.onHover.bind(_this, i) },
                            React.createElement("span", null, _this.display(result)));
                    })))));
    };
    Autocomplete.prototype.onHover = function (selectedIndex) {
        this.setState({ selectedIndex: selectedIndex });
    };
    Autocomplete.prototype.onBodyClick = function (e) {
        if (this.hideOnBodyClick && !isAncestor(e.target, 'selector'))
            this.setState({
                visible: false
            });
        function isAncestor(element, className) {
            while (element.parentNode) {
                element = element.parentNode;
                if ((element.className || '').indexOf(className) > -1)
                    return true;
            }
            return false;
        }
    };
    Autocomplete.prototype.onChange = function (e) {
        var _this = this;
        var value = e.target.value;
        this.setState({
            value: value
        });
        if (this.timeout)
            clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.performGet();
            if (_this.props.onDebouncedChange)
                _this.props.onDebouncedChange(value);
        }, 250);
        if (this.props.onChange)
            this.props.onChange(value);
    };
    Autocomplete.prototype.onKeyDown = function (e) {
        var keyCode = e.keyCode, selectedIndex = this.state.selectedIndex, length = this.state.results.length - 1;
        if (keyCode === Constants.KeyCodes.Enter) {
            this.onSelect(this.state.results[this.state.selectedIndex]);
        }
        else if (keyCode === Constants.KeyCodes.Down) {
            selectedIndex = selectedIndex < length ? (selectedIndex + 1) : 0;
        }
        else if (keyCode === Constants.KeyCodes.Up) {
            selectedIndex = selectedIndex > 0 ? (selectedIndex - 1) : length;
        }
        this.setState({ selectedIndex: selectedIndex });
    };
    Autocomplete.prototype.onSelect = function (result) {
        this.setState({
            visible: false,
            selectedIndex: -1
        });
        if (this.props.onSelect) {
            this.setState({
                value: this.display(result)
            });
            this.props.onSelect(result);
        }
    };
    Autocomplete.prototype.onFocus = function () {
        if (this.props.onFocus)
            this.props.onFocus();
    };
    Autocomplete.prototype.onBlur = function () {
        if (this.props.onBlur)
            this.props.onBlur();
    };
    Autocomplete.prototype.performGet = function () {
        var _this = this;
        if (this.state.value === '')
            return this.setState({
                results: [],
                visible: false
            });
        return this.get(this.state.value, this.maxLength).then(function (results) {
            _this.setState({
                results: results,
                visible: results.length > 0
            });
        });
    };
    return Autocomplete;
}(React.Component));
exports.Autocomplete = Autocomplete;
var AddressAutocomplete = /** @class */ (function (_super) {
    __extends(AddressAutocomplete, _super);
    function AddressAutocomplete(props) {
        return _super.call(this, props, function (value, max) {
            return HOApi.getProperties(value, max);
        }, function (record) { return record.FullAddress; }) || this;
    }
    return AddressAutocomplete;
}(Autocomplete));
exports.AddressAutocomplete = AddressAutocomplete;
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.componentDidMount = function () {
        if (!this.props.iconLocation && !this.props.iconString)
            throw new Error('Both icon and iconString are missing. At least one is required.');
        if (this.props.iconLocation && this.props.iconString)
            throw new Error('Both icon and iconString are set. Choose one or the other.');
    };
    IconButton.prototype.render = function () {
        return React.createElement("button", { className: "secondary-button-cp " + (this.props.className || ''), onClick: this.props.onClick.bind(this), disabled: this.props.disabled },
            this.props.iconString && React.createElement("i", { className: "fa fa-" + this.props.iconString }),
            this.props.iconLocation && React.createElement("span", { className: 'secondary-button-icon-cp', style: { backgroundImage: "url(" + this.props.iconLocation + ")" } }),
            React.createElement("span", { className: 'secondary-button-label-cp' }, this.props.children));
    };
    return IconButton;
}(React.Component));
exports.IconButton = IconButton;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.moving = false;
        _this.duration = 175;
        _this.state = {
            visible: false
        };
        return _this;
    }
    Dropdown.prototype.componentDidMount = function () {
        this.mounted = true;
        this.onBodyClickHandler = this.onBodyClick.bind(this);
        window.addEventListener('click', this.onBodyClickHandler);
    };
    Dropdown.prototype.componentWillUnmount = function () {
        this.mounted = false;
        window.removeEventListener('click', this.onBodyClickHandler);
    };
    Dropdown.prototype.onBodyClick = function (e) {
        if (!e.target || e.target.parentElement !== ReactDOM.findDOMNode(this.component))
            this.setState({
                visible: false
            });
    };
    Dropdown.prototype.onClick = function () {
        this.setState({
            visible: !this.state.visible
        });
    };
    Dropdown.prototype.onSelect = function (item) {
        this.setState({
            visible: false
        });
        this.props.onChange(item);
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        return React.createElement(react_bootstrap_1.FormGroup, { controlId: this.props.id, validationState: this.props.error ? 'error' : undefined, className: "dropdown-form-cp " + (this.props.className || ''), onClick: this.onClick.bind(this), ref: function (c) { return _this.component = c; } },
            React.createElement(react_bootstrap_1.ControlLabel, { className: "dropdown-label-cp " + (this.props.labelClassName || '') }, this.props.label),
            this.props.customError || React.createElement("span", { className: "input-field-error-md " + (typeof (this.props.error) === 'string' && this.props.error ? '' : 'input-field-error-hidden-md') }, this.props.error),
            React.createElement("div", { className: "dropdown-value-cp " + (this.props.value === '' ? 'dropdown-value-placeholder-cp' : '') }, this.props.value === '' ? this.props.placeholder : this.getTextFromValue(this.props.value)),
            React.createElement("div", { className: "dropdown-selector-cp " + (this.state.visible ? 'dropdown-selector-shown-cp' : '') }, this.props.options.map(function (option, i) {
                return React.createElement("span", { key: i, className: 'dropdown-item-cp', onClick: _this.onSelect.bind(_this, option) }, option.text === undefined ? option.value : option.text);
            })));
    };
    Dropdown.prototype.getTextFromValue = function (value) {
        if (value === null)
            return '';
        var found = this.props.options.find(function (o) { return o.value.toString() === value.toString(); });
        return found ? found.text || found.value : value;
    };
    return Dropdown;
}(React.Component));
exports.Dropdown = Dropdown;
var DropdownItem = /** @class */ (function () {
    function DropdownItem() {
    }
    return DropdownItem;
}());
exports.DropdownItem = DropdownItem;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInput.prototype.render = function () {
        return React.createElement(FieldWrapper, __assign({}, this.props, { className: (this.props.className || '') + " text-input-cp" }));
    };
    return TextInput;
}(React.Component));
exports.TextInput = TextInput;
;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(287);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 165:
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
var Constants = __webpack_require__(7);
var Common = __webpack_require__(3);
var Storage = __webpack_require__(10);
var MenuState;
(function (MenuState) {
    MenuState["Expanding"] = "expanding";
    MenuState["Collapsing"] = "collapsing";
    MenuState["Expanded"] = "expanded";
    MenuState["Collapsed"] = "collapsed";
})(MenuState = exports.MenuState || (exports.MenuState = {}));
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getDefaultState();
        return _this;
    }
    Navbar.prototype.getDefaultState = function () {
        var authorized = Storage.hasAuth();
        return {
            menu: MenuState.Collapsed,
            username: authorized ? Storage.getUserName() : 'agent',
            isAgent: authorized,
            isAdmin: Common.isAdmin(),
            isQuoteAvailable: !!Storage.getQuoteId()
        };
    };
    Navbar.prototype.render = function () {
        return React.createElement("header", { id: 'header', className: 'height-layout-cp header-component-cp' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-xs-12' },
                        React.createElement("strong", { className: "logo swyfftLayoutLogo site-logo-layout-cp navbar-fade " + (this.isExpanded() ? 'navbar-fade-out' : ''), id: 'swyfft-logo' },
                            React.createElement("a", { href: '/' },
                                React.createElement("img", { src: '/images/Swyfft_Logo.png', alt: 'Swyfft' }))),
                        React.createElement("div", { className: 'hubLayoutLogo hub-logo-container-layout-cp', id: 'hubLogoContainer' },
                            React.createElement("img", { src: '/images/HUB-logo-sm.svg', className: 'hub-logo-img-bs', alt: 'HubLogo' })),
                        React.createElement("nav", { id: 'quote-menubar', className: "quote-menubar-ly " + (this.state.isAgent ? 'navbar-shown' : 'navbar-hidden') },
                            React.createElement("div", { className: 'container' },
                                React.createElement("ul", { className: "nav nav-tabs nav-tabs-layout-cp navbar-fade " + (this.isExpanded() ? 'navbar-fade-out' : '') },
                                    React.createElement("li", { id: 'quoteMenuItem', className: "nav-tabs-st " + (this.state.isQuoteAvailable ? 'navbar-shown' : 'navbar-hidden') },
                                        React.createElement("a", { href: '/quote', className: this.isQuotePage() ? 'highlight' : '' }, "Quote")),
                                    React.createElement("li", { id: 'historyMenuItem', className: 'nav-tabs-st' },
                                        React.createElement("a", { href: '/history' }, "History")),
                                    React.createElement("li", { id: 'addressesMenuItem', className: 'nav-tabs-st' },
                                        React.createElement("a", { href: '/address' }, "Addresses"))))),
                        React.createElement("span", { id: 'user-details', className: "navbar-fade " + (this.state.isAgent ? 'navbar-shown' : 'navbar-hidden') + " " + (this.isExpanded() ? 'navbar-fade-out' : '') },
                            React.createElement("span", { className: 'tell text-capitalize user-details-layout-cp' },
                                "Hello, ",
                                React.createElement("a", { href: 'javascript:void(0)', id: 'agentName' }, this.state.username))),
                        React.createElement("nav", { className: 'navbar navbar-default hamburger-menu-layout-cp', id: 'hamburger-menu' },
                            React.createElement("div", { className: 'navbar-header' },
                                React.createElement("div", { className: "hamburger-icon-ly " + (this.isExpanded() ? 'closed' : 'hamburger'), onClick: this.onExpand.bind(this) },
                                    React.createElement("div", { className: 'hamburger-icon-relative-ly' },
                                        React.createElement("span", { className: 'bar first' }),
                                        React.createElement("span", { className: 'bar second' }),
                                        React.createElement("span", { className: 'bar third' })))),
                            React.createElement("div", { className: "collapse navbar-collapse navbar-collapse-layout-cp " + this.state.menu },
                                React.createElement("div", { className: 'navbar-transition-cp' },
                                    React.createElement("strong", { className: 'logo' },
                                        React.createElement("a", { href: '/' },
                                            React.createElement("img", { className: 'desktop', src: '/images/logo-svg.svg', alt: 'Swyfft' }),
                                            React.createElement("img", { className: 'mobile', src: '/images/logo-svg.svg', alt: 'Swyfft' }))),
                                    React.createElement("ul", { className: 'nav navbar-nav nav-elements-layout-cp' },
                                        React.createElement("li", { className: "agent-login " + (this.state.isAgent ? 'navbar-hidden' : 'navbar-shown') },
                                            React.createElement("a", { href: '/Login', className: this.isCurrentUrl('/login') ? 'highlight' : '' }, "Login")),
                                        React.createElement("li", { className: "agent-logout " + (this.state.isAgent ? 'navbar-shown' : 'navbar-hidden') },
                                            React.createElement("a", { onClick: this.onLogout.bind(this) }, "Logout")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: '/About', className: this.isCurrentUrl('/about') ? 'highlight' : '' }, "Our Company")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: '/ContactUs', className: this.isCurrentUrl('/contactus') ? 'highlight' : '' }, "Contact Us")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: '/Faq', className: this.isCurrentUrl('/faq') ? 'highlight' : '' }, "FAQs")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: '/News', className: this.isCurrentUrl('/news') ? 'highlight' : '' }, "In The News")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: '/Claims', className: this.isCurrentUrl('/claims') ? 'highlight' : '' }, "Claims")),
                                        React.createElement("li", { className: "agent-faq " + (this.state.isAgent ? 'navbar-shown' : 'navbar-hidden') },
                                            React.createElement("a", { href: '/Agents', className: this.isCurrentUrl('/agents') ? 'highlight' : '' }, "Agents")),
                                        React.createElement("li", { className: "agent-page " + (this.state.isAdmin ? 'navbar-shown' : 'navbar-hidden') },
                                            React.createElement("a", { href: '/Admin', className: this.isCurrentUrl('/admin') ? 'highlight' : '' }, "Admin"))))))))));
    };
    Navbar.prototype.onExpand = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.state.menu === MenuState.Expanding || _this.state.menu === MenuState.Collapsing) {
                resolve();
                return;
            }
            var expanded = _this.state.menu === MenuState.Expanded;
            _this.setState({
                menu: expanded ? MenuState.Collapsing : MenuState.Expanding
            });
            setTimeout(function () {
                _this.setState({
                    menu: expanded ? MenuState.Collapsed : MenuState.Expanded
                });
                resolve();
            }, 375);
        });
    };
    Navbar.prototype.onLogout = function () {
        return Common.logout().then(function () { return Common.navigate(Constants.pages.Root); });
    };
    Navbar.prototype.isCurrentUrl = function (url, currentLocation) {
        if (currentLocation === void 0) { currentLocation = ''; }
        return (currentLocation || location.href).toLowerCase().indexOf(url) > -1;
    };
    Navbar.prototype.isExpanded = function () {
        return this.state.menu === MenuState.Expanding || this.state.menu === MenuState.Expanded;
    };
    Navbar.prototype.isQuotePage = function (currentLocation) {
        if (currentLocation === void 0) { currentLocation = ''; }
        var url = (currentLocation || location.href).toLowerCase();
        return url.indexOf(Constants.pages.Purchase) > -1 ||
            url.indexOf(Constants.pages.Crm) > -1 ||
            url.indexOf(Constants.pages.Root) > -1;
    };
    return Navbar;
}(React.Component));
exports.Navbar = Navbar;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function detect() {
  var nodeVersion = getNodeVersion();
  if (nodeVersion) {
    return nodeVersion;
  } else if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return null;
}

function detectOS(userAgentString) {
  var rules = getOperatingSystemRules();
  var detected = rules.filter(function (os) {
    return os.rule && os.rule.test(userAgentString);
  })[0];

  return detected ? detected.name : null;
}

function getNodeVersion() {
  var isNode = typeof navigator === 'undefined' && typeof process !== 'undefined';
  return isNode ? {
    name: 'node',
    version: process.version.slice(1),
    os: __webpack_require__(174).type().toLowerCase()
  } : null;
}

function parseUserAgent(userAgentString) {
  var browsers = getBrowserRules();
  if (!userAgentString) {
    return null;
  }

  var detected = browsers.map(function(browser) {
    var match = browser.rule.exec(userAgentString);
    var version = match && match[1].split(/[._]/).slice(0,3);

    if (version && version.length < 3) {
      version = version.concat(version.length == 1 ? [0, 0] : [0]);
    }

    return match && {
      name: browser.name,
      version: version.join('.')
    };
  }).filter(Boolean)[0] || null;

  if (detected) {
    detected.os = detectOS(userAgentString);
  }

  if (/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(userAgentString)) {
    detected = detected || {};
    detected.bot = true;
  }

  return detected;
}

function getBrowserRules() {
  return buildRules([
    [ 'aol', /AOLShield\/([0-9\._]+)/ ],
    [ 'edge', /Edge\/([0-9\._]+)/ ],
    [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ],
    [ 'vivaldi', /Vivaldi\/([0-9\.]+)/ ],
    [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ],
    [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ],
    [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ],
    [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ],
    [ 'fxios', /FxiOS\/([0-9\.]+)/ ],
    [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)$/ ],
    [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ],
    [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ],
    [ 'ie', /MSIE\s(7\.0)/ ],
    [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ],
    [ 'android', /Android\s([0-9\.]+)/ ],
    [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ],
    [ 'safari', /Version\/([0-9\._]+).*Safari/ ],
    [ 'facebook', /FBAV\/([0-9\.]+)/],
    [ 'instagram', /Instagram\ ([0-9\.]+)/],
    [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/]
  ]);
}

function getOperatingSystemRules() {
  return buildRules([
    [ 'iOS', /iP(hone|od|ad)/ ],
    [ 'Android OS', /Android/ ],
    [ 'BlackBerry OS', /BlackBerry|BB10/ ],
    [ 'Windows Mobile', /IEMobile/ ],
    [ 'Amazon OS', /Kindle/ ],
    [ 'Windows 3.11', /Win16/ ],
    [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ],
    [ 'Windows 98', /(Windows 98)|(Win98)/ ],
    [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ],
    [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ],
    [ 'Windows Server 2003', /(Windows NT 5.2)/ ],
    [ 'Windows Vista', /(Windows NT 6.0)/ ],
    [ 'Windows 7', /(Windows NT 6.1)/ ],
    [ 'Windows 8', /(Windows NT 6.2)/ ],
    [ 'Windows 8.1', /(Windows NT 6.3)/ ],
    [ 'Windows 10', /(Windows NT 10.0)/ ],
    [ 'Windows ME', /Windows ME/ ],
    [ 'Open BSD', /OpenBSD/ ],
    [ 'Sun OS', /SunOS/ ],
    [ 'Linux', /(Linux)|(X11)/ ],
    [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ],
    [ 'QNX', /QNX/ ],
    [ 'BeOS', /BeOS/ ],
    [ 'OS/2', /OS\/2/ ],
    [ 'Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/ ]
  ]);
}

function buildRules(ruleTuples) {
  return ruleTuples.map(function(tuple) {
    return {
      name: tuple[0],
      rule: tuple[1]
    };
  });
}

module.exports = {
  detect: detect,
  detectOS: detectOS,
  getNodeVersion: getNodeVersion,
  parseUserAgent: parseUserAgent
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(181);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canUseDOM */]) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Portal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(50);
var invariant = __webpack_require__(51);
var warning = __webpack_require__(76);
var assign = __webpack_require__(38);

var ReactPropTypesSecret = __webpack_require__(77);
var checkPropTypes = __webpack_require__(116);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(50);
var invariant = __webpack_require__(51);
var ReactPropTypesSecret = __webpack_require__(77);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canUseDOM; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children);
      }

      this.portal = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Portal);


Portal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PortalCompat__ = __webpack_require__(115);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck(this, PortalWithState);

    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__PortalCompat__["a" /* default */],
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode.props.node || this.portalNode.defaultNode;
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PortalWithState.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  defaultOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  openByClickOn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  closeOnEsc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  closeOnOutsideClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

/* harmony default export */ __webpack_exports__["a"] = (PortalWithState);

/***/ }),

/***/ 21:
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
var HOApi = __webpack_require__(12);
var moment = __webpack_require__(4);
var Constants = __webpack_require__(7);
/**
 * If we have a valid street and zip, and don't have a valid city/state, then fill in the city/state from MelissaData
 */
function setCityAndStateFromZip(zip, city, stateCode) {
    console.log('Checking to see if we should update city/state from zip');
    if (zip.isValid()) {
        console.log('Zip is valid');
        if (Util.isEmpty(city()) || Util.isEmpty(stateCode())) {
            console.log('Missing data for city or state, so calling zip lookup');
            HOApi.getZip(zip()).then(function (zipInfo) {
                try {
                    if (zipInfo) {
                        if (Util.isEmpty(city())) {
                            city(zipInfo.City);
                        }
                        if (Util.isEmpty(stateCode())) {
                            stateCode(zipInfo.StateCode);
                        }
                    }
                }
                catch (err) {
                    console.error("Unable to set zip: " + err);
                }
            });
        }
    }
}
exports.setCityAndStateFromZip = setCityAndStateFromZip;
var stateNames = [];
function getStateNames() {
    if (!stateNames.length) {
        for (var code in Constants.statesByCode) {
            if (Constants.statesByCode.hasOwnProperty(code)) {
                stateNames.push(Constants.statesByCode[code]);
            }
        }
    }
    return stateNames;
}
exports.getStateNames = getStateNames;
function getStateCodeByName(name) {
    name = (name || '').toLowerCase();
    return Constants.statesByName[name];
}
exports.getStateCodeByName = getStateCodeByName;
function getStateNameByCode(code) {
    code = (code || '').toLowerCase();
    return Constants.statesByCode[code];
}
exports.getStateNameByCode = getStateNameByCode;
function validateEmail(email) {
    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
}
exports.validateEmail = validateEmail;
function validateOptionalEmail(email) {
    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (regEx.test(email) || !email);
}
exports.validateOptionalEmail = validateOptionalEmail;
function validateZip(zipCode) {
    if (/^(\?(^00000(|-0000))|(\d{5}(|-\d{4})))$/.test(zipCode)) {
        return true;
    }
    return false;
}
exports.validateZip = validateZip;
// Validate latitude and longitude for contenintal USA, Alaska and Hawaii.
// References:
// https://en.wikipedia.org/wiki/List_of_extreme_points_of_the_United_States 
// https://en.wikipedia.org/wiki/List_of_extreme_points_of_U.S._states_and_territories
function validateLatitudeAndLongitude(latitude, longitude) {
    if ((latitude >= 23 && latitude <= 50 && longitude >= -125 && longitude <= -65) || //48 continental states
        (latitude >= 17 && latitude <= 29 && longitude >= -179 && longitude <= -153) || //Hawaii
        (latitude >= 50 && latitude <= 72 && longitude >= -173 && longitude <= -128)) { //Alaska
        return true;
    }
    return false;
}
exports.validateLatitudeAndLongitude = validateLatitudeAndLongitude;
ko.validation.rules['validateZip'] = {
    validator: validateZip,
    message: 'Please enter a valid zip code'
};
/**similar to validateZip method, but adds ability for zip code to be blank on additional info page mortgage bank section
*/
function validateMortgageCompanyZip(zipCode) {
    if ((/^(\?(^00000(|-0000))|(\d{5}(|-\d{4})))$/.test(zipCode)) || !zipCode) {
        return true;
    }
    return false;
}
exports.validateMortgageCompanyZip = validateMortgageCompanyZip;
ko.validation.rules['validateZipAsync'] = {
    async: true,
    validator: function (val, otherVal, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!validateZip(val)) {
                            callback(false);
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HOApi.getZip(val)];
                    case 2:
                        data = _a.sent();
                        callback(data && data.ZipCode);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        callback(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    message: 'Unrecognized zip code'
};
function validateStateCode(stateCode) {
    stateCode = (stateCode || '').toLowerCase();
    return Constants.statesByCode.hasOwnProperty(stateCode);
}
exports.validateStateCode = validateStateCode;
ko.validation.rules['validateStateCode'] = {
    validator: validateStateCode,
    message: 'Please enter a valid state abbreviation'
};
/**similar to validateStateCode method, but adds ability for state code to be blank on mortgage bank section
*/
function validateOptionalState(state) {
    state = (state || '').toLowerCase();
    return (!state ||
        Constants.statesByCode.hasOwnProperty(state) ||
        Constants.statesByName.hasOwnProperty(state));
}
exports.validateOptionalState = validateOptionalState;
function validateStateName(stateName) {
    stateName = (stateName || '').toLowerCase();
    return Constants.statesByName.hasOwnProperty(stateName);
}
exports.validateStateName = validateStateName;
ko.validation.rules['validateStateName'] = {
    validator: validateStateName,
    message: 'Please enter a valid state name'
};
/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright (c) 2012.
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */
var luhnChk = ((function (arr) { return function (ccNum) {
    var len = ccNum.length, bit = 1, sum = 0, val;
    while (len) {
        val = parseInt(ccNum.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
    }
    return sum && sum % 10 === 0;
}; })([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
function validateCardNumber(cardNumber) {
    var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var americanExpress = /^3[47][0-9]{13}$/;
    var mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    var discover = /6(?:011|5[0-9]{2})[0-9]{12}$/;
    return !!luhnChk(cardNumber) &&
        (visa.test(cardNumber) ||
            americanExpress.test(cardNumber) ||
            mastercard.test(cardNumber) ||
            discover.test(cardNumber));
}
exports.validateCardNumber = validateCardNumber;
ko.validation.rules['validateCardNumber'] = {
    validator: validateCardNumber,
    message: 'Please enter a valid credit card number'
};
function validateCvn(cvn) {
    if (!Util.isNumeric(cvn))
        return false;
    if (cvn.length === 3 || cvn.length === 4) {
        return true;
    }
    return false;
}
exports.validateCvn = validateCvn;
ko.validation.rules['validateCvn'] = {
    validator: validateCvn,
    message: 'Please enter a valid CVN'
};
ko.validation.rules['checked'] = {
    validator: function (value) {
        return !!value;
    },
    message: 'Please check this element'
};
/**
 * Returns true if the specified routing number matches the ABA checksum rules.
 * See http://www.brainjar.com/js/validation/
 */
function validateRoutingNumber(s) {
    // First, remove any non-numeric characters.
    var t = "";
    for (var i = 0; i < s.length; i++) {
        var c = parseInt(s.charAt(i), 10);
        if (c >= 0 && c <= 9)
            t = t + c;
    }
    // Check the length, it should be nine digits.
    if (t.length !== 9)
        return false;
    // Now run through each digit and calculate the total.
    var n = 0;
    for (var i = 0; i < t.length; i += 3) {
        n += parseInt(t.charAt(i), 10) * 3
            + parseInt(t.charAt(i + 1), 10) * 7
            + parseInt(t.charAt(i + 2), 10);
    }
    // If the resulting sum is an even multiple of ten (but not zero),
    // the aba routing number is good.
    if (n !== 0 && n % 10 === 0)
        return true;
    else
        return false;
}
exports.validateRoutingNumber = validateRoutingNumber;
ko.validation.rules['validateRoutingNumber'] = {
    validator: validateRoutingNumber,
    message: 'Please enter a valid routing number'
};
/**
 * Returns true if the specified account number looks reasonably valid
 * See http://stackoverflow.com/questions/1540285/united-states-banking-institution-account-number-regular-expression
 */
function validateAccountNumber(s) {
    // First, remove any non-numeric characters.
    var t = "";
    for (var i = 0; i < s.length; i++) {
        var c = parseInt(s.charAt(i), 10);
        if (c >= 0 && c <= 9)
            t = t + c;
    }
    // Check the length, it should be nine digits.
    if (t.length < 4 || t.length > 17)
        return false;
    return true;
}
exports.validateAccountNumber = validateAccountNumber;
ko.validation.rules['validateAccountNumber'] = {
    validator: validateAccountNumber,
    message: 'Please enter a valid account number'
};
/**
 * Returns true if the value is a valid date, false if not.
 */
function validateDate(date) {
    var isvalid = (/^\d{2}\/\d{2}\/\d{4}$/).test(date) || (/^\d{2}-\d{2}-\d{4}$/).test(date);
    if (isvalid) {
        // Check Date format
        var separator = 'index.html';
        if (date.indexOf(separator) === -1) {
            separator = '-';
            if (date.indexOf(separator) === -1) {
                return false;
            }
        }
        var expDateArr = date.split(separator);
        var dtMonth = expDateArr[0], dtDay = expDateArr[1], dtYear = expDateArr[2];
        // Check Month for validity
        if (dtMonth < 1 || dtMonth > 12) {
            return false;
        } //If month is not valid i.e not in range 1-12
        else if (dtDay < 1 || dtDay > 31) {
            return false;
        } // If day is not valid i.e. not in range 1-31
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) {
            return false;
        }
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                return false;
        }
        return true;
    }
    return false;
}
exports.validateDate = validateDate;
exports.today = moment();
function validateExpirationDate(expiration) {
    // Initialize todays date   i.e start date
    var startDate = moment.utc([exports.today.year(), exports.today.month(), 1]);
    // Initialize End/Expiry date i.e. adding 10 years to expire
    var futureLimitDate = moment.utc([exports.today.year() + 10, exports.today.month(), 1]);
    var expDate;
    if (typeof expiration === "string") {
        expDate = moment(expiration, ["MM/YY", "MM/YYYY"]);
    }
    else {
        expDate = moment(expiration);
    }
    return expDate.isBetween(startDate, futureLimitDate, 'day', '[]');
}
exports.validateExpirationDate = validateExpirationDate;
ko.validation.rules['validateExpirationDate'] = {
    validator: validateExpirationDate,
    message: 'Please enter a valid expiration date (e.g., "09/18")'
};
function validatePhoneNumber(phoneNumber) {
    var r = new RegExp('^' + this.phoneNumberRegex() + '$');
    return r.test(phoneNumber);
}
exports.validatePhoneNumber = validatePhoneNumber;
ko.validation.rules['validatePhoneNumber'] = {
    validator: validatePhoneNumber,
    message: 'Please enter a valid phone number'
};
function validateOptionalPhoneNumber(phoneNumber) {
    var r = new RegExp('^' + this.phoneNumberRegex() + '$');
    return (!phoneNumber || r.test(phoneNumber));
}
exports.validateOptionalPhoneNumber = validateOptionalPhoneNumber;
function phoneNumberRegex() {
    return '\\(?([2-9][0-9]{2})\\)?[-. ]?([[2-9][0-9]{2})[-. ]?([0-9]{4})';
}
exports.phoneNumberRegex = phoneNumberRegex;
function validateField(name) {
    if (name && (name.length < 50)) {
        return true;
    }
    return false;
}
exports.validateField = validateField;
function validateInt(value) {
    if (value && (value >= 0)) {
        return true;
    }
    return false;
}
exports.validateInt = validateInt;
function validateAdditionalInfoField(name, maxLength) {
    if (name.length < maxLength) {
        return true;
    }
    return false;
}
exports.validateAdditionalInfoField = validateAdditionalInfoField;
ko.validation.rules['requiredIf'] = {
    validator: function (val, options) {
        var required;
        if (typeof options.condition == 'function') {
            required = options.condition();
        }
        else {
            required = options.condition;
        }
        if (required) {
            return !(val == undefined || val.length === 0);
        }
        else {
            return true;
        }
    },
    message: ko.validation.rules.required.message
};
// Create a Knockout extension that only allows in characters like [0..9], +, -, ., etc.
ko.extenders['stripAlphas'] = function (target) {
    //create a writable computed observable to intercept writes to our observable
    var result = ko.pureComputed({
        read: target,
        write: function (newValue) {
            // Strip out invalid characters
            var valueToWrite = null;
            if (newValue) {
                valueToWrite = newValue.replace(/[a-zA-Z\s]+/g, '');
            }
            // console.log(`valueToWrite: ${valueToWrite}`);
            //only write if it changed
            var current = target();
            if (valueToWrite !== current) {
                target(valueToWrite);
            }
            else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({ notify: 'always' });
    //initialize with current value to make sure it is rounded appropriately
    result(target());
    //return the new computed observable
    return result;
};
// Create a Knockout extension that only allows in characters like [0..9], +, -, ., etc.
ko.extenders['stripSpaces'] = function (target) {
    //create a writable computed observable to intercept writes to our observable
    var result = ko.pureComputed({
        read: target,
        write: function (newValue) {
            // Strip out invalid characters
            var valueToWrite = null;
            if (newValue) {
                valueToWrite = newValue.replace(/\s+/g, '');
            }
            // console.log(`valueToWrite: ${valueToWrite}`);
            //only write if it changed
            var current = target();
            if (valueToWrite !== current) {
                target(valueToWrite);
            }
            else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({ notify: 'always' });
    //initialize with current value to make sure it is rounded appropriately
    result(target());
    //return the new computed observable
    return result;
};
ko.validation.registerExtenders();
/**
 * See http://stackoverflow.com/a/23096322/68231
 */
ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var callback = valueAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                callback.call(viewModel);
                return false;
            }
            return true;
        });
    }
};


/***/ }),

/***/ 22:
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
var react_bootstrap_1 = __webpack_require__(1);
var Validations = __webpack_require__(21);
var ModalSize;
(function (ModalSize) {
    ModalSize["Tiny"] = "modal-tiny-cp";
    ModalSize["Small"] = "modal-small-cp";
    ModalSize["Medium"] = "modal-medium-cp";
    ModalSize["Large"] = "modal-large-cp";
})(ModalSize = exports.ModalSize || (exports.ModalSize = {}));
var HubModal = /** @class */ (function (_super) {
    __extends(HubModal, _super);
    function HubModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: '',
            email: '',
            phone: ''
        };
        return _this;
    }
    HubModal.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container", id: this.props.id },
            React.createElement(react_bootstrap_1.Modal, { show: this.props.visible, onHide: function () { return _this.onCancel(); }, dialogClassName: this.props.className + " " + this.props.size },
                this.props.x ? React.createElement("div", { id: "hubCloseModalIcon", className: 'hub-close-icon-bs close confirm-close-icon-bs', onClick: function () { return _this.onContinue(); } }, "\u00D7") : '',
                this.props.purchaseSuccessDetails &&
                    React.createElement("div", { className: "modal-success-section-md" },
                        React.createElement(react_bootstrap_1.Row, { className: "container modal-success-text-container-ly" },
                            React.createElement(react_bootstrap_1.Col, { xs: 1, className: "glyphicon glyphicon-ok hub-modal-check-bs" }),
                            React.createElement(react_bootstrap_1.Col, { xs: 10, className: "modal-success-purchase-blurb-bs" },
                                React.createElement("p", null,
                                    React.createElement("span", { className: "modal-success-purchase-span-bs" }, "Swyfft Policy Purchased! "),
                                    "Your policy is being sent to your email ",
                                    this.props.purchaseSuccessDetails ? this.props.purchaseSuccessDetails.email : '',
                                    ". Full coverage starts on ",
                                    this.props.purchaseSuccessDetails ? this.props.purchaseSuccessDetails.startDate : '',
                                    ". ")))),
                React.createElement("div", { className: 'modal-body header container', id: "hubEmailModal" },
                    this.props.purchaseSuccessDetails &&
                        React.createElement(react_bootstrap_1.Row, null,
                            React.createElement(react_bootstrap_1.Col, { xs: 5, xsOffset: 3, mdOffset: 4 },
                                React.createElement("div", { className: 'hub-modal-img-container-md' },
                                    React.createElement("img", { src: "/images/hub-purchase-logo.png", className: "hub-modal-header-img-md" })))),
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12 },
                            React.createElement("h4", { className: 'modal-title' }, this.props.title)))),
                React.createElement("div", { className: 'modal-body container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12 },
                            React.createElement("h5", { className: 'hub-message-md' },
                                "We recommend you get the most out of your home insurance policy by speaking with a ",
                                React.createElement("span", { className: "modal-broker-line-bs" }, "HUB Broker."),
                                " Once you click the button below a HUB specialist will automatically get a copy of the quote you just created and will reach out to you!")))),
                React.createElement("div", { className: 'modal-body container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12 },
                            React.createElement(react_bootstrap_1.FormGroup, { controlId: "nameInputHub", validationState: this.validateField("name") },
                                React.createElement(react_bootstrap_1.ControlLabel, { className: "input-field-label-md " }, "Your Name"),
                                React.createElement(react_bootstrap_1.FormControl, { ref: function (c) { return _this.formControl = c; }, value: this.state.name, onChange: function (event) {
                                        var target = event.target;
                                        _this.setState({
                                            name: target.value
                                        });
                                    }, placeholder: "your name", className: "input-field-md input-field-st", id: "hubNameTxtBox", type: "text" })))),
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6 },
                            React.createElement(react_bootstrap_1.FormGroup, { controlId: "emailInputHub", validationState: this.validateField("email") },
                                React.createElement(react_bootstrap_1.ControlLabel, { className: "input-field-label-md " }, "Email"),
                                React.createElement(react_bootstrap_1.FormControl, { ref: function (c) { return _this.formControl = c; }, value: this.state.email, onChange: function (event) {
                                        var target = event.target;
                                        _this.setState({
                                            email: target.value
                                        });
                                    }, placeholder: "your email", className: "input-field-md input-field-st", id: "hubEmailTxtBox", type: "text" }))),
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6 },
                            React.createElement(react_bootstrap_1.FormGroup, { controlId: "phoneInputHub", validationState: this.validateField("phone") },
                                React.createElement(react_bootstrap_1.ControlLabel, { className: "input-field-label-md " }, "Phone"),
                                React.createElement(react_bootstrap_1.FormControl, { ref: function (c) { return _this.formControl = c; }, value: this.state.phone, onChange: function (event) {
                                        var target = event.target;
                                        _this.setState({
                                            phone: target.value
                                        });
                                    }, placeholder: "your phone number", className: "input-field-md input-field-st", id: "hubPhoneTxtBox", type: "text" })))),
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6, mdOffset: 3 },
                            React.createElement("button", { type: 'button', className: 'hub-ok-btn-md btn btn-default', id: "emailHubBrokerModalButton", onClick: function () { return _this.onOK(); } }, this.props.okText))))));
    };
    HubModal.prototype.validateField = function (inputFieldName) {
        switch (inputFieldName) {
            case "name":
                var nameValue = this.state.name;
                //prevents error styling from appearing after component is first mounted.
                if (nameValue.length === 0)
                    return undefined;
                return Validations.validateField(nameValue) ? "success" : "error";
            case "email":
                var emailValue = this.state.email;
                //prevents error styling from appearing after component is first mounted.
                if (emailValue.length === 0)
                    return undefined;
                return Validations.validateEmail(emailValue) ? "success" : "error";
            case "phone":
                var phoneValue = this.state.phone;
                return Validations.validateOptionalPhoneNumber(phoneValue) ? "success" : "error";
            default:
                return;
        }
    };
    HubModal.prototype.onCancel = function () {
        if (this.props.cancelFunction)
            this.props.cancelFunction();
    };
    HubModal.prototype.onOK = function () {
        var emailRequest = this.getEmailRequest();
        if (this.props.okFunction)
            this.props.okFunction(emailRequest);
    };
    HubModal.prototype.onContinue = function () {
        if (this.props.continueFunction)
            this.props.continueFunction();
    };
    HubModal.prototype.getEmailRequest = function () {
        var emailRequest = {
            Email: this.state.email,
            Phone: this.state.phone,
            Name: this.state.name
        };
        return emailRequest;
    };
    return HubModal;
}(React.Component));
exports.HubModal = HubModal;
var SwyfftModal = /** @class */ (function (_super) {
    __extends(SwyfftModal, _super);
    function SwyfftModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwyfftModal.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { id: this.props.id },
            React.createElement(react_bootstrap_1.Modal, { show: this.props.visible, onHide: function () { return _this.onCancel(); }, dialogClassName: this.props.className + " " + this.props.size },
                this.props.x ? React.createElement("div", { className: 'x', onClick: function () { return _this.onCancel(); } }, "\u00D7") : '',
                React.createElement("div", { className: 'modal-body header container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { sm: 12 },
                            React.createElement("h4", { className: 'modal-title' },
                                this.props.titleIcon === 'exclamation' ? React.createElement("div", { className: 'modal-title-icon' },
                                    React.createElement("span", null, "!")) : '',
                                this.props.title)))),
                React.createElement("div", { className: 'modal-body container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { sm: 12 },
                            React.createElement("h5", { className: 'modal-body-message' }, this.props.message)))),
                this.props.children && React.createElement("div", { className: 'modal-body container no-padding' }, this.props.children),
                React.createElement("div", { className: 'modal-body container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 6 },
                            React.createElement("button", { type: 'button', className: 'cancel-button btn btn-quote', onClick: function () { return _this.onCancel(); } }, this.props.cancelText)),
                        React.createElement(react_bootstrap_1.Col, { xs: 12, sm: 6 },
                            React.createElement("button", { type: 'button', className: 'ok-button btn btn-default', onClick: function () { return _this.onOK(); } }, this.props.okText))))));
    };
    SwyfftModal.prototype.onCancel = function () {
        if (this.props.cancelFunction)
            this.props.cancelFunction();
    };
    SwyfftModal.prototype.onOK = function () {
        if (this.props.okFunction)
            this.props.okFunction();
    };
    return SwyfftModal;
}(React.Component));
exports.SwyfftModal = SwyfftModal;
var NewSwyfftModal = /** @class */ (function (_super) {
    __extends(NewSwyfftModal, _super);
    function NewSwyfftModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewSwyfftModal.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement(react_bootstrap_1.Modal, { id: this.props.id, show: this.props.visible, onHide: function () { return _this.onCancel(); }, dialogClassName: "swyfft-modal-md " + this.props.className + " " + this.props.size, backdrop: !!this.props.hideOnClick ? true : 'static' },
                this.props.x && React.createElement("div", { className: 'x', onClick: function () { return _this.onCancel(); } }, "\u00D7"),
                this.props.title && React.createElement("div", { className: 'modal-body header container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { sm: 12 },
                            React.createElement("h4", { className: 'modal-title' },
                                this.props.titleIcon === 'exclamation' && React.createElement("div", { className: 'modal-title-icon' },
                                    React.createElement("span", null, "!")),
                                this.props.title),
                            this.props.subtitle && React.createElement("h6", { className: 'modal-subtitle' }, this.props.subtitle)))),
                this.props.message && React.createElement("div", { className: 'modal-body container' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { sm: 12 },
                            React.createElement("h5", { className: 'modal-body-message' }, this.props.message)))),
                this.props.children && React.createElement("div", { className: 'modal-body container no-padding modal-children' }, this.props.children)));
    };
    NewSwyfftModal.prototype.onCancel = function () {
        if (this.props.cancelFunction)
            this.props.cancelFunction();
    };
    return NewSwyfftModal;
}(React.Component));
exports.NewSwyfftModal = NewSwyfftModal;


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiCaller = __webpack_require__(28);
//login method
function login(login) {
    var url = 'api/login';
    // SZ 2018-01-03. Security. Invoke callApi() instead of $post() to avoid logging performance, which sends data (with user credentils) over.
    //return ApiCaller.$post(url, login, NProgress, 'login');
    var logPerformance = false;
    return ApiCaller.callApi(url, 'POST', login, NProgress, 'login', logPerformance);
}
exports.login = login;
/**
 * Sync the agents in the EFAgents table with the list of Swyfft agents authorized for external access from IMS
 */
function syncAgents() {
    var url = "api/agents/sync";
    return ApiCaller.$get(url);
}
exports.syncAgents = syncAgents;
function getRoles() {
    var url = "api/roles";
    return ApiCaller.$get(url);
}
exports.getRoles = getRoles;
function getAgentRoles(agentId) {
    var url = "api/roles/" + agentId;
    return ApiCaller.$get(url);
}
exports.getAgentRoles = getAgentRoles;
function putAgentRole(agentId, roleCode) {
    var url = "api/roles/" + agentId + "/" + roleCode;
    return ApiCaller.$put(url, null);
}
exports.putAgentRole = putAgentRole;
function putAgentPassword(agentId, password) {
    var url = "api/agents/" + agentId + "/password";
    return ApiCaller.$put(url, password);
}
exports.putAgentPassword = putAgentPassword;
function deleteAgentRole(agentId, roleCode) {
    var url = "api/roles/" + agentId + "/" + roleCode;
    return ApiCaller.$delete(url, null);
}
exports.deleteAgentRole = deleteAgentRole;
function resetPassword(agencyId, token, password) {
    return ApiCaller.$post('api/login/resetpassword', {
        AgencyId: agencyId,
        Token: token,
        Password: password
    });
}
exports.resetPassword = resetPassword;
function requestPasswordResetEmail(email) {
    return ApiCaller.$post('api/agents/resetpassword', email);
}
exports.requestPasswordResetEmail = requestPasswordResetEmail;
function agentEOValid() {
    return ApiCaller.$get('api/agents/eAndOValid');
}
exports.agentEOValid = agentEOValid;
function agentLicenseValid(state) {
    var url = "api/agents/licenseValid/" + state;
    return ApiCaller.$get(url);
}
exports.agentLicenseValid = agentLicenseValid;
function agentEOExpires(daysFromNow) {
    var url = "api/agents/eAndOExpires/" + daysFromNow;
    return ApiCaller.$get(url);
}
exports.agentEOExpires = agentEOExpires;
function logout() {
    return ApiCaller.$get('api/logout');
}
exports.logout = logout;
function optin(optin) {
    return ApiCaller.$post('api/optin', optin);
}
exports.optin = optin;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var ApiCaller = __webpack_require__(28);
function sendTemplateEmail(email, checked) {
    return ApiCaller.$post("api/email/sendtemplate?email=" + email + "&selected=" + checked.join(','), {}, Common.loadingVm, 'send template email');
}
exports.sendTemplateEmail = sendTemplateEmail;
function emailQuote(quoteId, email, quote) {
    var url = "api/quotes/" + quoteId + "/email?email=" + email;
    return ApiCaller.$post(url, quote, NProgress, 'email quote');
}
exports.emailQuote = emailQuote;
function emailCommercialQuote(quoteId, email) {
    var url = "api/commercial/quotes/" + quoteId + "/commercialquoteemail";
    return ApiCaller.$post(url, email, NProgress, 'email commercial quote');
}
exports.emailCommercialQuote = emailCommercialQuote;
function emailCommercialUnderwriter(quoteId, email, request) {
    var url = "api/commercial/quotes/" + quoteId + "/underwriteremail";
    return ApiCaller.$post(url, request, NProgress, 'email underwriter');
}
exports.emailCommercialUnderwriter = emailCommercialUnderwriter;
function emailHubQuote(quoteId, emailInfo) {
    var url = "api/quotes/" + quoteId + "/hubemail?email=" + emailInfo.Email;
    return ApiCaller.$post(url, emailInfo, NProgress, 'email hub quote');
}
exports.emailHubQuote = emailHubQuote;
function emailFwdToBuyerQuote(quoteId, email, quote) {
    var url = "api/quotes/forwardtobuyer/" + quoteId + "/email?email=" + email;
    //return ApiCaller.$post(url, quote, NProgress, 'email forward to buyer quote');
    return ApiCaller.$post(url, quote, NProgress, 'email quote');
}
exports.emailFwdToBuyerQuote = emailFwdToBuyerQuote;
function sendContactUsEmail(model) {
    var url = 'api/contactus';
    return ApiCaller.$post(url, model, NProgress, 'send contact us email');
}
exports.sendContactUsEmail = sendContactUsEmail;
function verifyPolicyNumber(policyNumber) {
    var url = "api/verifyPolicyNumber/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.verifyPolicyNumber = verifyPolicyNumber;
function latestPolicyNumber(policyNumber) {
    var url = "api/latestPolicyNumber/" + policyNumber;
    return ApiCaller.$get(url);
}
exports.latestPolicyNumber = latestPolicyNumber;
function sendPolicyRatingDocument(policyId, email, firstName, lastName) {
    var url = "test/sendpolicyratingdocument/?email=" + email + "&policyId=" + policyId + "&firstName=" + firstName + "&lastName=" + lastName;
    return ApiCaller.$get(url);
}
exports.sendPolicyRatingDocument = sendPolicyRatingDocument;
function sendPolicyFax(fax, policyNumber) {
    return ApiCaller.$post("api/payments/send-policy-fax?fax=" + fax + "&policyNumber=" + policyNumber, {}, Common.loadingVm, 'send policy fax');
}
exports.sendPolicyFax = sendPolicyFax;
function updateBankInformation(model) {
    return ApiCaller.$post('api/email/updateBankInformation', model, NProgress);
}
exports.updateBankInformation = updateBankInformation;


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ 274:
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
var react_bootstrap_1 = __webpack_require__(1);
__webpack_require__(130);
var ErrorModalComponent = /** @class */ (function (_super) {
    __extends(ErrorModalComponent, _super);
    function ErrorModalComponent(props) {
        return _super.call(this, props) || this;
    }
    ErrorModalComponent.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container", id: this.props.id },
            React.createElement(react_bootstrap_1.Modal, { show: this.props.visible, bsSize: this.props.size || '', onHide: function () { return _this.onOK(); }, dialogClassName: "error-modal-container-bs error-modal-container-ly " + (this.props.severity === "error" ? "error-modal-container-md" : "warning-modal-container-md") },
                React.createElement("div", { id: "ErrorCloseModalIcon", className: 'close ' + (this.props.severity === "error" ? "Error-close-icon-bs " : "warning-close-icon-bs"), onClick: function () { return _this.onOK(); } }, "\u00D7"),
                React.createElement("div", { className: 'modal-body error-modal-header-ly', id: "ErrorModal" },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 1, className: "error-warning-icon-container-ly" },
                            React.createElement("img", { src: "/images/comm-error-high.png", className: "error-icon-bs " + (this.props.severity === "error" ? "visible" : "hidden") }),
                            React.createElement("img", { src: "/images/comm-error-low.png", className: "warning-icon-bs " + (this.props.severity !== "error" ? "visible" : "hidden") })),
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 11 },
                            React.createElement("h4", { className: 'modal-title-bs' }, "Error Found")))),
                React.createElement("div", { className: 'modal-body ' },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, className: "error-message-bs" }, this.props.message)),
                    this.props.severity !== 'error' &&
                        React.createElement(react_bootstrap_1.Row, null,
                            React.createElement(react_bootstrap_1.Col, { xs: 12, className: "warning-blurb-bs" },
                                "If you have further questions, please reach out to our Customer Support Team at ",
                                React.createElement("a", { href: "tel:+18883332827" }, "1.888.333.2827"),
                                " or by ",
                                React.createElement("a", { href: "mailto:customersupport@swyfft.com" }, "email"),
                                ".")),
                    this.props.severity === 'error' &&
                        React.createElement(react_bootstrap_1.Row, null,
                            React.createElement(react_bootstrap_1.Col, { xs: 12, className: "warning-blurb-bs" },
                                "These risks can and often change so don't worry! Check back in a few weeks or reach out to our ",
                                React.createElement("a", { href: "mailto:customersupport@swyfft.com" }, "Customer Service Team"),
                                " for updates."))),
                React.createElement("section", { className: "Error-confirm-container-ly container" },
                    React.createElement(react_bootstrap_1.Row, null,
                        React.createElement(react_bootstrap_1.Col, { xs: 12, md: 6, mdOffset: 6, className: "error-close-button-container-ly" },
                            React.createElement("button", { type: 'button', className: 'btn btn-default ' + (this.props.severity === 'error' ? 'Error-contact-btn-md' : 'warning-contact-btn-md'), id: "commercialErrorModalContactBtn", onClick: function () { return _this.onOK(); } }, "Close"))))));
    };
    ErrorModalComponent.prototype.onOK = function () {
        if (this.props.okFunction)
            this.props.okFunction();
    };
    return ErrorModalComponent;
}(React.Component));
var CommercialErrorModalOverseer = /** @class */ (function (_super) {
    __extends(CommercialErrorModalOverseer, _super);
    function CommercialErrorModalOverseer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    CommercialErrorModalOverseer.prototype.render = function () {
        var _this = this;
        return React.createElement(ErrorModalComponent, { id: 'CommercialErrorModalOverseer', size: 'large', visible: this.state.visible, title: "Error Found", okFunction: function () { return _this.onOK(); }, message: this.message, severity: this.severity });
    };
    CommercialErrorModalOverseer.prototype.show = function (args) {
        this.message = args.message;
        this.severity = args.severity ? args.severity : 'error';
        this.setState({
            visible: true
        });
    };
    CommercialErrorModalOverseer.prototype.hide = function () {
        this.setState({
            visible: false
        });
    };
    CommercialErrorModalOverseer.prototype.onCancel = function () {
        this.hide();
    };
    CommercialErrorModalOverseer.prototype.onOK = function () {
        this.hide();
    };
    return CommercialErrorModalOverseer;
}(React.Component));
exports.default = CommercialErrorModalOverseer;


/***/ }),

/***/ 28:
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
var Common = __webpack_require__(3);
var browser = __webpack_require__(173);
window.swyfftApiCalls = 0;
//#region Support Methods
function $get(url, progressBar, action) {
    if (progressBar === void 0) { progressBar = NProgress; }
    if (action === void 0) { action = null; }
    return callApi(url, 'GET', null, progressBar, action);
}
exports.$get = $get;
function $post(url, data, progressBar, action) {
    if (progressBar === void 0) { progressBar = NProgress; }
    if (action === void 0) { action = null; }
    return callApi(url, 'POST', data, progressBar, action);
}
exports.$post = $post;
function $put(url, data, progressBar, action) {
    if (progressBar === void 0) { progressBar = NProgress; }
    if (action === void 0) { action = null; }
    return callApi(url, 'PUT', data, progressBar, action);
}
exports.$put = $put;
function $delete(url, data, progressBar, action) {
    if (progressBar === void 0) { progressBar = NProgress; }
    if (action === void 0) { action = null; }
    return callApi(url, 'DELETE', data, progressBar, action);
}
exports.$delete = $delete;
function $patch(url, data, progressBar, action) {
    if (progressBar === void 0) { progressBar = NProgress; }
    if (action === void 0) { action = null; }
    return callApi(url, 'PATCH', data, progressBar, action);
}
exports.$patch = $patch;
//#endregion
function logError(error) {
    error.browser = browser.name;
    error.browserVersion = browser.version;
    error.uri = window.location.href;
    return $post('api/log', error, null, 'log error');
}
exports.logError = logError;
//#region Third-party methods
function getPropertiesFromMd(address) {
    var start = (new Date()).getTime();
    var result = $.getJSON("//expressentry.melissadata.net/jsonp/ExpressFreeForm?callback=?", {
        format: "jsonp",
        id: Common.melissaDataId,
        FF: address,
        maxrecords: "30"
    });
    return Promise.resolve(result).then(function (v) {
        $logPerformance("get MD data", address, start);
        return v;
    });
}
exports.getPropertiesFromMd = getPropertiesFromMd;
//#endregion
/**
 * Call a Swyfft API endpoint.
 * @param url The URL to call
 * @param verb The verb to call (GET, POST, PUT, PATCH)
 * @param data Any data to pass (optional)
 * @param progressBar Whether to show a progress indicator on the page while the call is in progress (defaults to true)
 * @param action The action to log. No attempt to log anything is made if it is blank.
 */
function callApi(url, verb, data, progressBar, action, logPerformance) {
    if (logPerformance === void 0) { logPerformance = true; }
    return __awaiter(this, void 0, Promise, function () {
        var start, params, result, details, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (progressBar)
                        progressBar.start();
                    start = (new Date()).getTime();
                    params = {
                        url: "/" + url,
                        type: verb.toUpperCase(),
                        contentType: 'application/json; charset=utf-8'
                    };
                    if (data) {
                        params.data = JSON.stringify(data);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.resolve($.ajax(params)
                            .always(function () {
                            window.swyfftApiCalls++;
                            if (progressBar)
                                progressBar.done(true);
                        }))];
                case 2:
                    result = _a.sent();
                    if (action) {
                        $log(action, 'success');
                        if (logPerformance) {
                            details = (params.data || '').toString();
                            if (verb === "GET")
                                details = url;
                            $logPerformance(action, details, start);
                        }
                    }
                    return [2 /*return*/, result];
                case 3:
                    err_1 = _a.sent();
                    if (action) {
                        $log(action, 'failure');
                    }
                    err_1.uri = url;
                    throw err_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.callApi = callApi;
/**
 * Call a POST method using a navigator.sendBeacon() call if it's available, otherwise use an <img src=""> tag - the
 * point of both being that it allows us to make a reliable-ish API call when the page is unloading. (In theory the
 * <img> tag method should be reliable, but testing has indicated some problems with it on Firefox; unfortunately,
 * the navigator.sendBeacon() method isn't available on all browsers.) See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
 * and http://stackoverflow.com/a/4531276/68231. Note also that this means that the endpoint needs to support both GET
 * and POST verbs, and also that we're passing all the information along as URL params rather than in the POST body.
 */
function $sendBeacon(url) {
    if (typeof navigator['sendBeacon'] === "function") {
        navigator['sendBeacon'](url, undefined);
    }
    else {
        var i = new Image(1, 1);
        i.src = url;
    }
}
exports.$sendBeacon = $sendBeacon;
function $log(action, label) {
    try {
        if (typeof ga !== "function")
            return;
        ga('send', 'event', 'api', action, label);
    }
    catch (err) {
        console.error('Error logging event: ' + err);
    }
}
exports.$log = $log;
function $logPerformance(action, details, start) {
    try {
        var now = (new Date()).getTime();
        var elapsed = now - start;
        if (details.length > 100) {
            details = details.substr(0, 100);
        }
        var log = {
            ApiCall: action,
            Details: details,
            ElapsedMilliseconds: elapsed
        };
        callApi("api/log/apicall", "POST", log, null, null, false);
    }
    catch (e) {
        console.error('Error logging API call performance: ' + e);
    }
}
exports.$logPerformance = $logPerformance;
//#endregion


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(288), __esModule: true };

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(289);
module.exports = __webpack_require__(31).Object.assign;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(39);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(291)});

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(56)
  , gOPS     = __webpack_require__(86)
  , pIE      = __webpack_require__(65)
  , toObject = __webpack_require__(139)
  , IObject  = __webpack_require__(137)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(55)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35)
  , toLength  = __webpack_require__(293)
  , toIndex   = __webpack_require__(294);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(82)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(82)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///<reference path="References.ts"/>
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
var MembershipApi = __webpack_require__(24);
var ApiCaller = __webpack_require__(28);
var Models = __webpack_require__(49);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Validations = __webpack_require__(21);
var Constants = __webpack_require__(7);
var numeral = __webpack_require__(5);
__webpack_require__(6);
//#region Knockout Customizations
/**
 * Implement a BS3 modal with Knockout.
 * See http://stackoverflow.com/questions/22706765/twitter-bootstrap-3-modal-with-knockout
 */
ko.bindingHandlers['modal'] = {
    init: function (element, valueAccessor, allBindings) {
        if (!allBindings)
            return;
        var opts = { show: false };
        // Allow specifying the requirement that the user not be able to close the modal on their own 
        // (e.g., for the "Loading..." modal).
        var backdrop = allBindings.get('backdrop');
        if (typeof backdrop !== "undefined") {
            opts.backdrop = backdrop;
        }
        var keyboard = allBindings.get('keyboard');
        if (typeof keyboard !== "undefined") {
            opts.keyboard = keyboard;
        }
        $(element).modal(opts);
        var value = valueAccessor();
        if (typeof value === 'function') {
            $(element).on('hide.bs.modal', function () {
                value(false);
            });
        }
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).modal("destroy");
        });
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element).modal('show');
        }
        else {
            $(element).modal('hide');
        }
    }
};
/**
 * Implement a JQueryUI slider with Knockout.
 * See http://stackoverflow.com/a/12857382/68231
 */
ko.bindingHandlers['slider'] = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        createSlider(element, valueAccessor, allBindingsAccessor);
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (isNaN(value))
            value = 0;
        $(element).slider("value", value);
        if (typeof allBindingsAccessor === "function") {
            var binding = allBindingsAccessor();
            if (binding && binding.sliderOptions) {
                var min = binding.sliderOptions.min();
                var max = binding.sliderOptions.max();
                var step = binding.sliderOptions.step();
                var disabled = binding.sliderOptions.disabled ? binding.sliderOptions.disabled() : false;
                updateSliderOption(element, "min", min);
                updateSliderOption(element, "max", max);
                updateSliderOption(element, "step", step);
                updateSliderOption(element, "value", value);
                updateSliderOption(element, "disabled", disabled);
            }
            else {
                console.warn('binding or binding.sliderOptions was not set');
            }
        }
    }
};
function createSlider(element, valueAccessor, allBindingsAccessor) {
    var options = allBindingsAccessor().sliderOptions || {};
    options.min = ko.utils.unwrapObservable(options.min);
    options.max = ko.utils.unwrapObservable(options.max);
    options.step = ko.utils.unwrapObservable(options.step);
    options.value = ko.utils.unwrapObservable(options.value);
    options.disabled = ko.utils.unwrapObservable(options.disabled);
    if (!Util.isNumeric(options.value))
        options.value = 0;
    if (!Util.isNumeric(options.min))
        options.min = 0;
    if (!Util.isNumeric(options.max))
        options.max = 100;
    if (!Util.isNumeric(options.step))
        options.step = 1;
    $(element).slider(options);
    ko.utils.registerEventHandler(element, "slidechange", function (event, ui) {
        var observable = valueAccessor();
        observable(ui.value);
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        $(element).slider("destroy");
    });
    ko.utils.registerEventHandler(element, "slide", function (event, ui) {
        var observable = valueAccessor(), value = getQuoteElementValue(ui.value, allBindingsAccessor);
        observable(ui.value);
        $(element).find(".number").text(value);
    });
    function getQuoteElementValue(value, allBindings) {
        var quoteElement = allBindings().element;
        if (quoteElement)
            value = elementValueDisplayFormat(quoteElement, value);
        return value;
    }
}
function updateSliderOption(element, option, optionAccessor) {
    var val = ko.utils.unwrapObservable(optionAccessor);
    if (option === 'disabled' || Util.isNumeric(val)) {
        var current = $(element).slider("option", option);
        if (!Util.matches(val, current)) {
            $(element).slider("option", option, val);
        }
    }
}
/**
 * See http://stackoverflow.com/a/11627076/68231
 */
ko.extenders['numeric'] = function (target, precision) {
    var result = ko.computed({
        read: function () {
            var val = target();
            if (typeof val === "number") {
                return val.toFixed(precision);
            }
            return val;
        },
        write: target
    });
    result['raw'] = target;
    return result;
};
/**
 * See http://stackoverflow.com/a/16318345/68231
 */
ko.extenders['trimToMaxLength'] = function (target, maxLength) {
    //create a writeable computed observable to intercept writes to our observable
    var result = ko.computed({
        read: target,
        write: function (newValue) {
            var current = target();
            var valueToWrite = newValue ? newValue.substring(0, Math.min(newValue.length, maxLength)) : null;
            //only write if it changed
            if (valueToWrite !== current) {
                target(valueToWrite);
            }
            else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    });
    //initialize with current value to make sure it is rounded appropriately
    result(target());
    //return the new computed observable
    return result;
};
ko.bindingHandlers['currency'] = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var updateFunc = ko.bindingHandlers.text.update;
        if (!updateFunc)
            return;
        return updateFunc(element, function () {
            if (!allBindingsAccessor)
                return "";
            var value = +(ko.utils.unwrapObservable(valueAccessor()) || 0);
            var symbol = ko.utils.unwrapObservable(typeof allBindingsAccessor().symbol !== "undefined"
                ? allBindingsAccessor().symbol
                : ko.bindingHandlers['currency']['symbol']);
            var places = ko.utils.unwrapObservable(typeof allBindingsAccessor().places !== "undefined"
                ? allBindingsAccessor().places
                : ko.bindingHandlers['currency']['places']);
            return symbol + Util.addCommasToNumber(value.toFixed(places).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        }, allBindingsAccessor, viewModel, bindingContext);
    }
};
ko.bindingHandlers['currency']['symbol'] = ko.observable('$');
ko.bindingHandlers['currency']['places'] = ko.observable(0);
ko.bindingHandlers['formatElementValue'] = {
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var noCommas = value.toString().replace(/,/g, '');
        $(element).text(elementValueDisplayFormat(viewModel, value));
        if (viewModel.el.ElementName && viewModel.el.ElementName.toLowerCase().indexOf("year") > -1) {
            $(element).text(noCommas);
        }
    }
};
/**
 * Disable the current element, and if it is a container element, any elements contained within it.
 * See http://stackoverflow.com/a/15647230/68231
 */
ko.bindingHandlers['disableEdit'] = {
    init: function (element, valueAccessor) {
        var val = ko.unwrap(valueAccessor());
        var $el = $(element);
        $el.prop('disabled', val);
        $el.prop('readonly', val);
        $el.find(':input').prop('disabled', val);
        $el.find(".ui-slider-horizontal").slider({ disabled: val });
    }
};
/**
 * See https://github.com/knockout/knockout/pull/1792. Used to allow references to specific variables further down in a context.
 * ks 2/2/16 - Should be unnecessary once KO 3.5 (or whatever it's called) comes out (it's not in 3.4).
 */
ko.bindingHandlers['let'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // Make a modified binding context, with extra properties, and apply it to descendant elements
        if (!bindingContext)
            return undefined;
        var innerContext = bindingContext.extend(valueAccessor);
        ko.applyBindingsToDescendants(innerContext, element);
        return { controlsDescendantBindings: true };
    }
};
ko.virtualElements.allowedBindings['let'] = true;
ko.bindingHandlers['enterPress'] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        if (!allBindingsAccessor)
            return;
        var allBindings = allBindingsAccessor();
        element.addEventListener('keydown', function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                allBindings.enterPress.call(viewModel);
                return false;
            }
            return true;
        });
    }
};
ko.bindingHandlers['escPress'] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        if (!allBindingsAccessor)
            return;
        var allBindings = allBindingsAccessor();
        element.addEventListener('keydown', function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 27) {
                allBindings.escPress.call(viewModel);
                return false;
            }
            return true;
        });
    }
};
//ko.bindingHandlers.trimSpaces = {
//    init: (element, valueAccessor, allBindingsAccessor) => {
//        $(element).on("change", () => {
//            let observable = valueAccessor();
//            let trimmedValue;
//            const value = $(this).val();
//            if (value) trimmedValue = $.trim(value.toString());
//            observable($(this).val());
//            observable(trimmedValue);
//        });
//    },
//    update: (element, valueAccessor) => {
//        let value = ko.utils.unwrapObservable(valueAccessor());
//        let trimmedValue = $.trim(value);
//        $(element).val(trimmedValue);
//    }
//};
//#endregion
/** Common methods for handling UI-related logic */
/** The customer id for the Melissa Data address lookup service  */
exports.melissaDataId = "kRHdyhT2BSZfyqvY_xGcJB**";
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
exports.state = new State();
/**
 * The main <div> within the <body> element. Commonly the root of our knockout bindings.
 */
exports.wrapper = $('#swyfftLayoutWrapper')[0];
/**
 * Navigate to a specified URL. Implemented as a separate method
 * largely so that we can put break points into it and figure out what's happening.
 */
function navigate(url) {
    window.location.assign(url);
}
exports.navigate = navigate;
/**
 * Navigate to a specified URL on a new tab.
 */
function navigateOnNewTab(url) {
    var win = window.open(url);
    win
        ? win.focus()
        : alert('Please allow popups to open this resource on a new tab.');
}
exports.navigateOnNewTab = navigateOnNewTab;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Alert"] = 0] = "Alert";
    AlertType[AlertType["Success"] = 1] = "Success";
    AlertType[AlertType["Error"] = 2] = "Error";
    AlertType[AlertType["Warning"] = 3] = "Warning";
    AlertType[AlertType["Information"] = 4] = "Information";
    AlertType[AlertType["Confirm"] = 5] = "Confirm";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
/**
 * Shows an alert message
 */
var alert;
function showAlert(type, text, id) {
    var timeout = 15000;
    if (type === AlertType.Information || type === AlertType.Success) {
        timeout = 5000;
    }
    if (alert) {
        alert.close();
    }
    var n = noty({
        text: text,
        type: AlertType[type].toLowerCase(),
        dismissQueue: true,
        timeout: timeout,
        closeWith: ['click'],
        layout: 'topCenter',
        theme: 'relax',
        killer: true,
        maxVisible: 1,
        id: id,
        animation: {
            open: { height: 'toggle' },
            close: { height: 'toggle' },
            easing: 'swing',
            speed: 250
        }
    });
    return alert = n;
}
exports.showAlert = showAlert;
function showAlertAsync(type, text, id) {
    return new Promise(function (resolve) {
        var timeout = 15000;
        if (type === AlertType.Information || type === AlertType.Success) {
            timeout = 5000;
        }
        if (alert) {
            alert.close();
        }
        var n = noty({
            text: text,
            type: AlertType[type].toLowerCase(),
            dismissQueue: true,
            timeout: timeout,
            closeWith: ['click'],
            layout: 'topCenter',
            theme: 'relax',
            killer: true,
            maxVisible: 1,
            id: id,
            animation: {
                open: { height: 'toggle' },
                close: { height: 'toggle' },
                easing: 'swing',
                speed: 250
            },
            buttons: [
                {
                    text: 'OK',
                    addClass: 'btn btn-default eo-ok-btn-bs',
                    onClick: function (n) {
                        n.close();
                        resolve();
                    }
                }
            ]
        });
        return alert = n;
    });
}
exports.showAlertAsync = showAlertAsync;
function showConfirm(args) {
    var type = AlertType[args.type === undefined ? AlertType.Confirm : args.type].toLowerCase();
    noty({
        text: args.message,
        type: type,
        buttons: [
            {
                text: args.okText || 'OK',
                addClass: 'btn btn-default',
                onClick: function ($noty) {
                    args.okFunction();
                    $noty.close();
                }
            },
            {
                addClass: 'btn btn-primary',
                text: args.cancelText || 'Cancel',
                onClick: function ($noty) {
                    if (args.cancelFunction) {
                        args.cancelFunction();
                    }
                    $noty.close();
                }
            }
        ]
    });
}
exports.showConfirm = showConfirm;
/**
 * Handles errors with specified codes and messages
 */
function handleError(code, message, details) {
    saveAndShowError(new Models.ApiError(code, "ERROR", message, null, details), showError);
}
exports.handleError = handleError;
/**
 * Normalizes errors before handling them
 */
function handleGeneralError(reason) {
    console.error(reason);
    var err = normalizeError(reason);
    // This is what we get if a promisized modal cancels
    // Might very well be a better way to handle it.
    if (Util.matches(err.message, "closed"))
        return Promise.resolve();
    return saveAndShowError(err, showError);
}
exports.handleGeneralError = handleGeneralError;
/**
 * ks 7/5/17 - This is deprecated and should only be used to handle old scenarios. Whenever possible, use getQuoteById() instead.
 */
//export function getQuote(quoteId: string): Promise<Models.Quote> {
//    return HOApi.getQuoteByQuoteId(quoteId).then(quote => {
//        if (!quote.QuoteProperty) throw "Quote did not have QuoteProperty defined";
//        Storage.setAddress(toAddress(quote.QuoteProperty));
//        Storage.setAddressKey(quote.AddressKey);
//        Storage.setQuoteId(quote.QuoteId);
//        return quote;
//    });
//}
function getQuoteById(quoteId, checkRisk) {
    var getQuote = false === checkRisk
        ? HOApi.getQuoteByQuoteIdNoRisk(quoteId)
        : HOApi.getQuoteByQuoteId(quoteId);
    return getQuote.then(function (quote) {
        if (!quote.QuoteProperty)
            throw "Quote did not have QuoteProperty defined";
        Storage.setAddress(toAddress(quote.QuoteProperty));
        Storage.setAddressKey(quote.AddressKey);
        Storage.setQuoteId(quote.QuoteId);
        return quote;
    });
}
exports.getQuoteById = getQuoteById;
function getQuoteByAddressKey(addressKey) {
    return HOApi.getQuoteByAddressKey(addressKey).then(function (quote) {
        if (!quote.QuoteProperty)
            throw "Quote did not have QuoteProperty defined";
        Storage.setAddress(toAddress(quote.QuoteProperty));
        Storage.setAddressKey(quote.AddressKey);
        Storage.setQuoteId(quote.QuoteId);
        return quote;
    });
}
exports.getQuoteByAddressKey = getQuoteByAddressKey;
function getElementDescriptionsByState(stateKey) {
    return HOApi.getElementDescriptions(stateKey).then(function (descriptions) {
        Storage.setElementDescriptions(descriptions);
        return descriptions;
    }, function (err) {
        handleGeneralError(err);
    });
}
exports.getElementDescriptionsByState = getElementDescriptionsByState;
function saveAndShowError(err, showError) {
    console.error("ErrorCode=" + err.code + "; ErrorMessage='" + err.message + "'");
    if (err.code === Constants.HttpStatusCodes.authenticationFailed) {
        authenticationFailed();
        return Promise.resolve();
    }
    if (err.code === Constants.ErrorMessages.noQuote) {
        navigate(Constants.pages.Root);
        return Promise.resolve();
    }
    //  Catch non-200 HTTP status codes. This usually returns an HTML page.
    //  Return a error message better formulated for the UI and the logger.
    if (err.errorType === Models.ApiErrorTypes.HttpStatusCode && err.code !== Constants.HttpStatusCodes.ok) {
        err.message = 'Operation failed. Try again later. If the problem persists, please contact support.';
        err.details = "HTTP status code " + err.code + " returned when trying to access " + err.uri + ".\n" + err.details; // Add status code and problematic URI to the error details for the logger
    }
    Storage.setErrorCode(err.code.toString());
    Storage.setErrorText(err.message);
    // ks 3/28/17 - These won't necessarily always be "right", but they may very well give us a context for what's going on and 
    // help us to reproduce various weird errors.
    try {
        err.lastAddressKey = Storage.getAddressKey();
        err.lastAddress = Storage.getAddress();
    }
    catch (e) {
        console.error(e);
    }
    ApiCaller.logError(err);
    return showError(err.message, err.reference, err.severity);
}
exports.saveAndShowError = saveAndShowError;
/**
 * Lots of different things can be thrown as errors: strings, JQuery error objects, etc.
 * For our common error handling to work, we need to be able to translate all those things
 * into something kinda standard, with a straightforward code, message, subcode and detail fields.
 */
function normalizeError(reason) {
    // Check if error has Uri attached.
    var uri = "no URI reported";
    if (reason.hasOwnProperty("uri")) {
        uri = reason.uri;
    }
    var apiError = reason;
    if (apiError.code && apiError.message) {
        return apiError;
    }
    if (reason.status && reason.statusText) {
        var err = reason;
        var message = null;
        var subCode = null;
        var severity = null;
        var swyfftError = false;
        if (err.responseJSON) {
            if (err.responseJSON.hasOwnProperty('ExceptionMessage')) {
                message = err.responseJSON.ExceptionMessage;
            }
            if (err.responseJSON.hasOwnProperty('ErrorMessage')) {
                message = err.responseJSON.ErrorMessage;
            }
            if (err.responseJSON.hasOwnProperty('ErrorCode')) {
                subCode = err.responseJSON.ErrorCode;
            }
            if (err.responseJSON.hasOwnProperty('Severity')) {
                severity = err.responseJSON.Severity;
            }
            if (err.responseJSON.hasOwnProperty('SwyfftError')) {
                swyfftError = err.responseJSON.SwyfftError;
            }
            if (err.responseJSON.hasOwnProperty('ErrorCode')) {
                swyfftError = err.responseJSON.ErrorCode;
            }
        }
        if (!message) {
            if (err.responseText) {
                // At least sometimes, the responseText comes down as a JSON-encoded string, so let's try to decode it first.
                try {
                    message = JSON.parse(err.responseText);
                    if (typeof message !== "object") {
                        message = err.responseText;
                    }
                }
                catch (unused) {
                    message = err.responseText;
                }
            }
        }
        if (!severity) {
            try {
                severity = JSON.parse(err.responseText).severity;
                if (typeof severity === "undefined") {
                    severity = "ERROR";
                }
            }
            catch (unused) {
                severity = "ERROR"; // default to error
            }
        }
        if (message) {
            if (message.Message) {
                message = message.Message + "\r\n";
            }
            if (message.MessageDetail) {
                message += "" + message.MessageDetail;
            }
        }
        var msg = (message || "").trim();
        var lastChar = msg.substr(msg.length - 1, 1);
        if (lastChar !== "." && lastChar !== "?" && lastChar !== "!") {
            msg += ".";
        }
        return new Models.ApiError(err.status, severity, msg, subCode, "", "", swyfftError ? Models.ApiErrorTypes.SwyfftErrorCode : Models.ApiErrorTypes.HttpStatusCode, uri);
    }
    if (typeof reason === "object" && reason.message && reason.stack && reason.name) {
        var reference = Util.makeGuid().substring(0, 8).toUpperCase();
        return new Models.ApiError("Unexpected", "ERROR", "An unexpected error has occurred. Please try again later.", null, reason.message + "\n" + reference + "\n" + reason.stack.toString(), reference, Models.ApiErrorTypes.UnexpectedError, uri);
    }
    try {
        var message = void 0;
        if (typeof reason === "string") {
            message = reason;
        }
        else {
            message = reason.exceptionMessage || JSON.stringify(reason);
        }
        if (message === Constants.ErrorMessages.authFailed) {
            return new Models.ApiError(Constants.HttpStatusCodes.authenticationFailed, "ERROR", message);
        }
        if (message === Constants.ErrorMessages.noQuote) {
            return new Models.ApiError(message, "ERROR", message);
        }
        return new Models.ApiError("Unexpected", "ERROR", message, null, "", "", Models.ApiErrorTypes.UnexpectedError, uri);
    }
    catch (e) {
        return new Models.ApiError("Unexpected", "ERROR", reason.toString(), null, "", "", Models.ApiErrorTypes.UnexpectedError, uri);
    }
}
exports.normalizeError = normalizeError;
/**
 * Show a predefined bootstrap error modal
 */
function showError(message, reference, alternateTitle) {
    var promise = new Promise(function (resolve) {
        $('#errorModalBody').html((message || '').substring(0, 500));
        var referenceElement = $('#errorModal .modal-footer .reference');
        referenceElement.toggle(!!reference);
        referenceElement.text(reference || '');
        if (alternateTitle) {
            $('#errorModalTitle').html(alternateTitle);
        }
        else {
            $('#errorModalTitle').html("An error occurred");
        }
        var modal = $('#errorModal').modal();
        modal.on('shown.bs.modal', function () { return $('button.btn.btn-danger').focus(); });
        modal.on('hidden.bs.modal', function () { return resolve(); });
    });
    return promise;
}
exports.showError = showError;
function handleNoAdminErrorAndRedirect(message) {
    showError(message);
    $('#errorModal').modal().on('hidden.bs.modal', function () { return navigate(Constants.pages.Root); });
}
exports.handleNoAdminErrorAndRedirect = handleNoAdminErrorAndRedirect;
/**
 * Handles the case when authentication has failed.
 */
function authenticationFailed() {
    var currentPath = window.location.href;
    logout().then(function () {
        navigate(Constants.pages.Login + '?returnUrl=' + encodeURIComponent(currentPath));
    });
}
exports.authenticationFailed = authenticationFailed;
/**
 * Clears the session and local storage containers, as well as all cookies
 */
function logout() {
    return MembershipApi.logout().then(function () {
        Storage.clearCookies("authorization");
        Storage.clear();
    });
}
exports.logout = logout;
function toAddress(obj) {
    return obj.Street1 + ", " + obj.City + " " + obj.StateCode + " " + obj.Zip;
}
exports.toAddress = toAddress;
function isInRole(role) {
    var roles = Storage.getRoles();
    if (!roles || !roles.length)
        return false;
    var idx = roles.indexOf(role);
    return idx > -1;
}
exports.isInRole = isInRole;
/**
 * Returns true if the user is assigned ONLY to the <see cref="AccessRole.User" /> role (e.g., is not
 * assigned to either the Admin or the Agent roles).
 */
function isOnlyUser() {
    return !isAtLeastAgent();
}
exports.isOnlyUser = isOnlyUser;
/**
 * Returns true if the user is assigned ONLY to the Agent role (e.g., is not either a user or an admin)
 */
function isOnlyAgent() {
    return Storage.hasAuth() && !isInRole(Constants.AccessRole.Admin);
}
exports.isOnlyAgent = isOnlyAgent;
/**
 * Returns true if the user is assigned to either the Agent or the Admin roles
 */
function isAtLeastAgent() {
    return Storage.hasAuth() && (isInRole(Constants.AccessRole.Agent) || isInRole(Constants.AccessRole.Admin));
}
exports.isAtLeastAgent = isAtLeastAgent;
/**
 * Returns true if the user is assigned to the Admin role (regardless of any other assignments)
 */
function isAdmin() {
    return Storage.hasAuth() && isInRole(Constants.AccessRole.Admin);
}
exports.isAdmin = isAdmin;
/**
 * Returns true if the user is assigned to the Admin role (regardless of any other assignments)
 */
function isAgencyAdmin() {
    return !!Storage.hasAuth() && isInRole(Constants.AccessRole.AgencyAdmin);
}
exports.isAgencyAdmin = isAgencyAdmin;
function isManagerOfAgents() {
    if (Storage.hasAuth()) {
        var details = Storage.getLoginDetails();
        if (details && details.isManagerOfAgents) {
            return true;
        }
    }
    return false;
}
exports.isManagerOfAgents = isManagerOfAgents;
//#region Get Address AutoComplete Labels
var addressCache = {};
/**
 * Get homepage address autofill data: first from cache, then from our own database, then from MelissaData.
 */
function getAddressAutoCompleteLabels(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var address, matches, labels;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = (request.term || '').trim();
                    if (!address)
                        return [2 /*return*/];
                    matches = null;
                    if (addressCache.hasOwnProperty(address)) {
                        matches = addressCache[address];
                    }
                    if (!(!matches || !matches.length)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getAddressMatches(address)];
                case 1:
                    matches = _a.sent();
                    _a.label = 2;
                case 2:
                    if (matches && matches.length) {
                        addressCache[address] = matches;
                        labels = getLabelsFromMatches(matches);
                        response(labels);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getAddressAutoCompleteLabels = getAddressAutoCompleteLabels;
function getAddressMatches(address) {
    return __awaiter(this, void 0, Promise, function () {
        var swResponse, mdResponse, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!address)
                        return [2 /*return*/, []];
                    return [4 /*yield*/, HOApi.getProperties(address)];
                case 1:
                    swResponse = _a.sent();
                    if (swResponse.length > 0) {
                        return [2 /*return*/, toMdResults(swResponse)];
                    }
                    return [4 /*yield*/, getPropertiesFromMd(address)];
                case 2:
                    mdResponse = _a.sent();
                    if (mdResponse && mdResponse.Results && mdResponse.Results.length > 0) {
                        return [2 /*return*/, mdResponse.Results];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    logErrorSafe(new Models.ApiError("getAddressMatches", "ERROR", "getAddressMatches failed", null, err_1));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, null];
            }
        });
    });
}
exports.getAddressMatches = getAddressMatches;
function logErrorSafe(err) {
    try {
        ApiCaller.logError(err);
    }
    catch (e) {
        console.error(e);
    }
}
exports.logErrorSafe = logErrorSafe;
function toMdResults(results) {
    var mdResults = Enumerable.from(results)
        .select(function (item) { return ({
        Address: {
            AddressKey: item.AddressKey,
            AddressLine1: item.Street1,
            City: item.City,
            CityAccepted: item.City,
            CityNotAccepted: item.City,
            CountrySubdivisionCode: null,
            PlusFour: [],
            PostalCode: item.Zip,
            State: item.StateCode,
            SuiteCount: 0,
            SuiteList: [],
            SuiteName: ''
        }
    }); }).toArray();
    return mdResults;
}
exports.toMdResults = toMdResults;
function getLabelsFromMatches(matches) {
    var labels = [];
    matches.forEach(function (item) {
        // ks 10/18/16 - Sometimes MD can return two address keys separated by a comma. I know, WTF?
        var addressKey = $.trim((item.Address.AddressKey || '').split(',')[0]);
        var postalCode = item.Address.PostalCode.split('-')[0];
        if (item.Address.SuiteCount === 1) {
            labels.push({
                label: item.Address.AddressLine1 + " (" + item.Address.SuiteName + " " + item.Address.SuiteCount + "), " + item.Address.City + " " + item.Address.State + " " + postalCode,
                value: addressKey
            });
        }
        else if (item.Address.SuiteCount > 1) {
            // Show each suite list as a separate entry
            item.Address.SuiteList.forEach(function (suite) {
                labels.push({
                    label: item.Address.AddressLine1 + " (" + suite + "), " + item.Address.City + " " + item.Address.State + " " + postalCode,
                    value: addressKey,
                    baseMak: item.Address.BaseMAK ? item.Address.BaseMAK : ''
                });
            });
        }
        else {
            labels.push({
                label: item.Address.AddressLine1 + ", " + item.Address.City + " " + item.Address.State + " " + postalCode,
                value: addressKey
            });
        }
    });
    return labels;
}
exports.getLabelsFromMatches = getLabelsFromMatches;
//#endregion
//#region GetPropertyModel
/**
 * Call the MD service with the full HO address string and grab the HO address key.
 */
function getHOPropertyModel(address, exception) {
    if (exception === void 0) { exception = true; }
    return __awaiter(this, void 0, Promise, function () {
        var swAddresses, swAddress, mdResponse, mdAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!address)
                        return [2 /*return*/, null];
                    return [4 /*yield*/, HOApi.getProperties(address)];
                case 1:
                    swAddresses = _a.sent();
                    swAddress = handleSwyfftPropertyModels(swAddresses);
                    if (swAddress) {
                        return [2 /*return*/, swAddress];
                    }
                    return [4 /*yield*/, getPropertiesFromMd(address)];
                case 2:
                    mdResponse = _a.sent();
                    mdAddress = handleMdPropertyModels(address, mdResponse.Results);
                    if (mdAddress) {
                        return [2 /*return*/, {
                                AddressKey: (mdAddress.AddressKey || '').split(',')[0],
                                Street1: mdAddress.AddressLine1,
                                City: mdAddress.City,
                                StateCode: mdAddress.State,
                                Zip: mdAddress.PostalCode,
                                FullAddress: mdAddress.AddressLine1 + ', ' + mdAddress.City + ' ' + mdAddress.State + ' ' + mdAddress.PostalCode
                            }];
                    }
                    if (exception)
                        throw "We were unable to identify that address. Please try again.";
                    return [2 /*return*/, null];
            }
        });
    });
}
exports.getHOPropertyModel = getHOPropertyModel;
function getPropertiesFromMd(address) {
    return __awaiter(this, void 0, Promise, function () {
        var mdResponse, normalized;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Remove periods and commas from the address, as that seems to make MD like it better.
                    // It will sometimes insist that it can't find "2300 Hathcox St, Mobile, AL 36617" while 
                    // it has no trouble with "2300 Hathcox St Mobile, AL 36617".
                    address = simplifyAddress(address);
                    return [4 /*yield*/, ApiCaller.getPropertiesFromMd(address)];
                case 1:
                    mdResponse = _a.sent();
                    if (!!(mdResponse && mdResponse.Results && mdResponse.Results.length > 0)) return [3 /*break*/, 3];
                    normalized = normalizeAddress(address);
                    if (!(normalized.toLowerCase() !== address.toLowerCase())) return [3 /*break*/, 3];
                    return [4 /*yield*/, getPropertiesFromMd(normalized)];
                case 2:
                    mdResponse = _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, mdResponse];
            }
        });
    });
}
exports.getPropertiesFromMd = getPropertiesFromMd;
function handleSwyfftPropertyModels(results) {
    if (results.length > 0)
        return results[0];
    return null;
}
exports.handleSwyfftPropertyModels = handleSwyfftPropertyModels;
function handleMdPropertyModels(address, results) {
    // If only one result was returned, return that one.
    var numResults = results.length;
    if (numResults === 1) {
        return results[0].Address;
    }
    // There are times when MD returns multiple records, even when one of the records is an exact match.
    // See, for instance, 703 S Carolina St Mobile, AL 36603.
    // This allows us to handle that instance correctly.
    if (numResults > 1) {
        var reducedAddress_1 = Util.reduce(address);
        var mdAddress = Enumerable.from(results).select(function (x) { return x.Address; }).firstOrDefault(function (x) {
            var mdReducedAddress = Util.reduce(x.AddressLine1 + x.City + x.State + x.PostalCode.split('-')[0]);
            return (reducedAddress_1 === mdReducedAddress);
        });
        if (mdAddress)
            return mdAddress;
    }
    return null;
}
exports.handleMdPropertyModels = handleMdPropertyModels;
//#endregion
function formatCurrencyUS(amount) {
    if (!amount) {
        return "";
    }
    amount += '';
    var x = amount.split('.');
    if (x.length > 1) {
        amount = parseFloat(amount).toFixed(2);
        x = amount.split('.');
    }
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    //HG 6/22/17: This should not be converted to a template string, as it will cause sourcemap errors. see https://bugs.chromium.org/p/chromium/issues/detail?id=561301
    return "$" + x1 + x2;
}
exports.formatCurrencyUS = formatCurrencyUS;
/**
 * Formats header on quote and purchase pages.
 */
function formatGrossAnnualPayment(amount) {
    if (!amount) {
        return "";
    }
    (amount % 1 !== 0) ? amount = amount.toFixed(2) : amount = amount.toFixed(0);
    return amount;
}
exports.formatGrossAnnualPayment = formatGrossAnnualPayment;
/**
 * Accomodates formatting requirements specific to main bubble display value.
 */
function formatBubblePremium(amount) {
    if (!amount) {
        return "";
    }
    return amount.toFixed(0);
}
exports.formatBubblePremium = formatBubblePremium;
/**
 * Remove punctuation from an address to make it work correctly with Melissa Data's address lookup service,
 * which doesn't handle that sort of thing very well.
 */
function simplifyAddress(address) {
    // SZ 2017-07-15. Replace "N.E.", "N.W.", "S.E.", "S.W." with "NE", "Nw", "SE", "SW".
    address = address.replace(/\s([ns])\.([ew])\.{0,1}\s/gi, ' $1$2 ');
    // SZ 2017-07-15. Replace ,.; and multiple spaces with single space
    address = address.replace(/[,.;\s]+/g, ' ');
    // Change 12345-1234 zipcode to 12345 zipcode
    if (address.length > 5 && address[address.length - 5] === '-') {
        address = address.substring(0, address.length - 5);
    }
    return address;
}
exports.simplifyAddress = simplifyAddress;
/**
 * Client-side version of the PremiumHelpers.TotalMonthlyPayments() method.
 */
function getTotalMonthlyPayments(downpayment, monthlyPayment) {
    return Util.round(downpayment + (monthlyPayment * 11), -2);
}
exports.getTotalMonthlyPayments = getTotalMonthlyPayments;
function createAddress(addressString, addressInfoVm, secondaryInfoVm) {
    return __awaiter(this, void 0, Promise, function () {
        var parsed, pd, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, HOApi.parseAddress(addressString)];
                case 1:
                    parsed = _a.sent();
                    if (parsed) {
                        pd = {
                            AddressKey: '',
                            Street1: parsed.Street1,
                            City: parsed.City,
                            StateCode: parsed.StateCode,
                            Zip: parsed.Zip,
                            FullAddress: addressString
                        };
                        addressInfoVm.load(pd);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, addressInfoVm.show()];
                case 4:
                    _a.sent();
                    if (!addressInfoVm.needsSecondaryData()) return [3 /*break*/, 6];
                    secondaryInfoVm.load(addressInfoVm.getPropertyData());
                    return [4 /*yield*/, secondaryInfoVm.show()];
                case 5:
                    _a.sent();
                    return [2 /*return*/, secondaryInfoVm.getPropertyData()];
                case 6: return [2 /*return*/, addressInfoVm.getPropertyData()];
            }
        });
    });
}
exports.createAddress = createAddress;
/**
 * Abbreviate street types, remove periods, fix capitalization problems, etc., for a given address
 */
// TODO: SZ 2017-07-15. The Capitalization functionality is not needed as MD and our SqlServer data is not case-sensitive. We can simplify the code and make it faster.
// Note: RegExps are not fast by definition
function normalizeAddress(address) {
    if (Util.isEmpty(address))
        return '';
    var segments = address.split(',');
    var result = Enumerable.from(segments).select(function (segment) {
        var chunks = (segment || '').trim().split(' ');
        for (var i = 0; i < chunks.length; i++) {
            var chunk = chunks[i].toUpperCase().replace(/\./g, "");
            var withoutComma = chunk.replace(/,/g, "");
            var streetReplacement = Constants.streetTypes[withoutComma];
            if (streetReplacement) {
                chunks[i] = Util.toTitleCase(streetReplacement);
                continue;
            }
            var directionsReplacement = Constants.directions[withoutComma];
            if (directionsReplacement) {
                chunks[i] = directionsReplacement;
                continue;
            }
            chunks[i] = Util.toTitleCase(chunk);
        }
        return Enumerable.from(chunks)
            .where(function (x) { return !Util.isEmpty(x); })
            .toArray()
            .join(' ');
    }).toArray();
    var normalized = Util.trimEnd(result.join(", ").trim(), ',');
    return normalized;
}
exports.normalizeAddress = normalizeAddress;
function elementValueDisplayFormat(viewModel, value) {
    if (Util.isEmpty(value))
        return "Nothing Selected";
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Boolean)
        return value === 'true' ? 'yes' : 'no';
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Text || viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Year)
        return value;
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Wind)
        return windDisplayFormat(value);
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Mixed)
        return findValueFromChoices(value, viewModel);
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Float && checkDecimalPlaces(value) === 1)
        return numeral(value).format(Constants.ElementDisplayFormatTypes.Float1Point);
    //when value has no decimals, it comes down as an Int with a Float DisplayFormat. This prevents it from being displayed with 2 decimals (ie. 1.00)
    if (viewModel.el.DisplayFormat === Constants.ElementDisplayFormatTypes.Float && checkDecimalPlaces(value) === 0)
        return numeral(value).format(Constants.ElementDisplayFormatTypes.Float1Point);
    return numeral(value).format(viewModel.el.DisplayFormat);
}
exports.elementValueDisplayFormat = elementValueDisplayFormat;
function findValueFromChoices(value, viewModel) {
    var parsedValue = parseFloat(value);
    for (var i = 0; i < viewModel.el.Choices.length; i++) {
        var choice = viewModel.el.Choices[i];
        if (parseFloat(choice.Value) === parsedValue && parsedValue === -1)
            return Constants.elementChoiceStatus.NotAvailable;
        if (parseFloat(choice.Value) === parsedValue && parsedValue < 1)
            return choice.Name;
    }
    return numeral(value).format(Constants.ElementDisplayFormatTypes.MixedCurrency);
}
function windDisplayFormat(value) {
    switch (value) {
        case ('FORTIFIED Home™: Silver'):
            return 'silver';
        case ('FORTIFIED Home™: Gold'):
            return 'gold';
        case ('FORTIFIED Home™: Bronze'):
            return 'bronze';
        case ('FORTIFIED for Safer Living®'):
            return 'safer living';
        case ('2006 (or later) International Residential Code'):
            return 'Int\'l Code';
        case ('Hurricane Fortified for Existing Homes - Bronze Option 1'):
            return 'Bronze 1';
        case ('Hurricane Fortified for Existing Homes - Bronze Option 2'):
            return 'Bronze 2';
        case ('Hurricane Fortified for Existing Homes - Silver Option 1'):
            return 'Silver 1';
        case ('Hurricane Fortified for Existing Homes - Silver Option 2'):
            return 'Silver 2';
        case ('Hurricane Fortified for Existing Homes - Gold Option 1'):
            return 'Gold 1';
        case ('Hurricane Fortified for Existing Homes - Gold Option 2'):
            return 'Gold 2';
        case ('Hurricane Fortified for Safer Living'):
            return 'Safer Living';
        case ('Not Selected'):
            return 'Not Selected';
        case ('Partial Opening Coverage by Storm Shutters or Hurricane Resistant Laminated Glass'):
            return 'Partial Openings';
        case ('All Openings Covered by Both Storm Shutters or Hurricane Resistant Laminated Glass'):
            return 'All Openings';
        default:
            return value;
    }
}
function addNumeralFormatting(value, formatType) {
    return numeral(value).format(formatType);
}
exports.addNumeralFormatting = addNumeralFormatting;
function stripNumeralFormatting(value) {
    var strippedValue = numeral(value);
    return strippedValue.value();
}
exports.stripNumeralFormatting = stripNumeralFormatting;
function checkDecimalPlaces(value) {
    //check if underlying value is a number
    if (!Util.isNumeric(parseFloat(value)))
        return 0;
    //convert to string, if needed
    if (typeof value === "number")
        value = String(value);
    //split decimal value if present
    var splitValue = value.split(".");
    // if no decimal found, return
    if (!splitValue[1])
        return 0;
    var decimalLength = splitValue[1].length;
    return decimalLength;
}
exports.checkDecimalPlaces = checkDecimalPlaces;
/**
 * Custom scrollTo helpers. see the following for reference: https://stackoverflow.com/questions/50589137/scrollto-speed-duration-setting https://jsfiddle.net/rafarolo/zwkesrxh/3/
 */
// Element to move, time in ms to animate
function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var top = e.scrollTop;
        ++e.scrollTop;
        e = top + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}
exports.scrollTo = scrollTo;
// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0)
        return;
    if (typeof from === "object")
        from = from.offsetTop;
    if (typeof to === "object")
        to = to.offsetTop;
    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}
function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(function () {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
var ModalVm = /** @class */ (function () {
    function ModalVm() {
        this.isBusy = ko.observable(false);
        this.showModal = ko.observable(false);
    }
    /**
     * Show the modal, and return a deferred which will be resolved or rejected when the modal is closed.
     */
    ModalVm.prototype.show = function () {
        console.log('Showing modal');
        this.showModal(true);
        if (!this.deferred) {
            this.deferred = new Util.Deferred();
        }
        return this.deferred.promise;
    };
    /**
     * Resolve the deferred and close the modal
     */
    ModalVm.prototype.ok = function () {
        console.log('Resolving modal');
        if (this.deferred) {
            this.deferred.resolve();
        }
        this.close();
    };
    /**
     * Reject the deferred and close the modal
     */
    ModalVm.prototype.cancel = function () {
        console.log('Canceling modal');
        if (this.deferred) {
            this.deferred.reject("Closed");
        }
        this.close();
    };
    /**
     * Close the modal without explicitly rejecting or resolving the deferred
     */
    ModalVm.prototype.close = function () {
        this.showModal(false);
        exports.state.isDialogOpen = false;
        this.deferred = null;
    };
    return ModalVm;
}());
exports.ModalVm = ModalVm;
var LoadingVm = /** @class */ (function (_super) {
    __extends(LoadingVm, _super);
    function LoadingVm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = ko.observable('Loading...');
        return _this;
    }
    LoadingVm.prototype.start = function () { this.show(); };
    LoadingVm.prototype.done = function (forceShow) { this.close(); };
    return LoadingVm;
}(ModalVm));
exports.LoadingVm = LoadingVm;
/**
 * Represents the modal dialogue for editing addresses
 */
var AddressInfoVm = /** @class */ (function (_super) {
    __extends(AddressInfoVm, _super);
    function AddressInfoVm(update, isLatLongModal) {
        var _this = _super.call(this) || this;
        _this.addressKey = ko.observable('');
        _this.fullAddress = ko.observable('');
        _this.street1 = ko.observable('')
            .extend({ required: { message: 'Please enter the street address' } });
        _this.street2 = ko.observable('');
        _this.city = ko.observable('')
            .extend({ required: { message: 'Please enter the city name' } });
        _this.stateCode = ko.observable('').extend({
            validation: [{
                    validator: function (value) { return Validations.validateStateCode(value); },
                    message: 'Please enter the state abbreviation'
                }]
        });
        _this.state = ko.computed(function () { return Validations.getStateNameByCode(_this.stateCode()); });
        _this.zip = ko.observable('')
            .extend({ required: { message: 'Please enter the zip code' } })
            .extend({ stripAlphas: "always" })
            .extend({ validateZipAsync: true });
        _this.county = ko.observable('');
        _this.phone = ko.observable('');
        _this.email = ko.observable('');
        _this.latitude = ko.observable();
        _this.longitude = ko.observable();
        _this.livingSpace = ko.observable()
            .extend({ required: { message: 'Please enter the living space' } })
            .extend({ min: 500 })
            .extend({ max: 10000 });
        // NB: this needs to come after all the definition of all the fields to be validated
        _this.errors = ko.validation.group(_this);
        _this.updateFunction = update;
        // Hook up latitude/longitude validation
        _this.latitude.extend({
            validation: {
                validator: function (lat, long) {
                    if (long) {
                        return Validations.validateLatitudeAndLongitude(lat, long);
                    }
                    else {
                        return true;
                    }
                },
                message: "Please enter a valid US latitude",
                params: _this.longitude
            }
        });
        _this.longitude.extend({
            validation: {
                validator: function (long, lat) {
                    if (long) {
                        return Validations.validateLatitudeAndLongitude(lat, long);
                    }
                    else {
                        return true;
                    }
                },
                message: "Please enter a valid US longitude",
                params: _this.latitude
            }
        });
        // Remove the required rule for livingSpaces that's interferring with the coordinates-only modal.
        if (isLatLongModal) {
            _this.livingSpace.rules.remove(function (item) { return item.rule === 'required'; });
        }
        return _this;
    }
    AddressInfoVm.prototype.load = function (pd) {
        this.addressKey(pd.AddressKey);
        this.fullAddress(pd.FullAddress || '');
        this.street1(pd.Street1);
        this.city(pd.City);
        this.stateCode(pd.StateCode);
        this.zip(pd.Zip);
        this.county(pd.County || '');
        this.phone(pd.Phone || '');
        this.email(pd.Email || '');
        this.latitude(pd.Latitude || null);
        this.longitude(pd.Longitude || null);
        this.livingSpace(pd.LivingSpace || null);
    };
    AddressInfoVm.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pd, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.errors().length !== 0) {
                            console.log(this.errors().length, " validation errors encountered");
                            this.errors.showAllMessages();
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        pd = this.getPropertyData();
                        data = void 0;
                        if (!this.updateFunction) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateFunction(pd)];
                    case 2:
                        _a.sent();
                        data = {
                            AddressKey: pd.AddressKey,
                            Longitude: pd.Longitude,
                            Latitude: pd.Latitude
                        };
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, HOApi.putProperty(pd)];
                    case 4:
                        data = _a.sent();
                        _a.label = 5;
                    case 5:
                        this.load(data);
                        this.ok();
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        handleGeneralError(err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddressInfoVm.prototype.ok = function () {
        this.errors.showAllMessages(false);
        _super.prototype.ok.call(this);
    };
    AddressInfoVm.prototype.cancel = function () {
        this.errors.showAllMessages(false);
        _super.prototype.cancel.call(this);
    };
    AddressInfoVm.prototype.needsSecondaryData = function () {
        if (this.latitude() === 0 || this.longitude() === 0)
            return true;
        // if (Util.isNullOrWhitespace(this.county())) return true;
        return false;
    };
    AddressInfoVm.prototype.getPropertyData = function () {
        var pd = {
            AddressKey: this.addressKey(),
            FullAddress: this.street1() + ", " + this.city() + " " + this.state() + " " + this.zip(),
            Street1: this.street1(),
            Street2: this.street2(),
            City: this.city(),
            StateCode: this.stateCode().toUpperCase(),
            Zip: (this.zip() || '').trim(),
            County: this.county(),
            Phone: this.phone(),
            Email: this.email(),
            Latitude: Util.asNumberNullable(this.latitude()),
            Longitude: Util.asNumberNullable(this.longitude()),
            LivingSpace: this.livingSpace() || 0
        };
        return pd;
    };
    return AddressInfoVm;
}(ModalVm));
exports.AddressInfoVm = AddressInfoVm;
/**
 * A ViewModel that displays a simple "Loading..." message for use during
 * long asynchronous actions.
 */
exports.loadingVm = new LoadingVm();
var loadingNode = $('#loadingModal')[0];
if (loadingNode) {
    ko.cleanNode(loadingNode);
    ko.applyBindings(exports.loadingVm, loadingNode);
}


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AgentHelper = /** @class */ (function () {
    function AgentHelper() {
    }
    AgentHelper.getAgency = function (agent) {
        return agent.ProducerContact.Agency;
    };
    AgentHelper.getAgencyName = function (agent) {
        var agency = this.getAgency(agent);
        if (agency) {
            return agency.Name;
        }
        else {
            // TODO: SZ 2018-03-06. Not impl yet
            return "Commercial";
        }
    };
    return AgentHelper;
}());
exports.AgentHelper = AgentHelper;
//Before creating a commercial patch request, we need to send values from the child templates to their parent. This array is subsequently flattened when creating a commercial patch request
function createPatchValuesArr(instanceName, instanceValue) {
    var instanceArray = [];
    //Object properties are initialized below, in order to avoid TS errors.
    var instanceObj = { name: '', value: '' };
    instanceObj.name = instanceName;
    instanceObj.value = instanceValue;
    instanceArray.push(instanceObj);
    return instanceArray;
}
exports.createPatchValuesArr = createPatchValuesArr;


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(53)
  , IE8_DOM_DEFINE = __webpack_require__(134)
  , toPrimitive    = __webpack_require__(80)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(55)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(137)
  , defined = __webpack_require__(81);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PortalCompat__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortalWithState__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return __WEBPACK_IMPORTED_MODULE_0__PortalCompat__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PortalWithState", function() { return __WEBPACK_IMPORTED_MODULE_1__PortalWithState__["a"]; });





/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(26)
  , core      = __webpack_require__(31)
  , ctx       = __webpack_require__(133)
  , hide      = __webpack_require__(40)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(32)
  , createDesc = __webpack_require__(63);
module.exports = __webpack_require__(33) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Syntax note: Keys starting with uppercase should correspond to values generated on the BE. Keys starting with lowercase should correspond to values that are set/tracked on the UI.
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
var ApiError = /** @class */ (function () {
    /**
     * Instantiate a new instance of the common ApiError class.
     * @param code The authoritative error code that provides the information about how the error should be handled.
     * @param severity Severity of the error as a string: "ERROR", "WARN", "INFO" primarily. See log4net.Level for details.
     * @param message The message that will be displayed to users
     * @param subCode A subcode that can provide information about why the top-level error happened.
     * @param details Additional debugging details that will be shown in our logs, but not to the user.
     * @param reference An identifier that can be used to find details of this error in logs.
     * @param errorType HTTP error or Swyfft error.
     */
    function ApiError(code, severity, message, subCode, details, reference, errorType, uri) {
        this.code = code;
        this.severity = severity;
        this.message = message;
        this.details = details;
        this.code = code.toString();
        if (subCode != null) {
            this.subCode = subCode.toString();
        }
        this.reference = reference;
        this.severity = severity;
        if (errorType != null) {
            this.errorType = errorType;
        }
        else {
            this.errorType = ApiErrorTypes.SwyfftErrorCode;
        }
        if (uri != null) {
            this.uri = uri;
        }
    }
    return ApiError;
}());
exports.ApiError = ApiError;
var ApiErrorTypes;
(function (ApiErrorTypes) {
    ApiErrorTypes["HttpStatusCode"] = "HttpStatusCode";
    ApiErrorTypes["SwyfftErrorCode"] = "SwyfftErrorCode";
    ApiErrorTypes["UnexpectedError"] = "UnexpectedError";
})(ApiErrorTypes = exports.ApiErrorTypes || (exports.ApiErrorTypes = {}));
// RiskMap
var MapLayerType;
(function (MapLayerType) {
    MapLayerType[MapLayerType["Unknown"] = 0] = "Unknown";
    MapLayerType[MapLayerType["ActiveBrushfire"] = 1] = "ActiveBrushfire";
    MapLayerType[MapLayerType["ActiveBrushfireOriginal"] = 2] = "ActiveBrushfireOriginal";
    MapLayerType[MapLayerType["RedFlagWarning"] = 3] = "RedFlagWarning";
    MapLayerType[MapLayerType["UserDefinedPolygon"] = 4] = "UserDefinedPolygon";
    MapLayerType[MapLayerType["QuoteProperty"] = 5] = "QuoteProperty";
    MapLayerType[MapLayerType["PurchaseMoratorium"] = 6] = "PurchaseMoratorium";
    MapLayerType[MapLayerType["BrushfireHazardFivePoint"] = 7] = "BrushfireHazardFivePoint";
    MapLayerType[MapLayerType["BrushfireHazardFourPoint"] = 8] = "BrushfireHazardFourPoint";
    MapLayerType[MapLayerType["ActiveState"] = 9] = "ActiveState";
    MapLayerType[MapLayerType["ActiveCounty"] = 10] = "ActiveCounty";
    MapLayerType[MapLayerType["InactiveCounty"] = 11] = "InactiveCounty";
})(MapLayerType = exports.MapLayerType || (exports.MapLayerType = {}));
// It can be mapped to google.maps.LatLngBoundsLiteral
var MapBounds = /** @class */ (function () {
    function MapBounds() {
    }
    return MapBounds;
}());
exports.MapBounds = MapBounds;
// Swyfft.Services.Models.MapViewPolygonInfo
var MapViewPolygonInfo = /** @class */ (function () {
    function MapViewPolygonInfo() {
    }
    MapViewPolygonInfo.cloneMapViewPolygonInfo = function (obj) {
        var clone = {
            Zoom: obj.Zoom,
            MapLayerType: obj.MapLayerType,
            Id: obj.Id,
            Name: obj.Name,
            PolygonCenter: obj.PolygonCenter,
            PolygonPointsNumber: obj.PolygonPointsNumber,
            PolygonAreaSqMeters: obj.PolygonAreaSqMeters
        };
        return clone;
    };
    return MapViewPolygonInfo;
}());
exports.MapViewPolygonInfo = MapViewPolygonInfo;
// Swyfft.Services.Models.MapViewPolygon
var MapViewPolygon = /** @class */ (function (_super) {
    __extends(MapViewPolygon, _super);
    function MapViewPolygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MapViewPolygon;
}(MapViewPolygonInfo));
exports.MapViewPolygon = MapViewPolygon;
// Swyfft.Services.Models.GetMapPolygonsRequest
var GetMapPolygonsRequest = /** @class */ (function () {
    function GetMapPolygonsRequest() {
    }
    return GetMapPolygonsRequest;
}());
exports.GetMapPolygonsRequest = GetMapPolygonsRequest;
// Swyfft.Services.Models.GetMapPolygonsResponse
var GetMapPolygonsResponse = /** @class */ (function () {
    function GetMapPolygonsResponse() {
    }
    return GetMapPolygonsResponse;
}());
exports.GetMapPolygonsResponse = GetMapPolygonsResponse;


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 52:
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
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.setStateAsync = function (state) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.setState(state, resolve);
        });
    };
    return Component;
}(React.Component));
exports.default = Component;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(54);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(136)
  , enumBugKeys = __webpack_require__(85);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 60:
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
var LoginHeader = /** @class */ (function (_super) {
    __extends(LoginHeader, _super);
    function LoginHeader(props) {
        return _super.call(this, props) || this;
    }
    LoginHeader.prototype.render = function () {
        return React.createElement("section", { className: 'visual-sec', id: 'login-hero' },
            React.createElement("div", { className: 'bg-stretch bg-stretch-ly' }),
            React.createElement("div", { className: 'caption container' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-xs-12' },
                        React.createElement("h1", { className: 'hero-text-bs' },
                            "Welcome, ",
                            React.createElement("span", { className: 'hero-text-callout-bs' }, this.props.userId || 'Agent'))))));
    };
    return LoginHeader;
}(React.Component));
exports.default = LoginHeader;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(4);
var Validations = __webpack_require__(21);
var Value = /** @class */ (function () {
    function Value(errorMessage) {
        this.value = '';
        this.errorMessage = errorMessage;
        this.defaultErrorMessage = errorMessage;
        this.dirty = false;
    }
    Value.prototype.stateSet = function (args) {
        if (args.value !== undefined)
            this.value = args.value;
        if (args.problem !== undefined)
            this.errorMessage = args.problem;
        if (args.dirty)
            this.dirty = true;
        return this;
    };
    return Value;
}());
exports.Value = Value;
var Date = /** @class */ (function () {
    function Date(defaultError) {
        this.mVal = '';
        this.dVal = '';
        this.yVal = '';
        this.errorMessage = defaultError;
        this.dirty = false;
    }
    Date.prototype.setM = function (month) {
        this.mVal = month;
        return this;
    };
    Date.prototype.setD = function (day) {
        this.dVal = day;
        return this;
    };
    Date.prototype.setY = function (year) {
        this.yVal = year;
        return this;
    };
    Date.prototype.setError = function (newVal) {
        this.errorMessage = newVal;
        this.dirty = true;
        return this;
    };
    Date.prototype.checkValid = function (hasDay, secondValidator) {
        var dateString = this.mVal + "-" + (hasDay ? this.dVal : '01') + "-" + this.yVal;
        this.errorMessage = Validations.validateDate(dateString) ? '' : dateString + " is not a valid date";
        if (!this.errorMessage && secondValidator !== undefined)
            this.errorMessage = secondValidator(this.moment());
        this.dirty = true;
        return this;
    };
    Date.prototype.moment = function () {
        return moment(this.yVal + "-" + this.mVal + "-" + this.dVal, ['YYYY-MM-DD', 'YYYY-MM-', 'YY-MM-DD', 'YY-MM-']);
    };
    Date.prototype.toDate = function () {
        return this.moment().toDate();
    };
    Date.prototype.toExpString = function () {
        return this.mVal + "/" + this.yVal;
    };
    return Date;
}());
exports.Date = Date;
var Persona = /** @class */ (function () {
    function Persona() {
        this.firstName = '';
        this.lastName = '';
        this.filledOut = false;
    }
    Persona.prototype.setThis = function (_a) {
        var _b = _a.first, first = _b === void 0 ? this.firstName : _b, _c = _a.last, last = _c === void 0 ? this.lastName : _c;
        this.firstName = first;
        this.lastName = last;
        this.filledOut = !!first || !!last;
        return this;
    };
    return Persona;
}());
exports.Persona = Persona;


/***/ }),

/***/ 62:
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
var ApiCaller = __webpack_require__(28);
function getOrCreateQuote(request) {
    return ApiCaller.$put('api/commercial/quotes', request, NProgress, 'get or create quote');
}
exports.getOrCreateQuote = getOrCreateQuote;
function bindQuote(request) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ApiCaller.$post('api/commercial/bind', request, NProgress, 'bind quote')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.bindQuote = bindQuote;
function createQuote(quote) {
    return ApiCaller.$post('api/commercial/quotes/index.html', quote, NProgress, 'create quote');
}
exports.createQuote = createQuote;
function getQuoteByQuoteId(quoteId) {
    var promise = ApiCaller.$get("api/commercial/quotes/quoteid/" + quoteId, NProgress, 'get quote by quoteId');
    return promise;
}
exports.getQuoteByQuoteId = getQuoteByQuoteId;
function patchQuote(patch) {
    var gaEventAction = patch.gaEventAction || 'update commercial quote';
    return ApiCaller.$patch("api/commercial/quotes", patch, NProgress, gaEventAction);
}
exports.patchQuote = patchQuote;
function logQuoteRequest(event) {
    return ApiCaller.$post('api/log/quoterequest', event, null);
}
exports.logQuoteRequest = logQuoteRequest;
//07/02/18: Not needed for MVP, commented out in case it is needed for future versions
//export function getQuoteByAddressKey(addressKey: string): Promise<Models.CommercialQuoteModel> {
//    const promise = ApiCaller.$get(`api/commercial/quotes/addresskey/${addressKey}`, NProgress, 'get quote by address key');
//    return promise;
//}
function getCommercialProperties(address) {
    var url = "api/commercial/properties?address=" + encodeURIComponent(address);
    return ApiCaller.$get(url, null, "get properties");
}
exports.getCommercialProperties = getCommercialProperties;


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PremiumTypes;
(function (PremiumTypes) {
    PremiumTypes[PremiumTypes["Monthly"] = 0] = "Monthly";
    PremiumTypes[PremiumTypes["Annual"] = 1] = "Annual";
    PremiumTypes[PremiumTypes["Escrow"] = 2] = "Escrow";
})(PremiumTypes = exports.PremiumTypes || (exports.PremiumTypes = {}));
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes[PaymentTypes["CreditCard"] = 0] = "CreditCard";
    PaymentTypes[PaymentTypes["ECheck"] = 1] = "ECheck";
})(PaymentTypes = exports.PaymentTypes || (exports.PaymentTypes = {}));
var ECheckAccountTypes;
(function (ECheckAccountTypes) {
    ECheckAccountTypes[ECheckAccountTypes["Checking"] = 0] = "Checking";
    ECheckAccountTypes[ECheckAccountTypes["Savings"] = 1] = "Savings";
})(ECheckAccountTypes = exports.ECheckAccountTypes || (exports.ECheckAccountTypes = {}));
var ElementDisplayFormatTypes;
(function (ElementDisplayFormatTypes) {
    ElementDisplayFormatTypes.Boolean = "b";
    ElementDisplayFormatTypes.Year = "00";
    ElementDisplayFormatTypes.Percentage = "0%";
    ElementDisplayFormatTypes.Wind = "w";
    ElementDisplayFormatTypes.Int = "0,0";
    ElementDisplayFormatTypes.Float = "0,0.00";
    ElementDisplayFormatTypes.Text = "t";
    ElementDisplayFormatTypes.Currency = "$0,0.00";
    //Special type, DisplayFormat "mixed" cannot be set with decimal limits so it must come down from the BE with 2 decimals. For non-percentage values, we need to format as currency but WITHOUT decimals.
    ElementDisplayFormatTypes.MixedCurrency = "$0,0";
    //Special type, used by values that need 1 floating point instead of 2 (Grade, NumStories)
    ElementDisplayFormatTypes.Float1Point = "0,0.0";
    ElementDisplayFormatTypes.Mixed = "m";
})(ElementDisplayFormatTypes = exports.ElementDisplayFormatTypes || (exports.ElementDisplayFormatTypes = {}));
var ElementNames;
(function (ElementNames) {
    ElementNames.construction = "Construction";
    ElementNames.constructionGrade1Weight = "ConstructionGrade1Weight";
    ElementNames.constructionGrade1 = "ConstructionGrade1";
    ElementNames.constructionGrade2 = "ConstructionGrade2";
    ElementNames.county = "County";
    ElementNames.coverageBLimit = "CoverageBLimit";
    ElementNames.coverageBLimitDefault = "CoverageBLimitDefault";
    ElementNames.coverageCLimit = "CoverageCLimit";
    ElementNames.coverageCLimitDefault = "CoverageCLimitDefault";
    ElementNames.coverageDLimit = "CoverageDLimit";
    ElementNames.coverageDLimitDefault = "CoverageDLimitDefault";
    ElementNames.coverageELimit = "CoverageELimit";
    ElementNames.coverageELimitDefault = "CoverageELimitDefault";
    ElementNames.coverageFLimit = "CoverageFLimit";
    ElementNames.coverageFLimitDefault = "CoverageFLimitDefault";
    ElementNames.deductible = "Deductible";
    ElementNames.garageDoor = "GarageDoor";
    ElementNames.grade = "Grade";
    ElementNames.identityFraudCoverage = "IdentityFraudCoverage";
    ElementNames.insuredType = "InsuredType";
    ElementNames.latitude = "Latitude";
    ElementNames.limitedWaterBackupLimit = "LimitedWaterBackupLimit";
    ElementNames.livingSpace = "LivingSpace";
    ElementNames.longitude = "Longitude";
    ElementNames.numLosses = "NumLosses";
    ElementNames.numStories = "NumStories";
    ElementNames.personalInjuryCoverage = "PersonalInjuryCoverage";
    ElementNames.personalPropertyEnhancementLimit = "PersonalPropertyEnhancementLimit";
    ElementNames.replacementCostAlgorithm = "ReplacementCostAlgorithm";
    ElementNames.EscapedLiquidFuelLeadLiabilityCoverage = "EscapedLiquidFuelLeadLiabilityCoverage";
    ElementNames.LiquidFuelRiskClass = "LiquidFuelRiskClass";
    ElementNames.LeadRiskClass = "LeadRiskClass";
    ElementNames.QuoteFeeTypeAnnual = "Annual";
    ElementNames.QuoteFeeTypeMonthly = "Monthly";
    ElementNames.PrivateResidenceEstateFullTimeInservantCount = "PrivateResidenceEstateFullTimeInservantCount";
    ElementNames.PrivateResidenceFullTimeOutservantCount = "PrivateResidenceFullTimeOutservantCount";
    ElementNames.PrivateEstateFullTimeOutservantCount = "PrivateEstateFullTimeOutservantCount";
    ElementNames.OccasionalServantCount = "OccasionalServantCount";
    ElementNames.protectionClass = "ProtectionClass";
    ElementNames.protectiveDevicesAlarms = "ProtectiveDevicesAlarms";
    ElementNames.protectiveDevicesFireAlarms = "ProtectiveDevicesFireAlarms";
    ElementNames.protectiveDevicesBurglarAlarms = "ProtectiveDevicesBurglarAlarms";
    ElementNames.protectiveDevicesSprinklers = "ProtectiveDevicesSprinklers";
    ElementNames.replacementCost = "ReplacementCost";
    ElementNames.roofAge = "RoofAge";
    ElementNames.roofShape = "RoofShape";
    ElementNames.shutters = "Shutters";
    ElementNames.sinkholeCollapseLimit = "SinkholeCollapseLimit";
    ElementNames.stateAbbreviation = "StateAbbreviation";
    ElementNames.straps = "Straps";
    ElementNames.territoryId = "TerritoryId";
    ElementNames.territoryMultiplier = "TerritoryMultiplier";
    ElementNames.treeRisk = "TreeRisk";
    ElementNames.windConstructionProgram = "WindConstructionProgram";
    ElementNames.windLossCostDeductible = "WindLossCostDeductible";
    ElementNames.yearBuilt = "YearBuilt";
    ElementNames.zipCode = "ZipCode";
    ElementNames.MALiquidFuel = "MALiquidFuel";
    ElementNames.MAEscapedFuelCoverage = "MAEscapedFuelCoverage";
    ElementNames.TXHarveySafe = "HarveySafe";
    ElementNames.ALNateSafe = "NateSafe";
})(ElementNames = exports.ElementNames || (exports.ElementNames = {}));
var CommercialElementNames;
(function (CommercialElementNames) {
    CommercialElementNames.lossHistory = 'LossHistory';
    CommercialElementNames.propertyBroadening = 'PropertyBroadeningFormCoverage';
    CommercialElementNames.sewer = 'SewerBackupCoverage';
    CommercialElementNames.crime = 'CrimeCoverage';
    CommercialElementNames.ordinanceOrLaw = 'OrdinanceOrLawCoverage';
    CommercialElementNames.ordinanceOrLawCombinedLimits = 'OrdinanceOrLawCombinedLimits';
    CommercialElementNames.extendedIndemnityPeriod = 'ExtendedPeriodOfIndemnityCoverage';
    CommercialElementNames.hiredAuto = 'HiredNonOwnedAutoCoverage';
    CommercialElementNames.sprinklers = 'HasSprinklers';
    CommercialElementNames.effectiveDate = 'EffectiveDate';
    CommercialElementNames.buildingType = 'BuildingType';
    CommercialElementNames.buildingValue = 'BuildingValue';
    CommercialElementNames.businessIncomeLimit = 'BusinessIncomeLimit';
    CommercialElementNames.yearBuilt = 'YearBuilt';
    CommercialElementNames.sqFootage = 'SquareFootage';
    CommercialElementNames.units = 'NumberOfUnits';
    CommercialElementNames.stories = 'NumberOfStories';
    CommercialElementNames.businessPersonalPropertyLimit = 'BusinessPersonalPropertyLimit';
    CommercialElementNames.equipmentBreakdown = 'EquipmentBreakdownCoverage';
    CommercialElementNames.terrorism = 'TerrorismCoverage';
    CommercialElementNames.employeeBenefits = 'EmployeeBenefitsCoverage';
    CommercialElementNames.swimmingPools = 'SwimmingPoolCount';
    CommercialElementNames.protectionClass = 'ProtectionClass';
    CommercialElementNames.constructionType = 'ConstructionType';
    CommercialElementNames.deductible = 'Deductible';
    // EW 2018-06-28 - No EFDefaultElements specified for IRPM sliders.
    CommercialElementNames.irpmManagement = 'IrpmManagement';
    CommercialElementNames.irpmLocation = 'IrpmLocation';
    CommercialElementNames.irpmBuildingFeatures = 'IrpmBuildingFeatures';
    CommercialElementNames.irpmPremisesEquipment = 'IrpmPremisesEquipment';
    CommercialElementNames.irpmEmployees = 'IrpmEmployees';
    CommercialElementNames.irpmProtection = 'IrpmProtection';
})(CommercialElementNames = exports.CommercialElementNames || (exports.CommercialElementNames = {}));
exports.commercialCustomDropdownElementNames = [
    CommercialElementNames.buildingType,
    CommercialElementNames.constructionType
];
exports.commercialLossSoftDeclineReasons = {
    habitability: 'We currently don\'t bind policies with 1 or more habitability claims in the last 3 years through this web application. However, we do take special cases into consideration.If you\'d like to refer your case to us, please contact an underwriter here:',
    liability: 'We currently don\'t bind policies with 2 or more Liability claims in the last 3 years through this web application. However, we do take special cases into consideration. If you\'d like to refer your case to us, please contact an underwriter here:',
    waterDamage: 'We currently don\'t bind policies with 2 or more water damage claims in the last 3 years through this web application. However, we do take special cases into consideration. If you\'d like to refer your case to us, please contact an underwriter here:',
    lossRatio: 'We currently don\'t bind policies with the specified loss history through this web application. However, we do take special cases into consideration. If you\'d like to refer your case to us, please contact an underwriter here:'
};
exports.commercialSoftDeclineTypes = {
    Habitability: 'habitability',
    WaterDamage: 'waterDamage',
    Liability: 'liability',
    LossRatio: 'lossRatio'
};
exports.commercialSoftDeclineDisplayNames = {
    Habitability: 'Habitability issues',
    WaterDamage: 'Water damage',
    Liability: 'Other - General Liability'
};
/**
 * Defines the possible types of access roles a user might have in the system.
 * Must correspond exactly to the C# Swyfft.Services.Authentication.AccessRole.
 */
var AccessRole;
(function (AccessRole) {
    AccessRole[AccessRole["User"] = 0] = "User";
    AccessRole[AccessRole["Agent"] = 1] = "Agent";
    AccessRole[AccessRole["Admin"] = 2] = "Admin";
    AccessRole[AccessRole["IndependentAgent"] = 3] = "IndependentAgent";
    AccessRole[AccessRole["CaptiveAgent"] = 4] = "CaptiveAgent";
    AccessRole[AccessRole["AgencyAdmin"] = 5] = "AgencyAdmin";
})(AccessRole = exports.AccessRole || (exports.AccessRole = {}));
/**
 * Defines the possible ProductLines.
 * Must correspond exactly to the C# Swyfft.Common.Interfaces.ProductLine
 */
var ProductLine;
(function (ProductLine) {
    ProductLine[ProductLine["Unknown"] = 0] = "Unknown";
    ProductLine[ProductLine["Homeowner"] = 1] = "Homeowner";
    ProductLine[ProductLine["Commercial"] = 2] = "Commercial";
    ProductLine[ProductLine["Auto"] = 3] = "Auto";
})(ProductLine = exports.ProductLine || (exports.ProductLine = {}));
exports.statesByName = {
    'alabama': 'AL',
    'alaska': 'AK',
    'arizona': 'AZ',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'florida': 'FL',
    'georgia': 'GA',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY',
    'american samoa': 'AS',
    'district of columbia': 'DC',
    'federated states of micronesia': 'FM',
    'guam': 'GU',
    'marshall islands': 'MH',
    'northern mariana islands': 'MP',
    'palau': 'PW',
    'puerto rico': 'PR',
    'virgin islands': 'VI'
};
exports.statesByCode = {
    'al': 'Alabama',
    'ak': 'Alaska',
    'az': 'Arizona',
    'ar': 'Arkansas',
    'ca': 'California',
    'co': 'Colorado',
    'ct': 'Connecticut',
    'de': 'Delaware',
    'fl': 'Florida',
    'ga': 'Georgia',
    'hi': 'Hawaii',
    'id': 'Idaho',
    'il': 'Illinois',
    'in': 'Indiana',
    'ia': 'Iowa',
    'ks': 'Kansas',
    'ky': 'Kentucky',
    'la': 'Louisiana',
    'me': 'Maine',
    'md': 'Maryland',
    'ma': 'Massachusetts',
    'mi': 'Michigan',
    'mn': 'Minnesota',
    'ms': 'Mississippi',
    'mo': 'Missouri',
    'mt': 'Montana',
    'ne': 'Nebraska',
    'nv': 'Nevada',
    'nh': 'New Hampshire',
    'nj': 'New Jersey',
    'nm': 'New Mexico',
    'ny': 'New York',
    'nc': 'North Carolina',
    'nd': 'North Dakota',
    'oh': 'Ohio',
    'ok': 'Oklahoma',
    'or': 'Oregon',
    'pa': 'Pennsylvania',
    'ri': 'Rhode Island',
    'sc': 'South Carolina',
    'sd': 'South Dakota',
    'tn': 'Tennessee',
    'tx': 'Texas',
    'ut': 'Utah',
    'vt': 'Vermont',
    'va': 'Virginia',
    'wa': 'Washington',
    'wv': 'West Virginia',
    'wi': 'Wisconsin',
    'wy': 'Wyoming',
    'as': 'American Samoa',
    'dc': 'District of Columbia',
    'fm': 'Federated States of Micronesia',
    'gu': 'Guam',
    'mh': 'Marshall Islands',
    'mp': 'Northern Mariana Islands',
    'pw': 'Palau',
    'pr': 'Puerto Rico',
    'vi': 'Virgin Islands'
};
var states = this.statesByCode;
exports.statesByNameAndValue = Object.keys(states).map(function (code) {
    return {
        name: states[code],
        value: code.toUpperCase()
    };
});
exports.additionalInterestTypes = {
    'I': 'Additional Insured',
    'M': 'Mortgagee'
};
var aiTypes = this.additionalInterestTypes;
exports.additionalInterestTypesByNameAndValue = Object.keys(aiTypes).map(function (code) {
    return {
        name: aiTypes[code],
        value: code.toUpperCase()
    };
});
exports.elementWarnings = {
    'Harvey Damage': "We are not insuring homes with unrepaired damages that are the result of Hurricane or Tropical Storm Harvey and the related rain and flooding at this time. Once repairs are completed, the home should regain its eligibility.",
    'Nate Damage': "We are not insuring homes with unrepaired damages that are the result of Hurricane or Tropical Storm Nate and the related rain and flooding at this time. Once repairs are completed, the home should regain its eligibility."
};
var ElementTemplateTypes;
(function (ElementTemplateTypes) {
    ElementTemplateTypes.booleanType = 'b';
    ElementTemplateTypes.choiceType = 'c';
    ElementTemplateTypes.rangeType = 'r';
    ElementTemplateTypes.percentType = 'p';
    ElementTemplateTypes.indexType = 'i';
    ElementTemplateTypes.numberType = 'n';
    ElementTemplateTypes.emptyTemplate = 'emptyTemplate';
})(ElementTemplateTypes = exports.ElementTemplateTypes || (exports.ElementTemplateTypes = {}));
exports.commercialElementGroups = {
    policyEffectiveDate: 'PolicyEffectiveDate',
    propertyCoverages: 'Coverages',
    lossHistory: 'LossHistory',
    deductibleLimits: 'DeductibleAndLimits',
    buildingDetails: 'BuildingDetails',
    irpm: 'Irpm'
};
exports.commercialElementGroupDisplayNames = {
    PolicyEffectiveDate: 'Policy Effective Date',
    Coverages: 'Coverages',
    LossHistory: 'Loss History',
    DeductibleAndLimits: 'Deductible & Limits',
    BuildingDetails: 'Building Details',
    Irpm: 'IRPM'
};
exports.customCommercialElements = [
    'LossHistory',
    'PropertyBroadeningFormCoverage',
    'SewerBackupCoverage',
    'CrimeCoverage',
    'OrdinanceOrLawCoverage',
    'ExtendedPeriodOfIndemnityCoverage'
];
exports.commercialLossTypes = [
    'Fire',
    'Windstorm',
    'Hail',
    'Water damage',
    'Other property',
    'Habitability issues',
    'Slip and fall',
    'Other - General Liability'
];
exports.commercialCoveredRisks = [
    "Smoke detectors, emergency lighting, fire alarm, posted evacuation procedures, sprinklers",
    "Any pools are fully fenced with a self-latching gate, no diving board is present, rules are posted, life-saving equipment is present and depth markers are clearly visible",
    "Meets all local zoning codes",
    "Fire extinguishers per local ordinances",
    "Living units that discharge directly outside or two means of egress",
    "HVAC, plumbing, electrical and roofing systems are current and adequate",
    "Subcontractors to provide a certificate of insurance prior to commencing work on the property"
];
exports.commercialNonCoveredRisks = [
    "Railings with greater than 6 inch openings",
    "Fuses for over-current protection",
    "Aluminum wiring or pig-tailed wiring",
    "Wood shake roof",
    "Armed security",
    "Charcoal grilling permitted on balconies",
    "More than 30% student or senior housing",
    "Vacancy rate below 80%",
    "Any facility on the premises that involves the care or custody of children",
    "Medical, food or transportation services provided",
    "Federal Pacific Stab-lok circuit breakers",
    "Docks, marinas or boat slips"
];
exports.commercialCrimeDeductibleTypes = {
    EmployeeTheft: "Employee Theft",
    ForgeryOrAlteration: "Forgery Or Alteration",
    InsidePremisesTheft: "Inside the Premises - Theft Of Money And Securities",
    InsidePremisesRobbery: "Inside the Premises - Robbery or Safe Burglary",
    OutsidePremises: "Outside the Premises",
    ComputerFundsFraud: "Computer And Funds Transfer Fraud",
    CounterfeitMoney: "Money Orders And Counterfeit Money",
};
exports.commercialCrimeDeductibleAmounts = [
    1000,
    2500,
    5000,
    10000,
    25000
];
exports.commercialCrimeLimitAmounts = [
    1000,
    2500,
    5000,
    10000,
    25000,
    50000,
    100000
];
exports.commercialPropertyBroadeningForms = {
    CoverageA: "Coverage A",
    CoverageB: "Coverage B"
};
exports.commercialOrdinanceOrLawCoverageTypes = {
    CombinedCoverage: "combinedCoverage",
    SeparateCoverage: "separateCoverage"
};
exports.commercialValidationStates = {
    success: 'success',
    error: 'error'
};
/**
 * Constants representing agency names needed for UI boolean checks
 */
exports.agencyNames = {
    HubInternational: 'hub international',
};
/**
 * Constants representing the URLs of the various pages in the application
 */
exports.pages = {
    Root: '/',
    Home: '/home',
    Login: '/login',
    Quote: '/quote',
    Purchase: '/purchase',
    History: '/history',
    Map: '/map',
    Crm: '/crm',
    Claims: '/claims',
    ContactUs: '/contactus',
    GetQuote: '/home/getquote',
    Error: '/error',
    About: '/about',
    FAQs: '/faq',
    QuoteReprice: '/quotereprice',
    AgentFAQs: '/faq/agents',
    CommPreQuote: '/landing?commercial',
    CommQuoteModify: '/commercial/quoteModify'
};
//used when rendering an alternate element value in a collapsed element row on the HO UI. 
exports.elementChoiceStatus = {
    NotAvailable: 'N/A'
};
exports.reentries = {
    renew: 'renew',
    rewrite: 'rewrite',
    reprice: 'reprice'
};
exports.directions = {
    "NORTH": "N",
    "SOUTH": "S",
    "EAST": "E",
    "WEST": "W",
    "NORTHEAST": "NE",
    "SOUTHEAST": "SE",
    "NORTHWEST": "NW",
    "SOUTHWEST": "SW",
    "NE": "NE",
    "SE": "SE",
    "NW": "NW",
    "SW": "SW"
};
// ReSharper disable IdentifierTypo
// ReSharper disable StringLiteralTypo
exports.streetTypes = {
    "ALLEE": "ALY",
    "ALLEY": "ALY",
    "ALLY": "ALY",
    "ANEX": "ANX",
    "ANNEX": "ANX",
    "ANNX": "ANX",
    "ARCADE": "ARC",
    "AV": "AVE",
    "AVEN": "AVE",
    "AVENU": "AVE",
    "AVENUE": "AVE",
    "AVN": "AVE",
    "AVNUE": "AVE",
    "BAYOO": "BYU",
    "BOT": "BTM",
    "BOTTM": "BTM",
    "BOTTOM": "BTM",
    "BOUL": "BLVD",
    "BOULEVARD": "BLVD",
    "BOULV": "BLVD",
    "BRDGE": "BRG",
    "BRNCH": "BR",
    "BURGS": "BGS",
    "BYPA": "BYP",
    "BYPAS": "BYP",
    "BYPASS": "BYP",
    "BYPS": "BYP",
    "CAMP": "CP",
    "CANYN": "CYN",
    "CAPE": "CPE",
    "CAUSEWAY": "CSWY",
    "CAUSWAY": "CSWY",
    "CEN": "CTR",
    "CENT": "CTR",
    "CENTER": "CTR",
    "CENTERS": "CTRS",
    "CENTR": "CTR",
    "CENTRE": "CTR",
    "CIRC": "CIR",
    "CIRCL": "CIR",
    "CIRCLE": "CIR",
    "CIRCLES": "CIRS",
    "CK": "CRK",
    "CLIFF": "CLF",
    "CLIFFS": "CLFS",
    "CLUB": "CLB",
    "CMP": "CP",
    "CNTER": "CTR",
    "CNTR": "CTR",
    "CNYN": "CYN",
    "COMMON": "CMN",
    "CORNER": "COR",
    "CORNERS": "CORS",
    "COURSE": "CRSE",
    "COURT": "CT",
    "COURTS": "CTS",
    "COVE": "CV",
    "COVES": "CVS",
    "CR": "CRK",
    "CRCL": "CIR",
    "CRCLE": "CIR",
    "CRECENT": "CRES",
    "CREEK": "CRK",
    "CRESCENT": "CRES",
    "CRESENT": "CRES",
    "CREST": "CRST",
    "CROSSING": "XING",
    "CROSSROAD": "XRD",
    "CRSCNT": "CRES",
    "CRSENT": "CRES",
    "CRSNT": "CRES",
    "CRSSING": "XING",
    "CRSSNG": "XING",
    "CRT": "CT",
    "CURVE": "CURV",
    "DALE": "DL",
    "DAM": "DM",
    "DIV": "DV",
    "DIVIDE": "DV",
    "DRIV": "DR",
    "DRIVE": "DR",
    "DRIVES": "DRS",
    "DRV": "DR",
    "DVD": "DV",
    "ESTATE": "EST",
    "ESTATES": "ESTS",
    "EXP": "EXPY",
    "EXPR": "EXPY",
    "EXPRESS": "EXPY",
    "EXPRESSWAY": "EXPY",
    "EXPW": "EXPY",
    "EXTENSION": "EXT",
    "EXTENSIONS": "EXTS",
    "EXTN": "EXT",
    "EXTNSN": "EXT",
    "FLAT": "FLT",
    "FLATS": "FLTS",
    "FORG": "FRG",
    "FREEWAY": "FWY",
    "FREEWY": "FWY",
    "FRRY": "FRY",
    "FRT": "FT",
    "FRWAY": "FWY",
    "FRWY": "FWY",
    "GATEWY": "GTWY",
    "GATWAY": "GTWY",
    "GLEN": "GLN",
    "GRDEN": "GDN",
    "GRDN": "GDN",
    "GRDNS": "GDNS",
    "GROV": "GRV",
    "GTWAY": "GTWY",
    "HARB": "HBR",
    "HARBR": "HBR",
    "HAVN": "HVN",
    "HGTS": "HTS",
    "HIGHWAY": "HWY",
    "HIGHWY": "HWY",
    "HIWAY": "HWY",
    "HIWY": "HWY",
    "HLLW": "HOLW",
    "HOLWS": "HOLW",
    "HRBOR": "HBR",
    "HT": "HTS",
    "HWAY": "HWY",
    "INLET": "INLT",
    "ISLND": "IS",
    "ISLNDS": "ISS",
    "JCTION": "JCT",
    "JCTN": "JCT",
    "JCTNS": "JCTS",
    "JUNCTN": "JCT",
    "JUNCTON": "JCT",
    "KEY": "KY",
    "KEYS": "KYS",
    "KNOL": "KNL",
    "KNOLL": "KNL",
    "KNOLLS": "KNLS",
    "LA": "LN",
    "LANE": "LN",
    "LDGE": "LDG",
    "LIGHT": "LGT",
    "LIGHTS": "LGTS",
    "LNDNG": "LNDG",
    "LOCKS": "LCKS",
    "LODG": "LDG",
    "LODGE": "LDG",
    "LOOPS": "LOOP",
    "MEDOWS": "MDWS",
    "MISSN": "MSN",
    "MNT": "MT",
    "MNTAIN": "MTN",
    "MNTN": "MTN",
    "MNTNS": "MTNS",
    "MOTORWAY": "MTWY",
    "MOUNT": "MT",
    "MOUNTAIN": "MTN",
    "MOUNTAINS": "MTNS",
    "MOUNTIN": "MTN",
    "MSSN": "MSN",
    "MTIN": "MTN",
    "NECK": "NCK",
    "OVL": "OVAL",
    "PARKS": "PARK",
    "PARKWAY": "PKWY",
    "PARKWAYS": "PKWY",
    "PARKWY": "PKWY",
    "PINE": "PNE",
    "PINES": "PNES",
    "PK": "PARK",
    "PKWAY": "PKWY",
    "PKWYS": "PKWY",
    "PKY": "PKWY",
    "PLACE": "PL",
    "PLAINES": "PLNS",
    "PLAINS": "PLNS",
    "PLAZA": "PLZ",
    "PLZA": "PLZ",
    "POINT": "PT",
    "POINTS": "PTS",
    "PRK": "PARK",
    "PRR": "PR",
    "RAD": "RADL",
    "RADIAL": "RADL",
    "RADIEL": "RADL",
    "RANCHES": "RNCH",
    "RAPID": "RPD",
    "RAPIDS": "RPDS",
    "RDGE": "RDG",
    "REST": "RST",
    "RIDGE": "RDG",
    "RIDGES": "RDGS",
    "RIVR": "RIV",
    "RNCHS": "RNCH",
    "ROAD": "RD",
    "ROADS": "RDS",
    "ROUTE": "RTE",
    "RVR": "RIV",
    "SHOAL": "SHL",
    "SHOALS": "SHLS",
    "SHOAR": "SHR",
    "SHOARS": "SHRS",
    "SKYWAY": "SKWY",
    "SPNG": "SPG",
    "SPNGS": "SPGS",
    "SPRNG": "SPG",
    "SPRNGS": "SPGS",
    "SPURS": "SPUR",
    "SQR": "SQ",
    "SQRE": "SQ",
    "SQRS": "SQS",
    "SQU": "SQ",
    "SQUARE": "SQ",
    "SQUARES": "SQS",
    "STATION": "STA",
    "STATN": "STA",
    "STN": "STA",
    "STR": "ST",
    "STRAV": "STRA",
    "STRAVE": "STRA",
    "STRAVEN": "STRA",
    "STRAVENUE": "STRA",
    "STRAVN": "STRA",
    "STREET": "ST",
    "STREETS": "STS",
    "STREME": "STRM",
    "STRT": "ST",
    "STRVN": "STRA",
    "STRVNUE": "STRA",
    "SUMIT": "SMT",
    "SUMITT": "SMT",
    // "TERR": "TER",
    // "TERRACE": "TER",
    "THROUGHWAY": "TRWY",
    "TPK": "TPKE",
    "TR": "TRL",
    "TRACE": "TRCE",
    "TRACES": "TRCE",
    "TRACK": "TRAK",
    "TRACKS": "TRAK",
    "TRAFFICWAY": "TRFY",
    "TRK": "TRAK",
    "TRKS": "TRAK",
    "TRLS": "TRL",
    "TRNPK": "TPKE",
    "TRPK": "TPKE",
    "TUNEL": "TUNL",
    "TUNLS": "TUNL",
    "TUNNL": "TUNL",
    "TURNPIKE": "TPKE",
    "TURNPK": "TPKE",
    "UNDERPASS": "UPAS",
    "VALLY": "VLY",
    "VDCT": "VIA",
    "VIADCT": "VIA",
    "VIADUCT": "VIA",
    "VIEW": "VW",
    "VIEWS": "VWS",
    "VILL": "VLG",
    "VILLAG": "VLG",
    "VILLE": "VL",
    "VILLG": "VLG",
    "VILLIAGE": "VLG",
    "VIST": "VIS",
    "VLLY": "VLY",
    "VST": "VIS",
    "VSTA": "VIS",
    "WALKS": "WALK",
    "WELL": "WL",
    "WELLS": "WLS",
    "WY": "WAY"
};
// Same as Api\Exceptions\SwyfftErrorCodes.cs
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["UnauthorizedLogin"] = "105";
    ErrorCodes["LoginInvalid"] = "110";
    ErrorCodes["CoverageAreaUnknown"] = "150";
    ErrorCodes["PropertyDataUnknown"] = "250";
    ErrorCodes["ElementUnknown"] = "350";
    ErrorCodes["QuoteNotFound"] = "400";
    ErrorCodes["QuoteUnauthorized"] = "405";
    ErrorCodes["QuoteInvalidData"] = "410";
    ErrorCodes["PropertyInvalid"] = "412";
    ErrorCodes["PropertyMissingPreciseLocation"] = "413";
    ErrorCodes["PropertyNotCovered"] = "415";
    ErrorCodes["QuoteInvalidLandUseCode"] = "416";
    ErrorCodes["QuoteAlreadyExists"] = "420";
    ErrorCodes["QuoteAlreadyPurchased"] = "425";
    ErrorCodes["QuotePropertyDataInsufficient"] = "430";
    ErrorCodes["QuoteUnknown"] = "450";
    ErrorCodes["QuoteReplacementCostInvalid"] = "460";
    ErrorCodes["QuoteCountyIsDisabled"] = "470";
    ErrorCodes["QuoteHasErrors"] = "480";
    ErrorCodes["QuoteForNonSingleFamilyResidence"] = "481";
    ErrorCodes["CrmNotFound"] = "504";
    ErrorCodes["Unauthorized"] = "505";
    ErrorCodes["CrmInvalid"] = "510";
    ErrorCodes["CrmUnknown"] = "550";
    ErrorCodes["PaymentQuoteNotFound"] = "600";
    ErrorCodes["PaymentInvalid"] = "610";
    ErrorCodes["PaymentUnknown"] = "650";
    ErrorCodes["BindUnknown"] = "750";
    ErrorCodes["GeneralUnknown"] = "850";
    ErrorCodes["ImsGeneralError"] = "900";
    ErrorCodes["ImsErrorUpdatingBankInfo"] = "910";
    ErrorCodes["ImsQuoteNotFound"] = "920";
    ErrorCodes["BadFaxNumber"] = "1000";
    ErrorCodes["TaskAlreadyCompleted"] = "1100";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Tab"] = 9] = "Tab";
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
    KeyCodes[KeyCodes["Up"] = 38] = "Up";
    KeyCodes[KeyCodes["Down"] = 40] = "Down";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages.noQuote = "NoQuote";
    ErrorMessages.authFailed = "AuthFailed";
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes.ok = "200";
    HttpStatusCodes.authenticationFailed = "401";
    HttpStatusCodes.badGateway = "502";
    HttpStatusCodes.serverUnavailable = "503";
})(HttpStatusCodes = exports.HttpStatusCodes || (exports.HttpStatusCodes = {}));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = __webpack_require__(9);
var Storage = __webpack_require__(10);
var Constants = __webpack_require__(7);
//holds child element values 
exports.childArray = [];
/**
 * The viewmodel representing a single grouping of quote elements
 */
var ElementGroupVm = /** @class */ (function () {
    function ElementGroupVm(quoteVm) {
        this.quoteVm = quoteVm;
        this.order = ko.observable(0);
        this.name = ko.observable('');
        this.elements = ko.observableArray();
        this.rc = ko.observable(0);
    }
    ElementGroupVm.prototype.load = function (name, order, elements, rc) {
        this.name(name || '');
        this.order(order);
        this.rc(rc);
        this.elementVmLoader(elements);
        this.childElementHandler(exports.childArray);
    };
    ElementGroupVm.prototype.elementVmLoader = function (elements) {
        var _this = this;
        // Upsert the elements. NB that this assumes no element will ever be removed.
        // HarveySafe and NateSafe should only show in the confirmation modal.
        Enumerable.from(elements)
            .where(function (el) { return el.ElementName !== Constants.ElementNames.TXHarveySafe &&
            el.ElementName !== Constants.ElementNames.ALNateSafe &&
            (el.Viewable || el.Editable || false); })
            .forEach(function (el) {
            var vm = Enumerable.from(_this.elements())
                .firstOrDefault(function (x) { return x.name() === el.ElementName; });
            if (!vm) {
                vm = new ElementVm(_this.quoteVm);
                _this.elements.push(vm);
            }
            vm.load(_this.needsRcHandler(el, _this.rc()));
            //check for parent element, set visible conditional if found
            _this.parentElementHandler(vm);
            return vm;
        });
    };
    ElementGroupVm.prototype.parentElementHandler = function (vm) {
        if (vm.parentElementName()) {
            exports.childArray.push(vm);
        }
    };
    //in case we need to use the rc value for subsequent element choice sorting at the element level (for example, when a deductible has % and int choices)
    ElementGroupVm.prototype.needsRcHandler = function (el, rc) {
        if (el.ElementName === Constants.ElementNames.windLossCostDeductible || el.ElementName === Constants.ElementNames.deductible) {
            el.replacementCost = rc;
        }
        return el;
    };
    ElementGroupVm.prototype.childElementHandler = function (childArray) {
        var _this = this;
        Enumerable.from(childArray)
            .forEach(function (element) {
            var parentElement = _this.elements().filter(function (val) { return val.name() === element.parentElementName(); })[0];
            if (!parentElement)
                return;
            _this.childDisplayConditionsHandler(element, parentElement);
        });
    };
    ElementGroupVm.prototype.childDisplayConditionsHandler = function (childElement, parentElement) {
        var conditions = JSON.parse(childElement.showIfParentElementValues());
        //compares condition to parent value, returns after first match.
        var conditionsCheck = conditions.some(function (condition) { return parentElement.value() === condition.toString(); });
        (conditionsCheck) ? childElement.childElementDisplay(true) : childElement.childElementDisplay(false);
    };
    return ElementGroupVm;
}());
exports.ElementGroupVm = ElementGroupVm;
function agentViewRender(isAgent) {
    if (isAgent) {
        //HG 12/12/16: ID selectors are usually better, but in this context class selectors allow for correct functionality.
        $(".expand-element.modify-li-expanded-ly").slideDown();
    }
}
exports.agentViewRender = agentViewRender;
/**
 * The viewmodel representing a single quote element (of any type).
 */
var ElementVm = /** @class */ (function () {
    function ElementVm(quoteVm) {
        var _this = this;
        this.quoteVm = quoteVm;
        this.isLoading = false;
        this.id = ko.observable();
        this.name = ko.observable('');
        this.parsedValue = ko.observable();
        /**
         * The element's visible label.
         */
        this.display = ko.observable('');
        this.showInfoAgents = ko.observable(false);
        //set to true whenever a related non-fatal error occurs
        this.showPremiumErrorIcon = ko.observable(false);
        this.showQuoteWarningIcon = ko.observable(false);
        this.isEditable = ko.observable(false);
        this.isViewable = ko.observable(false);
        this.isAgent = Storage.hasAuth();
        this.displayFormat = ko.observable('');
        this.mainInputFocus = ko.observable(false);
        this.initialValue = ko.observable('');
        this.minValue = ko.observable(0);
        this.maxValue = ko.observable(100);
        this.targetValue = ko.observable('');
        this.step = ko.observable(1);
        this.choices = ko.observableArray();
        this.info = ko.observable('');
        this.warning = ko.observable('');
        this.template = ko.observable(Constants.ElementTemplateTypes.emptyTemplate);
        this.defaultValue = ko.observable('');
        this.replacementCost = ko.observable(0);
        this.value = ko.observable('').extend({
            required: { params: true, onlyIf: function () { return _this.el && _this.el.ElementType === Constants.ElementTemplateTypes.numberType; } },
            max: { params: this.maxValue, onlyIf: function () { return _this.el && _this.el.ElementType === Constants.ElementTemplateTypes.numberType; } },
            min: { params: this.minValue, onlyIf: function () { return _this.el && _this.el.ElementType === Constants.ElementTemplateTypes.numberType; } }
        });
        this.isDefaultMin = ko.computed(function () { Util.matches(_this.defaultValue(), _this.minValue()); });
        this.isDefaultMax = ko.computed(function () { Util.matches(_this.defaultValue(), _this.maxValue()); });
        this.targetString = ko.computed(function () { return _this.targetValue() === 'true' ? 'YES' : 'NO'; });
        this.parentElementName = ko.observable('');
        //for future use, once we have multiple display conditions outside of simple true/false
        this.parentElementValue = ko.observable('');
        this.showIfParentElementValues = ko.observable('');
        this.childElementDisplay = ko.observable(false);
        /**
         * Used in the Grade slider, to calculate the location for the tooltip's pointer.
         * I don't really care for so much UI logic leaking into the ViewModel, but I can't think of any other way to do it.
         * See http://stackoverflow.com/questions/12149809/bind-text-of-the-content-css-property-with-knockoutjs-on-the-pseudo-css-selector
         */
        this.tooltipAfterStyle = ko.computed(function () {
            var value = parseFloat(_this.value());
            var max = _this.maxValue();
            var min = _this.minValue();
            if (typeof max !== 'number')
                return '';
            if (typeof min !== 'number')
                return '';
            var range = max - min;
            var offset = value - min;
            var left = (offset / range) * 100;
            if (left < 1)
                left = 1;
            if (left > 99)
                left = 99;
            return "#gradeTooltip:after{left: " + left + "%;}";
        });
        // NB: this needs to come after all the definition of all the fields to be validated
        this.errors = ko.validation.group(this);
        this.isDirty = ko.computed(function () { return _this.value() !== undefined && !Util.matches(_this.value(), _this.initialValue()); });
        this.isValid = ko.computed(function () { return _this.errors().length === 0; });
        // We have to hoist this up here into the constructor so that the "this" references get handled correctly
        // when being called from the slider ko bindings. NB that this can get called multiple times, both
        // while it's loading, and during an update, so we need to have a way to make sure that we don't get in a loop, i.e., we don't want to be 
        // updating the server while we're loading.
        this.handleValueChange = function () {
            if (_this.isLoading)
                return;
            // Call this after a timeout, to allow the validations to finish
            setTimeout(function () {
                if (!_this.isValid()) {
                    _this.errors().forEach(function (e) { return console.log(e); });
                    return;
                }
                if (Util.matches(_this.value(), _this.el.Value))
                    return;
                _this.quoteVm.valueChange(_this.name(), _this.value());
            }, 1);
        };
        // ks 3/9/16 - This is a hack and I don't like it, but I can't come up with any other way
        // to make it work that way that I like.
        this.value.subscribe(function () {
            if (_this.el.ElementType === Constants.ElementTemplateTypes.numberType) {
                _this.handleValueChange();
            }
        });
    }
    ElementVm.prototype.load = function (el) {
        this.isLoading = true;
        this.el = el;
        this.id(el.OrderBy);
        this.name(el.ElementName);
        this.display(el.ElementDisplay || '');
        this.isEditable(el.Editable || false);
        this.isViewable(el.Viewable || false);
        this.minValue(el.MinValue);
        this.maxValue(el.MaxValue);
        this.targetValue(el.CorrectValue ? 'true' : 'false');
        this.step(el.Increment);
        this.defaultValue(el.DefaultValue || '');
        this.info(getInfo(el.ElementName));
        this.warning(getWarning(el));
        this.initialValue(el.Value || '');
        this.parentElementName(el.ParentElementName || '');
        this.showIfParentElementValues(el.ShowIfParentElementValues || '');
        this.childElementDisplay(this.getChildDisplay());
        //for future use, once we have multiple display conditions outside of simple true/false
        this.parentElementValue(el.ParentElementValue || '');
        this.displayFormat(el.DisplayFormat || '');
        this.template(getTemplate(el));
        this.replacementCost(el.replacementCost);
        // Upsert the choices. 
        // NB that this assumes no choice will ever be removed during the lifetime of this page.
        if (el.Choices) {
            this.upsertChoices(el.Choices);
        }
        // ks 3/16/17 - We used to wrap this in a setTimeout() as doing so fixed certain problems 
        // that may have been related to weird interactions between different libraries.
        // However, it also created a bunch of other complications in the code.
        // We aren't currently using the feature that used to cause the trouble, so I'm removing the setTimeout,
        // with the hope that it'll allow us to clean up some of the nasty, side-effect-ridden code that resulted.
        this.isLoading = true;
        if (el.ElementType === Constants.ElementTemplateTypes.booleanType) {
            this.value(Util.isTrue(el.Value) ? 'true' : 'false');
        }
        else {
            this.value(el.Value || '');
        }
        this.parsedValue(el.Value || '');
        this.isLoading = false;
    };
    ElementVm.prototype.getChildDisplay = function () {
        if (!this.parentElementName().length) {
            return true;
        }
        else {
            return false;
        }
    };
    ElementVm.prototype.premiumErrorIconDisplayHandler = function (condition) {
        (condition) ? this.showPremiumErrorIcon(true) : this.showPremiumErrorIcon(false);
    };
    ElementVm.prototype.quoteWarningIconDisplayHandler = function (condition) {
        (condition) ? this.showQuoteWarningIcon(true) : this.showQuoteWarningIcon(false);
    };
    ElementVm.prototype.upsertChoices = function (choices) {
        var _this = this;
        var index = 0;
        this.choices([]);
        choices
            .forEach(function (ch) {
            var choiceVm = Enumerable.from(_this.choices()).firstOrDefault(function (vm) { return vm.value() === ch.Value; });
            if (!choiceVm) {
                choiceVm = new ChoiceVm(_this);
                _this.choices.push(choiceVm);
            }
            choiceVm.load(ch, _this.el, index);
            index++;
        });
        this.choices(this.sortWindHailChoices(this.choices()));
    };
    //If primary deductible choices contain percentage and integer values, sort them so that integers show up first (eg. 1000, 2000, 3%, 5%)
    ElementVm.prototype.sortWindHailChoices = function (elementChoices) {
        var _this = this;
        var percentageArray = elementChoices.filter(function (choice) { return parseFloat(choice.value()) < 1; });
        var integerArray = elementChoices.filter(function (choice) { return parseFloat(choice.value()) >= 1; });
        if (percentageArray.length > 0) {
            elementChoices = integerArray.concat(percentageArray);
            elementChoices.sort(function (a, b) {
                return _this.normalizePercentageChoices(a) - _this.normalizePercentageChoices(b);
            });
        }
        return elementChoices;
    };
    ElementVm.prototype.normalizePercentageChoices = function (choice) {
        var numericValue = parseFloat(choice.value());
        if (numericValue < 1 && this.replacementCost()) {
            var rCElement = this.replacementCost();
            return (numericValue * rCElement);
        }
        else {
            return numericValue;
        }
    };
    /**
     * Call this method from boolean or choice element labels to set the value.
     * For some reason, the standard checked binding doesn't seem to work
     * reliably in certain situations.
     */
    ElementVm.prototype.setValue = function (value) {
        if (!this.isEditable())
            return;
        this.value(value);
        if (this.isLoading)
            return;
        this.quoteVm.valueChange(this.name(), value);
    };
    ElementVm.prototype.toggleAgentInfo = function () {
        this.showInfoAgents(!this.showInfoAgents());
    };
    return ElementVm;
}());
exports.ElementVm = ElementVm;
/**
 * The viewmodel representing a single quote choice
 */
var ChoiceVm = /** @class */ (function () {
    function ChoiceVm(element) {
        var _this = this;
        this.element = element;
        this.name = ko.observable('');
        this.value = ko.observable('');
        this.imageUrl = ko.observable('');
        this.index = ko.observable(0);
        this.count = ko.observable(0);
        this.defaultValue = ko.observable('');
        this.showOnPrimary = ko.observable(false);
        /**
         * Used to determine whether to left justify the label on the "Grade" slider
         */
        this.isFirst = ko.computed(function () { return _this.index() === 0; });
        /**
         * Used to determine whether to right justify the label on the "Grade" slider
         */
        this.isLast = ko.computed(function () { return _this.index() === _this.count() - 1; });
        /**
         * Used to determine whether to apply the "defaultValue" style to the label on the "Grade" slider
         */
        this.isDefault = ko.computed(function () { return Util.matches(_this.value(), _this.defaultValue()); });
        /**
         * Used to determine if the "jcf-label-active" class is applied to this choice.
         */
        this.isSelected = ko.observable(false);
        this.isSelectedModal = ko.computed(function () { return _this.element.value() !== undefined && Util.matches(_this.value(), _this.element.value()); });
    }
    ChoiceVm.prototype.load = function (ch, el, index) {
        this.name(ch.Name || '');
        this.value(ch.Value || '');
        this.imageUrl(ch.ImageUrl || '');
        this.index(index);
        this.count((el.Choices || []).length);
        this.defaultValue(el.DefaultValue || '');
        this.showOnPrimary(ch.ShowOnPrimary || false);
        this.isSelected(Util.matches(this.value(), el.Value));
    };
    return ChoiceVm;
}());
exports.ChoiceVm = ChoiceVm;
/**
 * Select the correct template for a given QuoteElement
 */
function getTemplate(el) {
    if (el.ElementName === Constants.ElementNames.grade)
        return 'gradeTemplate';
    if (el.ElementName === Constants.ElementNames.replacementCost)
        return 'replacementCostTemplate';
    switch (el.ElementType) {
        case Constants.ElementTemplateTypes.booleanType:
            return 'booleanElementTemplate';
        case Constants.ElementTemplateTypes.choiceType:
            return 'choiceElementTemplate';
        case Constants.ElementTemplateTypes.rangeType:
        case Constants.ElementTemplateTypes.percentType:
            return 'rangeElementTemplate';
        case Constants.ElementTemplateTypes.indexType:
            return 'indexElementTemplate';
        case Constants.ElementTemplateTypes.numberType:
            return 'numberElementTemplate';
        default:
            return Constants.ElementTemplateTypes.emptyTemplate;
    }
}
//Front end workaround for MA liquid fuel elements, utilized to return correct element description until we have a more long-term solution in place
function escapedFuelOrderByCheck(el) {
    if (el.ElementType !== "b")
        return false;
    if (el.ElementName !== Constants.ElementNames.EscapedLiquidFuelLeadLiabilityCoverage)
        return false;
    //We know that MA will (currently) have an order by of 51
    if (el.OrderBy && el.OrderBy === 51)
        return true;
    return false;
}
exports.escapedFuelOrderByCheck = escapedFuelOrderByCheck;
function liquidFuelChoicesCheck(el) {
    if (el.ElementType !== "c")
        return false;
    if (el.ElementName !== Constants.ElementNames.LiquidFuelRiskClass)
        return false;
    //We know that MA will atm always have 2 choices
    if (el.Choices && el.Choices.length === 2)
        return true;
    return false;
}
exports.liquidFuelChoicesCheck = liquidFuelChoicesCheck;
function getInfo(elementName) {
    var infoInstance = Storage.getElementDescriptions();
    return infoInstance[elementName] || '';
}
function getWarning(el) {
    return Constants.elementWarnings[el.ElementDisplay || ''] || '';
}


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(50);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = __webpack_require__(3);
var Storage = __webpack_require__(10);
var Util = __webpack_require__(9);
var Constants = __webpack_require__(7);
// todo: Get rid of this since it's evil. We shouldn't need all this DOM manipulation.
// Initialize the Knockout Validations
ko.validation.init({
    registerExtenders: true,
    messagesOnModified: true,
    insertMessages: true,
    parseInputAttributes: true,
    messageTemplate: 'errorTemplate',
    decorateInputElement: true
}, true);
ko.validation.rules.pattern.message = 'Invalid.';
exports.isHamburgerMenuOpen = false;
var scrollPosition, isSafari = false;
var agentName;
/**
 * Initialize the common page elements
 */
function init() {
    initBackgroundResize();
    var agent = Util.getQueryVariable("agent");
    if (!Util.isNullOrEmpty(agent)) {
        Storage.setReferringAgent(agent);
    }
    $('#header:not(.header-component-cp) #expand-navbar')
        .on('click', function () {
        $('header').toggleClass('header-nav-visible');
        $('.navbar.navbar-default').toggleClass('header-nav-visible');
        $('.navbar-collapse.collapse').css('background-color', 'black');
    });
    var url = window.location.toString().toLowerCase();
    var isHighlight = false;
    // Add the highlight class to the menu entry representing the current page
    $("#header:not(.header-component-cp) #quote-menubar ul li a").each(function () {
        var anchor = this;
        var val = url.indexOf(anchor.href.toLowerCase());
        if (val > -1) {
            $("li a.highlight").removeClass("highlight");
            $(anchor).addClass("highlight");
            isHighlight = true;
        }
    });
    // If we don't have a quote id in local storage, don't show the quote menu option.
    var localQuoteId = Storage.getQuoteId();
    if (!localQuoteId) {
        $('#header:not(.header-component-cp) #quoteMenuItem').hide();
    }
    // If none of the links point to the current page, 
    // but it's one of several pages within the Quote flow,
    // highlight the Quote menu item.
    if (!isHighlight) {
        if (url.indexOf(Constants.pages.Purchase) > -1 ||
            url.indexOf(Constants.pages.Crm) > -1 ||
            url.indexOf(Constants.pages.Root) > -1) {
            $('#header:not(.header-component-cp) ul.nav li').find('a').each(function () {
                var anchor = this;
                if (anchor.href.toLowerCase() === Constants.pages.Quote) {
                    $(anchor).addClass('highlight');
                }
            });
        }
    }
    //set navigator useragent in css
    var navigatorUserAgent = document.documentElement;
    navigatorUserAgent.setAttribute('data-useragent', navigator.userAgent);
    navigatorUserAgent.setAttribute('data-platform', navigator.platform);
    var userAgent = navigator.userAgent.toLowerCase(); // detect the user agent
    var iosDevices = userAgent.match(/(iphone|ipod|ipad)/) ? true : false; //check if the devices are ios devices
    //The code to remove blinking cursor in IE
    if (userAgent.indexOf("msie") > -1 || userAgent.indexOf("trident/index.html") > -1) {
        if (document.documentMode && document.documentMode < 12) {
            $(document).on("focus", ":input", function (event) {
                $(window).one("scroll", function () {
                    event.target.blur();
                });
            });
        }
    }
    if (navigator.userAgent.indexOf('Safari') !== -1) {
        isSafari = true;
    }
    var browserVersion = 0;
    if (location.pathname === Constants.pages.Root || location.pathname.indexOf(Constants.pages.Home) !== -1) {
        if (iosDevices) {
            browserVersion = parseInt(navigator.userAgent.substr(navigator.userAgent.lastIndexOf('AppleWebKit/index.html') + 12, 3));
        }
        else if (isSafari) {
            browserVersion = parseInt(navigator.userAgent.substr(navigator.userAgent.lastIndexOf('Safari/index.html') + 7, 3));
        }
        if (browserVersion < 600) {
            $('#home .form-quote #btnSubmit').css({
                'margin': '0 1px 0 0'
            });
        }
        if (Storage.hasAuth()) {
            $('#header:not(.header-component-cp)').css({
                'top': '0'
            });
            $("#header-without-top-navbar").hide();
            // removeAllSessionsExceptAgent();
        }
        else {
            $("#header-without-top-navbar").show();
            initFixedHeader();
            //removeAllSessions();
        }
        $(window).scroll(function () {
            var scrollTop = Util.asNumber($(window).scrollTop());
            scrollPosition = scrollTop;
        });
    }
    else {
        $('#header:not(.header-component-cp)').css({
            'top': '0'
        });
        $("#header-without-top-navbar").hide();
    }
    adjustUiForAgent();
    $('.nav li a#quote').click(function () {
        var addressKey = Storage.getAddressKey();
        if (addressKey) {
            $(this).attr('href', '/quote/index/' + addressKey);
        }
    });
    // $('.nav li.agent-logout a').click(() => {
    $('.agent-logout a').click(function () {
        Common.logout().then(function () {
            Common.navigate(Constants.pages.Root);
        });
    });
    $('#bs-example-navbar-collapse-1').on('hidden.bs.collapse', function () {
        exports.isHamburgerMenuOpen = false;
        $('#header:not(.header-component-cp) div:first').addClass('container');
        $('#header:not(.header-component-cp) .navbar-header').css('background', 'transparent');
        $('#header:not(.header-component-cp) .navbar-header div:first').removeClass('container');
        $('#header:not(.header-component-cp) .navbar-header div:last').css('position', 'static');
        unlockScrollPosition();
        if (location.pathname === "/" || location.pathname === "/home" || location.pathname.indexOf("home/index.html") !== -1) {
            var section = $("#headerLogo");
            var offset = section.offset();
            if (offset) {
                var windowOffset = (offset.top + Util.asNumber(section.height())) - scrollPosition;
                if (windowOffset <= 0 || isNaN(windowOffset)) {
                    showTopNavBar();
                }
                else {
                    hideTopNavBar();
                    ;
                }
            }
        }
        $('#swyfft-logo').css("visibility", "visible");
        if (Storage.hasAuth()) {
            $('#user-details').css("visibility", "visible");
        }
        else {
            $('#customer-care-call-details').css("visibility", "visible");
        }
    });
    $('html, body').on('touchmove mousewheel', function (e) {
        if (exports.isHamburgerMenuOpen) {
            //prevent native touch activity like scrolling
            e.preventDefault();
        }
    });
    $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
        exports.isHamburgerMenuOpen = true;
        $('#header:not(.header-component-cp)').addClass('active-nav');
        $('#header:not(.header-component-cp) div:first').removeClass('container');
        $('#header:not(.header-component-cp) .navbar-header').css('background', '#000');
        $('#header:not(.header-component-cp) .navbar-header div:first').addClass('container');
        $('#header:not(.header-component-cp) .navbar-header div:last').css('position', 'relative');
        $('#swyfft-logo').css("visibility", "collapse");
        if (Storage.hasAuth()) {
            $('#user-details').css("visibility", "collapse");
        }
        else {
            $('#customer-care-call-details').css("visibility", "collapse");
        }
        lockScrollPosition();
    });
    $(document)
        .on('focus', 'input', function () {
        if (iosDevices) {
            $("#header").css("position", "absolute");
            if (Storage.hasAuth()) {
                $('#quote-menubar').css('position', 'absolute');
            }
        }
    })
        .on('blur', 'input', function () {
        if (iosDevices) {
            $("#header").css("position", "fixed");
            if (Storage.hasAuth()) {
                $('#quote-menubar').css('position', 'fixed');
            }
        }
    });
}
exports.init = init;
//Prevents browser to load persisted data on back button click
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};
// stretch background to fill blocks
function initBackgroundResize() {
    jQuery('.bg-stretch').each(function () {
        imageStretcher.add({
            container: this,
            image: 'img'
        });
    });
}
exports.initBackgroundResize = initBackgroundResize;
//checks if the browser is safari or not in ipad
var isSafariIniPad = function () {
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('CriOS') === -1) {
        return true;
    }
    return false;
};
//checks if ipad safari version 8
var isiPadSafariVersion8 = function () {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('iPad') > -1 && userAgent.indexOf('Version/8.0') > -1 && isSafariIniPad()) {
        return true;
    }
    return false;
};
/*
 * Image Stretch module
 */
var imageStretcher = {
    getDimensions: function (data) {
        // calculate element coords to fit in mask
        var ratio = data.imageRatio || (data.imageWidth / data.imageHeight);
        var slideWidth = data.maskWidth;
        var slideHeight = slideWidth / ratio;
        if (slideHeight < data.maskHeight) {
            slideHeight = data.maskHeight;
            slideWidth = slideHeight * ratio;
        }
        return {
            width: slideWidth,
            height: slideHeight,
            top: (data.maskHeight - slideHeight) / 2,
            left: (data.maskWidth - slideWidth) / 2
        };
    },
    getRatio: function (image) {
        if (image.prop('naturalWidth')) {
            return image.prop('naturalWidth') / image.prop('naturalHeight');
        }
        else {
            var img = new Image();
            img.src = image.prop('src');
            return img.width / img.height;
        }
    },
    imageLoaded: function (image, callback) {
        var _this = this;
        var loadHandler = function () {
            callback.call(_this);
        };
        if (image.prop('complete')) {
            loadHandler();
        }
        else {
            image.one('load', loadHandler);
        }
    },
    resizeHandler: function () {
        var _this = this;
        jQuery.each(this.imgList, function (index, item) {
            if (item.image.prop('complete')) {
                _this.resizeImage(item.image, item.container);
            }
        });
    },
    resizeImage: function (image, container) {
        this.imageLoaded(image, function () {
            var styles = this.getDimensions({
                imageRatio: this.getRatio(image),
                maskWidth: container.width(),
                maskHeight: container.height()
            });
            image.css({
                width: styles.width,
                height: styles.height,
                marginTop: styles.top,
                marginLeft: styles.left
            });
        });
    },
    add: function (options) {
        var container = jQuery(options.container ? options.container : window);
        var image = typeof options.image === 'string' ? container.find(options.image) : jQuery(options.image); // resize image
        this.resizeImage(image, container);
        // add resize handler once if needed
        if (!this.win) {
            this.resizeHandler = jQuery.proxy(this.resizeHandler, this);
            this.imgList = [];
            this.win = jQuery(window);
            this.win.on('resize orientationchange', this.resizeHandler);
        }
        // store item in collection
        this.imgList.push({
            container: container,
            image: image
        });
    }
};
/*
 * Window Height CSS rules
 */
var windowWidth, currentWindowHeight;
;
((function () {
    var styleSheet;
    var styleRules;
    var getWindowHeight = function () { return (window.innerHeight || document.documentElement.clientHeight); };
    var getWindowWidth = function () { return (window.innerWidth || document.documentElement.clientWidth); };
    var getNewWidthHeightOfScreen = function () {
        windowWidth = getWindowWidth();
        currentWindowHeight = getWindowHeight(),
            styleRules = styleSheet.cssRules || styleSheet.rules;
    };
    var resizeHandler = function () {
        // handle changes in style rules
        if (isiPadSafariVersion8()) {
            if (windowWidth) {
                if (windowWidth !== getWindowWidth()) {
                    getNewWidthHeightOfScreen();
                }
                else {
                    styleRules = styleSheet.cssRules || styleSheet.rules;
                }
            }
            else {
                getNewWidthHeightOfScreen();
            }
        }
        else {
            currentWindowHeight = getWindowHeight(),
                styleRules = styleSheet.cssRules || styleSheet.rules;
        }
        jQuery.each(styleRules, function (index, currentRule) {
            var cssStyleRule = currentRule;
            var currentProperty = cssStyleRule.selectorText.toLowerCase().replace('.win-', '').replace('-h', 'H');
            cssStyleRule.style[currentProperty] = currentWindowHeight + 'px';
        });
    };
    var createStyleTag = function () {
        // create style tag
        var styleTag = jQuery('<style>').appendTo('head');
        styleSheet = styleTag.prop('sheet') || styleTag.prop('styleSheet');
        // crossbrowser style handling
        var addCssRule = function (selector, rules, index) {
            if (index === void 0) { index = 0; }
            if (styleSheet.insertRule) {
                styleSheet.insertRule(selector + '{' + rules + '}', index);
            }
            else {
                styleSheet.addRule(selector, rules, index);
            }
        };
        // create style rules
        addCssRule('.win-min-height', 'min-height:0');
        addCssRule('.win-height', 'height:auto');
        addCssRule('.win-max-height', 'max-height:100%');
        resizeHandler();
    };
    createStyleTag();
    jQuery(window).on('resize orientationchange', resizeHandler);
})());
function initFixedHeader() {
    var $win = $(window);
    var $header = $('#header');
    var $headerLogo = $('#headerLogo');
    var activeClass = 'active-nav';
    function scrollHandler(e) {
        if (e.type !== 'scroll') {
            $header.css({
                top: $header.hasClass(activeClass) ? 0 : -Number($header.outerHeight(true))
            });
        }
        checkState();
    }
    function checkState() {
        var scrollTop = Util.asNumber($win.scrollTop());
        var diff = 2;
        var offset = $headerLogo.offset();
        if (offset) {
            if ($headerLogo.length && scrollTop >= (offset.top + Util.asNumber($headerLogo.height()) - diff) && !$header.hasClass(activeClass) || exports.isHamburgerMenuOpen) {
                $header.addClass(activeClass);
                $header.stop().animate({
                    top: 0
                });
            }
            else if ($headerLogo.length && scrollTop < (offset.top + Util.asNumber($headerLogo.height()) - diff) && $header.hasClass(activeClass)) {
                $header.removeClass(activeClass);
                $header.stop().animate({
                    top: -Number($header.outerHeight(true))
                });
            }
        }
    }
    $win.on('scroll resize orientationchange', scrollHandler);
}
// lock scroll position
function lockScrollPosition() {
    $('html').css('overflow', 'hidden');
}
// un-lock scroll position
function unlockScrollPosition() {
    $('html').css('overflow', 'auto');
}
/**
 * Returns True if supplied param equates to HUB Agency.
 */
function isQuoteFromHub(agencyName) {
    return (agencyName && agencyName.toLowerCase().indexOf(Constants.agencyNames.HubInternational) > -1);
}
exports.isQuoteFromHub = isQuoteFromHub;
/**
 * Adjust/Co-brand the page UI to deal with whether the user is a HUB Customer/Agent.
 */
function loadHubUi() {
    Storage.hasAuth()
        ? adjustUiForHubAgent()
        : adjustUiForHubCustomer();
}
exports.loadHubUi = loadHubUi;
function adjustUiForHubAgent() {
    if (isQuoteFromHub(Storage.getAgencyFromLoginDetails())) {
        $('#hubLogoContainer').show();
        $('#quote-menubar').addClass('hub-quote-menubar-ly');
    }
}
function adjustUiForHubCustomer() {
    if (Storage.hasAuth())
        return;
    $('#hubLogoContainer').show();
    $('#hubButtonContainer').show();
}
/**
 * Adjust the page UI to deal with whether the user is an agent or a consumer.
 */
function adjustUiForAgent() {
    if (Storage.hasAuth()) {
        adjustUiForHubAgent();
        $('#customer-care-call-details').hide();
        $('#user-details').show();
        $('#quote-menubar').show();
        $('.agent-faq').show();
        $('.agent-login').hide();
        $('.agent-logout').show();
        agentName = Storage.getUserName();
        if (Common.isAdmin()) {
            $('.agent-page').show();
        }
        else {
            $('.agent-page').hide();
        }
        if (agentName) {
            $('#agentName').html(agentName);
        }
        else {
            var username = Storage.getUserName() || 'agent';
            $('#agentName').html(username);
        }
    }
    else {
        $('#quote-menubar').hide();
        $('#customer-care-call-details').show();
        $('#user-details').hide();
        $('.agent-page').hide();
        $('.agent-login').show();
        $('.agent-logout').hide();
        $('.agent-faq').hide();
    }
}
function hideTopNavBar() {
    $('#header:not(.header-component-cp)').stop().animate({
        top: -Number($('#header:not(.header-component-cp)').outerHeight(true))
    }, 'fast');
}
function showTopNavBar() {
    $("#header").stop().animate({
        top: 0
    });
}


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(54);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(84)('keys')
  , uid    = __webpack_require__(64);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(26)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isNullOrEmpty(str) {
    if (str === null || typeof str === "undefined")
        return true;
    if (typeof str !== "string" && typeof str !== "number")
        return true;
    if (str === "")
        return true;
    return false;
}
exports.isNullOrEmpty = isNullOrEmpty;
/**
 * Roughly equivalent to C#'s string.IsNullOrWhiteSpace().
 */
function isEmpty(str) {
    if (Array.isArray(str)) {
        return str.length > 0;
    }
    if (typeof str === "number") {
        return false;
    }
    if (typeof str === "string" && str !== null) {
        str = str.trim();
    }
    return isNullOrEmpty(str);
}
exports.isEmpty = isEmpty;
/**
 * Roughly equivalent to C#'s extension method "IsThere()".
 */
function isThere(str) {
    return !isEmpty(str);
}
exports.isThere = isThere;
/**
 * Trims a specified character from the end of the given string
 */
function trimEnd(str, c) {
    if (c === void 0) { c = ' '; }
    var i = str.length - 1;
    for (; i >= 0 && str.charAt(i) === c; i--)
        ;
    return str.substring(0, i + 1);
}
exports.trimEnd = trimEnd;
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
exports.isNumeric = isNumeric;
function asNumber(n) {
    try {
        return parseFloat(n) || 0;
    }
    catch (e) {
        return 0;
    }
}
exports.asNumber = asNumber;
function asString(s) {
    if (typeof s === "undefined" || s === null) {
        return '';
    }
    if (typeof s === "object") {
        try {
            return JSON.stringify(s);
        }
        catch (e) {
            return s.toString();
        }
    }
    return s.toString();
}
exports.asString = asString;
/**
 * Takes an element value (as a string) that may be a numeric string, and returns it as an actual number if it's numeric,
 * otherwise returns just the existing string.
 */
function parseElementValue(value) {
    if (isNumeric(value)) {
        return asNumber(value);
    }
    else {
        return value;
    }
}
exports.parseElementValue = parseElementValue;
function asNumberNullable(n) {
    try {
        return parseFloat(n) || null;
    }
    catch (e) {
        return null;
    }
}
exports.asNumberNullable = asNumberNullable;
function isTrue(s) {
    if (typeof s === "undefined")
        return false;
    if (s === null)
        return false;
    s = s.toLowerCase();
    if (s === "true")
        return true;
    if (s === "yes")
        return true;
    if (s === "on")
        return true;
    if (s === "1")
        return true;
    return false;
}
exports.isTrue = isTrue;
function getOrdinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
exports.getOrdinal = getOrdinal;
function addCommasToNumber(num) {
    var nStr;
    if (typeof num == "number") {
        nStr = num.toString();
    }
    else if (num === null) {
        return "N/A";
    }
    else {
        nStr = num;
    }
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    if (x1.length <= 4)
        return nStr;
    var x2 = x.length > 1 ? "." + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
exports.addCommasToNumber = addCommasToNumber;
function toBoolean(s) {
    if (isEmpty(s))
        return false;
    switch ((s || '').toLowerCase()) {
        case "true":
        case "yes":
        case "1": return true;
        case "false":
        case "no":
        case "0":
        case null: return false;
        default: return Boolean(s);
    }
}
exports.toBoolean = toBoolean;
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()); });
}
exports.toTitleCase = toTitleCase;
/**
 * Take a string and try to turn it into a formatted phone number
 * @param str
 * @return formatted phone number or original string
 */
function toPhoneNumber(str) {
    if (isEmpty(str))
        return '';
    var r = String(str);
    var digits = this.reduceDigits(r);
    if (digits.length === 10) {
        r = digits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return r;
}
exports.toPhoneNumber = toPhoneNumber;
/** Creates a standard GUID compliant with v4 rules.
  Note: This is not cryptographically secure, but collisions are (theoretically) unlikely in most browsers.
  Borrowed from here: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  @returns A 36-character string
  */
function makeGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.makeGuid = makeGuid;
/** Returns an empty GUID
  @returns A 36-character string
  */
function emptyGuid() {
    return '00000000-0000-0000-0000-000000000000';
}
exports.emptyGuid = emptyGuid;
/**
 * Returns true if the two values are numbers (or can be converted to numbers) and they're equal to two decimal places;
 * or if they're equal after being trimmed and converted to lowercase.
 */
function matches(s1, s2) {
    if (isNumeric(s1) && isNumeric(s2)) {
        var n1 = (typeof s1 === "string") ? parseFloat(s1).toFixed(2) : (s1 || 0).toFixed(2);
        var n2 = (typeof s2 === "string") ? parseFloat(s2).toFixed(2) : (s2 || 0).toFixed(2);
        return n1 === n2;
    }
    s1 = (s1 || "").toString().toLowerCase().trim();
    s2 = (s2 || "").toString().toLowerCase().trim();
    return s1 === s2;
}
exports.matches = matches;
/**
 * Reduces a string to its bare essentials (removing spaces, punctuation, etc.)
 * to make it easier to compare, for instance, distinct addresses. The idea is that
 * "16615 NE 167th Ct., Woodinville, Wa 98072" should match "16615 NE 167th Ct WOODINVILLE WA 98072"
 */
function reduce(s) {
    return s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
}
exports.reduce = reduce;
/**
 * Reduce a string to only the digits. E.g. (503) 555-6666 becomes 5035556666
 * @param s
 */
function reduceDigits(s) {
    return s.replace(/[^0-9]/g, '');
}
exports.reduceDigits = reduceDigits;
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
//returns the number of decimal places for a given value
function checkDecimalPlaces(value) {
    if (!value || value === undefined)
        return undefined;
    if (Math.floor(value) === value)
        return 0;
    if (value.toString().split('.')[1] === undefined)
        return undefined;
    return value.toString().split('.')[1].length || 0;
}
exports.checkDecimalPlaces = checkDecimalPlaces;
/**
 * Round to a specific decimal place
 */
function round(value, exp) {
    return decimalAdjust('round', value, exp);
}
exports.round = round;
function floor(value, exp) {
    return decimalAdjust('floor', value, exp);
}
exports.floor = floor;
function ceiling(value, exp) {
    return decimalAdjust('ceil', value, exp);
}
exports.ceiling = ceiling;
function getQueryString(query) {
    if (typeof query === "undefined" || query === null) {
        query = window.location.search;
    }
    return query.substring(1);
}
function getQueryObject(forceLowerCase, query) {
    if (forceLowerCase === void 0) { forceLowerCase = true; }
    if (query === void 0) { query = null; }
    query = getQueryString(query);
    var result = {};
    query.split('&')
        .forEach(function (part) {
        if (part) {
            var _a = part.split('='), key = _a[0], val = _a[1];
            result[forceLowerCase ? key.toLowerCase() : key] = decodeURIComponent(val);
        }
    });
    return result;
}
exports.getQueryObject = getQueryObject;
function getQueryVariable(key, query) {
    if (query === void 0) { query = null; }
    key = key.toLowerCase();
    var obj = getQueryObject(true, query);
    return obj[key];
}
exports.getQueryVariable = getQueryVariable;
function getQueryVariables() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    var obj = getQueryObject();
    return keys.map(function (key) { return obj[key.toLowerCase()]; });
}
exports.getQueryVariables = getQueryVariables;
var dynamicCssRules = [];
/**
 * Utility function for datePicker
 */
function addCssRule(rule) {
    if ($.inArray(rule, dynamicCssRules) === -1) {
        $('head').append("<style>" + rule + "</style>");
        dynamicCssRules.push(rule);
    }
}
exports.addCssRule = addCssRule;
/**
 * Clones a serializable object.
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;
function timeout(ms) {
    var p = new Deferred();
    setTimeout(function () { return p.resolve(); }, ms);
    return p.promise;
}
exports.timeout = timeout;
/**
 * Returns True if supplied param is a valid agency name.
 */
function existenceCheck(any) {
    return any !== null && typeof any !== 'undefined';
}
exports.existenceCheck = existenceCheck;
function setTimeoutAsync(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.setTimeoutAsync = setTimeoutAsync;


/***/ })

/******/ });
//# sourceMappingURL=commons.bundle.js.map