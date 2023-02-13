import { IsDate, IsNumber, IsString } from "class-validator"
export class addmedicinedto{
    @IsString({message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',}) name: string
     @IsNumber()id: number
     @IsDate()
      expiredate: Date}