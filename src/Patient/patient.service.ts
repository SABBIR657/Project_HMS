import { HttpException, Injectable } from '@nestjs/common';
import { PatientForm , PatientFormlab } from './patient.dto';
import { PATIENTS} from './patient.mock';
import { PATIENTSLAB } from './patient.mocklab';

@Injectable()
export class PatientService {
    private patients = PATIENTS;
    private patientlab = PATIENTSLAB;

    getPatients(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.patients);
        });
    }

    getPatientlabById(testid:number): Promise<any> {
        let id = Number(testid);
        return new Promise(resolve => {
            const patient = this.patientlab.find(patient => patient.testid === id);
            if (!patient) {
                throw new HttpException('Test does not exist!', 404);
            }
            resolve(patient);
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

  postPatientlab(patient: PatientFormlab): Promise<any> {
    return new Promise(resolve => {
        this.patientlab.push(patient);
        resolve(this.patientlab);
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

deletePatientlabById(id: number): Promise<any> {
    const patienlabtId = Number(id);
    return new Promise(resolve => {
        let index = this.patientlab.findIndex((patient) => patient.testid === patienlabtId);
        if (index === -1) {
            throw new HttpException('Test does not exist!', 404);
        }
        this.patientlab.splice(index, 1);
        resolve(this.patientlab);
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