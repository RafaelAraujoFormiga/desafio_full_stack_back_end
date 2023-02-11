export interface IClientRequest {
    name: string
    email: string
    telephone: string
    password: string
}
export interface IClient {
    clientId: string
    name: string
    email: string
    telephone: string
    isActive?: boolean
    createdAt: Date
    updatedAt: Date
}
export interface IClientLogin {
    email: string
    password: string
}
export interface IClientUpdate {
    name?: string
    email?: string
    telephone?: string
    password?: string
}
