import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   progressBar: true,
    //   progressAnimation: 'decreasing',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
