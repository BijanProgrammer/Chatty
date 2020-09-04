import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private registerUrl = 'http://localhost:5000/api/auth/register';
	private loginUrl = 'http://localhost:5000/api/auth/login';
	private verifyUrl = 'http://localhost:5000/api/auth/verify';

	private verified: boolean;

	constructor(private http: HttpClient, private router: Router) {}

	registerUser(user) {
		return this.http.post<any>(this.registerUrl, user);
	}

	loginUser(user) {
		return this.http.post<any>(this.loginUrl, user);
	}

	// verifyUser() {
	// 	return this.http.post<any>(
	// 		this.verifyUrl,
	// 		localStorage.getItem('token')
	// 	);
	// }

	logoutUser() {
		localStorage.removeItem('token');
		this.router.navigate([ '/login' ]);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	loggedIn(): boolean {
		return !!localStorage.getItem('token');
	}
}
