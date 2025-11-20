import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Table } from './shared/components/table/table';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Table, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly nombre = signal('francisco');

  nombres = [
    'Juan Perez',
    'Ana Diaz',
    'Pedro Paramo'
  ]

  nuevoNombre: string = '';

  titulo = 'Nombres'
  

  agregarNombre(campo?: HTMLInputElement) {
    // this.nombres.push(this.nuevoNombre);
    this.nombres = [...this.nombres, this.nuevoNombre];
    console.log('Agregar nombre', this.nuevoNombre);
    if (campo) {
      campo.value = '';
      this.nuevoNombre = '';
    }
    console.log('Nombres: ', this.nombres);
    this.titulo = `Nombres (${this.nombres.length})`
  }

  detectarTexto(evento: KeyboardEvent) {
    this.nuevoNombre = (evento.target as HTMLInputElement).value;
    console.log('Evento: ', evento);

    if (evento.key === 'Enter' && this.nuevoNombre) {
      this.agregarNombre();
      (evento.target as HTMLInputElement).value = '';
      this.nuevoNombre = '';
    }
  }
}

