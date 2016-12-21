"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var feedService_1 = require("../../services/feedService");
var router_2 = require("nativescript-angular/router");
var detailsComponent = (function () {
    function detailsComponent(fs, activeRoute, routerextention) {
        var _this = this;
        this.fs = fs;
        this.activeRoute = activeRoute;
        this.routerextention = routerextention;
        this.isLoading = true;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.fs.getDetails(params["passedId"]).subscribe(function (data) {
                _this.detailItems = data['_body']; //Bind data to detailItems object
                _this.isLoading = false;
            }, function (error) {
                console.log("ERROR-> " + error); // Error getting the data
            });
        });
    }
    detailsComponent.prototype.onNavBtnTap = function () {
        this.routerextention.back();
    };
    detailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "details",
            templateUrl: "details.component.html",
        }), 
        __metadata('design:paramtypes', [feedService_1.feedService, router_1.ActivatedRoute, router_2.RouterExtensions])
    ], detailsComponent);
    return detailsComponent;
}());
exports.detailsComponent = detailsComponent;
//# sourceMappingURL=details.component.js.map