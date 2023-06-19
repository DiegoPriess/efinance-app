import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from "./page/authenticate/authenticate.component";
import { HistoryComponent } from './component/history/history.component';
import { NavbarComponent } from "./component/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PoModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        AuthenticateComponent,
        NavbarComponent
    ]
})
export class AppModule {}
