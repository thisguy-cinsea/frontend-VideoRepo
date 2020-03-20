import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { VideoFormComponent } from './video-form/video-form.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/logout',
  pathMatch: 'full'
},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LoginComponent},
  {path:'addVideo', component: VideoFormComponent},
  {path:'videos', component: VideosComponent}
  // {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
