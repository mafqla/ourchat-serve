import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class GroupMessage {
  static createQueryBuilder(arg0: string) {
    throw new Error('Method not implemented.')
  }
  @PrimaryGeneratedColumn()
  _id: number

  @Column()
  userId: string

  @Column()
  groupId: string

  @Column()
  content: string

  @Column()
  messageType: string

  @Column('double')
  time: number
}
