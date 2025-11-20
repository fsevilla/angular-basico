import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Table } from './shared/components/table/table';
import { Canciones } from './pages/canciones/canciones';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Table, Canciones],
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
  

  agregarNombre(campo?: HTMLInputElement) {
    this.nombres.push(this.nuevoNombre);
    console.log('Agregar nombre', this.nuevoNombre);
    if (campo) {
      campo.value = '';
      this.nuevoNombre = '';
    }
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

