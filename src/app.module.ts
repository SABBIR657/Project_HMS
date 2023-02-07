import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adminmodule } from './Admin/adminmodule.module';
import { PatientModule } from './Patient/patient.module';

@Module({
  imports: [adminmodule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
