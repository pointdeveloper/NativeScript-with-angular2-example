"use strict";
var core_1 = require("@angular/core");
var feedService_1 = require("../../services/feedService");
var router_1 = require("nativescript-angular/router");
var listComponent = (function () {
    function listComponent(fs, routerextensions) {
        var _this = this;
        this.fs = fs;
        this.routerextensions = routerextensions;
        this.isLoading = true;
        this.fs.getList().subscribe(function (data) {
            _this.myItems = data['_body']; //Bind data to myItems object
            _this.isLoading = false;
        }, function (error) {
            console.log("ERROR-> " + error); // Error getting the data
        });
    }
    listComponent.prototype.onItemTap = function (args) {
        var selected = this.myItems[args.index];
        this.getUserDetails(selected.id);
    };
    listComponent.prototype.getUserDetails = function (clickedId) {
        var queryParams = {
            "passedId": clickedId
        };
        var transition;
        this.routerextensions.navigate(["details"], { queryParams: queryParams, transition: transition });
    };
    listComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "list",
            templateUrl: "list.component.html",
        }), 
        __metadata('design:paramtypes', [feedService_1.feedService, router_1.RouterExtensions])
    ], listComponent);
    return listComponent;
}());
exports.listComponent = listComponent;
//# sourceMappingURL=list.component.js.map