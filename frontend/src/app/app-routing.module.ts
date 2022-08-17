import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ListPostComponent } from './components/post/list-post/list-post.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { AuthGuard } from './service/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent,  },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent,canActivate: [AuthGuard] },
  { path: 'post', component: ListPostComponent,canActivate: [AuthGuard] },
  { path: 'post/create', component: AddPostComponent,canActivate: [AuthGuard] },
  { path: 'post/edit/:idPost', component: EditPostComponent,canActivate: [AuthGuard] },
  { path: 'post/show/:idPost', component: ShowPostComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
