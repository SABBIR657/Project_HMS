import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnalystEntity } from "./Analyst.entity";


@Module({
    imports: [TypeOrmModule.forFeature([AnalystEntity])],
    controllers: [],
    providers:[],
})

export class AnalystModule{}