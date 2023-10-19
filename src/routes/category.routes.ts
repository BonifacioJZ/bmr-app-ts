import { Router } from "express";
import { getAllCategories, createCategory } from "../controllers/category.controller";
import { BASE_API_URL } from "../const";

export const router = Router()

router.get(`${BASE_API_URL}category/`, getAllCategories)
router.get('/test/', createCategory)