import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adminmodule } from './Admin/adminmodule.module';
import { DoctorModule } from './Doctor/doctormodule.module';
import { EmployeeModule } from './Employee/employeemodule.module';
import { PatientModule } from './Patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [adminmodule,DoctorModule,EmployeeModule, PatientModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '105138',
      database: 'HMS',
      autoLoadEntities: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
      synchronize: true, 
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
