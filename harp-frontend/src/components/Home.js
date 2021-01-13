import React from 'react';

import {
    Link
  } from "react-router-dom";



export default function Home () {
    return(
        <>
        <br />
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Issue Item</h5>
                        <p>Click button to issue new items</p>
                        <Link to="/issue">
                            <button className='btn btn-primary'>Issue Item</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Receive Item</h5>
                        <p>Click button to receive new items</p>
                        <Link to="/receive">
                            <button className='btn btn-primary'>Receive Item</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Close Receipt</h5>
                        <p>Click button to close outstanding receipts</p>
                        <Link to="/close">
                            <button className='btn btn-primary'>Close Receipt</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
            

            

            
            
            
        </>
    );
}