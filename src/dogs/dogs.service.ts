/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './entities/dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}

 async create(createDogDto: CreateDogDto) {
  const newDog = this.dogsRepository.create(createDogDto);
  const savedDog = await this.dogsRepository.save(newDog);
  return savedDog
  }

 async findAll() { 
  const allDogs = await this.dogsRepository.find();
  return  allDogs;
  }

 async findOne(id: number) {
   const dog = await this.dogsRepository.findOne({
    where: {id}
   });
   if (!dog) {
      return `Dog with id ${id} not found`;
    }
    return dog;
  }

 async update(id: number, updateDogDto: UpdateDogDto) {
  const findDog = await this.dogsRepository.findOneBy({ id });
  if(!findDog) {
    return `Dog with id ${id} not found`;
  }
  const updateDog = await this.dogsRepository.update(id, updateDogDto);
    return updateDog
  }

 async remove(id: number) {
    const findDog = await this.dogsRepository.findOne({
      where: {id}
    })
    if(!findDog) {
      return `The Dog id ${id} you're tryin to delete doest not exist`
    }
    const deleteDog = await this.dogsRepository.delete(id)
    return  deleteDog
  }
}
