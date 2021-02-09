export interface Repository {
    save(model:string): Promise<void>
    exists(model:string): Promise<boolean>
}
