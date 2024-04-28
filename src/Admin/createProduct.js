import React, { useState } from "react";
import { getToken } from "../util/data";
// import { useNavigate } from "react-router-dom";


function CreateProduct() {
    const [imgurl, setImgurl] = useState();
    const [imgurl1, setImgurl1] = useState();
    const [imgurl2, setImgurl2] = useState();
    const [imgurl3, setImgurl3] = useState();
    const [product, setProduct] = useState({
        productName: "",
        pricePerSqFt: 0.0,
        discountedPrice: 0,
        discountPercent: 0,
        manufacturer: "",
        category: "",
        material: "",
        imageUrls: [
            {
                imgUrl: "",
            }
        ],
        keySpecs: {
            commercial: "",
            residential: "",
            itemColor: "",
            availableColors: "",
            tileFinish: ""
        },
        detail: {
            available: "",
            sizes: "",
            size: "",
            style: "",
            outdooruse: "",
            SpFtPerBox: 0.0,
            thickness: 0,
            weight: 0,
            location: [""]
        }
    });
    const [keySpec, setKeySpec] = useState({
        commercial: "",
        residential: "",
        itemColor: "",
        availableColors: [""],
        tileFinish: ""
    });
    const [details, setDetails] = useState({
        available: "",
        sizes: [""],
        size: "",
        style: "",
        outdooruse: "",
        SpFtPerBox: 0.0,
        thickness: 0,
        weight: 0,
        location: [""]
    })

    function submitProduct(e) {
        // console.log("####### url",imgurl,":::::",imgurl1,":::::",imgurl2,":::::",imgurl3)
        // console.log("####### details",details)
        // console.log("####### key specs",keySpec)

        if (typeof (product.keySpecs.availableColors) == String) {
            let arraycolor = keySpec.availableColors.split(",")

            setKeySpec({ ...keySpec, availableColors: arraycolor })
        }
        const myfun =()=>{
            if(!Array.isArray(details.location)){

                setDetails({...details,location:details.location.split(","),SpFtPerBox:Number.parseFloat(details.SpFtPerBox),thickness:Number.parseFloat(details.thickness),weight:Number.parseFloat(details.weight)})
            }
        }
        myfun()
        setProduct({ ...product, imageUrls: [imgurl, imgurl1, imgurl2, imgurl3], detail: details, keySpecs: keySpec })

        console.log("#### new product", product)
        console.log("#####", product)
      
            fetch(
                "http://localhost:5454/api/admin/products", {
                method: 'Post',
                headers: {
                    'content-type': 'application/json',
                    'authorization': getToken(),
                },
                body:JSON.stringify(product)
            }
            ).then(res => {
                return res.json()
            }).then(
                res => {
                    console.log("### create product res", res)
                    
                }
            )
        
    }
    console.log("#### outside new product", product)
    return (<>
        <div className="container mt-5">
            <form class="row g-3 needs-validation" novalidate>
                <div className="row">
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="validationCustom01"
                            onChange={(e) => {
                                setProduct({ ...product, productName: e.target.value })
                            }}
                            placeholder="Example : morden glass tiles" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom02" class="form-label">Price Per Square Foot</label>
                        <input type="text" class="form-control" id="validationCustom02"
                            onChange={(e) => {
                                setProduct({ ...product, pricePerSqFt: Number.parseFloat(e.target.value) })
                            }}
                            placeholder="Example : 12.0" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-12">
                        <label for="validationCustomUsername" class="form-label">Manufacturer</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setProduct({ ...product, manufacturer: (e.target.value).toLowerCase() })
                                }}
                                placeholder="Example : plasma Granito" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a manufacturer.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Image url 1</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setImgurl({ imgUrl: e.target.value })
                                }}
                                aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please enter url 1.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Image url 2</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setImgurl1({ imgUrl: e.target.value })
                                }}
                                aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please enter url 2.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Image url 3</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setImgurl2({ imgUrl: e.target.value })
                                }}
                                aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please enter url 3.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Image url 4</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setImgurl3({ imgUrl: e.target.value })
                                }}
                                aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please enter url 4.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div class="col-md-12">
                        <label for="validationCustomUsername" class="form-label">Available Colors</label>
                        <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend"><i style={{ fontSize: 20 }} class="fa iconbtn">&#xf023;</i></span> */}
                            <input type="text" class="form-control" id="validationCustomUsername"
                                onChange={(e) => {
                                    setKeySpec({ ...keySpec, availableColors: e.target.value })

                                }}
                                placeholder="blue , brown,red,metalic, ..." aria-describedby="inputGroupPrepend" />
                            {/* <div class="invalid-feedback">
                              Password And Confirm password must be same.
                            </div> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Material</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setProduct({ ...product, material: e.target.value })
                            }}
                            placeholder="carrara , pebble , wood look ..." aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value .
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Category</label>
                    <select class="form-select" id="validationCustom04"
                        onChange={(e) => {
                            setProduct({ ...product, category: e.target.value })
                        }}
                        required >
                        <option selected disabled value="0">Choose...</option>
                        <option value="Tiles">Tiles</option>
                        <option value="Stone">Stone</option>
                        <option value="Vinly">Vinly</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a category.
                    </div>
                </div>
                {/* <div class="col-md-2">
                    <label for="validationCustom05" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="validationCustom05" required />
                    <div class="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div> */}
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">SpFtPerBox</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, SpFtPerBox: e.target.value })
                            }}
                            placeholder="Example : 53.00" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value .
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">available</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, available: e.target.value })
                            }}
                            placeholder="yes or no" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">weight</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, weight: e.target.value })
                            }}
                            placeholder="weight" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter weight.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">thickness</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, thickness: e.target.value })
                            }}
                            placeholder="Thickness in mm" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please  enter thickness .
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">outdooruse</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, outdooruse: e.target.value })
                            }}
                            placeholder="yes or no" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value .
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">size</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, size: e.target.value })
                            }}
                            placeholder="" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">sizes</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, sizes: e.target.value })
                            }}
                            placeholder=" 1200x600 , 400x400, 1400x700" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter comma separeted available sizes.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">style</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, style: e.target.value })
                            }}
                            placeholder="classic etc.." aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter value .
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">tile's Finishing</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setKeySpec({ ...keySpec, tileFinish: e.target.value })
                            }}
                            placeholder="matte etc.." aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter tile finishing.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">item's Color</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setKeySpec({ ...keySpec, itemColor: e.target.value })

                            }}
                            placeholder="red , metallic" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter of color of item.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">residential</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setKeySpec({ ...keySpec, residential: e.target.value })
                            }}
                            placeholder="kitchen , living room " aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter residential uses.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">commercial</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setKeySpec({ ...keySpec, commercial: e.target.value })
                            }}
                            placeholder="offices , class room" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please enter commercial uses.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">location</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                setDetails({ ...details, location: e.target.value })
                            }}
                            placeholder="wall , fluor , ceiling etc.." aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback">
                            Please choose a category.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label"> discount Percentage </label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                            onChange={(e) => {
                                if (e.target.value != null) {
                                    setProduct({ ...product, discountPercent: e.target.value })
                                }
                            }}
                            placeholder="example (in %): 25" aria-describedby="inputGroupPrepend" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button className="btn mybtn"
                        onClick={()=>{
                            fetch(
                                "http://localhost:5454/api/admin/products", {
                                method: 'Post',
                                headers: {
                                    'content-type': 'application/json',
                                    'authorization': getToken(),
                                },
                                body:JSON.stringify({
                                    "keySpecs": {
                                        "look": "Vinyl Planks",
                                        "commercial": "",
                                        "residential": "backsplash & kitchen, shower, bathroom, floor tiles",
                                        "tileFinish": "Rustic"
                                    },
                                    "detail": {
                                        "available": "yes",
                                        "sizes": "100x100 mm ,400x800 mm ,500x500 mm",
                                        "size": "500x500 mm",
                                        "outdooruse": "no",
                                        "SpFtPerBox": 2.5,
                                        "thickness": 10,
                                        "weight": 5,
                                        "location": [
                                            "shower",
                                            "bathroom",
                                            "floor tiles",
                                            "wall tiles",
                                            "large wall",
                                            "outdoor & pavers"
                                        ]
                                    },
                                    "_id": "66006cc255de3d252fbbf091",
                                    "productName": "myghjk vinyl",
                                    "productDiscription": "Studio Gray 12mil Wood Look Glue Down 6x48 Luxury Vinyl Plank",
                                    "manufacturer": "Varmora Granito Pvt. Ltd.",
                                    "category": "Vinyl",
                                    "pricePerSqFt": 1.99,
                                    "imageUrls": [
                                        {
                                            "_id": "660668117656763a997fbbc2",
                                            "imgUrl": "https://cdn.speedsize.com/e0ef94ef-bbea-450b-a400-575c3145c135/www.tilebar.com/media/catalog/product/g/b/gb1-lvttzrnsost12gd.jpg/w_375"
                                        },
                                        {
                                            "_id": "660668117656763a997fbbc3",
                                            "imgUrl": "https://cdn.speedsize.com/e0ef94ef-bbea-450b-a400-575c3145c135/www.tilebar.com/media/catalog/product/s/s/ss1-lvttzrnsost12gd_sq.jpg/w_375"
                                        },
                                        {
                                            "_id": "660668117656763a997fbbc4",
                                            "imgUrl": "https://cdn.speedsize.com/e0ef94ef-bbea-450b-a400-575c3145c135/www.tilebar.com/media/catalog/product/4/-/4-gb1-lvttacbr12x48cl20.jpg/w_375"
                                        },
                                        {
                                            "_id": "660668117656763a997fbbc5",
                                            "imgUrl": "https://cdn.speedsize.com/e0ef94ef-bbea-450b-a400-575c3145c135/www.tilebar.com/media/catalog/product/1/-/1-ssr2-lvttacbr12x48cl20.jpg/w_375"
                                        }
                                    ]
                                })
                            }
                            ).then(res => {
                                return res.json()
                            }).then(
                                res => {
                                    console.log("### dummy create product res", res)
                                    
                                }
                            )
                        }}
                        >
                            dummy data 
                        </button>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn mybtn"
                        onClick={(e) => {
                            e.preventDefault()
                            submitProduct(e)
                        }}
                    >Submit form</button>

                </div>
            </form >
        </div>
    </>);
}
export default CreateProduct;
