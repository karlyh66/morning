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

import { AngularWeatherWidgetModule } from 'angular2-weather-widget';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    WordCloudComponent,
    NewUserComponent
  ],
  imports: [
    AngularWeatherWidgetModule,
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
