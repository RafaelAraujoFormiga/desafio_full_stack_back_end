export interface IContactRequest {
    name: string
    emailContact: string
    telephone: number
}
export interface IContact {
    contactId: string
    name: string
    emailContact: string
    telephone: number
    createdAt: Date
    updatedAt: Date
}
export interface IContactUpdate {
    name?: string
    emailContact?: string
    telephone?: number
}
