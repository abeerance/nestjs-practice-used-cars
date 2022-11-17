import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// By convention only the User class doesn't have the Entity name added behind it
@Entity()
export class User {
  // primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
