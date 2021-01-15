import React from 'react';

import {
    Link
  } from "react-router-dom";


export default function Issue ({issueReceipt, addItem, issue, deleteItem}) {
    return(
        <>
            <h1>Issue Items</h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" class="form-control" id="username" aria-label="Sizing example input" placeholder="Username" />
                        <br /><hr></hr>
                        <input type="text" class=" form-control" id="itemNSN" aria-label="Sizing example input" placeholder="Item NSN" />
                        <br />
                        <input type="text" class=" form-control" id="nomenclature" aria-label="Sizing example input" placeholder="Nomenclature" />
                        <br />
                        <input type="text" class=" form-control" id="serialNum" aria-label="Sizing example input" placeholder="Serial Number" />
                        <br />
                        <input type="text" class=" form-control" id="unit" aria-label="Sizing example input" placeholder="Unit of Issue" />
                        <br />
                        <input type="text" class=" form-control" id="qty" aria-label="Sizing example input" placeholder="QTY" />
                        <br />                               
                        
                    </div>

                    <div className="col" style={{overflow: 'scroll', height: 360 + 'px'}}>
                        {/* <h4 className="control">ITEMS TO ISSUE</h4> */}
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
                        {issue.map( (item, index) => {
                            return(
                                <tbody>
                                        <tr>
                                            <td>{item.itemNSN}</td>
                                            <td>{item.nomenclature}</td>
                                            <td>{item.serialNum}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.qty}</td>
                                            <td><button id="deleteItemButton" className="btn btn-danger" onClick={() => deleteItem(index)}>X</button></td> 
                                        </tr>
                                    </tbody>
                            )
                        })}
                        </table>
                        
                    </div>
                    <div className="row">
                        <div className="col"><button className="btn btn-primary" onClick={addItem}>Add Item</button></div>
                        <div className="col"><button className="btn btn-primary" onClick={issueReceipt}>Issue</button></div>
                        
                        
                    </div>
                    
                </div>

                
                {/* {console.log(issue)} */}
                

                
                <div>
                 &nbsp;
                
                </div>
            </div>
        </>
    );
}