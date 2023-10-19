import { prisma } from '../db/client.db' 

export const isUniqueName = async ( name:string ):Promise<boolean>=>{
    const category = await prisma.category.findUnique({
        where:{
            name
        }
    })
    return !category;
}