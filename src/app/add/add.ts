import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PatientLog } from '../patient-log';
import {NgbToast} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule, NgbToast],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  applyForm = new FormGroup({
    Name: new FormControl(''),
    Age: new FormControl(''),
    Pressure: new FormControl(''),
    Chol: new FormControl('')
  });

  showToast = signal(false)


  constructor(private patientLog: PatientLog) { }

  submitPatient(){
    const payload = {
      name: this.applyForm.value.Name,
      id: 0,
      age: this.applyForm.value.Age,
      pressure: this.applyForm.value.Pressure,
      chol: this.applyForm.value.Chol


    }

    console.log(payload);

    this.patientLog.addPatient(payload).subscribe({
      next:response =>{
        console.log(response)
      }
    });

    setTimeout(()=> {
      this.showToast.set(true);
    }, 1000);
    this.showToast.set(false);

  }
}
