import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from './patient/patient'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Patient],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('patient-portal');
}
