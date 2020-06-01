import React, { Component } from 'react';

class Funfact extends Component {
  render() {
    let loopPrices = [
      {
        title: 'Personal',
        price: 99,
        hosting: '1 Hosting',
        email: '2 Email Marketing',
        database: '5 Database',
        design: '2 Design Pack',
        website: '3 Website Layout',
        header: '5 Header Style',
        store: '3 Online Store',
        delay: '0.4s'
      }, {
        title: 'Business',
        price: '199',
        hosting: '1 Hosting',
        email: '2 Email Marketing',
        database: '5 Database',
        design: '2 Design Pack',
        website: '3 Website Layout',
        header: '5 Header Style',
        store: '3 Online Store',
        delay: '0.8s'
      }, {
        title: 'Professional',
        price: '299',
        hosting: '1 Hosting',
        email: '2 Email Marketing',
        database: '5 Database',
        design: '2 Design Pack',
        website: '3 Website Layout',
        header: '5 Header Style',
        store: '3 Online Store',
        delay: 1.2
      }, {
        title: 'Diamond',
        price: '299',
        hosting: '1 Hosting',
        email: '2 Email Marketing',
        database: '5 Database',
        design: '2 Design Pack',
        website: '3 Website Layout',
        header: '5 Header Style',
        store: '3 Online Store',
        delay: 1.6
      }
    ]
    const price = loopPrices.map((loopPrice, index) => {
      return(
        <div key={ index } className="col-md-3 col-sm-6 block-price wow fadeInLeft" data-wow-delay={delay} width={100}>
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
    const a = 123;
    const b = 123;
    
    let loopFacts = [
      {
        delay: '0.4s',
        linkImage: require('../assets/images/fact-1.png'),
        number: 4609,
        title: 'Works'
      }, {
        delay: '0.8s',
        linkImage: require('../assets/images/fact-2.png'),
        number: 3470,
        title: 'Customers'
      }, {
        delay: '1.2s',
        linkImage: require('../assets/images/fact-3.png'),
        number: 2908,
        title: 'Purchase'
      }, {
        delay: '1.6s',
        linkImage: require('../assets/images/fact-4.png'),
        number: 1908,
        title: 'Office'
      }
    ];
    const element = loopFacts.map((loopFact,index) => {
      return (
            <div key={ index } className="col-lg-3 col-sm-6 option wow fadeInUp" data-wow-delay={ loopFact.delay}>
              <div>
                <a href="#aa"><img className="image-option" src={ loopFact.linkImage } alt="anh option"/></a>
              </div>
              <p className="number-fun">{ loopFact.number }</p>
              <p className="title-option">{ loopFact.title }</p>
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
              { price }
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Funfact
