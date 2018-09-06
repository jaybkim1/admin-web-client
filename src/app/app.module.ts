// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { GlobalService } from './services/global.service';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserComponent } from './components/user/user.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
