import React, { Component } from 'react';
import { loopPrices, imageFacts } from '../__mock__/Data'
class Funfact extends Component {
  render() {
    
    const Price = loopPrices.map((loopPrice, index) => {
      return(
        <div key={ index } className="col-md-3 col-sm-6 block-price wow fadeInLeft" data-wow-delay={loopPrice.delay} width={100}>
          <h3 className="title-price">{ loopPrice.title }</h3>
          <p className="price">${ loopPrice.price }<span className="price-month">/Month</span></p>
          <p className="offer">offer</p>
          <ul className="list-price">
            <li className="item-price">{ loopPrice.hosting}</li>
            <li className="item-price">{ loopPrice.email}</li>
            <li className="item-price">{ loopPrice.database}</li>
            <li className="item-price">{ loopPrice.design}</li>
            <li className="item-price">{ loopPrice.website}</li>
            <li className="item-price">{ loopPrice.header}</li>
            <li className="item-price">{ loopPrice.store}</li>
          </ul>
          <div className="d-flex justify-content-center">
            <a href="#aa" className="link-buy">buy now</a>
          </div>
        </div>
      )
    });    
    const element = imageFacts.map((imageFact,index) => {
      return (
        <div key={ index } className="col-lg-3 col-sm-6 option wow fadeInUp" data-wow-delay={ imageFact.delay}>
          <div>
            <a href="#aa"><img className="image-option" src={ imageFact.linkImage } alt="anh option"/></a>
          </div>
          <p className="number-fun">{ imageFact.number }</p>
          <p className="title-option">{ imageFact.title }</p>
        </div>
      )
    })
    return(
      <div className="fun-fact">
        <div className="row">
          { element }
        </div>
        <div className="price">
          <div className="row">
            <div className="col-12 title-feature wow fadeInRight">
              <h3>Our Pricing Table</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              { Price }
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Funfact
