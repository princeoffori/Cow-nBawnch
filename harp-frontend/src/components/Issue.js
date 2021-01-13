import React from 'react';

import {
    Link
  } from "react-router-dom";


export default function Issue ({issueReceipt, addItem, issue}) {
    return(
        <>
            <br />
            <div className="container">
                <input type="text" class="form-control" id="username" aria-label="Sizing example input" placeholder="Username" />
                <br />
                <input type="text" class="form-control" id="itemNSN" aria-label="Sizing example input" placeholder="Item NSN" />
                <br />
                <input type="text" class="form-control" id="nomenclature" aria-label="Sizing example input" placeholder="Nomenclature" />
                <br />
                <input type="text" class="form-control" id="serialNum" aria-label="Sizing example input" placeholder="Serial Number" />
                <br />
                <input type="text" class="form-control" id="unit" aria-label="Sizing example input" placeholder="Unit of Issue" />
                <br />
                <input type="text" class="form-control" id="qty" aria-label="Sizing example input" placeholder="QTY" />
                <br />

                {console.log(issue)}
                {issue.map( (item) => {
                    return(
                        
                        <h1>{item.itemNSN} {item.nomenclature} {item.serialNum} {item.unit} {item.qty}</h1>
                    )
                })}

                
                <div>
                <button className="btn btn-primary" onClick={addItem}>Add Item</button> &nbsp;
                <button className="btn btn-primary" onClick={issueReceipt}>Issue</button>
                </div>
            </div>
        </>
    );
}