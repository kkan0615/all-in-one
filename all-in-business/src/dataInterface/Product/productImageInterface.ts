export interface ProductImageInterface {
  id: number
  productId: number
  path: string
  name: string
}

export const ProductImages: Array<ProductImageInterface> = [
  {
    id: 0,
    productId: 0,
    path: 'https://static.zara.net/photos///2020/V/0/2/p/4087/300/250/4/w/1143/4087300250_1_1_1.jpg?ts=1587651034337',
    name: '후디1'
  },
  {
    id: 1,
    productId: 0,
    path: 'https://static.zara.net/photos///2020/V/0/2/p/4087/300/626/4/w/1143/4087300626_1_1_1.jpg?ts=1580459108687',
    name: '후디1-2'
  },
  {
    id: 2,
    productId: 0,
    path: 'https://static.zara.net/photos///2020/V/0/2/p/4087/300/602/2/w/1143/4087300602_1_1_1.jpg?ts=1579169364104',
    name: '후디1-2'
  },
  {
    id: 3,
    productId: 0,
    path: 'https://static.zara.net/photos///2020/V/0/2/p/4087/400/322/4/w/1143/4087400322_1_1_1.jpg?ts=1583237642670',
    name: '후디1-2'
  }
]

export function filterProductImages(id: number) {
  let result: Array<ProductImageInterface> = []
  result = ProductImages.filter(e => e.productId === id)

  if (!result) {
    const images = [
      { id: 0, productId: id, path: 'https://static.hubzum.zumst.com/hubzum/2018/05/02/14/37ebbc8c3c6d4b4bbbaaab22693d2953_780x0c.jpg', name: 'none' },
      { id: 1, productId: id, path: 'https://lh3.googleusercontent.com/proxy/Gn9oZn8rSgeygjHzzUa9v8CEk8RCJmOHcYdYaV767qAcKq8zSjI0_AVtffF2KXdE82VzVW-mCCZfqjWTWoHAA1FGyh3BMd5lbdlM8wyDCsY', name: 'none' },
      { id: 2, productId: id, path: 'https://cdn.imweb.me/upload/S201906191c3595f104fd6/4de7ca2e370b5.jpeg', name: 'none' },
      { id: 3, productId: id, path: 'https://lh3.googleusercontent.com/proxy/ONv9b26_6SpiamYjG7kdzI1-N_cHVNo9_B3HAxJ1f-Ocw3wpRnEJwsBWAPHPFIaqCJNU6zBnWX7SavRuiUEVCgto27A3rO3xpcgqqurnAy-lq-md7AU', name: 'none' }
    ]
    result = images
  }

  return result
}
