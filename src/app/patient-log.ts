import { inject, Injectable } from '@angular/core';
import { Info } from './patient/info';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientLog {

  http = inject(HttpClient)
  private url = 'http://localhost:8080/patients';

  getPatientLog(): Observable<Info[]>{
    return this.http.get<Info[]>(this.url)
  }

  async getAllPatientInfo(): Promise<Info[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  getAllPatientInfoByID(pid: number | undefined): Observable<Info> {
    return this.http.get<Info>(this.url + '/' + pid);
  }

  addPatient(data: any): Observable<any> {
    return this.http.post<Info>(this.url, data);
  }
}
