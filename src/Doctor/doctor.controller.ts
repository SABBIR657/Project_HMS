import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,Req,Request,UsePipes,ValidationPipe } from "@nestjs/common"
import {DoctorForm} from "./doctorform.dto";
import { DoctorService } from "./doctorservice.service";
import{createdoctordto} from "./createdoctordto.dto";
import {updatedoctordto} from "./updatedoctordto.dto";
import{addmedicinedto} from "./addmedicinedto.dto";
import { delatedoctordto} from "./delatedoctordto.dto";


@Controller("/doctor")
export class DoctorController
{ 
  constructor(private doctorService: DoctorService){}

  @Get("/index")
    getDoctor(): any { 
        return this.doctorService.getIndex();
    }
    @Get("/find/:id")
    getDoctorID(@Param("id", ParseIntPipe) id:number,): any {
      console.log(typeof id);
      return this.doctorService.getDoctorID(id);
    }


    @Get("/findDoctor")
    getDoctorIDName(@Query() qry:any): any {
      return this.doctorService.getDoctorName(qry);
    }  
    @Post("/createDoctor")
    @UsePipes(new ValidationPipe())
    createDoctor(@Body() mydto:createdoctordto): any {
      return this.doctorService.createDoctor(mydto);
    }

    @Post("/addMedicine")
    @UsePipes(new ValidationPipe())
    addMedicine(@Body() mydto:addmedicinedto): any {
      return this.doctorService.addMedicine(mydto);
    }
  
    @Put("/updateDoctor/")
    @UsePipes(new ValidationPipe())
    updateDoctor( 
      @Body("name") name:string, 
      @Body("id") id:number,
      mydto:updatedoctordto) : any {
    return this.doctorService.updateDoctor(name, id);
    }
    
    @Put("/updateDoctor/:id")
    @UsePipes(new ValidationPipe())
  updateDoctorid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number,
      mydto:updatedoctordto
      ): any {
    return this.doctorService.updateDoctorid(name,id);
    }

    @Delete("/deleteDoctor/:id")
    @UsePipes(new ValidationPipe())
  deleteDoctorid( 
     @Param("id", ParseIntPipe) id:number,mydto:delatedoctordto
      ): any {
    return this.doctorService.deleteDoctorid(id);
    }

}