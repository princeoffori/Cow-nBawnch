import React from 'react';

import {
    Link
  } from "react-router-dom";


export default function Close ({outstanding}) {
    return(
        <>
            <h1>Close Receipt</h1>
            <div class="container">
                {
                    outstanding.map((item) => {
                        return(
                            <Link to={`/close/${item.id}`}>
                                <button  class="btn btn-primary">For user: {item.username} | Receipt Number: {item.id} | Items: {item.receipt[0].nomenclature}...</button>
                            </Link>
                        )
                    })

                }
            </div>
        </>
    );
}