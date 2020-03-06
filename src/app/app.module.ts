import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodetreeComponent } from './nodetree/nodetree.component';


@NgModule({
  declarations: [
    AppComponent,
    NodetreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
