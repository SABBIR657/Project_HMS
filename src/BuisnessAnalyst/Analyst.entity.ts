import { AdminEntity } from "src/Admin/adminentity.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("Analyst")
export class AnalystEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    address: string;

    @ManyToOne(() => AdminEntity,(admin)=> admin.analysists)
    admin: AdminEntity
}