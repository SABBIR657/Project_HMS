import { Entity, Column, PrimaryGeneratedColumn }from 'typeorm';
@Entity("Doctor")
export class ServiceEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()name: string;
    @Column()email: string;
    @Column()address: string;
}