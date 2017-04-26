import { Component } from '@angular/core';
import { Users } from './interface/users';

// view
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    			<ul >
					<li  *ngFor="let user of users">
						<input type="text" [(ngModel)] = "user.name">
						<input type="number" [(ngModel)] = "user.age">
					</li>
				</ul>
				<hr>
				<ul >
					<div *ngFor="let user of users" (click)="user.auth = !user.auth">
					<li  *ngIf="user.auth">
						{{user.name}} {{user.age}} 
					</li>
					</div>
				</ul>
				<hr>
				<ul >
					<div *ngFor="let user of users" (click)="user.auth = !user.auth">
					<li  *ngIf="!user.auth">
						{{user.name}} {{user.age}} 
					</li>
					</div>
				</ul>
				<button (click)="foo()" >foo</button>
    `
})

// model
export class AppComponent {
	title: String = "User interface";
	users: Users[] = [
		{id: 123, name: "jack", age: 18, auth: false,  role: "user"},
		{id: 321, name: "dave", age: 21, auth: true,  role: "manager"},
		{id: 345, name: "tom", age: 32, auth: false,  role: "admin"},
		];
	test: Users = {
		id: 45, name: "jack", age: 18, auth: false,  role: "user"
	}
	foo() {
		this.users.push(this.test)
	}
}
