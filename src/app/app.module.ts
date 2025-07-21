import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { InterceptorMiddleWareService } from './Service/interceptor-middle-ware.service';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "userLogin", component: UserLoginComponent
  },
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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
