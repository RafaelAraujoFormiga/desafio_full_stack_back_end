import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm"
import { Client } from "./client.entity"

@Entity('contacts')
class Contacts {
    @PrimaryGeneratedColumn('uuid')
    readonly contactId: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60 })
    emailContact: string

    @Column()
    telephone: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne((type) => Client)
    client?: Client
}

export { Contacts }