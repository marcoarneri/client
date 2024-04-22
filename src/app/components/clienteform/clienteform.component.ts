import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clienteform',
  templateUrl: './clienteform.component.html',
  styleUrls: ['./clienteform.component.css']
})
export class ClienteformComponent implements OnInit{
  cliente!: Cliente;

  constructor(private _clienteService: ClienteService, private _router: Router) {
  }

  ngOnInit(): void {
    this.cliente = this._clienteService.getter();
  }

  processaForm() {
    if(this.cliente.id == undefined) {
      this._clienteService.createCliente(this.cliente).subscribe((c) => {
        console.log(c);
        this._router.navigate(['/']);
      });
    } else {
      this._clienteService.updateCliente(this.cliente).subscribe((c) => {
        console.log(c);
        this._router.navigate(['/']);
      });
    }
  } 
}
