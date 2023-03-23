import { Controller, Get, Post, Delete, Put, Param, Query, Req, Request, Body, UsePipes, ValidationPipe, ParseIntPipe, UploadedFile,
    UseInterceptors,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
    Session,
    UnauthorizedException,
    UseGuards
 } from "@nestjs/common";

 import {  DTOs } from "./DTOs.dto";
 import { AdminInfo} from "./createAdmin.dto";
 import { updateAdmin } from "./updateAdmin.dto";
 import { adminservice } from "./adminservice.service";
 import { PackageValid } from "./PackageValid.dto";

 import {diskStorage} from 'multer';
import { FileInterceptor } from "@nestjs/platform-express";
import { AnalystDto } from "src/BuisnessAnalyst/Analyst.dto";
import { AnalystService } from "src/BuisnessAnalyst/Analyst.service";
import session from "express-session";
import { SessionGuard } from "./session.guard";


 @Controller('/admin')
 export class AdminController
 {
    constructor(private adminservice: adminservice,
        private analystService: AnalystService){ }

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
    @Post("/addDoctor")
     @UsePipes(new ValidationPipe())
    addDcotor(@Body() mydto:AdminInfo):any{
        return this.adminservice.addDoctor(mydto);
    }
    @Put("/UpdateDoctor")
    @UsePipes(new ValidationPipe())
    UpdateEmployee(@Body('name')name: string, @Body('id') id: number): any{
        return this.adminservice. UpdateDoctor(name,id);
    }



    @Post("/createAdmin")
    @UsePipes(new ValidationPipe())
    CreateAdmin(@Body() mydto:AdminInfo):any{
        return this.adminservice.CreateAdmin(mydto);
    }

    @Put("/UpdateAdmin")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    UpdateAdmin(@Session() session,  @Body('name')name: string):any{
       console.log(session.email);
       return this.adminservice.UpdateAdmin(name, session.email);
    }
    
    

    @Put("/updateadmin/:id")
    @UsePipes(new ValidationPipe())
    updateAdminbyid(
        @Body() mydto: updateAdmin,
        @Param('id', ParseIntPipe) id: number,
    ): any{
        return this.adminservice.updateAdminbyid(mydto, id);
    }
    
    @Delete("/deleteadmin/:id")
    deleteAdminbyid(@Param("id", ParseIntPipe)id: number):any{
        return this.adminservice.deleteAdminbyid(id);
    }

    @Post("/insertAnalyst")
    @UsePipes(new ValidationPipe())
    insertAnalyst(@Body() Analyst: AnalystDto):any{
        return this.analystService.insertAnalyst(Analyst);
    }

    @Get("/findAnalystbyAdmin/:id")
    getAnalystByAdminID(@Param('id', ParseIntPipe)id: number):any{
        return this.adminservice.getAnalystByAdminID(id);
    }

    @Get("/findadminbyanalyst/:id")
    getAdmintByAnalystID(@Param('id', ParseIntPipe) id: number):any{
        return this.analystService.getAdminByAnalystID(id);
    }

    
    @Post("/addPackage")
    @UsePipes(new ValidationPipe())
    addPackage(@Body() mydto:PackageValid):any{
        return this.adminservice.addPackage(mydto);
    }

    @Get("/ViewPackage")
    ViewPackage(): any{
        return this.adminservice.ViewPackage();
    }

    @Delete("/deletePackage/:id")
   public async deletePackagebyid(
        @Param('id') id:number){
            const package1 = await this.adminservice.deletePackage(id);
        }
    
    @Post("/signup")
    @UseInterceptors(FileInterceptor('filename',
    {storage: diskStorage({
        destination: './uploads',
        filename: function(req, file, cb){
            cb(null,Date.now()+file.originalname)
        }
    })
}))

signup(@Body() mydto:AdminInfo, @UploadedFile(new ParseFilePipe({
    validators: [
        new MaxFileSizeValidator({maxSize: 1600000}),
        new FileTypeValidator({fileType: 'png|jpg|jpeg'}),
    ],
}),) file: Express.Multer.File){
     mydto.filename = file.filename;

     return this.adminservice.signup(mydto);
     console.log(file)
}

    

    @Get('/signin')
   signin(@Session() session, @Body() mydto:AdminInfo)
{
if(this.adminservice.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}

else
{
  return {message:"invalid credentials"};
}
 
}

@Post("/sendMail")
sendEmail(@Body() mydata)
{
    return this.adminservice.sendEmail(mydata);
}

@Get("/signout")
signout(@Session() session)
{
    if(session.destroy)
    {
        return {message: "you are logged out"}
    }
    else
    {
        throw new UnauthorizedException("invalid actions");
    }
}

    
    
    




 }