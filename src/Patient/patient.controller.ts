import { Controller, Get, Post, Put, Delete, Body,Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { PatientForm, PatientFormlab } from './patient.dto';
import { PatientService} from './patient.service'
@Controller('patient')
export class PatientController {
    constructor (private patientService: PatientService){}

    @Get()
    async getPatients() {
        const patients = await this.patientService.getPatients();
        return patients;
    }

    @Get('/patient/:patientid')
    async getPatientById(@Param('patientid') patientid) {
        const patient = await this.patientService.getPatientById(patientid);
        return patient;
    }

    @Get('/patientlab/:testid')
    async getPatientlabById(@Param('testid') testid) {
        const patient = await this.patientService.getPatientlabById(testid);
        return patient;
    }

    @Post('/addpatient')
    @UsePipes(new ValidationPipe())
    async postPatient(@Body() mydto: PatientForm) {
        const patient = await this.patientService.postPatient(mydto);
        return patient;
    }
    @Post('/booklab')
    @UsePipes(new ValidationPipe())
    async postPatientlab(@Body() mydtolab: PatientFormlab) {
        const patient = await this.patientService.postPatientlab(mydtolab);
        return patient;
    }

    @Post('/appoinment')
    @UsePipes(new ValidationPipe())
    async postAppointment(@Body() mydtolab: PatientFormlab) {
        const patient = await this.patientService.postPatientlab(mydtolab);
        return patient;
    }

    @Delete("/deletepatient/:id")
    public async deletePatientById(@Param('id') id: number) {
        const patient = await this.patientService.deletePatientById(id);
        return patient;
    }

    @Delete("/deletelab/:id")
    public async deletePatientlabById(@Param('id') id: number) {
        const patient = await this.patientService.deletePatientlabById(id);
        return patient;
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    public async putPatientById(@Param('id', ParseIntPipe) id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.patientService.putPatientById(id, propertyName, propertyValue);
    }

}
