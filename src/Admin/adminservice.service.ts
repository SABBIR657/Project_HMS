import { Injectable } from "@nestjs/common";
import { query } from "express";
import { DoctroInfo } from "./createAdmin.dto";
import { DTOs } from "./DTOs.dto";
import { PackageValid } from "./PackageValid.dto";

@Injectable()
export class adminservice{
    getIndex():string{
        return "this is homepage";
    }
    getPatientByid(id):any{
        return "patient id is"+id;
    }
    getPatientInfo(qry):any{
        return "this id is" +qry.id+"and name is "+qry.name;
    }
    addDoctor(mydto:DTOs):any{
        return "Doctor inserted name: " + mydto.name+"id is: " +mydto.id + "email is: "+mydto.email;
    }
    UpdateEmployee(name, id):any{
       // console.log(name+id);
        return  "Employee updated id " +id+" and change name to " +name;
    }

    CreateAdmin(mydto:DoctroInfo):any{
        return "Admin created" + mydto.username +
        mydto.contact+ mydto.email+mydto.password;
    }

    addPackage(mydto:PackageValid):any{
        return "package added";
    }
}