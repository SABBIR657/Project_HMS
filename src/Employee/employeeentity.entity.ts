import { Entity, Column, PrimaryGeneratedColumn, OneToMany,BaseEntity } from 'typeorm';

@Entity("employee")
export class EmployeeEntity{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   @Column()
   email: string;

  @Column()
  phone: string;

  @Column()
  address: string;




}