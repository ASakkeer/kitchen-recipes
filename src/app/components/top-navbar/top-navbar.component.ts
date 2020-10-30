import { Component, OnInit } from '@angular/core';

// import { ɵROUTER_PROVIDERS } from '@angular/router';
import Config from '../../configuration/app.config.json';
import locale from '../../configuration/language/en.json';
import {
  bounceAnimation, flashAnimation, pulseAnimation, rubberBandAnimation, shakeAnimation,
  swingAnimation, tadaAnimation, wobbleAnimation, jelloAnimation, heartBeatAnimation,
  headShakeAnimation, bounceInAnimation, bounceInDownAnimation, bounceInLeftAnimation,
  bounceInRightAnimation, bounceInUpAnimation, bounceOutAnimation, bounceOutDownAnimation,
  bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, fadeInAnimation,
  fadeInDownAnimation, fadeInDownBigAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation,
  fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation,
  fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation,
  fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation,
  fadeOutUpBigAnimation, flipAnimation, flipInXAnimation, flipInYAnimation, flipOutXAnimation,
  flipOutYAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, rotateInAnimation,
  rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation,
  rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation,
  rotateOutUpLeftAnimation, rotateOutUpRightAnimation, slideInDownAnimation,
  slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation,
  slideOutRightAnimation, slideOutUpAnimation, zoomInAnimation, zoomInDownAnimation,
  zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation,
  zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation,
  hingeAnimation, jackInTheBoxAnimation, rollInAnimation, rollOutAnimation,
  // other
  collapseAnimation, collapseHorizontallyAnimation, rotateAnimation,
  bounceInUpOnEnterAnimation, hueRotateAnimation, slideInLeftOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
    bounceAnimation({ anchor: 'enter4', delay: 2000 }),
    flashAnimation({ anchor: 'enter5' }),
    pulseAnimation({ anchor: 'enter5' }),
    rubberBandAnimation({ anchor: 'enter7' }),
    shakeAnimation({ anchor: 'enter8', delay: 200 }),
    swingAnimation({ anchor: 'enter9' }),
    tadaAnimation({ anchor: 'enter10' }),
    wobbleAnimation({ anchor: 'enter11' }),
    jelloAnimation({ anchor: 'enter12' }),
    heartBeatAnimation({ anchor: 'enter13' }),
    headShakeAnimation({ anchor: 'enter14' }),
    bounceInAnimation({ anchor: 'enter15' }),
    bounceInDownAnimation({ anchor: 'enter16' }),
    bounceInLeftAnimation({ anchor: 'enter17' }),
    bounceInRightAnimation({ anchor: 'enter18' }),
    bounceInUpAnimation({ anchor: 'enter19' }),
    bounceOutAnimation({ anchor: 'enter20' }),
    bounceOutDownAnimation({ anchor: 'enter21' }),
    bounceOutLeftAnimation({ anchor: 'enter22' }),
    bounceOutRightAnimation({ anchor: 'enter23' }),
    bounceOutUpAnimation({ anchor: 'enter24' }),
    fadeInAnimation({ anchor: 'enter25' }),
    fadeInDownAnimation({ anchor: 'enter26', delay: 2000 }),
    fadeInDownBigAnimation({ anchor: 'enter27' }),
    fadeInLeftAnimation({ anchor: 'enter28' }),
    fadeInLeftBigAnimation({ anchor: 'enter29' }),
    fadeInRightAnimation({ anchor: 'enter30' }),
    fadeInRightBigAnimation({ anchor: 'enter31' }),
    fadeInUpAnimation({ anchor: 'enter32' }),
    fadeInUpBigAnimation({ anchor: 'enter33' }),
    fadeOutAnimation({ anchor: 'enter34' }),
    fadeOutDownAnimation({ anchor: 'enter35' }),
    fadeOutDownBigAnimation({ anchor: 'enter36' }),
    fadeOutLeftAnimation({ anchor: 'enter37' }),
    fadeOutLeftBigAnimation({ anchor: 'enter38' }),
    fadeOutRightAnimation({ anchor: 'enter39' }),
    fadeOutRightBigAnimation({ anchor: 'enter40' }),
    fadeOutUpAnimation({ anchor: 'enter41' }),
    fadeOutUpBigAnimation({ anchor: 'enter42' }),
    flipAnimation({ anchor: 'enter43' }),
    flipInXAnimation({ anchor: 'enter44' }),
    flipInYAnimation({ anchor: 'enter45' }),
    flipOutXAnimation({ anchor: 'enter46' }),
    flipOutYAnimation({ anchor: 'enter47' }),
    lightSpeedInAnimation({ anchor: 'enter48' }),
    lightSpeedOutAnimation({ anchor: 'enter49' }),
    rotateInAnimation({ anchor: 'enter50' }),
    rotateInDownLeftAnimation({ anchor: 'enter51' }),
    rotateInDownRightAnimation({ anchor: 'enter52' }),
    rotateInUpLeftAnimation({ anchor: 'enter53' }),
    rotateInUpRightAnimation({ anchor: 'enter54' }),
    rotateOutAnimation({ anchor: 'enter55' }),
    rotateOutDownLeftAnimation({ anchor: 'enter56' }),
    rotateOutDownRightAnimation({ anchor: 'enter57' }),
    rotateOutUpLeftAnimation({ anchor: 'enter58' }),
    rotateOutUpRightAnimation({ anchor: 'enter59' }),
    slideInDownAnimation({ anchor: 'enter60' }),
    slideInLeftOnEnterAnimation({ anchor: 'enter61', duration: 200 }),
    slideInRightAnimation({ anchor: 'enter62' }),
    slideInUpAnimation({ anchor: 'enter63' }),
    slideOutDownAnimation({ anchor: 'enter64' }),
    slideOutLeftAnimation({ anchor: 'enter65' }),
    slideOutRightAnimation({ anchor: 'enter66' }),
    slideOutUpAnimation({ anchor: 'enter67' }),
    zoomInAnimation({ anchor: 'enter68' }),
    zoomInDownAnimation({ anchor: 'enter69' }),
    zoomInLeftAnimation({ anchor: 'enter70' }),
    zoomInRightAnimation({ anchor: 'enter71' }),
    zoomInUpAnimation({ anchor: 'enter72' }),
    zoomOutAnimation({ anchor: 'enter73' }),
    zoomOutDownAnimation({ anchor: 'enter74' }),
    zoomOutLeftAnimation({ anchor: 'enter75' }),
    zoomOutRightAnimation({ anchor: 'enter76' }),
    zoomOutUpAnimation({ anchor: 'enter77' }),
    hingeAnimation({ anchor: 'enter78' }),
    jackInTheBoxAnimation({ anchor: 'enter79' }),
    rollInAnimation({ anchor: 'enter80' }),
    rollOutAnimation({ anchor: 'enter81' }),
    // other
    collapseAnimation({ anchor: 'enter82' }),
    collapseHorizontallyAnimation({ anchor: 'enter83' }),
    rotateAnimation({ anchor: 'enter84' }),
    rotateAnimation({ anchor: 'enter85', degrees: 90 }),
    hueRotateAnimation({ anchor: 'enter86' }),
    hueRotateAnimation({ anchor: 'enter87', duration: 20000 })
  ],
  providers: [
    // ɵROUTER_PROVIDERS
  ]
})
export class TopNavbarComponent implements OnInit {

  showSidenav = false;
  sidenavData = [
    {
      "_id": "ABC001",
      "title": "SHOP BY CATEGORY",
      "lists": [
        {
          "_id": "ABC002",
          "title": "Electronics",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Mobiles"
            },
            {
              "_id": "ABC002",
              "title": "Televisions"
            },
            {
              "_id": "ABC002",
              "title": "Headphones"
            },
            {
              "_id": "ABC002",
              "title": "Speakers"
            },
            {
              "_id": "ABC002",
              "title": "Cameras"
            }
          ]
        },
        {
          "_id": "ABC003",
          "title": "Home, Furniture",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Kitchen Deals"
            },
            {
              "_id": "ABC002",
              "title": "Indoor & Decorations"
            },
            {
              "_id": "ABC002",
              "title": "Garden & Outdoor"
            },
            {
              "_id": "ABC002",
              "title": "Wall Art"
            }
          ]
        },
        {
          "_id": "ABC004",
          "title": "Men's Fashion",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Clothing"
            },
            {
              "_id": "ABC002",
              "title": "T-Shirts & Polos"
            },
            {
              "_id": "ABC002",
              "title": "Shirts"
            },
            {
              "_id": "ABC002",
              "title": "Innerwear"
            },
            {
              "_id": "ABC002",
              "title": "Watches"
            },
            {
              "_id": "ABC002",
              "title": "Bags"
            },
            {
              "_id": "ABC002",
              "title": "Sunglasses"
            },
            {
              "_id": "ABC002",
              "title": "Wallets"
            }
          ]
        },
        {
          "_id": "ABC005",
          "title": "Women's Fashion",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Clothing"
            },
            {
              "_id": "ABC002",
              "title": "Sarees"
            },
            {
              "_id": "ABC002",
              "title": "Jean"
            },
            {
              "_id": "ABC002",
              "title": "Nightwear"
            },
            {
              "_id": "ABC002",
              "title": "Watches"
            },
            {
              "_id": "ABC002",
              "title": "Handbags"
            },
            {
              "_id": "ABC002",
              "title": "Sunglasses"
            }
          ]
        },
        {
          "_id": "ABC006",
          "title": "Baby & Kids",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Kids Clothing"
            },
            {
              "_id": "ABC002",
              "title": "Kids Shoes"
            },
            {
              "_id": "ABC002",
              "title": "Kids Bags"
            },
            {
              "_id": "ABC002",
              "title": "Kids Watches"
            },
            {
              "_id": "ABC002",
              "title": "Baby Clothing"
            },
            {
              "_id": "ABC002",
              "title": "Baby Shoes"
            },
            {
              "_id": "ABC002",
              "title": "Baby Bags"
            },
            {
              "_id": "ABC002",
              "title": "Baby Watches"
            },
            {
              "_id": "ABC002",
              "title": "Toys"
            },
            {
              "_id": "ABC002",
              "title": "Skin, Health"
            },
            {
              "_id": "ABC002",
              "title": "Pantry"
            }
          ]
        },
        {
          "_id": "ABC007",
          "title": "Beauty, Health",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Make-up"
            },
            {
              "_id": "ABC002",
              "title": "Health & Personal Care"
            },
            {
              "_id": "ABC002",
              "title": "Beauty & Grooming"
            },
            {
              "_id": "ABC002",
              "title": "Diet & Nutrition"
            }
          ]
        },
        {
          "_id": "ABC008",
          "title": "Sports, Books",
          "lists": [
            {
              "_id": "ABC002",
              "title": "Fitness Accessories"
            },
            {
              "_id": "ABC002",
              "title": "Bats & Balls"
            },
            {
              "_id": "ABC002",
              "title": "Camping & Hiking"
            },
            {
              "_id": "ABC002",
              "title": "Textbooks"
            },
            {
              "_id": "ABC002",
              "title": "Childrens Books"
            }
          ]
        }
      ]
    }
  ];
  appConfig = Config;
  defaultLocale = locale;

  constructor() {
    this.showSidenav = false;
  }

  ngOnInit(): void {
  }

}
