import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import { EmployeeForm,EmployeeLogin,EmployeeRegistration,EmployeeInsert,UpdateEmployee,DeleteEmployee } from "./employeeform.dto";
import { EmployeeEntity } from "./employeeentity.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity)
        private EmployeeRepo: Repository<EmployeeEntity>
    ){}

    getIndex():string {
        return "Employee Index";
    }

    getUserByID(id):any{
        return "The id is "+id;
    }

    getUserByName(qry):any {
    
        return "the id is "+qry.id +" and name is "+qry.name;
    }

    getPatientList():any {
        return "patient list";
    }
    
    insertUser(mydto:EmployeeForm):any {
        
        return "Employee Inserted name: " + mydto.name+" and id is " + mydto.id;
    }

    loginEmployee(mydto:EmployeeLogin) :any {
        return "name: "+mydto.name+ " password: " +mydto.password;
    }
    registrationEmp(mydto:EmployeeRegistration): any {
        const EmployeeRegistration = new EmployeeEntity()
        EmployeeRegistration.name = mydto.name;
        EmployeeRegistration.email = mydto.email;
        EmployeeRegistration.phone = mydto.phone;
        EmployeeRegistration.address = mydto.address;
        return this.EmployeeRepo.save(EmployeeRegistration);
    }

    insertEmployee(mydto:EmployeeInsert):any{
        return "Employee name: "+mydto.name+ "and id is: "+mydto.id;
    }

        
    updateEmployee(mydto:UpdateEmployee):any {
        return "Employee updated name: " +mydto.name+" and id is " +mydto.id;
    }

    updateEmployeebyid(name,id):any {
        return "Update Employee where id " +id+" and change name to " +name;
    }

    deleteEmployeebyid(mydto:DeleteEmployee):any {

        return "Delete id is "+mydto.id;
    }

}