import React from 'react';

import {
    Link,
    useParams
  } from "react-router-dom";


export default function Receipt ({allReceipts, deleteReceive, acceptReceive, info}) {

    let {itemId} = useParams()
    const selectedReceiptWrapper = allReceipts.find((receipt) => Number(receipt.id) === Number(itemId))

    

    if (selectedReceiptWrapper){
        const receipt = selectedReceiptWrapper.receipt 

        info = (
        <h6>
            <ul>
            {receipt.map( (item) => {
                return <li key={item.serialNum}> {`${item.itemNSN} | ${item.nomenclature} | ${item.serialNum} | ${item.unit} | ${item.qty}`} </li>
            })}
            </ul>
        </h6>
        )
    } 
    return(
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {info}
                    </div>
                    <div className="row"> 
                        <div className="col"><button className="btn btn-primary" onClick={() => acceptReceive(itemId)}>Agree</button></div>
                        <div className="col"><button className="btn btn-danger" onClick={() => deleteReceive(itemId)} >Disagree</button></div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    );
}