import { Controller, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { adminservice } from "./adminservice.service";

@Module({
    controllers: [AdminController],
    providers: [adminservice],
})

export class adminmodule{}

