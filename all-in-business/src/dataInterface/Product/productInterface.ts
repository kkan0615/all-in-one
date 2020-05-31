import { CommonCodeInterface } from '@/dataInterface/commonCode'
import { filterCommonCode, findCommonCode } from '@/dataInterface/data/commonData'
import { TagInterface, Tags } from './tag'
import { ProductImageInterface, filterProductImages } from './productImageInterface'
import { getRandomValue } from '@/utils/testUtils/arrayUtil'

export interface ProductInterface {
  id: number,
  images: Array<ProductImageInterface> | ProductImageInterface | null,
  title: string,
  price: number | string,
  salePrice: number | string | null,
  rating: number,
  kinds: CommonCodeInterface,
  subKinds: Array<CommonCodeInterface> | CommonCodeInterface | null
  colors: Array<CommonCodeInterface> | CommonCodeInterface | null,
  sizes: Array<CommonCodeInterface> | CommonCodeInterface | null,
  tags: Array<TagInterface> | TagInterface | null
}

export let Products: Array<ProductInterface> = [
  {
    id: 0,
    images: filterProductImages(0),
    title: 'Hodie Test',
    price: 23.99,
    salePrice: 20.99,
    rating: 5,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  },
  {
    id: 1,
    images: filterProductImages(1),
    title: 'Hodie Test1',
    price: 45000.59,
    salePrice: 29000.00,
    rating: 3,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  },
  {
    id: 2,
    images: filterProductImages(2),
    title: 'Hodie Test2',
    price: 45000,
    salePrice: 29000,
    rating: 5,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  },
  {
    id: 3,
    images: filterProductImages(3),
    title: 'Hodie Test2',
    price: 45000,
    salePrice: 29000,
    rating: 5,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  },
  {
    id: 4,
    images: filterProductImages(4),
    title: 'Hodie Test2',
    price: 45000,
    salePrice: 29000,
    rating: 5,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  },
  {
    id: 5,
    images: filterProductImages(5),
    title: 'Hodie Test2',
    price: 45000,
    salePrice: 29000,
    rating: 5,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('color', null)),
    sizes: getRandomValue(filterCommonCode('size', null)),
    tags: Tags
  }
]

export function createProduct(id: number):ProductInterface {
  const rating = Math.floor(Math.random() * 5)
  const product = {
    id: id,
    images: null,
    title: `Created Product ${id}`,
    price: 30000,
    salePrice: 15000,
    rating,
    kinds: findCommonCode('kinds', 'clothes'),
    subKinds: getRandomValue(filterCommonCode('subKinds', null)),
    colors: getRandomValue(filterCommonCode('colors', null)),
    sizes: getRandomValue(filterCommonCode('sizes', null)),
    tags: Tags
  }
  return product
}

export function renewProducts(products: Array<ProductInterface>) {
  Products = JSON.parse(JSON.stringify(products))
}
