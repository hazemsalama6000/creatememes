import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Generator } from './generator/generator.component';
import { Navbar } from './navbar/navbar.component';
import {ColorChromeModule} from 'ngx-color/chrome'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Generator,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorChromeModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
