import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,Req,Request,UsePipes, } from "@nestjs/common"
import {DoctorForm} from "./doctorform.dto";
import { DoctorService } from "./doctorservice.service";


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
      return this.doctorService.getDoctorID(id);
    }


    @Get("/findDoctor")
    getDoctorIDName(@Query() qry:any): any {
      return this.doctorService.getDoctorName(qry);
    }  
    @Post("/createDoctor")
    //@UsePipes(new ValidationPipe())
    createDoctor(@Body() mydto:DoctorForm): any {
      return this.doctorService.createDoctor(mydto);
    }
  
    @Put("/updateDoctor/")
   // @UsePipes(new ValidationPipe())
    updateDoctor( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.doctorService.updateDoctor(name, id);
    }
    
    @Put("/updateDoctor/:id")
  updateDoctorid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.doctorService.updateDoctorid(name,id);
    }

    @Delete("/deleteDoctor/:id")
  deleteDoctorid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.doctorService.deleteDoctorid(id);
    }

}