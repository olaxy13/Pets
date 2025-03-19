/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDogDto {
    @IsString()
    @IsString()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    breed: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsBoolean()
    @IsNotEmpty()
    isVaccinated: boolean;
    
    @IsBoolean()
    @IsNotEmpty()
    isNeutered: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isHouseTrained: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isDeclawed: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isSpecialNeeds: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isAdopted: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isAvailable: boolean;

}
