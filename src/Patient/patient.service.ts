import { HttpException, Injectable } from '@nestjs/common';
import { PatientForm } from './patient.dto';
import { PATIENTS} from './patient.mock';

@Injectable()
export class PatientService {
    private patients = PATIENTS;

    getPatients(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.patients);
        });
    }
    
    getPatientById(patientid:number): Promise<any> {
        let id = Number(patientid);
        return new Promise(resolve => {
            const patient = this.patients.find(patient => patient.patientid === id);
            if (!patient) {
                throw new HttpException('Patient does not exist!', 404);
            }
            resolve(patient);
        });
    }
 
    postPatient(patient: PatientForm): Promise<any> {
      return new Promise(resolve => {
          this.patients.push(patient);
          resolve(this.patients);
      });
  }

  deletePatientById(id: number): Promise<any> {
      const patientId = Number(id);
      return new Promise(resolve => {
          let index = this.patients.findIndex((patient) => patient.patientid === patientId);
          if (index === -1) {
              throw new HttpException('Patient does not exist!', 404);
          }
          this.patients.splice(index, 1);
          resolve(this.patients);
      });
}
putPatientById(
    patientid: number,
    propertyName: string,
    propertyValue: string,
): Promise<any>{
    const patientId = Number(patientid);
    return new Promise((resolve) => {
        const index = this.patients.findIndex((patient) => patient.patientid === patientId);
        if(index === -1){
            throw new HttpException('Not Found', 404);
        }
        this.patients[index][propertyName] = propertyValue;
        return resolve(this.patients);
    });
}
}