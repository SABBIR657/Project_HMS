import { IsNotEmpty, IsInt, Length } from "class-validator";

export class updateAdmin{
    @Length(3,8)
    name: string;
}