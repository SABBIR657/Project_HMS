import { Controller, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { adminservice } from "./adminservice.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./adminentity.entity"
import { PackageEntity } from "./packageentity.entity";


@Module({
    // imports: [TypeOrmModule.forFeature(AdminEntity)],

    imports: [TypeOrmModule.forFeature([AdminEntity, PackageEntity])],
    
    controllers: [AdminController],
    providers: [adminservice],
})

export class adminmodule{}

