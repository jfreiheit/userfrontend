import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminguardGuard } from './shared/adminguard.guard';
import { AuthguardGuard } from './shared/authguard.guard';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  	{
	    path: "",
	    title: "Home",
	    component: HomeComponent,
	    pathMatch: 'full',
      canActivate: [AuthguardGuard]
	  },
    { path: 'home',   redirectTo: ''},
	  {
	    path: "register",
	    title: "Register",
	    component: RegisterComponent
	  },
	  {
	    path: "login",
	    title: "Login",
	    component: LoginComponent
	  },
	  {
	    path: "users",
	    title: "All Users",
	    component: UserlistComponent,
      canActivate: [AdminguardGuard]
	  },
    { path: '**',   redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
