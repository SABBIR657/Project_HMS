import { IsNumber, IsString } from "class-validator"
export class createdoctordto{
    @IsString({message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',}) name: string
     @IsNumber()id: number
     @IsNumber()
      age: number}