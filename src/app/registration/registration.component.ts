import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  client = { name: '', email: '', address: '', password: '' };
  repeatPassword = '';
registrationForm: any;

  constructor(private http: HttpClient) {}

  register() {
    if (this.client.password !== this.repeatPassword) {
      console.error("Passwords don't match");
      return;
    }

    this.http.post('http://localhost:8080/api/clients/register', this.client)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}

