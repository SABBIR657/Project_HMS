import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import { query } from "express";
import { AdminInfo } from "./createAdmin.dto";
import { DoctorInfo } from "./doctorInfo.dto";
import { DTOs } from "./DTOs.dto";
import { PackageValid } from "./PackageValid.dto";
import { AdminEntity} from "./adminentity.entity";
import { Repository } from 'typeorm';

@Injectable()
export class adminservice{

    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>
    ){}
    getIndex():any{
        return this.adminRepo.find();
    }
    getPatientByid(id):any{
        return this.adminRepo.findOneBy({id});
    }
    getPatientInfo(qry):any{
        return this.adminRepo.findOneBy({id:qry.id,name:qry.name});
    }
    addDoctor(mydto:DoctorInfo):any{
    }
    UpdateDoctor(name, id):any{
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
    }

    CreateAdmin(mydto:AdminInfo):any{
        const adminInfo = new AdminEntity()
       adminInfo.name = mydto.name;
       adminInfo.email = mydto.email;
       adminInfo.password = mydto.password;
       adminInfo.address = mydto.address;
       return this.adminRepo.save(adminInfo);
    }

    addPackage(mydto:PackageValid):any{
        return "package added";
    }
}