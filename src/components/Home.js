import React, { Component } from 'react';

class Home extends Component {
  render() {
    let loopHomes = [
      {
        descrip1: 'the ham is',
        descrip2: ' wordpress theme',
        title: 'we are creative',
        description: 'just buy and enjoy these awesome features',
        image: require('../assets/images/img-4.jpg')
      }
    ];
    const sliderFor = loopHomes.map((loopHome, index) => {
      return (
        <div key={ index } className="slide-home">
          <div>
            <img className="images-home" src={ loopHome.image } alt="images-home"/>
          </div>
          <div className="content-home">
            <h3 className="title-home">{ loopHome.descrip1 } <span className="descrip-home">{ loopHome.descrip2 }</span></h3>
            <h2 className="title-home-creative">{ loopHome.title }</h2>
            <p className="descrip-slide">{ loopHome.description }</p>
          </div>
          <div className="btn-home">
            <button type="button" className="btn btn-lg">explore now</button>
            <button  type="button" className="btn btn-lg">purchase now</button>
          </div>
        </div>

      )
    })
    return(
      <div className="home" id="home">
        <div className="slider-for">
          { sliderFor }
        </div>
        <div className="slider-nav">
          <img src={ require('../assets/images/img-5.jpg') } alt="anh 1"/>
          <img src="images/img-1.jpg" alt="anh 2"/>
          <img src="images/img-2.jpg" alt="anh 2"/>
          <img src="images/img-3.jpg" alt="anh 2"/>
          <img src="images/img-4.jpg" alt="anh 2"/>
        </div>
      </div>

    )
  }
}
export default Home;