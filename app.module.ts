import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from "./page/authenticate/authenticate.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { SacComponent } from './component/sac/sac.component';
import { PriceComponent } from './component/price/price.component';

@NgModule({
    declarations: [
        AppComponent,
        SacComponent,
        PriceComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PoModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AuthenticateComponent,
        NavbarComponent
    ]
})
export class AppModule {}
