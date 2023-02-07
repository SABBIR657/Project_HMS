import { Controller, Get, Post, Put, Delete, Body,Param, Query } from '@nestjs/common';
import { PatientForm } from './patient.dto';
import { PatientService} from './patient.service'
@Controller('patient')
export class PatientController {
    constructor (private patientService: PatientService){}

    @Get()
    async getPatients() {
        const patients = await this.patientService.getPatients();
        return patients;
    }

    @Get(':patientid')
    async getFaculty(@Param('patientid') patientid) {
        const patient = await this.patientService.getPatientById(patientid);
        return patient;
    }

    @Post('/addpatient')
    async postPatient(@Body() mydto: PatientForm) {
        const patient = await this.patientService.postPatient(mydto);
        return patient;
    }

    @Delete(':id')
    public async deletePatientById(@Param('id') id: number) {
        const patient = await this.patientService.deletePatientById(id);
        return patient;
    }
    @Put(':id')
    public async putPatientById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.patientService.putPatientById(id, propertyName, propertyValue);
    }

}
