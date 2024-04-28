let tileProducts;

function mydata(props) {
    // extra raw datas and urls
    // let productTiles = [
    //     {
    //         img: "assets/imagesTiles/demo1.avif",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "900"

    //     },
    //     {
    //         img: "assets/imagesTiles/demo2.webp",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "300"
    //     },
    //     {
    //         img: "assets/imagesTiles/dem3.avif",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "900"
    //     },
    //     {
    //         img: "assets/imagesTiles/dem4.avif",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "900"
    //     },
    //     {
    //         img: "assets/imagesTiles/demo5.webp",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "900"
    //     },
    //     {
    //         img: "assets/imagesTiles/demo6.jpg",
    //         Name: "Terazzo Dove Gray",
    //         descrition: "16 x 16 Polished",
    //         price: "900"
    //     }
    // ];



    // let tileProducts = [
    //     {
    //       productName: "Classic Ceramic Tiles",
    //       pricePerSqFt: 8.99,
    //       manufacturer: "PlasmaTiles",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White", "Gray", "Beige & Cream", "Black+White", "Black", "Multicolor", "Blue", "Purple", "Brown", "Green", "Pink", "Gold", "Red", "Metallic"],
    //         tileFinish: "Glossy"
    //       },
    //       category: "Tiles",
    //       material: "ceramic & procelain",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "12x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 12,
    //         thickness: 8,
    //         weight: 1500,
    //         location: ["backsplash & kitchen", "shower", "bathroom", "floor tiles", "wall tiles", "large wall"]
    //       }
    //     },
    //     {
    //       productName: "Marble Stone Tiles",
    //       img: "https://source.unsplash.com/random/?tiles/",
    //       pricePerSqFt: 15.99,
    //       manufacturer: "Ganito",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "Beige & Cream",
    //         availableColors: ["White", "Gray", "Beige & Cream", "Black+White", "Black", "Multicolor", "Blue", "Purple", "Brown", "Green", "Pink", "Gold", "Red", "Metallic"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "marble & stone",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "16x16", "24x24"],
    //         size: "16x16",
    //         style: "modern",
    //         outdooruse: "yes",
    //         SpFtPerBox: 10,
    //         thickness: 10,
    //         weight: 2000,
    //         location: ["floor tiles", "wall tiles", "outdoor & pavers", "pool tiles"]
    //       }
    //     },
    //     // Add 23 more objects here with similar structure...
    //     {
    //       productName: "Modern Glass Tiles",
    //       img: "https://source.unsplash.com/random/?tiles/300x200",
    //       pricePerSqFt: 12.50,
    //       manufacturer: "GlassWorks",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "Blue",
    //         availableColors: ["Blue", "Gray", "Multicolor"],
    //         tileFinish: "Frosted"
    //       },
    //       category: "Tiles",
    //       material: "glass",
    //       detail: {
    //         available: "yes",
    //         sizes: ["4x4", "6x6"],
    //         size: "6x6",
    //         style: "modern",
    //         outdooruse: "no",
    //         SpFtPerBox: 8,
    //         thickness: 6,
    //         weight: 800,
    //         location: ["backsplash & kitchen", "bathroom", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Wood Look Vinyl Planks",
    //       pricePerSqFt: 5.99,
    //       manufacturer: "VinylKings",
    //       keySpecs: {
    //         commercial: "floor",
    //         residential: "floor",
    //         itemColor: "Brown",
    //         availableColors: ["Brown", "Gray", "Beige & Cream", "Multicolor"],
    //         tileFinish: "Matte"
    //       },
    //       category: "Vinyl",
    //       material: "Vinyl Planks",
    //       detail: {
    //         available: "yes",
    //         sizes: ["6x36", "8x48"],
    //         size: "8x48",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 20,
    //         thickness: 5,
    //         weight: 1200,
    //         location: ["floor tiles"]
    //       }
    //     },
    //     {
    //       productName: "Decorative Trending Collection",
    //       pricePerSqFt: 19.99,
    //       manufacturer: "TrendTiles",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "Multicolor",
    //         availableColors: ["Multicolor"],
    //         tileFinish: "Textured"
    //       },
    //       category: "Collection",
    //       material: "Decorative",
    //       detail: {
    //         available: "yes",
    //         sizes: ["8x8", "12x12"],
    //         size: "12x12",
    //         style: "trending",
    //         outdooruse: "no",
    //         SpFtPerBox: 6,
    //         thickness: 7,
    //         weight: 2000,
    //         location: ["large wall"]
    //       }
    //     },
    //     // Existing objects...

    //     {
    //       productName: "Classic Ceramic Tiles",
    //       pricePerSqFt: 8.99,
    //       manufacturer: "PlasmaTiles",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White", "Gray", "Beige & Cream", "Black+White", "Black", "Multicolor", "Blue", "Purple", "Brown", "Green", "Pink", "Gold", "Red", "Metallic"],
    //         tileFinish: "Glossy"
    //       },
    //       category: "Tiles",
    //       material: "ceramic & procelain",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "12x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 12,
    //         thickness: 8,
    //         weight: 1500,
    //         location: ["backsplash & kitchen", "shower", "bathroom", "floor tiles", "wall tiles", "large wall"]
    //       }
    //     },
    //     {
    //       productName: "Marble Stone Tiles",
    //       pricePerSqFt: 15.99,
    //       manufacturer: "Ganito",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "Beige & Cream",
    //         availableColors: ["White", "Gray", "Beige & Cream", "Black+White", "Black", "Multicolor", "Blue", "Purple", "Brown", "Green", "Pink", "Gold", "Red", "Metallic"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "marble & stone",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "16x16", "24x24"],
    //         size: "16x16",
    //         style: "modern",
    //         outdooruse: "yes",
    //         SpFtPerBox: 10,
    //         thickness: 10,
    //         weight: 2000,
    //         location: ["floor tiles", "wall tiles", "outdoor & pavers", "pool tiles"]
    //       }
    //     },
    //     // Add 18 more objects here...
    //     {
    //       productName: "Terrazzo Floor Tiles",
    //       pricePerSqFt: 12.50,
    //       manufacturer: "TerrazzoCo",
    //       keySpecs: {
    //         commercial: "floor",
    //         residential: "floor",
    //         itemColor: "Gray",
    //         availableColors: ["Gray", "Beige & Cream", "Multicolor"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Tiles",
    //       material: "terrazzo",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18"],
    //         size: "18x18",
    //         style: "modern",
    //         outdooruse: "no",
    //         SpFtPerBox: 8,
    //         thickness: 10,
    //         weight: 1800,
    //         location: ["floor tiles"]
    //       }
    //     },
    //     {
    //       productName: "Pebble Mosaic Tiles",
    //       pricePerSqFt: 9.99,
    //       manufacturer: "PebbleWorks",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "Multicolor",
    //         availableColors: ["Multicolor"],
    //         tileFinish: "Natural"
    //       },
    //       category: "Tiles",
    //       material: "pebble",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12"],
    //         size: "12x12",
    //         style: "tropical",
    //         outdooruse: "yes",
    //         SpFtPerBox: 10,
    //         thickness: 12,
    //         weight: 2500,
    //         location: ["wall tiles", "outdoor & pavers", "pool tiles"]
    //       }
    //     },
    //     {
    //       productName: "Crackled Ceramic Tiles",
    //       pricePerSqFt: 10.99,
    //       manufacturer: "CrackleArt",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "Blue",
    //         availableColors: ["Blue", "Gray"],
    //         tileFinish: "Crackled"
    //       },
    //       category: "Tiles",
    //       material: "crackled",
    //       detail: {
    //         available: "yes",
    //         sizes: ["8x8", "12x12"],
    //         size: "8x8",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 15,
    //         thickness: 9,
    //         weight: 1600,
    //         location: ["wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Pearl Glass Tiles",
    //       pricePerSqFt: 14.99,
    //       manufacturer: "PearlCraft",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "White",
    //         availableColors: ["White", "Gray", "Multicolor"],
    //         tileFinish: "Pearlescent"
    //       },
    //       category: "Tiles",
    //       material: "glass",
    //       detail: {
    //         available: "yes",
    //         sizes: ["4x4", "6x6"],
    //         size: "6x6",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 12,
    //         thickness: 6,
    //         weight: 900,
    //         location: ["backsplash & kitchen", "bathroom", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Classic Marble Trims",
    //       pricePerSqFt: 6.99,
    //       manufacturer: "TrimMasters",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White", "Gray"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Tiles",
    //       material: "trims",
    //       detail: {
    //         available: "yes",
    //         sizes: ["2x12", "4x12"],
    //         size: "2x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 20,
    //         thickness: 7,
    //         weight: 1200,
    //         location: ["backsplash & kitchen", "bathroom", "floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Carrara Marble",
    //       pricePerSqFt: 18.50,
    //       manufacturer: "CarraraCo",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White"],
    //         tileFinish: "Honed"
    //       },
    //       category: "Stone",
    //       material: "Carrara",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "18x18",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 6,
    //         thickness: 12,
    //         weight: 2200,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Calacatta Marble",
    //       pricePerSqFt: 22.99,
    //       manufacturer: "CalacattaMarble",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "Calacatta",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "12x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 8,
    //         thickness: 10,
    //         weight: 2000,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Crema Marfil Marble",
    //       pricePerSqFt: 24.99,
    //       manufacturer: "CremaMarfil",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "Beige & Cream",
    //         availableColors: ["Beige & Cream"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "Crema marfil",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "24x24",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 4,
    //         thickness: 12,
    //         weight: 2500,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Emperador Marble",
    //       pricePerSqFt: 21.99,
    //       manufacturer: "Emperador",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "Brown",
    //         availableColors: ["Brown"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "Emperador",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "18x18",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 6,
    //         thickness: 10,
    //         weight: 2200,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Thassos Marble",
    //       pricePerSqFt: 26.99,
    //       manufacturer: "ThassosMarble",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "Thassos",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "12x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 8,
    //         thickness: 10,
    //         weight: 2000,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Volatas Marble",
    //       pricePerSqFt: 28.99,
    //       manufacturer: "VolatasMarble",
    //       keySpecs: {
    //         commercial: "wall, floor",
    //         residential: "wall, floor",
    //         itemColor: "White",
    //         availableColors: ["White"],
    //         tileFinish: "Polished"
    //       },
    //       category: "Stone",
    //       material: "Volatas",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18", "24x24"],
    //         size: "24x24",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 4,
    //         thickness: 12,
    //         weight: 2500,
    //         location: ["floor tiles", "wall tiles"]
    //       }
    //     },
    //     {
    //       productName: "Wood Look Vinyl Tiles",
    //       pricePerSqFt: 4.99,
    //       manufacturer: "VinylKings",
    //       keySpecs: {
    //         commercial: "floor",
    //         residential: "floor",
    //         itemColor: "Brown",
    //         availableColors: ["Brown", "Gray", "Multicolor"],
    //         tileFinish: "Textured"
    //       },
    //       category: "Vinyl",
    //       material: "Vinyl Tiles",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18"],
    //         size: "12x12",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 15,
    //         thickness: 5,
    //         weight: 1000,
    //         location: ["floor tiles"]
    //       }
    //     },
    //     {
    //       productName: "Concrete Look Vinyl Tiles",
    //       pricePerSqFt: 6.99,
    //       manufacturer: "VinylKings",
    //       keySpecs: {
    //         commercial: "floor",
    //         residential: "floor",
    //         itemColor: "Gray",
    //         availableColors: ["Gray", "Beige & Cream", "Multicolor"],
    //         tileFinish: "Matte"
    //       },
    //       category: "Vinyl",
    //       material: "Concrete Look",
    //       detail: {
    //         available: "yes",
    //         sizes: ["12x12", "18x18"],
    //         size: "18x18",
    //         style: "modern",
    //         outdooruse: "no",
    //         SpFtPerBox: 10,
    //         thickness: 5,
    //         weight: 1200,
    //         location: ["floor tiles"]
    //       }
    //     },
    //     {
    //       productName: "Large Format Subway Tiles",
    //       pricePerSqFt: 11.99,
    //       manufacturer: "SubwayMasters",
    //       keySpecs: {
    //         commercial: "wall only",
    //         residential: "wall",
    //         itemColor: "White",
    //         availableColors: ["White", "Gray"],
    //         tileFinish: "Glossy"
    //       },
    //       category: "Collection",
    //       material: "Subway",
    //       detail: {
    //         available: "yes",
    //         sizes: ["4x16", "6x24"],
    //         size: "6x24",
    //         style: "classic",
    //         outdooruse: "no",
    //         SpFtPerBox: 8,
    //         thickness: 8,
    //         weight: 1700,
    //         location: ["backsplash & kitchen", "bathroom", "wall tiles"]
    //       }
    //     }
    //     // End of additional objects
    //   ];

    // let img = "assets/imagesTiles/demo1.avif";
    // let img = "https://source.unsplash.com/random/?tiles/";
    // let img = "https://source.unsplash.com/tiles/300x201";

    //   tileProducts = tileProducts.map((tp, index) => {
    //     let url = "https://source.unsplash.com/random/?tiles/300x20" + index.toString();
    //     return { ...tp, img: url, img1: url + "1", img2: url + "2", img3: url + "3", img4: url + "4",pid:index }
    //   });

     tileProducts = [
        {
            "pid": 0,
            "productName": "Classic Ceramic Tiles",
            "pricePerSqFt": 8.99,
            "manufacturer": "PlasmaTiles",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White",
                    "Gray",
                    "Beige & Cream",
                    "Black+White",
                    "Black",
                    "Multicolor",
                    "Blue",
                    "Purple",
                    "Brown",
                    "Green",
                    "Pink",
                    "Gold",
                    "Red",
                    "Metallic"
                ],
                "tileFinish": "Glossy"
            },
            "category": "Tiles",
            "material": "ceramic & procelain",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "12x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 12,
                "thickness": 8,
                "weight": 1500,
                "location": [
                    "backsplash & kitchen",
                    "shower",
                    "bathroom",
                    "floor tiles",
                    "wall tiles",
                    "large wall"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x200",
            "img1": "https://source.unsplash.com/random/?tiles/300x2001",
            "img2": "https://source.unsplash.com/random/?tiles/300x2002",
            "img3": "https://source.unsplash.com/random/?tiles/300x2003",
            "img4": "https://source.unsplash.com/random/?tiles/300x2004",
        },
        {
            "productName": "Marble Stone Tiles",
            "img": "https://source.unsplash.com/random/?tiles/300x201",
            "pricePerSqFt": 15.99,
            "manufacturer": "Ganito",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "Beige & Cream",
                "availableColors": [
                    "White",
                    "Gray",
                    "Beige & Cream",
                    "Black+White",
                    "Black",
                    "Multicolor",
                    "Blue",
                    "Purple",
                    "Brown",
                    "Green",
                    "Pink",
                    "Gold",
                    "Red",
                    "Metallic"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "marble & stone",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "16x16",
                    "24x24"
                ],
                "size": "16x16",
                "style": "modern",
                "outdooruse": "yes",
                "SpFtPerBox": 10,
                "thickness": 10,
                "weight": 2000,
                "location": [
                    "floor tiles",
                    "wall tiles",
                    "outdoor & pavers",
                    "pool tiles"
                ]
            },
            "img1": "https://source.unsplash.com/random/?tiles/300x2011",
            "img2": "https://source.unsplash.com/random/?tiles/300x2012",
            "img3": "https://source.unsplash.com/random/?tiles/300x2013",
            "img4": "https://source.unsplash.com/random/?tiles/300x2014",
        },
        {
            "productName": "Modern Glass Tiles",
            "img": "https://source.unsplash.com/random/?tiles/300x202",
            "pricePerSqFt": 12.5,
            "manufacturer": "GlassWorks",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "Blue",
                "availableColors": [
                    "Blue",
                    "Gray",
                    "Multicolor"
                ],
                "tileFinish": "Frosted"
            },
            "category": "Tiles",
            "material": "glass",
            "detail": {
                "available": "yes",
                "sizes": [
                    "4x4",
                    "6x6"
                ],
                "size": "6x6",
                "style": "modern",
                "outdooruse": "no",
                "SpFtPerBox": 8,
                "thickness": 6,
                "weight": 800,
                "location": [
                    "backsplash & kitchen",
                    "bathroom",
                    "wall tiles"
                ]
            },
            "img1": "https://source.unsplash.com/random/?tiles/300x2021",
            "img2": "https://source.unsplash.com/random/?tiles/300x2022",
            "img3": "https://source.unsplash.com/random/?tiles/300x2023",
            "img4": "https://source.unsplash.com/random/?tiles/300x2024",
        },
        {
            "productName": "Wood Look Vinyl Planks",
            "pricePerSqFt": 5.99,
            "manufacturer": "VinylKings",
            "keySpecs": {
                "commercial": "floor",
                "residential": "floor",
                "itemColor": "Brown",
                "availableColors": [
                    "Brown",
                    "Gray",
                    "Beige & Cream",
                    "Multicolor"
                ],
                "tileFinish": "Matte"
            },
            "category": "Vinyl",
            "material": "Vinyl Planks",
            "detail": {
                "available": "yes",
                "sizes": [
                    "6x36",
                    "8x48"
                ],
                "size": "8x48",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 20,
                "thickness": 5,
                "weight": 1200,
                "location": [
                    "floor tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x203",
            "img1": "https://source.unsplash.com/random/?tiles/300x2031",
            "img2": "https://source.unsplash.com/random/?tiles/300x2032",
            "img3": "https://source.unsplash.com/random/?tiles/300x2033",
            "img4": "https://source.unsplash.com/random/?tiles/300x2034",
        },
        {
            "productName": "Decorative Trending Collection",
            "pricePerSqFt": 19.99,
            "manufacturer": "TrendTiles",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "Multicolor",
                "availableColors": [
                    "Multicolor"
                ],
                "tileFinish": "Textured"
            },
            "category": "Collection",
            "material": "Decorative",
            "detail": {
                "available": "yes",
                "sizes": [
                    "8x8",
                    "12x12"
                ],
                "size": "12x12",
                "style": "trending",
                "outdooruse": "no",
                "SpFtPerBox": 6,
                "thickness": 7,
                "weight": 2000,
                "location": [
                    "large wall"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x204",
            "img1": "https://source.unsplash.com/random/?tiles/300x2041",
            "img2": "https://source.unsplash.com/random/?tiles/300x2042",
            "img3": "https://source.unsplash.com/random/?tiles/300x2043",
            "img4": "https://source.unsplash.com/random/?tiles/300x2044",
        },
        {
            "productName": "Classic Ceramic Tiles",
            "pricePerSqFt": 8.99,
            "manufacturer": "PlasmaTiles",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White",
                    "Gray",
                    "Beige & Cream",
                    "Black+White",
                    "Black",
                    "Multicolor",
                    "Blue",
                    "Purple",
                    "Brown",
                    "Green",
                    "Pink",
                    "Gold",
                    "Red",
                    "Metallic"
                ],
                "tileFinish": "Glossy"
            },
            "category": "Tiles",
            "material": "ceramic & procelain",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "12x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 12,
                "thickness": 8,
                "weight": 1500,
                "location": [
                    "backsplash & kitchen",
                    "shower",
                    "bathroom",
                    "floor tiles",
                    "wall tiles",
                    "large wall"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x205",
            "img1": "https://source.unsplash.com/random/?tiles/300x2051",
            "img2": "https://source.unsplash.com/random/?tiles/300x2052",
            "img3": "https://source.unsplash.com/random/?tiles/300x2053",
            "img4": "https://source.unsplash.com/random/?tiles/300x2054",
        },
        {
            "productName": "Marble Stone Tiles",
            "pricePerSqFt": 15.99,
            "manufacturer": "Ganito",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "Beige & Cream",
                "availableColors": [
                    "White",
                    "Gray",
                    "Beige & Cream",
                    "Black+White",
                    "Black",
                    "Multicolor",
                    "Blue",
                    "Purple",
                    "Brown",
                    "Green",
                    "Pink",
                    "Gold",
                    "Red",
                    "Metallic"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "marble & stone",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "16x16",
                    "24x24"
                ],
                "size": "16x16",
                "style": "modern",
                "outdooruse": "yes",
                "SpFtPerBox": 10,
                "thickness": 10,
                "weight": 2000,
                "location": [
                    "floor tiles",
                    "wall tiles",
                    "outdoor & pavers",
                    "pool tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x206",
            "img1": "https://source.unsplash.com/random/?tiles/300x2061",
            "img2": "https://source.unsplash.com/random/?tiles/300x2062",
            "img3": "https://source.unsplash.com/random/?tiles/300x2063",
            "img4": "https://source.unsplash.com/random/?tiles/300x2064",
        },
        {
            "productName": "Terrazzo Floor Tiles",
            "pricePerSqFt": 12.5,
            "manufacturer": "TerrazzoCo",
            "keySpecs": {
                "commercial": "floor",
                "residential": "floor",
                "itemColor": "Gray",
                "availableColors": [
                    "Gray",
                    "Beige & Cream",
                    "Multicolor"
                ],
                "tileFinish": "Polished"
            },
            "category": "Tiles",
            "material": "terrazzo",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18"
                ],
                "size": "18x18",
                "style": "modern",
                "outdooruse": "no",
                "SpFtPerBox": 8,
                "thickness": 10,
                "weight": 1800,
                "location": [
                    "floor tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x207",
            "img1": "https://source.unsplash.com/random/?tiles/300x2071",
            "img2": "https://source.unsplash.com/random/?tiles/300x2072",
            "img3": "https://source.unsplash.com/random/?tiles/300x2073",
            "img4": "https://source.unsplash.com/random/?tiles/300x2074",
        },
        {
            "productName": "Pebble Mosaic Tiles",
            "pricePerSqFt": 9.99,
            "manufacturer": "PebbleWorks",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "Multicolor",
                "availableColors": [
                    "Multicolor"
                ],
                "tileFinish": "Natural"
            },
            "category": "Tiles",
            "material": "pebble",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12"
                ],
                "size": "12x12",
                "style": "tropical",
                "outdooruse": "yes",
                "SpFtPerBox": 10,
                "thickness": 12,
                "weight": 2500,
                "location": [
                    "wall tiles",
                    "outdoor & pavers",
                    "pool tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x208",
            "img1": "https://source.unsplash.com/random/?tiles/300x2081",
            "img2": "https://source.unsplash.com/random/?tiles/300x2082",
            "img3": "https://source.unsplash.com/random/?tiles/300x2083",
            "img4": "https://source.unsplash.com/random/?tiles/300x2084",
        },
        {
            "productName": "Crackled Ceramic Tiles",
            "pricePerSqFt": 10.99,
            "manufacturer": "CrackleArt",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "Blue",
                "availableColors": [
                    "Blue",
                    "Gray"
                ],
                "tileFinish": "Crackled"
            },
            "category": "Tiles",
            "material": "crackled",
            "detail": {
                "available": "yes",
                "sizes": [
                    "8x8",
                    "12x12"
                ],
                "size": "8x8",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 15,
                "thickness": 9,
                "weight": 1600,
                "location": [
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x209",
            "img1": "https://source.unsplash.com/random/?tiles/300x2091",
            "img2": "https://source.unsplash.com/random/?tiles/300x2092",
            "img3": "https://source.unsplash.com/random/?tiles/300x2093",
            "img4": "https://source.unsplash.com/random/?tiles/300x2094",
        },
        {
            "productName": "Pearl Glass Tiles",
            "pricePerSqFt": 14.99,
            "manufacturer": "PearlCraft",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "White",
                "availableColors": [
                    "White",
                    "Gray",
                    "Multicolor"
                ],
                "tileFinish": "Pearlescent"
            },
            "category": "Tiles",
            "material": "glass",
            "detail": {
                "available": "yes",
                "sizes": [
                    "4x4",
                    "6x6"
                ],
                "size": "6x6",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 12,
                "thickness": 6,
                "weight": 900,
                "location": [
                    "backsplash & kitchen",
                    "bathroom",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2010",
            "img1": "https://source.unsplash.com/random/?tiles/300x20101",
            "img2": "https://source.unsplash.com/random/?tiles/300x20102",
            "img3": "https://source.unsplash.com/random/?tiles/300x20103",
            "img4": "https://source.unsplash.com/random/?tiles/300x20104",

        },
        {
            "productName": "Classic Marble Trims",
            "pricePerSqFt": 6.99,
            "manufacturer": "TrimMasters",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White",
                    "Gray"
                ],
                "tileFinish": "Polished"
            },
            "category": "Tiles",
            "material": "trims",
            "detail": {
                "available": "yes",
                "sizes": [
                    "2x12",
                    "4x12"
                ],
                "size": "2x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 20,
                "thickness": 7,
                "weight": 1200,
                "location": [
                    "backsplash & kitchen",
                    "bathroom",
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2011",
            "img1": "https://source.unsplash.com/random/?tiles/300x20111",
            "img2": "https://source.unsplash.com/random/?tiles/300x20112",
            "img3": "https://source.unsplash.com/random/?tiles/300x20113",
            "img4": "https://source.unsplash.com/random/?tiles/300x20114",

        },
        {
            "productName": "Carrara Marble",
            "pricePerSqFt": 18.5,
            "manufacturer": "CarraraCo",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White"
                ],
                "tileFinish": "Honed"
            },
            "category": "Stone",
            "material": "Carrara",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "18x18",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 6,
                "thickness": 12,
                "weight": 2200,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2012",
            "img1": "https://source.unsplash.com/random/?tiles/300x20121",
            "img2": "https://source.unsplash.com/random/?tiles/300x20122",
            "img3": "https://source.unsplash.com/random/?tiles/300x20123",
            "img4": "https://source.unsplash.com/random/?tiles/300x20124",

        },
        {
            "productName": "Calacatta Marble",
            "pricePerSqFt": 22.99,
            "manufacturer": "CalacattaMarble",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "Calacatta",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "12x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 8,
                "thickness": 10,
                "weight": 2000,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2013",
            "img1": "https://source.unsplash.com/random/?tiles/300x20131",
            "img2": "https://source.unsplash.com/random/?tiles/300x20132",
            "img3": "https://source.unsplash.com/random/?tiles/300x20133",
            "img4": "https://source.unsplash.com/random/?tiles/300x20134",

        },
        {
            "productName": "Crema Marfil Marble",
            "pricePerSqFt": 24.99,
            "manufacturer": "CremaMarfil",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "Beige & Cream",
                "availableColors": [
                    "Beige & Cream"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "Crema marfil",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "24x24",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 4,
                "thickness": 12,
                "weight": 2500,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2014",
            "img1": "https://source.unsplash.com/random/?tiles/300x20141",
            "img2": "https://source.unsplash.com/random/?tiles/300x20142",
            "img3": "https://source.unsplash.com/random/?tiles/300x20143",
            "img4": "https://source.unsplash.com/random/?tiles/300x20144",

        },
        {
            "productName": "Emperador Marble",
            "pricePerSqFt": 21.99,
            "manufacturer": "Emperador",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "Brown",
                "availableColors": [
                    "Brown"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "Emperador",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "18x18",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 6,
                "thickness": 10,
                "weight": 2200,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2015",
            "img1": "https://source.unsplash.com/random/?tiles/300x20151",
            "img2": "https://source.unsplash.com/random/?tiles/300x20152",
            "img3": "https://source.unsplash.com/random/?tiles/300x20153",
            "img4": "https://source.unsplash.com/random/?tiles/300x20154",

        },
        {
            "productName": "Thassos Marble",
            "pricePerSqFt": 26.99,
            "manufacturer": "ThassosMarble",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "Thassos",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "12x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 8,
                "thickness": 10,
                "weight": 2000,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2016",
            "img1": "https://source.unsplash.com/random/?tiles/300x20161",
            "img2": "https://source.unsplash.com/random/?tiles/300x20162",
            "img3": "https://source.unsplash.com/random/?tiles/300x20163",
            "img4": "https://source.unsplash.com/random/?tiles/300x20164",

        },
        {
            "productName": "Volatas Marble",
            "pricePerSqFt": 28.99,
            "manufacturer": "VolatasMarble",
            "keySpecs": {
                "commercial": "wall, floor",
                "residential": "wall, floor",
                "itemColor": "White",
                "availableColors": [
                    "White"
                ],
                "tileFinish": "Polished"
            },
            "category": "Stone",
            "material": "Volatas",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18",
                    "24x24"
                ],
                "size": "24x24",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 4,
                "thickness": 12,
                "weight": 2500,
                "location": [
                    "floor tiles",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2017",
            "img1": "https://source.unsplash.com/random/?tiles/300x20171",
            "img2": "https://source.unsplash.com/random/?tiles/300x20172",
            "img3": "https://source.unsplash.com/random/?tiles/300x20173",
            "img4": "https://source.unsplash.com/random/?tiles/300x20174",

        },
        {
            "productName": "Wood Look Vinyl Tiles",
            "pricePerSqFt": 4.99,
            "manufacturer": "VinylKings",
            "keySpecs": {
                "commercial": "floor",
                "residential": "floor",
                "itemColor": "Brown",
                "availableColors": [
                    "Brown",
                    "Gray",
                    "Multicolor"
                ],
                "tileFinish": "Textured"
            },
            "category": "Vinyl",
            "material": "Vinyl Tiles",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18"
                ],
                "size": "12x12",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 15,
                "thickness": 5,
                "weight": 1000,
                "location": [
                    "floor tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2018",
            "img1": "https://source.unsplash.com/random/?tiles/300x20181",
            "img2": "https://source.unsplash.com/random/?tiles/300x20182",
            "img3": "https://source.unsplash.com/random/?tiles/300x20183",
            "img4": "https://source.unsplash.com/random/?tiles/300x20184",

        },
        {
            "productName": "Concrete Look Vinyl Tiles",
            "pricePerSqFt": 6.99,
            "manufacturer": "VinylKings",
            "keySpecs": {
                "commercial": "floor",
                "residential": "floor",
                "itemColor": "Gray",
                "availableColors": [
                    "Gray",
                    "Beige & Cream",
                    "Multicolor"
                ],
                "tileFinish": "Matte"
            },
            "category": "Vinyl",
            "material": "Concrete Look",
            "detail": {
                "available": "yes",
                "sizes": [
                    "12x12",
                    "18x18"
                ],
                "size": "18x18",
                "style": "modern",
                "outdooruse": "no",
                "SpFtPerBox": 10,
                "thickness": 5,
                "weight": 1200,
                "location": [
                    "floor tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2019",
            "img1": "https://source.unsplash.com/random/?tiles/300x20191",
            "img2": "https://source.unsplash.com/random/?tiles/300x20192",
            "img3": "https://source.unsplash.com/random/?tiles/300x20193",
            "img4": "https://source.unsplash.com/random/?tiles/300x20194",

        },
        {
            "productName": "Large Format Subway Tiles",
            "pricePerSqFt": 11.99,
            "manufacturer": "SubwayMasters",
            "keySpecs": {
                "commercial": "wall only",
                "residential": "wall",
                "itemColor": "White",
                "availableColors": [
                    "White",
                    "Gray"
                ],
                "tileFinish": "Glossy"
            },
            "category": "Collection",
            "material": "Subway",
            "detail": {
                "available": "yes",
                "sizes": [
                    "4x16",
                    "6x24"
                ],
                "size": "6x24",
                "style": "classic",
                "outdooruse": "no",
                "SpFtPerBox": 8,
                "thickness": 8,
                "weight": 1700,
                "location": [
                    "backsplash & kitchen",
                    "bathroom",
                    "wall tiles"
                ]
            },
            "img": "https://source.unsplash.com/random/?tiles/300x2020",
            "img1": "https://source.unsplash.com/random/?tiles/300x20201",
            "img2": "https://source.unsplash.com/random/?tiles/300x20202",
            "img3": "https://source.unsplash.com/random/?tiles/300x20203",
            "img4": "https://source.unsplash.com/random/?tiles/300x20204",

        }
    ]
tileProducts = props;
    return tileProducts;
}
function getData(){
return tileProducts;
}
function getbyid(id) {

    let temp = mydata();
    id = Number.parseInt(id)
    return temp.find((data) => {

        return data.pid === id

    })


}
function getToken() {

    let token = 'Bearer ' + localStorage.getItem('jwt').toString()
return token;
}
function getRole(){
    let role = localStorage.getItem('role').toString();    
    return role;
}


function getcategoryList(tileProducts){
    let myCat = [];
    for (let i = 0; i < tileProducts.length; i++) {
      if (!myCat.includes(tileProducts[i].category)) {
        myCat.push(tileProducts[i].category)
      }
    }

    let filterData = myCat.map((cat) => {
      let temp = tileProducts.filter((data) => {
        if (data.category === cat) {
          return true
        }
        return false
      })
      return {
        category: cat,
        list: temp
      }
    });
    mydata(filterData);
    return filterData;
}

// var myCurrentUser={}
// function setUser(obj){
// myCurrentUser = obj;
// }
// function getUser(obj){
//     return myCurrentUser;
//     }
let totalamount = 0
function setCartPrice(amount){
    console.log("dataa",amount)
totalamount = totalamount + amount;
}
function getCartPrice(){
return totalamount;
}

export { mydata , getbyid , getToken , getRole ,getcategoryList,getData, setCartPrice,getCartPrice}


