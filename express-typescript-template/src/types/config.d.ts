export interface Config {
    enabled: boolean
}

export interface Socket extends Config{
    server: string
    port: number
}
