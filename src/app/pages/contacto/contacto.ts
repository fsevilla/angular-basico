import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactMessage } from '../../shared/data-types/contact-message';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  isError: boolean = false;
  isSuccess: boolean = false;
  isLoading: boolean = false;

  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef, private router: Router) {}

  submitHandler() {
    console.log('Enviar datos...', this.nombre, this.email, this.mensaje)

    const datos: ContactMessage = {
      name: this.nombre,
      message: `${this.nombre} (${this.email}) te escribio lo siguiente:
        
      ${this.mensaje}
      `  
    } 

    this.isLoading = true;

    setTimeout(() => {
      // window.location.href = "/";
      this.router.navigateByUrl('/')
    }, 1000);
    return;
    this.httpClient.post('https://formsubmit.co/ajax/fsevilla@gmail.com', datos).subscribe({
      next: (response) => {
        console.log('Success!!', response);
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        this.isError = false;
        this.isSuccess = true;
        this.isLoading = false;
        this.cdr.detectChanges();
        // Enviar al usuario a index
        window.location.href = "/";
      },
      error: (err) => {
        console.error('Algo salio mal', err);
        this.isError = true;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    })




  }
}
