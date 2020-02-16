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
import { SuiModule } from 'ng2-semantic-ui';
import { UserService } from './services/user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    WordCloudComponent,
    SigninComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SuiModule,
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
