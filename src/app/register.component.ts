import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    // <md-input-container>    <input mdInput placeholder="email> - deprecated
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registerData = {
        'email': '',
        'pwd': '',
        'name': '',
        'description': ''
    }
    // need tp specify type for email & password here
    constructor(public apiService: AuthService) { } //need to be public here (changed from video)

    post() {
        console.log(this.registerData)
        this.apiService.registerUser(this.registerData)
    }
}
