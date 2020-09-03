import { Component, OnInit } from '@angular/core';
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
		private authService: AuthService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this._snackBar.open(
			'The register page has been reloaded successfully!',
			'OK!',
			{ duration: 3000 }
		);
	}

	clickedOnRegisterButton(e) {
		this.authService
			.registerUser(this.userData)
			.subscribe((res) => console.log(res), (err) => console.log(err));
	}
}
