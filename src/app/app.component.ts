import { HttpClient } from '@angular/common/http'; // tambahkan baris ini untuk memanggil http client dari app.module.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-json';
    products: any = [];

    // tambahkan dari sini
    constructor(private httpClient: HttpClient) {
        this.httpClient.get("assets/data.json").subscribe(data =>{
            console.log(data);
            this.products = data;
        })
    }
    // sampai sini
}
