import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Screens
import { CssLoginScreenComponent } from './screens/css-login-screen/css-login-screen.component';
import { CssHomeScreenComponent } from './screens/css-home-screen/css-home-screen.component';





const routes: Routes = [
  { path: 'login', component: CssLoginScreenComponent },
  { path: 'home', component: CssHomeScreenComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login-component`
  { path: '**', component: CssLoginScreenComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
