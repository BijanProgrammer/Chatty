import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GlobalChatService {
	private receiveUrl = 'http://localhost:5000/api/global_chat/receive';
	private sendUrl = 'http://localhost:5000/api/global_chat/send';

	constructor(private http: HttpClient) {}

	getMessages() {
		return this.http.get<any>(this.receiveUrl);
	}

	sendMessage(text) {
		return this.http.post<any>(this.sendUrl, { text });
	}
}
