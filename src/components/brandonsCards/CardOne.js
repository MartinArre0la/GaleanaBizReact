import React, { Component } from 'react'
// scss from 
import '../styles/product-cards.scss';

export default class cardOne extends Component {

  


    render() {
        return (
            <div className="brandoncard">
                 <div classname="companyName">
                   <h3>Tesla</h3>
                </div>
                <div className="picture"> 
                    <img src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_82dbd5ace6ae4320ac1d01bafdcafa92.jpg" />
                </div>
                <div className="description">
                    <div classname="productName">
                            tesla model x
                    </div>
                    <div classname="priceOfProcuct">
                       $129,990
                    </div>
                  
                  
                </div>
            </div>
        )
    }
}
