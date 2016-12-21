import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { feedService } from "../../services/feedService";
import {RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId:module.id,
    selector: "details",
    templateUrl: "details.component.html",
})
export class detailsComponent{
    public detailItems: any;
    public isLoading = true;

    public constructor(public fs: feedService, private activeRoute: ActivatedRoute,private routerextention :RouterExtensions) {
        this.activeRoute.queryParams.subscribe(params => {
            this.fs.getDetails(params["passedId"]).subscribe(data => {
                this.detailItems = data['_body'];//Bind data to detailItems object
                 this.isLoading=false;
            }, error => {
                console.log("ERROR-> " + error);// Error getting the data
            });
        });
    }
    onNavBtnTap(){
        this.routerextention.back();
    }
}
