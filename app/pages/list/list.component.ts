import { Component } from "@angular/core";
import { feedService } from "../../services/feedService";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
})


export class listComponent {

    public myItems: any;
    public isLoading = true;

    constructor(public fs: feedService, public routerextensions: RouterExtensions) {
        this.fs.getList().subscribe(data => {
            this.myItems = data['_body'];//Bind data to myItems object
            this.isLoading = false;
        }, error => {
            console.log("ERROR-> " + error);// Error getting the data
        });
    }

    onItemTap(args) {
        let selected = this.myItems[args.index];
        this.getUserDetails(selected.id);
    }

    getUserDetails(clickedId) {
        let queryParams = {
            "passedId": clickedId
        };

        let transition: { name: "slide" };

        this.routerextensions.navigate(["details"], { queryParams, transition });

    }

}