"use strict";
var router_1 = require("nativescript-angular/router");
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var details_component_1 = require('./details/details.component');
var list_component_1 = require('./list/list.component');
var COMPONENTS = [
    details_component_1.detailsComponent,
    list_component_1.listComponent
];
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: list_component_1.listComponent },
    { path: "details", component: details_component_1.detailsComponent }
];
var componentsModuel = (function () {
    function componentsModuel() {
    }
    componentsModuel = __decorate([
        core_1.NgModule({
            declarations: [COMPONENTS],
            exports: [COMPONENTS, platform_1.NativeScriptModule, router_1.NativeScriptRouterModule],
            imports: [platform_1.NativeScriptModule, router_1.NativeScriptRouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], componentsModuel);
    return componentsModuel;
}());
exports.componentsModuel = componentsModuel;
//# sourceMappingURL=page.module.js.map