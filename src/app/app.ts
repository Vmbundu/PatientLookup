import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from './patient/patient'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Patient, NgbModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('patient-portal');
}
