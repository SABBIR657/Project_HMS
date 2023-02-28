import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("patient")
export class PatientEntity{
   
    @PrimaryGeneratedColumn()
    patientid: number;

    @Column()
    patientname: string;

    @Column()
    username: string;

    @Column()
    password: string;

   @Column()
   email: string;

  @Column()
  phone: string;
    address: any;
}
@Entity("lab")
export class LabEntity{
   
    @PrimaryGeneratedColumn()
    testid: number;

    @Column()
    patientname: string;

    @Column()
    username: string;

   @Column()
   email: string;

  @Column()
  testname: string;
}