//usar class validator
export class UserRepositoryDto{
    id:string
    name:string
    age:number
    
    constructor(id:string, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

export class UserIdDto{
    id:string

    constructor(id:string){
        this.id = id;
    }
}

export class UserUpdateDto{
    id:string
    name?:string
    age?:number
    
    constructor(id:string, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

export class UserInsertDto{
    name:string
    age:number
    
    constructor(id:string, name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

