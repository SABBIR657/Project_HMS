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
import * as bcrypt from 'bcrypt';
import { updateAdmin } from "./updateAdmin.dto";

@Injectable()
export class adminservice{

    constructor(
        @InjectRepository(AdminEntity)
       
        private adminRepo: Repository<AdminEntity>,
        @InjectRepository(PackageEntity)
       private packageRepo: Repository<PackageEntity>,

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
    UpdateAdmin(name, email):any{
        return this.adminRepo.update({email:email}, {name:name});
    }

    updateAdminbyid(mydto:updateAdmin, id):any{
        return this.adminRepo.update(id,mydto);
    }

    deleteAdminbyid(id):any{
        return this.adminRepo.delete(id);
    }

    addPackage(mydto:PackageValid):any{
        const packageInfo = new PackageEntity()
        packageInfo.packageName = mydto.packageName;
        packageInfo.Price = mydto.Price;
        packageInfo.Category = mydto.Category;
        packageInfo.assignDoctor = mydto.assignDoctor;
        return this.packageRepo.save(packageInfo);
    }
    ViewPackage():any{
        return this.packageRepo.find();
    }
    deletePackage(id): any{
        const package1 = this.packageRepo.delete(id);
        return "package deleted";

    }

    async signup(mydto){
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password= hassedpassed;
        return this.adminRepo.save(mydto);
    }

    async signin(mydto){
        console.log(mydto.password);
    const mydata =  await this.adminRepo.findOneBy({email: mydto.email});
    const isMatch = await bcrypt.compare(mydto.password, mydata.password);
    if(isMatch){
        return 1;
    }
    else{
        return 0;
    }
    }
}