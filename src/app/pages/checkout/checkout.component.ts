import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  itemList;

  constructor(private router: Router) {
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
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "S",
          selectedColor: "",
          deliveryDays: "Delivery in 5 - 7 days",
          selectedProductImage: "https://m.media-amazon.com/images/I/61ocb3GYEBL._AC_UL640_FMwebp_QL65_.jpg",
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
          productRemaining: 10,
          freeShippingAvailable: true,
          currentQuantity: 1,
          selectedSize: "S",
          selectedColor: "",
          deliveryDays: "Delivery in 5 - 7 days",
          selectedProductImage: "https://m.media-amazon.com/images/I/91Pr4azI5vL._AC_UL640_FMwebp_QL65_.jpg",
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
          productRemaining: 10,
          shippingFreeAvailable: true,
          currentQuantity: 1,
          selectedSize: "S",
          selectedColor: "Black",
          deliveryDays: "Delivery in 5 - 7 days",
          selectedProductImage: "https://m.media-amazon.com/images/I/91pJaVhRA6L._AC_UL640_FMwebp_QL65_.jpg",
        }
      ],
      freeShippingAvailable: false,
      toEligibleForFreeDelivery: "69",
      priceDetails: [
        {
          title: "Cart Total",
          totalAmount: "1500",
          displaySize: 0
        },
        {
          title: "Product Savings",
          totalAmount: "20",
          displaySize: 1
        },
        {
          title: "Coupon Savings",
          totalAmount: "80",
          displaySize: 1
        },
        {
          title: "Total Savings",
          totalAmount: "100",
          displaySize: 0
        },
        {
          title: "Delivery Charges",
          totalAmount: "40",
          displaySize: 0
        },
        {
          title: "Total Amount",
          totalAmount: "1440",
          displaySize: 2
        }
      ],
      addresses: [
        {
          name: "Sakkeer A",
          mobileNumber: "7904545875",
          pinCode: "641111",
          addressLineOne: "85/2, KGF Apartment, ABC Street,",
          addressLineTwo: "R.H. Road, Kanniyakumari,",
          city: "Coimbatore",
          landmark: "Near DSLR Shop",
          state: "Tamil Nadu",
          defaultBilling: true,
          defaultShipping: true
        },
        {
          name: "Sakkeer A",
          mobileNumber: "9854545875",
          pinCode: "641111",
          addressLineOne: "34/2, MMA Apartment, ABC Kumar Street,",
          addressLineTwo: "VV Main Road, Kanniyakumari,",
          city: "Coimbatore",
          landmark: "Near DSLR Shop",
          state: "Tamil Nadu",
          defaultBilling: true,
          defaultShipping: true
        },
        {
          name: "Sakkeer A",
          mobileNumber: "9854545875",
          pinCode: "641111",
          addressLineOne: "34/2, MMA Apartment, ABC Kumar Street,",
          addressLineTwo: "VV Main Road, Kanniyakumari,",
          city: "Coimbatore",
          landmark: "Near DSLR Shop",
          state: "Tamil Nadu",
          defaultBilling: true,
          defaultShipping: true
        },
        {
          name: "Sakkeer A",
          mobileNumber: "9854545875",
          pinCode: "641111",
          addressLineOne: "34/2, MMA Apartment, ABC Kumar Street,",
          addressLineTwo: "VV Main Road, Kanniyakumari,",
          city: "Coimbatore",
          landmark: "Near DSLR Shop",
          state: "Tamil Nadu",
          defaultBilling: true,
          defaultShipping: true
        }
      ]
    }
  }

  ngOnInit(): void {
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

}
