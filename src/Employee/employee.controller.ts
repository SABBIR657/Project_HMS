import { Controller,Body,Delete,Put, Get, Param, ParseIntPipe,Query,Post } from "@nestjs/common"; 
import {EmployeeForm} from "./employeeform.dto";
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

    @Post("/insertEmployee")
    insertEmployee(@Body() mydto:EmployeeForm):any{
        return this.emoloyeeservice.insertEmployee(mydto);
    }

    @Put("/updateEmployee/")
    
    updateEmployee( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.emoloyeeservice.updateEmployee(name, id);
    }
    
    @Put("/updateEmployee/:id")
    updateEmployeebyid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.emoloyeeservice.updateEmployeebyid(name,id);
    }

    @Delete("/deleteEmployee/:id")
    deleteEmployeebyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.emoloyeeservice.deleteEmployeebyid(id);
    }
}
