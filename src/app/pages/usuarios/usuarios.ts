import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/services/usuario';
import { IUsuario } from '../../shared/data-types/usuario';
import { Table } from '../../shared/components/table/table';
import { DatosUsuario } from '../../shared/components/datos-usuario/datos-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [Table, DatosUsuario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios implements OnInit {

  usuarios: IUsuario[] = [];
  userNames: string[] = [];

  usuarioSeleccionado: IUsuario | undefined;

  constructor(private usuarioService: Usuario, private router: Router) {
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
    
    const resultado = this.usuarios.find(u => {
      return u.name === nombre;
    });

    this.usuarioSeleccionado = resultado;


    // Redirigir a la pagina del usuario seleccionado
    this.router.navigateByUrl('/usuarios/' + resultado?.id);

  }

  cleanUserHandler() {
    this.usuarioSeleccionado = undefined;
  }

}
