import { Component, OnInit } from '@angular/core';
import { GlobalChatService } from '../../services/global-chat.service';

@Component({
	selector: 'app-global-chat',
	templateUrl: './global-chat.component.html',
	styleUrls: [ './global-chat.component.css' ]
})
export class GlobalChatComponent implements OnInit {
	messages = [];

	constructor(private globalChatService: GlobalChatService) {}

	ngOnInit(): void {
		this.globalChatService
			.getMessages()
			.subscribe(
				(res) => (this.messages = res),
				(err) => console.log(err)
			);
	}
}
