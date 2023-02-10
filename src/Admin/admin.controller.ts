import { Controller, Get, Post, Delete, Put, Param, Query, Req, Request, Body, UsePipes, ValidationPipe 
 } from "@nestjs/common";

 import { DTOs } from "./DTOs.dto";
 import { adminservice } from "./adminservice.service";

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
    getPatientByid(@Param("id") id:number,): any{
        return this.adminservice.getPatientByid(id);
    }
    @Get("/patientInfo")
    getPatientInfo(@Query() qry:any):any{
        return this.adminservice. getPatientInfo(qry);
    }
    @Post("/AddDoctor")
     @UsePipes(ValidationPipe)
    addDcotor(@Body() mydto:DTOs):any{
        return this.adminservice.addDoctor(mydto);
    }

 }