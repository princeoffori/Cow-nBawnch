import React from 'react';

import {
    Link
  } from "react-router-dom";


export default function Close ({outstanding, user}) {

    let filteredOutstanding = outstanding.filter((item) => item.issuer === user)
    
    let content

    if(filteredOutstanding.length === 0){
        content = (<h5>None</h5>)
    }
    else {
        content = (
            filteredOutstanding.map((item) => {
                return(
                    <Link to={`/close/${item.id}`}>
                        <button  class="btn btn-primary">For user: {item.username} | Receipt Number: {item.id} | Items: {item.receipt[0].nomenclature}...</button>
                    </Link>
                )
            })
        )
    }

    return(
        <>
            <h1>Outstanding Receipts</h1>
            <div class="container">
                {content}
            </div>
        </>
    );
}