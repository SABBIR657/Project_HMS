import { IsEmail,IsNotEmpty,IsNumberString  } from "class-validator";



export class DTOs{
    @IsEmail()
    email: string;
    
    @IsNumberString()
    id: number;

    @IsNotEmpty({message: "name cannot be empty"})
    name: string;
}

