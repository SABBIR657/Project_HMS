import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientForm , PatientFormlab } from './patient.dto';
import { PATIENTS} from './patient.mock';
import { PATIENTSLAB } from './patient.mocklab';
import { LabEntity, PatientEntity } from './patiententity.entity';

@Injectable()
export class PatientService {
    private patients = PATIENTS;
    private patientlab = PATIENTSLAB;
    constructor(
        @InjectRepository(LabEntity)
        private LabRepo: Repository<LabEntity>,
        @InjectRepository(PatientEntity)
        private PatientRepo: Repository<PatientEntity>,
     
      ) {}
      

     getPatients():Promise<any>{
        const patients = this.PatientRepo.find();
        if(!patients || patients[0]){
            throw new HttpException('Not Found!', 404);
        }
        return patients;
    }

    getPatientById(patientid): Promise<any> {
        const patient = this.PatientRepo.findOneBy({patientid});
        if(!patient || patient[0]){
            throw new HttpException('Not Found!', 404);
        }
        return patient;
    }

    getPatientlabById(testid): Promise<any> {
        const lab = this.LabRepo.findOneBy({testid});
        if(!lab || lab[0]){
            throw new HttpException('Not Found!', 404);
        }
        return lab;
    }
    
 
    postPatient(patient: PatientForm): Promise<any> {
        const patientadd = new PatientEntity()
        patientadd.patientname = patient.patientname;
        patientadd.username = patient.username;
        patientadd.email = patient.email;
        patientadd.password = patient.password;
        patientadd.phone = patient.phone;
       return this.PatientRepo.save(patientadd);
  }

  postPatientlab(patientdto: PatientFormlab): Promise<any> {
    const patientlab = new LabEntity()

    patientlab.patientname = patientdto.patientname;
    patientlab.username = patientdto.username;
    patientlab.email = patientdto.email;
    patientlab.testname = patientdto.testname;
   return this.LabRepo.save(patientlab);
}

  deletePatientById(id): any {
    const dltpatient = this.PatientRepo.findOneBy(id);
      if(!dltpatient || dltpatient[0]){
        throw new HttpException('Not Found!', 404);
    }
    else{
    const patient = this.PatientRepo.delete(id);
    return "Patient deleted successfully!";
    }
}

deletePatientlabById(id): any {
    const dltpatientlab = this.PatientRepo.findOneBy(id);
    if(!dltpatientlab || dltpatientlab[0]){
      throw new HttpException('Not Found!', 404);
  }
  else{
  const patient = this.LabRepo.delete(id);
  return "Lab deleted successfully!";
  }
}

async putPatientById(
    patientid: number,
    propertyName: string,
    propertyValue: string,
): Promise<any>{
   const patient = await this.PatientRepo.update({patientid},
    {
        [propertyName]:  propertyValue,
    },
    );
    if(!patient){
        throw new HttpException("Not Found", 404);
    }
    return "Updated Successfully!";
}
}