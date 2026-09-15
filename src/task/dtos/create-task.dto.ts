import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createTaskDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

