import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller"
import { EmployeeService } from "./employeeservice.service"

@Module({

controllers: [EmployeeController],
providers: [EmployeeService],

})

export class EmployeeModule {}