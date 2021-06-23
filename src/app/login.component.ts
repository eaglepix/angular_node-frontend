import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    // <md-input-container>    <input mdInput placeholder="email> - deprecated
    template: `
<mat-card>
    <mat-card-header>
        <mat-card-title>
            <h4>Login</h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field>
                <input [(ngModel)] ="loginData.email" name="email" matInput placeholder="email" type="email">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)] ="loginData.pwd" name="password" matInput placeholder="password" type="password">
            </mat-form-field>
            <button (click)="post()" mat-raised-button color="primary">Login</button>
        </form>
    </mat-card-content>
</mat-card>

  `
})
export class LoginComponent {
    loginData = {
        'email': '',
        'pwd': ''
    }
    // need tp specify type for email & password here
    constructor(public authService: AuthService) { } //need to be public here (changed from video)

    post() {
        console.log(this.loginData)
        this.authService.loginUser(this.loginData)
    }
}
