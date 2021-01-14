import React from 'react';
import {
    Link
  } from "react-router-dom";


export default function Receive({receive}) {
    return(
        <>
            <h1>Receive Item</h1>
            <div class="containter">
                {
                receive.map( (item) => {
                    return(
                        <Link className="receiveItemCntr" to={`/receive/${item.id}`}>
                            <button className="receiveItemButton btn btn-primary">For user: {item.username} | Receipt Number: {item.id} | Items: {item.receipt[0].nomenclature}...</button>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}