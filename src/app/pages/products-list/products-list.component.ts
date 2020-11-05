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
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        },
        {
          currentDisplayIndex: 0,
          brand: "Scott International",
          productName: "Men's Regular Fit T-Shirt (Pack of 2)",
          productRating: "252",
          currentPrice: "299",
          pastPrice: "599",
          discount: "20%",
          size: ["S", "L", "M", "XL", "2XL"],
          isInWishlist: true,
          images: [
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 0
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 1
            },
            {
              _id: "001",
              url: "https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg",
              imageIndex: 2
            }
          ]
        }
      ]
    }
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
