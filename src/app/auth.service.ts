import { HttpClient } from '@angular/common/http'
// old {Http} '@angular/http' deprecated
import { Injectable, } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable()
export class AuthService {
    messages: Array<any> = []
    path = environment.path + '/auth'

    TOKEN_KEY = 'token'

    constructor(private http: HttpClient) { }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        // want boolean identification here: DOUBLE negate here:
        // return true if the key does exist
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    // Have to state type <any> for registerData
    registerUser(registerData: any) {
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            // console.log(res);
            this.saveToken(res.token);
        })
    }

    loginUser(loginData: any) {
        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
            // console.log(res);
            this.saveToken(res.token);
            // video: res.json().token - no need json() in new version
        })
    }

    saveToken(token: any) {
        localStorage.setItem(this.TOKEN_KEY, token);

    }
}