import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// not sure if HttpModule is required as without that there was no error already
// import {HttpClient} from '@angular/common/http' 
// Above...not used, video used {HttpModule} already deprecated, using {HttpClient} will crash
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'  //MdButtonModule(old), MdCheckboxModule  /button (add)
import { MatCardModule } from '@angular/material/card'  // MdCardModule(old)
import { MatToolbarModule } from '@angular/material/toolbar'; //new add on
import { MatInputModule } from '@angular/material/input'; //new add on
import { MatFormFieldModule } from '@angular/material/form-field'; // own new add on
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'

import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor.service'

const routes = [
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }
]


@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent,
    LoginComponent, UsersComponent, ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
    NoopAnimationsModule,
    // HttpClient
    MatButtonModule, MatCardModule, MatToolbarModule,
    RouterModule.forRoot(routes),
    MatInputModule, MatFormFieldModule, MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
