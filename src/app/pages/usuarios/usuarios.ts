import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/services/usuario';
import { IUsuario } from '../../shared/data-types/usuario';
import { Table } from '../../shared/components/table/table';

@Component({
  selector: 'app-usuarios',
  imports: [Table],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios implements OnInit {

  usuarios: IUsuario[] = [];
  userNames: string[] = [];

  constructor(private usuarioService: Usuario) {
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (response) => {
        console.log('Usuarios: ', response);
        this.usuarios = response;
        this.userNames = response.map(u => {
          return u.name;
        });
      },
      error: (err) => {}
    });
  }

  userSelectedHandler(nombre: string) {
    console.log('Seleccionaron al usuario ', nombre);
  }

}
