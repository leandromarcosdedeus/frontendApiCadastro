import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientModel } from './client.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  client: ClientModel = new ClientModel();
  clients: Array<any> = new Array<any>();

  constructor(private clientsService: ClientsService){

  }
  ngOnInit(){
    this.listarClients();
  }
  addClients(){
    this.clientsService.addClient(this.client).subscribe(client =>{
      this.client = new ClientModel();
      this.listarClients();
        }, err => { console.log('Erro ao cadastrar: ', err
    )})

  }
  listarClients(){
    this.clientsService.listarClients().subscribe(clients=>{
      this.clients = clients;
    }, err =>{
      console.log('Erro ao listar alunos', err);
    })
  };
}
