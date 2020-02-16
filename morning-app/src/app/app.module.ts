import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { NewUserComponent } from './new-user/new-user.component';

import { Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherWidgetMainComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    WeatherWidgetMainComponent,
    AppComponent,
    TitleBarComponent,
    WordCloudComponent,
    NewUserComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
