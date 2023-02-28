import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { LabEntity, PatientEntity } from './patiententity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity, LabEntity])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}