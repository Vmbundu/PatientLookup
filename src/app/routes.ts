import {Routes} from '@angular/router';
import { Patient } from './patient/patient';
import {Add} from './add/add';

const routeConfig: Routes = [

  {
    path: '',
    component: Patient,
    title: 'Patient Lookup',
  },
  {
    path: 'add',
    component: Add,
    title: 'Patient Add',
  },
];
export default routeConfig;