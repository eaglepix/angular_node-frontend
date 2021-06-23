import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'post',
    template: `<mat-card>
    <mat-card-header>
        <mat-card-title>
            <h3>New Post</h3>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field style="width: 100%;">
                <textarea [(ngModel)] ="postMsg" name="description" matInput placeholder="Post Message"></textarea>
            </mat-form-field>
            <br>
            <button (click)="post()" mat-raised-button color="primary">Post</button>
        </form>
    </mat-card-content>
</mat-card>
`,
})
export class PostComponent {
    postMsg = ''  // can also do: postMsg: any


    constructor(public apiService: ApiService) { } //need to be public here (changed from video)
    post() {
        console.log(this.postMsg);
        this.apiService.postMessage({msg: this.postMsg})
    }

}
