import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { feedService } from "./services/feedService";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [AppComponent,
                   ...navigatableComponents],

    bootstrap: [AppComponent],
    
    imports:[NativeScriptModule,
            NativeScriptHttpModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(routes)],
    schemas: [NO_ERRORS_SCHEMA],
    providers:[feedService]
})
export class AppModule { }
