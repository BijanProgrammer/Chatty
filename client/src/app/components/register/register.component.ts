import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	hide = true;

	constructor(private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this._snackBar.open(
			'The register page has been reloaded successfully!',
			'OK!',
			{ duration: 3000 }
		);
	}
}
