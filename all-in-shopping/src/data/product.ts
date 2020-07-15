import { CommonCodeInterface } from './commonCode';
interface ProductInterface {
  id: number,
  title: string,
  price: number,
  salePrice: number | null,
  kinds: CommonCodeInterface,
  colorIdList: Array<CommonCodeInterface> | CommonCodeInterface | null,
  sizes: Array<CommonCodeInterface> | CommonCodeInterface | null,
  tags: Array<CommonCodeInterface> | CommonCodeInterface | null
}

export class Product implements ProductInterface {
  id!: number
  title!: string;
  price!: number;
  salePrice!: number | null;
  kinds!: CommonCodeInterface;
  colorIdList!: CommonCodeInterface | CommonCodeInterface[] | null;
  sizes!: CommonCodeInterface | CommonCodeInterface[] | null;
  tags!: CommonCodeInterface | CommonCodeInterface[] | null;

  constructor() {

  }

  createProduct(id: number, title: string, price: number, salePrice: number | null, kinds: CommonCodeInterface, colorIdList: CommonCodeInterface | CommonCodeInterface[] | null,
    sizes: CommonCodeInterface | CommonCodeInterface[] | null, tags: CommonCodeInterface | CommonCodeInterface[] | null
  ) {
    this.id = id
    this.title = title
    this.price = price
    this.salePrice = salePrice
    this.kinds = kinds
    this.colorIdList = colorIdList
    this.sizes = sizes
    this.tags = tags
  }
}