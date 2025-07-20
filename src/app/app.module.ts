import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorMiddleWareService } from './Service/interceptor-middle-ware.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "userLogin", component: UserLoginComponent
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
