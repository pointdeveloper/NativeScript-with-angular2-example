import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class feedService {
    public items: any;

    constructor(public http: Http) {
        console.log("FeedService LOADED");
    }

    public getList() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }


    public getDetails(id) {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" + id);
    }

}