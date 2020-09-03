import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private registerUrl = 'http://localhost:5000/api/auth/register';
	private loginUrl = 'http://localhost:5000/api/auth/login';

	constructor(private http: HttpClient) {}

	registerUser(user) {
		return this.http.post<any>(this.registerUrl, user);
	}

	loginUser(user) {
		return this.http.post<any>(this.loginUrl, user);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	loggedIn() {
		return !!localStorage.getItem('token');
	}
}
