"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
exports.getFacebookInsight = void 0;
var feathers_1 = require("@feathersjs/feathers");
require("@feathersjs/transport-commons");
var express_1 = require("@feathersjs/express");
var dotenv = require("dotenv");
dotenv.config();
var config = {
    auth: {
        pageId: process.env.pageId,
        accesstoken: process.env.accesstoken
    },
    "function": performGetOperation(url, headers)
}, _a = (void 0)["const"], res = _a === void 0 ? await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: headers
})["catch"](function (error) {
    throw new Error("facebook Insights : " + error.message);
}) : _a;
return await res.json();
//Get a Single Metric
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=page_impressions_unique&access_token=" + accessToken;
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
//Get Multiple Metrics
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=page_impressions_unique,page_engaged_users&access_token=" + accessToken;
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
//Get Metrics of a Page Post
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total&access_token=" + accessToken;
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
//Get Video Ad Breaks Impressions
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=page_daily_video_ab_break_ad_impressions_by_crosspost_status\n  &period=day\n  &since=2017-12-10\n  &until=2017-12-14";
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
//Get Daily Video Ad Break Impressions of a Page Post
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=post_video_ad_break_ad_impressions\n  &period=day\n  &since=2017-12-10\n  &until=2017-12-14\n&access_token=" + accessToken;
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
//Get Lifetime Video Ad Break Impressions of a Page Post
function getFacebookInsight(pageId, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers;
        return __generator(this, function (_a) {
            url = "https://graph.facebook.com/v8.0/" + pageId + "/insights?metric=post_video_ad_break_ad_impressions\n  &period=lifetime&access_token=" + accessToken;
            headers = new Headers();
            headers.append("Accept", "application/json");
            return [2 /*return*/, performGetOperation(url, headers)];
        });
    });
}
exports.getFacebookInsight = getFacebookInsight;
// Creates an ExpressJS compatible Feathers application
var app = express_1["default"](feathers_1["default"]());
// Start the server
app.listen(5500).on('listening', function () {
    return console.log('Feathers server listening on localhost:5500');
});
