import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adminmodule } from './Admin/adminmodule.module';
import { DoctorModule } from './Doctor/doctormodule.module';
import { EmployeeModule } from './Employee/employeemodule.module';
import { PatientModule } from './Patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalystModule } from './BuisnessAnalyst/Analyst.module';


@Module({
  imports: [adminmodule,DoctorModule,EmployeeModule, AnalystModule,PatientModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '11223',
      database: 'HMS',
      autoLoadEntities: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
      synchronize: true, 
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
