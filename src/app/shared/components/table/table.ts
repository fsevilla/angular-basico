import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnChanges, OnInit {

  buscar: string = '';

  buscarTimer: any;

  @Input('datos') items: string[] = [];

  displayedItems: string[] = [];

  @Input() titulo: string = '';

  @Output() onItemSelected: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    // pedir datos al api
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron nuevos datos!', changes)
    if (changes['titulo']) {
      console.log('El titulo cambio')
    } 
    
    if (changes['items']) {
      console.log('Los datos cambiaron')
      this.displayedItems = [...this.items];
    }
  }

  clickHandler(elemento: string) {
    console.log('Ocurrio un click', elemento)
    this.onItemSelected.emit(elemento);
  }

  filtrar() {

    if (this.buscarTimer) {
      clearTimeout(this.buscarTimer);
    }
    
    this.buscarTimer = setTimeout(() => {
      const buscar = this.buscar.toLowerCase();
      this.displayedItems = this.items.filter(item => {
        return item.toLowerCase().includes(buscar);
      })
      console.log('se filtraron datos')
    }, 500);
  }

}
