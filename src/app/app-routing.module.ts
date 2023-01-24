import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { PostComponent } from './post/post.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";

const redirectToLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
    ...canActivate(redirectToLogin)
  },
  {
   component:LoginComponent,
   path:'' 
  },
  {
   component:AlumniComponent,
   path:'alumni',
   ...canActivate(redirectToLogin) 
  },
  {
   component:PostComponent,
   path:'Post',
   ...canActivate(redirectToLogin) 
  }
  ,
  {
   component:ContactUsComponent,
   path:'contact' ,
   ...canActivate(redirectToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



