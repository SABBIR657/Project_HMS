
import { IsEmail,IsNotEmpty,IsNumberString  } from "class-validator";
export class PackageValid{
    
    @IsNotEmpty({message: "give a proper name"})
    packageName : string;
    
    @IsNumberString()
    Price: string;


}