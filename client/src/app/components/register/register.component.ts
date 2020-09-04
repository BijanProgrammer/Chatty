import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	hide = true;

	userData = {
		username: '',
		email: '',
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

	clickedOnRegisterButton(e) {
		this.authService.registerUser(this.userData).subscribe(
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
