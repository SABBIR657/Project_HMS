import { Module } from "@nestjs/common";
import { DoctorController } from "./doctor.controller"
import{ DoctorService} from "./doctorservice.service"

@Module({

controllers: [DoctorController],
providers: [DoctorService],

})

export class DoctorModule {}