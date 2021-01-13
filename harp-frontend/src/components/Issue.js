import React from 'react';

import {
    Link
  } from "react-router-dom";


export default function Issue () {
    return(
        <>
            <br />
            <div className="container">
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Username" />
                <br />
                <h1>item 1</h1>
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Item NSN" />
                <br />
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Nomenclature" />
                <br />
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Serial Number" />
                <br />
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Unit of Issue" />
                <br />
                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="QTY" />
                <br />
                <div>
                <button className="btn btn-primary">Add Item</button> &nbsp;
                <button className="btn btn-primary">Issue</button>
                </div>
            </div>
        </>
    );
}