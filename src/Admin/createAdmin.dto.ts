import { IsString, Length,MinLength ,MaxLength,Matches ,IsEmail, IsNotEmpty} from 'class-validator';

export class AdminInfo{
    
    @IsString()
    @Length(3, 20 ,{message: "must nbe 3 to 20 character"})
    name: string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password will contain 1 upper case, 1 lower case and special character '})
   
    password: string;
    
    @IsNotEmpty()
    @MinLength(6)
    address: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    filename:string;
}