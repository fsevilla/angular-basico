import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUsuario } from '../../data-types/usuario';
import { Usuario } from '../../services/usuario';

@Component({
  selector: 'app-datos-usuario',
  imports: [],
  templateUrl: './datos-usuario.html',
  styleUrl: './datos-usuario.scss',
})
export class DatosUsuario {

  @Input() usuario: IUsuario | undefined;

  @Output() onUserCleaned: EventEmitter<void> = new EventEmitter(); 

  constructor(usuarioService: Usuario) {
    this.usuario = usuarioService.getCleanUser();
  }

  cancelar() {
    this.usuario = undefined;
    this.onUserCleaned.emit();
  }
}
