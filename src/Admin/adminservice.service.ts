import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import { query } from "express";
import { AdminInfo } from "./createAdmin.dto";
import { DoctorInfo } from "./doctorInfo.dto";
import { DTOs } from "./DTOs.dto";
import { PackageValid } from "./PackageValid.dto";
import { AdminEntity } from "./adminentity.entity";
import { Repository } from 'typeorm';
import { PackageEntity } from "./packageentity.entity";

@Injectable()
export class adminservice{

    constructor(
        @InjectRepository(AdminEntity)
       // @InjectRepository(PackageEntity)
        private adminRepo: Repository<AdminEntity>,
       // private packageRepo: Repository<PackageEntity>

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
       //will return here
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
    UpdateAdmin(name, id):any{
        return this.adminRepo.update(id,{name: name});
    }

    addPackage(mydto:PackageValid):any{
        const packageInfo = new PackageEntity()
        packageInfo.packageName = mydto.packageName;
        packageInfo.Price = mydto.Price;
        packageInfo.Catagory = mydto.Category;
        packageInfo.assignDoctor = mydto.assignDoctor;
       // return this.packageRepo.save(packageInfo);
    }
}