import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  sortByValueList;
  selectedSortByValue;
  itemList;
  filterListData;
  currentItemSlide = 0
  currentSlide = 0;
  constructor() {
    this.sortByValueList = [
      {
        _id: 1,
        name: 'Featured',
      },
      {
        _id: 2,
        name: 'Price: Low to High',
      },
      {
        _id: 3,
        name: 'Price: High to Low',
      },
      {
        _id: 4,
        name: 'Customer Review',
      },
      {
        _id: 5,
        name: 'Newest Arrivals',
      }
    ];
    this.itemList = {
      products: [
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "4",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: false,
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
    this.filterListData = [
      {
        "_id": "001",
        "filterTitle": "Brands",
        "filterType": "text",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "Marvel"
          },
          {
            "_id": "002",
            "filterTitle": "bluehaaat"
          },
          {
            "_id": "003",
            "filterTitle": "Niev"
          },
          {
            "_id": "004",
            "filterTitle": "Generic"
          },
          {
            "_id": "005",
            "filterTitle": "Capsula Clothing"
          },
          {
            "_id": "006",
            "filterTitle": "Quote Marshals"
          },
          {
            "_id": "007",
            "filterTitle": "Van Heusen Woman"
          }
        ]
      },
      {
        "_id": "002",
        "filterTitle": "Material",
        "filterType": "check",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "Marvel"
          },
          {
            "_id": "002",
            "filterTitle": "bluehaaat"
          },
          {
            "_id": "003",
            "filterTitle": "Niev"
          },
          {
            "_id": "004",
            "filterTitle": "Generic"
          },
          {
            "_id": "005",
            "filterTitle": "Capsula Clothing"
          },
          {
            "_id": "006",
            "filterTitle": "Quote Marshals"
          },
          {
            "_id": "007",
            "filterTitle": "Van Heusen Woman"
          }
        ]
      },
      {
        "_id": "003",
        "filterTitle": "Seller",
        "filterType": "check",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "Marvel"
          },
          {
            "_id": "002",
            "filterTitle": "bluehaaat"
          },
          {
            "_id": "003",
            "filterTitle": "Niev"
          },
          {
            "_id": "004",
            "filterTitle": "Generic"
          },
          {
            "_id": "005",
            "filterTitle": "Capsula Clothing"
          },
          {
            "_id": "006",
            "filterTitle": "Quote Marshals"
          },
          {
            "_id": "007",
            "filterTitle": "Van Heusen Woman"
          }
        ]
      },
      {
        "_id": "004",
        "filterTitle": "Avg. Customer Ratings",
        "filterType": "star",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "5"
          },
          {
            "_id": "002",
            "filterTitle": "4"
          },
          {
            "_id": "003",
            "filterTitle": "3"
          },
          {
            "_id": "004",
            "filterTitle": "2"
          },
          {
            "_id": "005",
            "filterTitle": "1"
          }
        ]
      },
      {
        "_id": "005",
        "filterTitle": "Price",
        "filterType": "price",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "Under ₹500"
          },
          {
            "_id": "002",
            "filterTitle": "₹500 - ₹750"
          },
          {
            "_id": "003",
            "filterTitle": "₹750 - ₹1,000"
          },
          {
            "_id": "004",
            "filterTitle": "₹1,000 - ₹,5000"
          },
          {
            "_id": "005",
            "filterTitle": "₹5,000 7 above"
          }
        ]
      },
      {
        "_id": "006",
        "filterTitle": "Colour",
        "filterType": "color",
        "filterList": [
          {
            "_id": "001",
            "filterTitle": "#FFFFFF"
          },
          {
            "_id": "002",
            "filterTitle": "#000000"
          },
          {
            "_id": "001",
            "filterTitle": "#6600FF"
          },
          {
            "_id": "002",
            "filterTitle": "#00FF00"
          },
          {
            "_id": "001",
            "filterTitle": "#FF6600"
          },
          {
            "_id": "002",
            "filterTitle": "#FFFF00"
          },
          {
            "_id": "001",
            "filterTitle": "#FF0000"
          },
          {
            "_id": "002",
            "filterTitle": "#0000FF"
          }
        ]
      }
    ]
    this.selectedSortByValue = this.sortByValueList[0];
  }

  nextSlider(curItem) {
    const next = curItem.currentDisplayIndex + 1;
    curItem.currentDisplayIndex = next === curItem.images.length ? 0 : next;
  }

  previousSlider(curItem) {
    const next = curItem.currentDisplayIndex - 1;
    curItem.currentDisplayIndex = next < 0 ? curItem.images.length - 1 : next;
  }

  ngOnInit(): void {
  }

}
