import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Usuario } from '../../shared/services/usuario';
import { IUsuario } from '../../shared/data-types/usuario';

@Component({
  selector: 'app-detalles-usuario',
  imports: [RouterModule],
  templateUrl: './detalles-usuario.html',
  styleUrl: './detalles-usuario.scss',
})
export class DetallesUsuario implements OnInit {

  idUsuario: string = '';

  usuario: IUsuario | undefined; 
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: Usuario) {
    console.log('Params: ', this.activatedRoute.snapshot.params);
    this.idUsuario = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarioPorId(this.idUsuario).subscribe({
      next: (response) => {
        this.usuario = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      }
    });
  }

}
