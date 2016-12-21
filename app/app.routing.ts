import { Routes} from "@angular/router";
import {detailsComponent} from './pages/details/details.component'
import {listComponent} from './pages/list/list.component'

export const routes:Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
     { path: "home", component: listComponent},
     { path: "details", component: detailsComponent}
];
export const navigatableComponents = [
  listComponent,
  detailsComponent

];
