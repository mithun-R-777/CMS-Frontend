// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';
import { AboutComponent } from './about/about.component';  // Import the AboutComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostComponent },
  { path: 'tag', component: TagComponent },
  { path: 'about', component: AboutComponent },  // Add the route for AboutComponent
];