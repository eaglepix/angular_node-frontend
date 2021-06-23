import { HttpClient, HttpInterceptor } from '@angular/common/http'
import { Injectable, Injector } from '@angular/core'
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }
    // constructor(private auth: AuthService) { }

    intercept(req: any, next: any) {
        // console.log(req)
        const auth = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token) 
            //old: this.auth.token
        })
        return next.handle(authRequest);
    }
}