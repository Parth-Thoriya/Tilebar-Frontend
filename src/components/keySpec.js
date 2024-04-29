import React from "react";
import "../pages/detailView.css";
import Typography from '@mui/joy/Typography';
function formatArray(arr) {
    let arr1 = arr.map((elt) => {
        return " " + elt + " ,"
    })
    arr1[arr1.length - 1] = " " + arr[arr.length - 1]
    return arr1
}
function KeySpecs(props) {
    let productData = props.productData;
    return (<>

        <div className="btn specs  d-block mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> View Specs </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel"><Typography level="title-lg">{productData.productName}</Typography></h1>
                        <button type="button" className="btn mybtn" style={{ fontSize: 15 }} data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col">Commercial : {productData.keySpecs.commercial}</div>
                                <div className="col">Residential : {productData.keySpecs.residential}</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">Color : {productData.keySpecs.itemColor}</div>
                                <div className="col">Finishing : {productData.keySpecs.tileFinish}</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">Category : {productData.category}</div>
                                <div className="col">Material : {productData.material}</div>
                            </div>

                            <div className="row mb-2">
                                <div className="col">available : {productData.detail.available}</div>                                
                            </div>

                            <div className="row mb-2">
                                <div className="col">Size : {productData.detail.size}</div>
                                <div className="col">Sizes : {productData.detail.sizes}</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">Thickness : {productData.detail.thickness} mm</div>
                                <div className="col">Weight : {productData.detail.weight} grams</div>
                            </div>

                            <div className="row mb-2">
                                <div className="col">Square foot per box : {productData.detail.SpFtPerBox}</div>
                                <div className="col">Location : {formatArray(productData.detail.location)}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>);
}
export default KeySpecs






