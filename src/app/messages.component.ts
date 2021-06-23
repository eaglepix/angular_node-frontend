import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `<div *ngFor="let message of apiService.messages">
  <!-- <button mat-button color="primary">Primary</button> -->
  <mat-card>{{message.msg}}</mat-card>
</div>`,
})
export class MessagesComponent {
    constructor(public apiService: ApiService, private route: ActivatedRoute) { } //need to be public here (changed from video)

    ngOnInit() {
        const userId = this.route.snapshot.params.id;

        this.apiService.getMessages(userId);
    }
}
