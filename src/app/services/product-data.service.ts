import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  itemList;

  constructor() {
    this.itemList = {
      products: [
        {
          _id: "ABCDFRFSFDZEA",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEB",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEC",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZED",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEE",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEF",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEG",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEAH",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEI",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEJ",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEK",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEL",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEM",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEN",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEO",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEP",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZEQ",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZER",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          _id: "ABCDFRFSFDZES",
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "",
          selectedColor: "",
          deliveryDays: "",
          selectedProductImage: "",
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        }
      ]
    }
  }

  getItemList() {
    return this.itemList;
  }

  getSingleProduct(proId) {
    const result = this.itemList.products.filter(curObj => curObj._id === proId);
    return result;
  }

}
