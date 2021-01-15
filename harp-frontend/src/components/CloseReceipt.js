import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";

export default function CloseReceipt({ allReceipts, closeOutstanding, info }) {

    let {itemId} = useParams()
    const selectedReceiptWrapper = allReceipts.find((receipt) => Number(receipt.id) === Number(itemId))

    console.log(Number(itemId))
    console.log(allReceipts)
    console.log(selectedReceiptWrapper)


    if (selectedReceiptWrapper) {
        const receipt = selectedReceiptWrapper.receipt

        info = (
            <h6>
                <ul>
                    {receipt.map((item) => {
                        return <li key={item.serialNum}> {`${item.itemNSN} | ${item.nomenclature} | ${item.serialNum} | ${item.unit} | ${item.qty}`} </li>
                    })}
                </ul>
            </h6>
        )
    }
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {info}
                    </div>
                    <div className="row">
                        <div className="col"><button className="btn btn-danger" onClick={() => closeOutstanding(itemId)}>Close Receipt</button></div>


                    </div>
                </div>
            </div>
        </>
    );
}