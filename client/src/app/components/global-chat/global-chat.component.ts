import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { GlobalChatService } from '../../services/global-chat.service';

@Component({
	selector: 'app-global-chat',
	templateUrl: './global-chat.component.html',
	styleUrls: [ './global-chat.component.css' ]
})
export class GlobalChatComponent implements OnInit {
	messages = [];

	constructor(
		private router: Router,
		private globalChatService: GlobalChatService
	) {}

	ngOnInit(): void {
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
}
