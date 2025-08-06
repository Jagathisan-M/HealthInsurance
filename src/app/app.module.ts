import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorMiddleWareService } from './Service/interceptor-middle-ware.service';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { GadgetsComponent } from './Component/gadgets/gadgets.component';
import { GadgetDetailComponent } from './Component/gadget-detail/gadget-detail.component';
import { ProfileComponent } from './Component/profile/profile.component';

const routes: Routes = [
  {
    path: "userLogin", component: UserLoginComponent
  },
  { path: "Profile", component: ProfileComponent },
  { path: "Gadgets", component: GadgetsComponent },
  { path: "Gadgets/:ID", component: GadgetDetailComponent },
  {
    path: "signUp", component: SignUpComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "", component: UserLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    SignUpComponent,
    GadgetsComponent,
    GadgetDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorMiddleWareService, multi: true },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
