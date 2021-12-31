import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
  @PrimaryColumn('char', { length: 4, nullable: false })
  id: number;

  @Column({ type: 'int', nullable: false })
  position_id: number;

  @Column('varchar', { length: 32, nullable: true })
  department_code: string;

  @Column({ type: 'int', nullable: false })
  account_id: number;

  @Column('varchar', { length: 32, nullable: false })
  job_title_code: string;

  @Column('varchar', { length: 32, nullable: false })
  company_code: string;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('varchar', { length: 20, nullable: true })
  phone: number;

  @Column('varchar', { length: 20, nullable: true })
  phone_family: number;

  @Column('varchar', { length: 255, nullable: true })
  address: string;

  @Column('varchar', { length: 255, nullable: true })
  current_address: string;

  @Column('tinyint', { nullable: true })
  gender: number;

  @Column('date', { nullable: true })
  birthDay: Date;

  @Column('varchar', { length: 255, nullable: true })
  other_email: string;

  @Column('varchar', { length: 20, nullable: true })
  identity_number: string;

  @Column('date', { nullable: true })
  identity_card_date: Date;

  @Column('varchar', { length: 255, nullable: true })
  identity_card_place: string;

  @Column('varchar', { length: 20, nullable: true })
  insurance_number: string;

  @Column('varchar', { length: 255, nullable: true })
  image_url: string;

  @Column('float', { default: 0, nullable: false })
  number_of_days_leave: number;

  @Column('varchar', { length: 255, nullable: true })
  link_facebook: string;

  @Column('varchar', { length: 45, nullable: true })
  nation: string;

  @Column('varchar', { length: 45, nullable: true })
  nationality: string;
  
  @Column('tinyint', { nullable: true })
  level: number;
  
  @Column('tinyint', { nullable: true })
  japanese_level: number;
  
  @Column('varchar', { length: 64, nullable: true })
  work_type: string;
  
  @Column('varchar', { length: 20, nullable: true })
  visa_card_number: string;
  
  @Column('date', { nullable: true })
  visa_date_period: Date;

  @Column('varchar', { length: 255, nullable: true })
  university_name: string;
  
  @Column('tinyint', { default: 1, nullable: true })
  type_of_work_time: number;

  @Column('date', { nullable: false })
  join_date: Date

  @Column('date', { nullable: true })
  resignation_date: Date
  
  @Column('text', { nullable: true })
  resignation_reason: Date
  
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at?: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: string;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: string;
}
