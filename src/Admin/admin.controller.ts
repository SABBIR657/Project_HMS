import { Controller, Get, Post, Delete, Put, Param, Query, Req, Request, Body, UsePipes, ValidationPipe, ParseIntPipe 
 } from "@nestjs/common";

 import {  DTOs } from "./DTOs.dto";
 import { DoctroInfo } from "./createAdmin.dto";
 import { adminservice } from "./adminservice.service";
 import { PackageValid } from "./PackageValid.dto";

 @Controller('/admin')
 export class AdminController
 {
    constructor(private adminservice: adminservice){

    }

    @Get("/index")
    getIndex(): any{
        return this.adminservice.getIndex();
    }
    @Get("/patient/:id")
    getPatientByid(@Param('id', ParseIntPipe) id:number,): any{
        return this.adminservice.getPatientByid(id);
    }
    @Get("/patientInfo")
    getPatientInfo(@Query() qry:any):any{
        return this.adminservice. getPatientInfo(qry);
    }
    @Post("/AddDoctor")
     @UsePipes(new ValidationPipe())
    addDcotor(@Body() mydto:DTOs):any{
        return this.adminservice.addDoctor(mydto);
    }
    @Put("/UpdateEmployee")
    @UsePipes(new ValidationPipe())
    UpdateEmployee(@Body('name')name: string, @Body('id') id: number): any{
        return this.adminservice.UpdateEmployee(name,id);
    }

    @Post("/createAdmin")
    @UsePipes(new ValidationPipe())
    CreateAdmin(@Body() mydto:DoctroInfo):any{
        return this.adminservice.CreateAdmin(mydto);
    }

    
    @Post("addPackage")
    @UsePipes(new ValidationPipe())
    addPackage(@Body() mydto:PackageValid):any{
        return this.adminservice.addPackage(mydto);
    }
    


 }