import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adminmodule } from './Admin/adminmodule.module';
import { DoctorModule } from './Doctor/doctormodule.module';
import { EmployeeModule } from './Employee/employeemodule.module';


@Module({
  imports: [adminmodule,DoctorModule,EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
