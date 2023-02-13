import { IsNotEmpty,IsNumber,IsString,MinLength,MaxLength, Matches } from "class-validator";
export class PatientForm{

    @IsNotEmpty({message: "Please provide your username name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)
    username: string;

    @IsNotEmpty()
    @IsNumber()

    patientid: number;

    @IsNotEmpty({message: "Please provide your name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)

    patientname: string;

    @IsNotEmpty({message: "Please provide your email"})
    @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

    email: string;

    
    @IsNotEmpty({message: "Please provide your phone number"})

    @Matches(/^(?:(?:\+|00)88|01)?\d{11}$/)

    phone: string;

}
export class PatientFormlab{

    @IsNotEmpty({message: "Please provide your username name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)
    
    username: string;

    @IsNotEmpty()
    @IsNumber()

    testid: number;

    @IsNotEmpty({message: "Please provide your name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)

    patientname: string;

    @IsNotEmpty({message: "Please provide your email"})
    @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

    email: string;

    @IsNotEmpty({message: "Please provide the test name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)

    testname: string;

}