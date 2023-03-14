import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AnalystDto } from "./Analyst.dto";
import { AnalystEntity } from "./Analyst.entity";

@Injectable()
export class AnalystService{
    constructor(
        @InjectRepository(AnalystEntity)
        private analystRepo: Repository<AnalystEntity>,
    ){}

    insertAnalyst(mydto:AnalystDto):any{
        return this.analystRepo.save(mydto);
    }
    getAdminByAnalystID(id):any{
        return this.analystRepo.find({
            where: {id:id},
            relations: {
                admin: true,
            },
        });
    }
}