import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private emailPattern: string = '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}';

  public formSign: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public activeTab: string = 'login';

  public toggleForm(value: string): void {
    this.activeTab = value;
  }

  public submitLogin(value: any): void {
    console.log(value);
    alert('Submit');
  }

  public submitSign(value: any): void {
    console.log(value);
    alert('Submit');
  }


}
