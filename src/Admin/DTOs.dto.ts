import { IsEmail,IsNotEmpty,IsNumberString  } from "class-validator";



export class DTOs{
    @IsEmail()
    email: string;
    
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    name: string;
}