import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../data-types/usuario';

@Injectable({
  providedIn: 'root',
})
export class Usuario {

  constructor(private httpClient: HttpClient) {}

  getCleanUser(): IUsuario {
    return {
      name: '',
      email: '',
      username: '',
      address: {
        street: '',
        zipcode: ''
      }
    }
  }
  
  getUsuarios(): Observable<IUsuario[]> {
    return this.httpClient.get<IUsuario[]>('https://jsonplaceholder.typicode.com/users')
  }

  crearUsuario() {}

}

