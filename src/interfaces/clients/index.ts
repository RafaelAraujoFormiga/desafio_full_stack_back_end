export interface IClientRequest {
    name: string
    email: string
    telephone: number
    password: string
}
export interface IClient {
    clientId: string
    name: string
    email: string
    telephone: number
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
    telephone?: number
    password?: string
}
