import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, Length } from "class-validator";


export class EmployeeForm {   
   
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message: "Please enter your id"})
    @Length(3,8)
    name: string;
    patientid: number;
    patientname: string;
    username: string;
}

export class EmployeeLogin {
    @IsNotEmpty({message: "Please insert your name"})
    @IsString({message: "Name here string type"})
    name: string;

    @IsNotEmpty({message: "Please insert your password"})
    @IsStrongPassword()
    password: string;
}

export class EmployeeRegistration {
    @IsNotEmpty({message: "Please insert your name"})
    @Length(3,20)
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({message: "Please insert your password"})
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty({message: "Please insert your password"})
    @Length(3,30)
    @IsString({message: "Address here string type"})
    address: string;
}

export class EmployeeInsert {
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message: "Name must be insert"})
    @Length(3,20)
    @IsString({message: "Name here string type"})
    name: string;
}

export class UpdateEmployee {
    @IsNotEmpty({message: "Id can not be empty"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message: "Please enter your name"})
    @Length(3,8)
    name: string;
}

export class DeleteEmployee {
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    id: number;
}