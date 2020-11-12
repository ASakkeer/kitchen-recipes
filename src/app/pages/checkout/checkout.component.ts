import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  itemList;
  showModal;
  modalNumber;
  contactForm: FormGroup;

  constructor(private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({
      name: [''],
      mobileNumber: [''],
      addressLineOne: [''],
      addressLineTwo: [''],
      city: [''],
      landmark: [''],
      state: [''],
      pinCode: [''],
      defaultBilling: [false],
      defaultShipping: [false],
    });

    this.showModal = false;
    this.modalNumber = 0;
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
          defaultBilling: false,
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
          defaultShipping: false
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
          defaultBilling: false,
          defaultShipping: false
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
          defaultBilling: false,
          defaultShipping: false
        }
      ]
    }
  }

  ngOnInit(): void {
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

  changeShippingAddress(curAddress, index) {
    for (let i = 0; i < this.itemList.addresses.length; i++) {
      if (i === index) {
        this.itemList.addresses[i].defaultShipping = true;
      } else {
        this.itemList.addresses[i].defaultShipping = false;
      }
    }
  }

  showModalForAction(count) {
    this.showModal = true;
    this.modalNumber = count;
  }

  cancelModal() {
    this.showModal = false;
    this.modalNumber = 0;
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
  }

}
