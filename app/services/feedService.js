"use strict";
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var feedService = (function () {
    function feedService(http) {
        this.http = http;
        console.log("FeedService LOADED");
    }
    feedService.prototype.getList = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    };
    feedService.prototype.getDetails = function (id) {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" + id);
    };
    feedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], feedService);
    return feedService;
}());
exports.feedService = feedService;
//# sourceMappingURL=feedService.js.map