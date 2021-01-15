import React from 'react';
import {
    Link
  } from "react-router-dom";


export default function Receive({receive, user}) {

    let fitleredReceive = receive.filter( (item) => item.username === user)

    return(
        <>
            <h1>Receive Items</h1>
            <div class="containter">
                {
                fitleredReceive.map( (item) => {
                    return(
                        <Link className="receiveItemCntr" to={`/receive/${item.id}`}>
                            <button className="receiveItemButton btn btn-primary">Issuer: {item.issuer} | Receipt Number: {item.id} | Items: {item.receipt[0].nomenclature}...</button>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}