import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./employee.controller"
import { EmployeeEntity } from "./employeeentity.entity";
import { EmployeeService } from "./employeeservice.service"


@Module({

imports: [TypeOrmModule.forFeature([EmployeeEntity])],
controllers: [EmployeeController],
providers: [EmployeeService],

})

export class EmployeeModule {}