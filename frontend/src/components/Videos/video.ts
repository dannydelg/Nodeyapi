export interface Video {
    
    title: string,
    description: string,
    url: string,
    _id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    skip?:number,
    limit?:number 
        

}
