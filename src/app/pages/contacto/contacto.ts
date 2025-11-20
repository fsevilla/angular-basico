import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {

  nombre: string = 'Juan Perez';
  email: string = '';
  mensaje: string = '';

  datos = {
    nombre: ''
  }

  submitHandler() {
    console.log('Enviar datos...')
  }
}
