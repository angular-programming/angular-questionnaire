import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { PublishedModule } from './published/published.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CoreModule, AdminModule, BrowserModule, AppRoutingModule, PublishedModule, UserModule, HomeModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
