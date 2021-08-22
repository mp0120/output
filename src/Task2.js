/* eslint-disable */

import { useEffect } from 'react';


export function updateQuality(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "TICKETS" && products[i].sellIn > 10) {
      products[i].quality = products[i].quality + 1;
      products[i].sellIn = products[i].sellIn - 1;
    } else {
      if (
        products[i].type == "TICKETS" &&
        products[i].sellIn < 10 &&
        products[i].sellIn > 1
      ) {
        products[i].quality = products[i].quality + 2;
        products[i].sellIn = products[i].sellIn - 1;
      } else {
        if (products[i].type == "TICKETS" && products[i].sellIn <= 1) {
          products[i].quality = 0;
          products[i].sellIn = 0;
        }

        if (
          products[i].type == "NORMAL" &&
          products[i].sellIn <= 0 &&
          products[i].quality > 0
        ) {
          products[i].quality = products[i].quality - 2;
          products[i].sellIn = products[i].sellIn - 1;
        }

        if (
          products[i].type == "NORMAL" &&
          products[i].sellIn > 0 &&
          products[i].quality == 0
        ) {
          products[i].quality = 0;
          products[i].sellIn = products[i].sellIn - 1;
        } else {
          if (
            products[i].type == "NORMAL" &&
            products[i].sellIn > 0 &&
            products[i].quality > 0
          ) {
            products[i].quality = products[i].quality - products[i].isSecondHand ? 2 : 1;
            products[i].sellIn = products[i].sellIn - 1;
          }
        }
      }
    }

    if (products[i].sellIn <= 0) {
      products[i].sellIn = 0;
    }

    if (products[i].quality <= 0) {
      products[i].quality = 0;
    }
  }

  return products;
}

export function Task2() {
    useEffect(() => {
        const products = [
            {
                name: 'concert a',
                type: 'TICKETS',
                quality: 30,
                sellIn: 12,
            },
            {
                name: 'concert b',
                type: 'TICKETS',
                quality: 30,
                sellIn: 8,
            },
            {
                name: 'concert c',
                type: 'TICKETS',
                quality: 30,
                sellIn: 1,
            },
            {
                name: 'macbook',
                type: 'NORMAL',
                quality: 30,
                sellIn: 0,
                isSecondHand: false,
            },
            {
                name: 'monitor',
                type: 'NORMAL',
                quality: 30,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'keyboard',
                type: 'NORMAL',
                quality: 0,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
        ];

        const updated = updateQuality(products);
        console.log(updated);
    }, []);
    return null;
}
