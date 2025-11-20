import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnChanges, OnInit {

  @Input('datos') items: string[] = [];

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
    }
  }

  clickHandler(elemento: string) {
    console.log('Ocurrio un click', elemento)
    this.onItemSelected.emit(elemento);
  }

}
