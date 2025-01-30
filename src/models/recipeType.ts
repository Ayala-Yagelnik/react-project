
export type Recipe = {
    id?: number,
    title: string,
    description:string,
    ingredients:string[],
    instructions:string,
    authorId:number,
    image?:string,

}