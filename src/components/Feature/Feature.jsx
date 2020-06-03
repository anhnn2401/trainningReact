import React, { Component } from 'react';
import { loopOptions, loopFeatures } from '../__mock__/Data'
class Feature extends Component {
  render() {
    const feature = loopFeatures.map((loopFeature, index) => {
      return (
        <div key={ index } className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-offset="20" data-wow-delay={ loopFeature.delay }>
          <div className="feature-icon">
            <a href="#a"><img className="image-option" alt="anh" src={ loopFeature.iconFeat }/></a>
            <a href="#a" className="feature-link">{ loopFeature.titleFeature }</a>
          </div>
          <p className="description-feature">{ loopFeature.descFeature }</p>
        </div>
      )
    })
    const option = loopOptions.map((loopOption, index) => {
      return (
        <div key={ index } className="col-lg-3 col-sm-6 option wow fadeInUp" data-wow-offset="15" data-wow-delay={ loopOption.delay }>
          <div>
            <a href="#a"><img className="image-option" src={ loopOption.imageOption } alt="anh option" /></a>
          </div>
      <p className="title-option">{ loopOption.descOption}</p>
        </div>
      )
    })
    return (
      <div id="feature" className="feature">
        <div className="row">
          { option }
        </div>
        <div className="content-feature container">
          <h3 className="title-feature wow fadeInLeft" data-wow-offset="50">Creative Amazing Features</h3>
          <div className="row">
            { feature }
          </div>
        </div>
      </div>
    );
  }
}
export default Feature;
