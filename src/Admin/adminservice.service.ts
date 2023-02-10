import { Injectable } from "@nestjs/common";
import { query } from "express";
import { DTOs } from "./DTOs.dto";

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
}