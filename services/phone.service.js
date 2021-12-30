const express = require('express');

module.exports = {
    getPhones: (req, res) => {
        const phones = [
            {
                "id": 0,
                "name": "iPhone 7",
                "manufacturer": "Apple",
                "description": "lorem ipsum dolor sit amet consectetur.",
                "color": "black",
                "price": 569,
                "imageFileName": "../imgs/IPhone_7.png",
                "screen": "4,7 inch IPS",
                "processor": "A10 Fusion",
                "ram": 2
            },
            {
                "id": 1,
                "name": "iPhone 12",
                "manufacturer": "Apple",
                "description": "A superpowerful chip. 5G speed. An advanced dual‑camera system",
                "color": "grey",
                "price": 769,
                "imageFileName": "../imgs/IPhone_12.png",
                "screen": "6,1 inch IPS",
                "processor": "Apple A14 Bionic",
                "ram": 4
            },
            {
                "id": 2,
                "name": "Xiaomi 12 Pro",
                "manufacturer": "Xiaomi",
                "description": "The large battery has enough power to easily get you through the day.",
                "color": "Pebble White",
                "price": 369,
                "imageFileName": "../imgs/Xiaomi_12.png",
                "screen": "6,5 inch FHD+ DotDisplay",
                "processor": "MediaTek Helio G88",
                "ram": 4
            },
            {
                "id": 3,
                "name": "Samsung A51",
                "manufacturer": "Samsung",
                "description": "lorem ipsum dolor sit amet consectetur.",
                "color": "blue",
                "price": 459,
                "imageFileName": "../imgs/Sam_a51.png",
                "screen": "6,5 Super AMOLED",
                "processor": "Octa Core Quad 2.3GHZ",
                "ram": 4
            }
        ]

        return res.status(200).json({ phones: phones });
    }
}