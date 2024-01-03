import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {ContactModule} from "./Pages/contact/contact.module";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailComponent } from './components/user/user-detail.component';
import { MovieDetailComponent } from './components/movie/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ContactModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
