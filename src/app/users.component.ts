import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'users',
    template: `<div *ngFor="let user of apiService.users">
  <!-- <button mat-button color="primary">Primary</button> -->
  <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.name}}</mat-card>
</div>`,
})
export class UsersComponent {
    constructor(public apiService: ApiService) { } //need to be public here (changed from video)

    ngOnInit() {
        this.apiService.getUsers();
    }
}
