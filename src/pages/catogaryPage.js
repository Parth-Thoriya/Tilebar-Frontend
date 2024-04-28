import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getData, getToken } from '../util/data';
import ProductCard from '../components/productcard';


import { Dropdown, Form } from 'react-bootstrap'; // Import Dropdown and Form components from react-bootstrap


function CatogaryPage() {
    const [data, setData] = useState([]);
    const [disData,setDisdata] = useState([]);
    const param = useParams();
    const nav = useNavigate();
    const token = getToken();
    useEffect(() => {
        fetch("http://localhost:5454/api/products", {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': token,
            }
        })
            .then(res => {
                // console.log("### raw res cat page", res)
                if (res.status == 500) {
                    nav("/")
                    localStorage.clear()
                }
                return res.json()
            })
            .then(res => {
                // console.log("### res content catpage",res.content)
                let filterData = res.content.filter((temp) => {
                    if (temp.category == param.cat) {
                        return true;
                    }
                    return false;
                });
                console.log("##### filter data catpage", filterData)

                setData(filterData)
                setDisdata(filterData)
            })
    }, [param.cat])


    let finalData = data.map((pt) => {
        return <ProductCard productTile={pt} />
    });

    console.log("##### final data catpage", finalData)

    const arrlook = ['subway', 'encaustic', 'zellige', 'decorative', 'concrete look ', 'wood look', 'shapes & patterns', 'mosaic'];
    const arrfinish = ["Polished", "Matte", "Glossy", "Textured", "Satin", "Lappato", "Structured", "Rustic", "Embossed", "Polished Glazed", "Crystalline", "Sculpted", "High Relief"];
    const arrcolors = ["White", "Gray", "Beige & Cream", "Black+White", "Black", "Multicolor", "Blue", "Purple", "Brown", "Green", "Pink", "Gold", "Red", "Metallic"];
    const arrlocation = ["backsplash & kitchen", "shower", "bathroom", "floor tiles", "wall tiles", "large wall", "outdoor & pavers", "pool tiles"];
    const arryesno = ["yes", "no"];
    const arrthickness = [8, 10, 12];
    const arrweight = [4, 9, 13.5, 16, 1, 2.25, 3.25, 4.5, 614, 18, 24, 32, 48, 72, 0.8, 0.75, 1.75, 1.5, 2.5, 5, 6, 8, 14, 20, 36, 64, 112, 160, 225];
    const arrsize = ["200x200 mm", "300x300 mm", "500x500 mm", "400x400 mm", "600x600 mm", "800x800 mm", "600x1200 mm", "800x1200 mm", "1200x1200 mm", "100x200 mm", "150x300 mm", "200x400 mm", "200x600 mm", "300x600 mm", "300x900 mm", "400x800 mm", "100x100 mm", "150x150 mm", "250x250 mm", "1200x1800 mm", "1200x2400 mm", "75x150 mm", "75x75 mm", "1000x1000 mm", "1500x1500 mm", "2000x2000 mm", "3000x3000 mm"];
    const arrprice = [5.95, 8.95, 9.95, 6.5, 4.99, 7.5, 8.5, 6.95, 5.39, 10.95, 26.5, 8.75, 5.5, 7.95, 16.18];
    const categories = [
        {
            id: 'look',
            name: 'Looks',
            items: arrlook,
        },
        {
            id: 'finish',
            name: 'Finishing',
            items: arrfinish,
        },
        {
            id: 'itemColor',
            name: 'Colors',
            items: arrcolors,
        },
        {
            id: 'location',
            name: 'Location',
            items: arrlocation,
        },
        {
            id: 'yesno',
            name: 'Availability',
            items: arryesno,
        },
        {
            id: 'thickness',
            name: 'Thickness (mm)',
            items: arrthickness.map(thickness => `${thickness}`),
        },
        {
            id: 'weight',
            name: 'Weight (kg)',
            items: arrweight.map(weight => `${weight}`),
        },
        {
            id: 'size',
            name: 'Size',
            items: arrsize,
        },
         {
            id: "price",
            name: "Price ($)",
            items: arrprice.map(pr => `${pr}`)
        }
    ];

    
    const [selectedItems, setSelectedItems] = useState({
        size: "", weight: "", thickness: "", yesno: "", location: "", colors: "", finish: "", look: "", price: ""
    });

    const handleCheckboxToggle = (category, item) => {
        const cat = category.id;
        let updatedItems;

        // if (Array.isArray(selectedItems[cat])) {
            
            if (selectedItems[cat].includes(item)) {
                
                updatedItems = {
                    ...selectedItems,
                    [cat]: selectedItems[cat].replace(","+item, "")
                };
            } else if (selectedItems[cat] === ""){
                updatedItems = {
                    ...selectedItems,
                    [cat]: item
                };
               
            }
            //}
         else {
            
            updatedItems = {
                ...selectedItems,
                [cat]:item
                // [cat]: selectedItems[cat]+","+item
            };
        }

        setSelectedItems(updatedItems);
        console.log("### cat page items", selectedItems);
    };

// @####
// function funFilterData(product, criteria) {
    
//         // Filtering based on keySpecs
//         for (const key in criteria) {
            
//                  if (key === "yesno") {
//                     if (criteria[key] !="" && criteria[key].includes(product.detail.available)) {
//                         return false;
//                     }
//                 }
//                 if(key === "size"){
//                     if (criteria[key] !="" && product.detail.size.includes(criteria[key])) {
//                         return false;
//                     }
//                 }
//                 if(key === "weight"){
//                     if (criteria[key] !="" && criteria[key].includes(product.detail.weight)) {
//                         return false;
//                     }
//                 }
//                 if(key === "thickness"){
//                     if (criteria[key] !="" && criteria[key].includes(product.detail.thickness)) {
//                         return false;
//                     }
//                 }
//                 if(key === "location"){
//                     if (criteria[key] !="" && product.detail.location.includes(criteria[key])) {
//                         return false;
//                     }
//                 }
//                 if(key === "itemColor"){
//                     if (criteria[key] !="" && criteria[key].includes(product.keySpecs.itemColor)) {
//                         return false;
//                     }
//                 }
//                 if(key === "finish"){
//                     if (criteria[key] !="" && criteria[key].includes(product.keySpecs.tileFinish)) {
//                         return false;
//                     }
//                 }
//                 if(key === "look" && ([key] in product.keySpecs)){
//                     if (criteria[key] !="" && criteria[key].includes(product.keySpecs.look)) {
//                         return false;
//                     }
//                 }
//                 if(key === "price"){
//                     if (criteria[key] !="" && criteria[key].includes(product.pricePerSqFt.toString())) {
//                         return false;
//                     }
//                 }
                
            
//         }
//         return true;
    
// }
function funFilterData(product, criteria) {
    
    for (const key in criteria) {
        // If the product does not satisfy the criteria for the current key, return false
        if (!criteriaSatisfiedForKey(product, key, criteria[key])) {
            return false;
        }
    }
    return true; // If all criteria are satisfied, return true
}

// Function to check if the criteria for a specific key is satisfied by the product
function criteriaSatisfiedForKey(product, key, criteriaValue) {
    switch (key) {
        case "yesno":
            return criteriaValue === "" || criteriaValue.includes(product.detail.available);
        case "size":
            return criteriaValue === "" || product.detail.size.includes(criteriaValue);
        case "weight":
            return criteriaValue === "" || criteriaValue.includes(product.detail.weight.toString());
        case "thickness":
            return criteriaValue === "" || criteriaValue.includes(product.detail.thickness.toString());
        case "location":
            return criteriaValue === "" || product.detail.location.includes(criteriaValue);
        case "itemColor":
            return criteriaValue === "" || criteriaValue.includes(product.keySpecs.itemColor);
        case "finish":
            return criteriaValue === "" || criteriaValue.includes(product.keySpecs.tileFinish);
        case "look":
            return ("look" in product.keySpecs) ? (criteriaValue === "" || criteriaValue.includes(product.keySpecs.look)) : true;
        case "price":
            return criteriaValue === "" || criteriaValue.includes(product.pricePerSqFt.toString());
        default:
            return true; // Return true for unknown keys
    }
}



//@#####


    useEffect(()=>{
        let filterData = data.filter((temp) => {
            console.log("@#@###@ ",funFilterData(temp,selectedItems))
           return funFilterData(temp,selectedItems);
        });
        console.log(" @@@@@@@ my filters data catpage", filterData)
        console.log(" @@@@@@@ seleted items data catpage", selectedItems)
        
        
        
        setDisdata(filterData);
    },[selectedItems]);
    finalData = disData.map((pt) => {
        return <ProductCard productTile={pt} />
    });
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                <div className="sidebar">
            <h2 className="text-center mb-4">Categories</h2>
            <ul className="list-group">
                {categories.map(category => (
                    <li key={category.id} className="list-group-item">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id={`dropdown-${category.id}`}>
                                {category.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {category.items.map(item => (
                                    <Form.Check
                                        key={item}
                                        type="checkbox"
                                        id={`${category.id}-${item}`}
                                        label={item}
                                        checked={selectedItems[category.id] === item}
                                        onChange={() => handleCheckboxToggle(category, item)}
                                    />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                ))}
            </ul>
            
            <div className="mt-4">
                {Object.entries(selectedItems).map(([categoryId, selectedItem]) => (
                    <p key={categoryId}>
                        {categoryId}: {selectedItem}
                    </p>
                ))}
            </div>
        </div>
                </div>
                <div className='col'><div className='row'>{finalData}</div></div>
            </div>

        </div>
    )
}

export default CatogaryPage

