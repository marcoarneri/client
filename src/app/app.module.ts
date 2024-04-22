import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientilistComponent } from './components/clientilist/clientilist.component';
import { ClienteformComponent } from './components/clienteform/clienteform.component';
import { ClienteService } from './service/cliente.service';
import { FormsModule } from '@angular/forms';

import {
  RouterModule,
  Routes
} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ClientilistComponent},
  {path: 'form', component: ClienteformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientilistComponent,
    ClienteformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
