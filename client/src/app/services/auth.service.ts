import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private registerUrl = 'http://localhost:5000/api/auth/register';

	constructor(private http: HttpClient) {}

	registerUser(user) {
		console.log('in registerUse @ auth service');

		return this.http.post<any>(this.registerUrl, user);
	}
}
