import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adminmodule } from './Admin/adminmodule.module';
import { DoctorModule } from './Doctor/doctormodule.module';


@Module({
  imports: [adminmodule,DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
