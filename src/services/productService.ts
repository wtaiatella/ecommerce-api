import { database } from "@src/adapters/database";
import logger from "@src/adapters/logger";

//export const find = async () => {
//  const categories = await database.category.findMany();

//  return categories;
//};

const find = async (categoryId: string) => {
  const category = await database.category.findUnique({
    where: {
      id: categoryId,
    },
    include: { products: true },
  });

  if (category) {
    return category.products;
  }
  return [];
};

//const findOne = async (productId: string) => {
//	logger.info({ productId });

//	const product = await database.product.findUnique({
//		where: {
//			id: productId
//		},
//	});

//	return product;
//};

const findOne = async (productId: string) => {
  logger.info({ productId });

  const product = await database.product.findUnique({
    where: {
      id: productId,
    },
  });

  return product;
};

export default { find, findOne };
