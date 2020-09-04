import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GlobalChatService } from '../../services/global-chat.service';

@Component({
	selector: 'app-global-chat',
	templateUrl: './global-chat.component.html',
	styleUrls: [ './global-chat.component.css' ]
})
export class GlobalChatComponent implements OnInit {
	messages = [];
	messageData = { text: '' };

	constructor(
		private router: Router,
		private globalChatService: GlobalChatService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.updateMessages();
	}

	updateMessages() {
		this.globalChatService.getMessages().subscribe(
			(res) => {
				this.messages = res;
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) this.router.navigate([ '/login' ]);
				}
			}
		);
	}

	clickedOnSendButton(e) {
		this.globalChatService.sendMessage(this.messageData.text).subscribe(
			(res) => {
				this.updateMessages();
			},
			(err) => {
				this._snackBar.open(
					'There was a problem with your request, Please try again!',
					'OK',
					{ duration: 3000 }
				);
			}
		);
	}
}
