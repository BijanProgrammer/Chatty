import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class GlobalChatService {
	private receiveUrl = environment.server.home +
		environment.server.globalChatReceive;
	private sendUrl = environment.server.home +
		environment.server.globalChatSend;

	constructor(private http: HttpClient) {}

	getMessages() {
		return this.http.get<any>(this.receiveUrl);
	}

	sendMessage(text) {
		return this.http.post<any>(this.sendUrl, { text });
	}
}
