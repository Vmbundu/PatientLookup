import { Component, inject, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Info } from './info';
import {PatientLog} from '../patient-log';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [FormsModule, RouterLink],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit{
  inSys = signal(false);
  clicked = signal(false);
  cholHigh = true;
  pressColor = 'lightGreen';
  presscolor = 'card text-bg-warning mb-3';
  //hStyle = "visibility: hidden;";
  valueID: number | undefined = 0;
  age: number | undefined = 0;
  press: string | undefined = '';
  name: string | undefined = '';
  chol: number | undefined = 0;

  //patientLog: PatientLog = inject(PatientLog);

  patient_info: Info[] = [];
  

    constructor(private patientLog: PatientLog) {
        // this.patientLog
        //   .getAllPatientInfo()
        //   .then((patientList: Info[]) => {
        //   this.patient_info = patientList;
        // });

          //  this.patientLog.getPatientLog().subscribe(data => {
          //    this.patient_info = data;
          //  });
    }
  ngOnInit(): void {
        this.patientLog.getPatientLog().subscribe(data => {
              this.patient_info = data;
            });
  }

    buttonClick(){
      this.patientLog.getAllPatientInfoByID(this.valueID).subscribe({
          next: data => {
          // Success response
          this.name = data?.name;
          this.valueID = data?.id;
          this.age = data?.age;
          this.press = data?.pressure;
          this.chol = data.chol;
          this.cholHigh = this.chol > 140;

          if (this.press == 'Low'){
          this.pressColor = 'lightGreen'
          } else if (this.press == 'Medium'){
            this.pressColor = 'LightGoldenRodYellow'
          } else {
            this.pressColor = 'lightSalmon'
          }
          this.inSys.set(true);
          },
          error: err => {
          // Redirect responses will trigger this error handler
          this.inSys.set(false);
          }
          });
      // const foundUser = this.patient_info.find(user => user.id == this.valueID);
      // if(foundUser){
      //   this.name = foundUser?.name;
      //   this.valueID = foundUser?.id;
      //   this.age = foundUser?.age;
      //   this.press = foundUser?.pressure;
      //   this.chol = foundUser.chol;
      //   this.cholHigh = this.chol > 140;

      //   if (this.press == 'Low'){
      //     this.pressColor = 'green'
      //   } else if (this.press == 'Medium'){
      //     this.pressColor = 'yellow'
      //   } else {
      //     this.pressColor = 'red'
      //   }
      //   this.inSys.set(true);

        

      // }else{
      //   this.inSys.set(false);
      // }
    }
}
