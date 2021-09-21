import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
  dest: './tmp',
});
const categoryRoutes = Router();

categoryRoutes.post('/', (request, response) => {
  console.log('oi');
  return createCategoryController.handle(request, response);
});

categoryRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoryRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoryRoutes };
