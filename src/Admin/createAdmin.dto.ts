import { IsString, Length,MinLength ,MaxLength,Matches ,IsEmail} from 'class-validator';

export class DoctroInfo{
    
    @IsString()
    @Length(3, 20 ,{message: "must nbe 3 to 20 character"})
    username: string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password will contain 1 upper case, 1 lower case and special character '})
   
    password: string;
    
    @MinLength(11)
    contact: string;
    
    @IsEmail()
    email: string;
}