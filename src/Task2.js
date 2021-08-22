/* eslint-disable */

import { useEffect, useState } from 'react';


const updateTicketQuality = (product, sellIn) => {
    let quality;

    if (product.sellIn < 10 && product.sellIn > 0) {
        quality = product.quality + 2;
    } else {
        quality = product.quality + 1;
    }

    if (product.sellIn === 0) quality = 0;

    return {
        ...product,
        sellIn,
        quality,
    }
};

const updateNormalQuality = (product, sellIn) => {
    let quality;

    if (product.sellIn === 0 || product.isSecondHand) {
        quality = product.quality - 2;
    } else {
        quality = product.quality - 1;
    }

    if (quality < 0) quality = 0;

    return {
        ...product,
        sellIn,
        quality,
    };
}

export function updateQuality(products) {
    return products.map(
        item => {
            let sellIn = item.sellIn - 1;
            if (sellIn < 0) sellIn = 0;

            switch (item.type) {
                case 'TICKETS': return updateTicketQuality(item, sellIn);
                case 'NORMAL': return updateNormalQuality(item, sellIn);
                default: return item;
            }
        }
    );
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
    }, [updated]);

    return null;
}
