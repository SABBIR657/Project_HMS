import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import { query } from "express";
import { AdminInfo } from "./createAdmin.dto";
import { DoctorInfo } from "./doctorInfo.dto";
import { DTOs } from "./DTOs.dto";
import { PackageValid } from "./PackageValid.dto";
import { AdminEntity, DoctorEntity } from "./adminentity.entity";
import { Repository } from 'typeorm';

@Injectable()
export class adminservice{

    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepo: Repository<DoctorEntity>,
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
        const doctorInfo = new AdminEntity()
        doctorInfo.name = mydto.name;
        doctorInfo.email = mydto.email;
        doctorInfo.password = mydto.password;
        doctorInfo.address = mydto.address;
        return this.doctorRepo.save(doctorInfo);
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