import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  sortByValueList;
  selectedSortByValue;
  itemList = [];

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
    this.itemList = [
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71mFWNj85JL._AC_UL640_FMwebp_QL65_.jpg',
    ]
    this.selectedSortByValue = this.sortByValueList[0];
  }

  ngOnInit(): void {
  }

}
