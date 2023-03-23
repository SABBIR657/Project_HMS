import { Controller, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { adminservice } from "./adminservice.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./adminentity.entity"
import { PackageEntity } from "./packageentity.entity";

import { AnalystService } from "src/BuisnessAnalyst/Analyst.service";
import { AnalystEntity } from "src/BuisnessAnalyst/Analyst.entity";
import { MailerModule } from "@nestjs-modules/mailer/dist";


@Module({
    // imports: [TypeOrmModule.forFeature(AdminEntity)],
    imports: [
        MailerModule.forRoot({
            transport:{
                host: 'smtp.gmail.com',
                port: 465,
                ignoreTLS: true,
                secure: true,
                auth:{
                    user: 'bondonaiub@gmail.com',
                    pass: 'azdejiwlpxcizdhc'
                },
            }
        }),
        TypeOrmModule.forFeature([AdminEntity, PackageEntity, AnalystEntity])
        
    ],

    //imports: [TypeOrmModule.forFeature([AdminEntity, PackageEntity, AnalystEntity])],
    
    controllers: [AdminController],
    providers: [adminservice, AnalystService],
})

export class adminmodule{}

