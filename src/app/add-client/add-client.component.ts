import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientModel } from '../clients/client.model'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  client: ClientModel = new ClientModel();
  clients: Array<any> = new Array<any>();

  constructor(private clientsService: ClientsService){

  }
  addClients(){
    this.client = new ClientModel();
    this.clientsService.addClient(this.client).subscribe(client =>{
        }, err => { console.log('Erro ao cadastrar: ', err
    )})
      }
}
