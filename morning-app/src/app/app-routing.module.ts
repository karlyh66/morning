import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from  './signin/signin.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { StatsComponent } from './stats/stats.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'home', component: WordCloudComponent,  canActivate: [AuthGuard]},
  { path: 'stats', component: StatsComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
