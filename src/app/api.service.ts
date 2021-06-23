import { HttpClient } from '@angular/common/http'
// old {Http} '@angular/http' deprecated
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable()
export class ApiService {
    messages: Array<any> = []
    users: Array<any> = []
    path = environment.path

    constructor(private http: HttpClient) { }

    getMessages(userId:any) {
        this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
            this.messages = res;  //.json()
        })
    }
    postMessage(message:any) {
        this.http.post(this.path + '/post', message).subscribe(res => {
        })
    }
    getUsers() {
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res;
        })
    }
    getProfile(id: any) {
        return this.http.get<any>(this.path + '/profile/' +id)
    }
}