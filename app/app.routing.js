"use strict";
var details_component_1 = require('./pages/details/details.component');
var list_component_1 = require('./pages/list/list.component');
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: list_component_1.listComponent },
    { path: "details", component: details_component_1.detailsComponent }
];
exports.navigatableComponents = [
    list_component_1.listComponent,
    details_component_1.detailsComponent
];
//# sourceMappingURL=app.routing.js.map