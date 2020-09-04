import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';

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
		private router: Router,
		private authService: AuthService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		if (this.authService.loggedIn()) this.router.navigate([ '/global' ]);
	}

	clickedOnLoginButton(e) {
		this.authService.loginUser(this.userData).subscribe(
			(res) => {
				localStorage.setItem('token', res.token);
				this.router.navigate([ '/global' ]);
			},
			(err) => {
				this._snackBar.open(
					'Invalid credentials, Please try again!',
					'OK',
					{ duration: 3000 }
				);
			}
		);
	}
}
