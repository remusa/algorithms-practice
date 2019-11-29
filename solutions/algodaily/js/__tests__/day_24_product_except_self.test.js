import {
  productExceptSelfNaive,
  productExceptSelf,
} from '../day_24_product_except_self'

describe('product except self tests', () => {
  it('should return an array with the product of all elements except the current index', () => {
    expect(productExceptSelfNaive([])).toEqual([])
    expect(productExceptSelfNaive([1, 2, 4, 16])).toEqual([128, 64, 32, 8])
    expect(productExceptSelfNaive([7, 8, 5, 18, 16, 11, 20])).toEqual([
      2534400,
      2217600,
      3548160,
      985600,
      1108800,
      1612800,
      887040,
    ])
    expect(
      productExceptSelfNaive([9, 9, 3, 4, 18, 8, 6, 18, 1, 6, 19])
    ).toEqual([
      191476224,
      191476224,
      574428672,
      430821504,
      95738112,
      215410752,
      287214336,
      95738112,
      1723286016,
      287214336,
      90699264,
    ])
    expect(
      productExceptSelfNaive([
        2,
        0,
        9,
        19,
        7,
        10,
        17,
        3,
        10,
        11,
        3,
        3,
        17,
        18,
        19,
      ])
    ).toEqual([0, 7027559708400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return an array with the product of all elements except the current index', () => {
    expect(productExceptSelf([])).toEqual([])
    expect(productExceptSelf([1, 2, 4, 16])).toEqual([128, 64, 32, 8])
    expect(productExceptSelf([7, 8, 5, 18, 16, 11, 20])).toEqual([
      2534400,
      2217600,
      3548160,
      985600,
      1108800,
      1612800,
      887040,
    ])
    expect(productExceptSelf([9, 9, 3, 4, 18, 8, 6, 18, 1, 6, 19])).toEqual([
      191476224,
      191476224,
      574428672,
      430821504,
      95738112,
      215410752,
      287214336,
      95738112,
      1723286016,
      287214336,
      90699264,
    ])
    expect(
      productExceptSelf([2, 0, 9, 19, 7, 10, 17, 3, 10, 11, 3, 3, 17, 18, 19])
    ).toEqual([0, 7027559708400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  })
})
