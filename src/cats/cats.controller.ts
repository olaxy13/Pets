/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable prettier/prettier */
 
/* eslint-disable prettier/prettier */
 
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */ 
/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
async create(@Body()  CreateCatDto: CreateCatDto) {
 await this.catsService.create(CreateCatDto);
}

@Get()
 async getAll(): Promise<Cat[]> {
  return await this.catsService.findAll();
}

//     service: any;
//     @Post()
//     create(@Body() validation: CreateCatDto,): string {
//         return 'This action adds a new cat';
//     }

//     @Get("")
//     @HttpCode(200)
//     findAll(@Req() req: Request): string {
//         return 'This action returns all cats';
//     }
    
//     @Get("abcd/*")
//     @Redirect('https://tfpdl.se/category/movies/', 301)
//     redirect() { "This is a redirect" }
  
//     @Get("errors")
//     async findAllError() {
//       try {
//         await this.service.findAll()
//       } catch (error) {
       
// throw new BadRequestException('Something bad happened', {
//   cause: new Error(),
//   description: 'Some error description',
// });
 
//       }
//     }

    
// @Get("error")
// findAllErrors() {
//  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
// } 

    
// @Get(':id')
// findOne(@Param() params: any): string {
//   console.log("PARAMS",params.id);
//   return `This action returns a #${params.id} cat`;
// }

// @Get(':id')
// findOneByID(@Param("id") id: any): string {
//   console.log("PARAMS",id);
//   return `This action returns a #${id} cat`;
// }


// @Get()
//  findAllQuery(@Query('age') age: number, @Query('breed') breed: string) {
//   return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
// }




 


 

}
