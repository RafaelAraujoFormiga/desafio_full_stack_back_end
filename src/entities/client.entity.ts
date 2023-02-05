import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Exclude } from "class-transformer"
import { Contacts } from "./contacts.entity"

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    readonly clientId: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column({ default: true })
    isActive: boolean

    @Column()
    telephone: number

    @Column({ length: 120, })
    @Exclude()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany((type) => Contacts, (contacts) => contacts.client, {
        eager: true
    })
    contacts: Contacts[]
}

export { Client }