
import { IsEmail,IsNotEmpty,IsNumberString, Length  } from "class-validator";
export class PackageValid{
    
    @IsNotEmpty({message: "give a proper name"})
    packageName : string;
    
    @IsNumberString()
    Price: string;
    
    @IsNotEmpty()
    @Length(3,20, {message: "must be 3 to 20 character"})
    assignDoctor: string;
    
    @IsNotEmpty()
    Category: string;


}