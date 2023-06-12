import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from './clients.service';
import { FormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'clients', component: ClientsComponent},
  { path: 'addClient', component: AddClientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
