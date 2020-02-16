import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './services/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { SigninComponent } from './signin/signin.component';
import { UserService } from './services/user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { Component} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherWidgetMainComponent } from './weather/weather.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    WeatherWidgetMainComponent,
    AppComponent,
    TitleBarComponent,
    WordCloudComponent,
    SigninComponent,
    StatsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
