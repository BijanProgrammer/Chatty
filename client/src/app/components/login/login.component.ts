import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	hide = true;

	userData = {
		username: '',
		password: ''
	};

	constructor(
		private authService: AuthService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this._snackBar.open(
			'The login page has been reloaded successfully!',
			'OK!',
			{ duration: 3000 }
		);
	}

	clickedOnLoginButton(e) {
		this.authService
			.loginUser(this.userData)
			.subscribe((res) => console.log(res), (err) => console.log(err));
	}
}
