import { Component } from '@angular/core';
import { WebSocketService } from "./services/websocket.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public notification1 = 0;
    public notification2 = 0;
    public notification3 = 0;

    constructor(private webSocketService: WebSocketService) {

        let stompClient = this.webSocketService.connect();

        stompClient.connect({}, frame => {

            stompClient.subscribe('/topic/notification', notifications => {

                this.notification1 = JSON.parse(notifications.body).count;
                this.notification2 = JSON.parse(notifications.body).count2;
                this.notification3 = JSON.parse(notifications.body).count3;



            })

        });
    }
}
