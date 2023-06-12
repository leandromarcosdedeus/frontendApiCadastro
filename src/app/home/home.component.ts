import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientModel } from '../clients/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostFrequent: Array<any> = new Array<any>();

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.getMostFrequent();
  }

  getMostFrequent() {
    this.clientsService.getMostFrequent().subscribe(data => {
      this.mostFrequent = data;
    });
  }
}
