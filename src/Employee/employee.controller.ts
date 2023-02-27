import { Controller,Body,Delete,Put, Get, Param, ParseIntPipe,Query,Post,UsePipes,ValidationPipe } from "@nestjs/common"; 
import {EmployeeForm,EmployeeLogin,EmployeeRegistration,EmployeeInsert,UpdateEmployee,DeleteEmployee} from "./employeeform.dto";
import { EmployeeService} from "./employeeservice.service";


@Controller("/Employee")

export class EmployeeController
{
    constructor (private emoloyeeservice:EmployeeService){}
    @Get("/index")
    getEmployee():any{
        return this.emoloyeeservice.getIndex();
    }

    @Get("/:id")
    getUserById(@Param("id",ParseIntPipe) id:number):any{
        return this.emoloyeeservice.getUserByID(id);
    }

    @Get("/finduser")
    getUserByName(@Query() qry:any): any{
        return this.emoloyeeservice.getUserByName(qry);
    }
    @Get("/patientList")
    getPatientList():any{
      return this.emoloyeeservice.getPatientList();
    }

    @Post("/insertEmployee")
    @UsePipes(new ValidationPipe())
    insertEmployee(@Body() mydto:EmployeeInsert):any{
        return this.emoloyeeservice.insertEmployee(mydto);
    }

    @Post("/loginEmployee")
    @UsePipes(new ValidationPipe())
    loginEmployee(
      @Body() mydto:EmployeeLogin
    ) : any {
      return this.emoloyeeservice.loginEmployee(mydto);
    }

    @Post("/registration")
    @UsePipes(new ValidationPipe())
    registrationEmp(
      @Body() mydto:EmployeeRegistration
    ): any {
      return this.emoloyeeservice.registrationEmp(mydto);
    }

    @Put("/updateEmployee/")
    @UsePipes(new ValidationPipe())
    updateEmployee( 
      @Body("name") name:string, 
      @Body("id") id:number,
      mydto:UpdateEmployee
      ): any {
    return this.emoloyeeservice.updateEmployee(mydto);
    }
    
    @Put("/updateEmployee/:id")
    @UsePipes(new ValidationPipe())
    updateEmployeebyid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.emoloyeeservice.updateEmployeebyid(name,id);
    }

    @Delete("/deleteEmployee/:id")
    deleteEmployeebyid( 
     @Param("id", ParseIntPipe) id:number,
     mydto:DeleteEmployee
      ): any {
    return this.emoloyeeservice.deleteEmployeebyid(mydto);
    }
}
