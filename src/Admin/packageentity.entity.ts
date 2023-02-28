import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("package")
export class PackageEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    packageName: string;

    @Column()
    Price: string;

    @Column()
    assignDoctor: string;

    @Column()
    Catagory: string;
    
}
