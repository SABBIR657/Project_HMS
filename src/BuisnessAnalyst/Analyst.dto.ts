import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class AnalystDto{
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(4,8)
    password: string;

    address:string;

    adminid: number;
}