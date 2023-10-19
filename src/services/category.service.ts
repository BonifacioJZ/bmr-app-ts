import { prisma } from '../db/client.db'
import { Category, NewCategory } from '../schemas/category'


/**
 * The above function retrieves all categories from a database and returns them as an array of Category
 * objects.
 * @returns an array of objects of type `Category`. Each object in the array has properties `id`,
 * `name`, `description`, and `guard_name`.
 */
export const getAll = async ():Promise<Category[]> => {
    try {
        const categories = await prisma.category.findMany()
        return categories.map(({id,name,description,guard_name})=>{
            return {
                id,
                name,
                description,
                guard_name
            }
        })
    } catch (error) {
        console.error(error)
        return []
    }
}

export const create = async ( newCategory:NewCategory ): Promise<Category> =>{
    const category = await prisma.category.create({
        data:newCategory
    })
    return category;

}