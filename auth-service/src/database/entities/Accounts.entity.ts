import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('accounts')
export class AccountEntity {
  @PrimaryColumn({ type: 'bigint', nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'varchar', nullable: true })
  remember_token: string;

  @Column({ type: 'int', default: 0 })
  is_admin: number;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at?: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: string;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: string;
}
