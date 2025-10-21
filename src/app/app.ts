import { Component, signal } from '@angular/core';
import {Login} from './login/login';
import {Register} from './register/register';
import {Practicando} from './practicando/practicando';

@Component({
  selector: 'app-root',
  imports: [Practicando],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {



  protected readonly title = signal('ToDoApp');
}
