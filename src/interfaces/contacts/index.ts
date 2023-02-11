export interface IContactRequest {
    name: string
    emailContact: string
    telephone: string
}
export interface IContact {
    contactId: string
    name: string
    emailContact: string
    telephone: string
    createdAt: Date
    updatedAt: Date
}
export interface IContactUpdate {
    name?: string
    emailContact?: string
    telephone?: string
}
