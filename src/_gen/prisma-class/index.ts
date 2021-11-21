import { Company as _Company } from './company'
import { Products as _Products } from './products'

export namespace PrismaModel {
	export class Company extends _Company {}
	export class Products extends _Products {}

	export const extraModels = [
		Company, Products
	]
}