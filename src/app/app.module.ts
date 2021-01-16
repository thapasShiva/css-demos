import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CssLoginScreenComponent } from './screens/css-login-screen/css-login-screen.component';
import { CssHomeScreenComponent } from './screens/css-home-screen/css-home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CssLoginScreenComponent,
    CssHomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
