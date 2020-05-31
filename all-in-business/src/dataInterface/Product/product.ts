/**
 * Collection of interfaces about product
 */
export interface ProductInterface {
  id:number
  images:Array<PrdouctImagesInterface>
  title:string
  price:number
  salePrice:number
  rating:number
  status:StatusInterface
  stock: number
  hot:boolean
  kinds:KindsInterface
  extendKinds: Array<ExtendKindsInterface>
  tags:Array<ProductTagInterface>
  colors:Array<ProductColorInterface>
  sizes:Array<ProductSizeInterface>
}

/**
 * Kinds interface
 * ex) 신발, 의류 , 용품,
 */
export interface KindsInterface {
  id:number
  name:string // should be unique
}

/**
 * ex) 바람막이, 축구화
 */
export interface ExtendKindsInterface {
  id:number
  kinds: KindsInterface
  name:string // should be unique
}

export interface PrdouctImagesInterface {
  id:number
  url:string
}

/**
 * Prdocut Tag interface
 * ex) 산뜻한, 봄용, 좋은 느낌
 */
export interface ProductTagInterface {
  id: number
  name: string
}

/**
 * Status Interface
 * ex) 품절, 가격인하, 출시 예정
 */
export interface StatusInterface {
  id: number
  name: string
}

export interface ProductColorInterface {
  id: number
  name: string
  code: string
}

/**
 * Prdouct Size interface
 * ex) X,L,M, 120 18
 * It can be string and number both
 */
export interface ProductSizeInterface {
  id: number
  kind:KindsInterface
  size: string | number
}
