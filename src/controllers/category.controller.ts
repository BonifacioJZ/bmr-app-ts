import { Request, Response } from "express";
import { getAll } from "../services/category.service"
import { isUniqueName } from "../validations/validations.category";

export const getAllCategories = async( _req:Request, res:Response )=>{
    try {
        const categories = await getAll()
        return res.status(200).json(categories);
    }
    catch (error) {
        return res.status(500).json(`Error internal server ${error}`)
    }
}

export const createCategory=async ( _req:Request, res:Response ) => {
    const result = await isUniqueName("data");
    return res.status(200).json(result)
}