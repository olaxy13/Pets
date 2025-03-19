/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;

    @Column()
    price: number;

    @Column()
    color: string;

    @Column({ default: false })
    isVaccinated: boolean;

    @Column({ default: false })
    isNeutered: boolean;

    @Column({ default: false })
    isHouseTrained: boolean;

    @Column({ default: false })
    isDeclawed: boolean;

    @Column({ default: false })
    isSpecialNeeds: boolean;

    @Column({ default: false })
    isAdopted: boolean;

    @Column({ default: true })
    isAvailable: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

