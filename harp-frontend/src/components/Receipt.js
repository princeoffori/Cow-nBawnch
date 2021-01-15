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
            <>
            <h1>Reviewing Receipt #{selectedReceiptWrapper.id} from {selectedReceiptWrapper.issuer}</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Item NSN</th>
                        <th scope="col">Nomenclature</th>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Unit of Issue</th>
                        <th scope="col">QTY</th>
                    </tr>
                </thead>
                {receipt.map( (item) => {
                    return(
                            <tbody>
                                <tr>
                                    <td>{item.itemNSN}</td>
                                    <td>{item.nomenclature}</td>
                                    <td>{item.serialNum}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.qty}</td>
                                </tr>
                            </tbody>
                )})}
            </table>
            
            </>
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
                        <div className="col"><button className="btn btn-danger btn-margin" onClick={() => deleteReceive(itemId)} >Disagree</button></div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    );
}