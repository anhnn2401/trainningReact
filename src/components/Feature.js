import React, { Component } from 'react'
class Feature extends Component {
  render() {
    let loopFeatures = [
      {
        titleFeature: 'Retina Ready',
        iconFeat: require('../assets/images/icon-feat-1.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.4s'
      },
      {
        titleFeature: 'Creative Blog Style',
        iconFeat: require('../assets/images/icon-feat-2.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.4s'
      },
      {
        titleFeature: 'Icon Fonts',
        iconFeat: require('../assets/images/icon-feat-3.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.4s'
      },
      {
        titleFeature: 'Parallax Effects',
        iconFeat: require('../assets/images/icon-feat-4.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.8s'
      },
      {
        titleFeature: 'Amazing Interface',
        iconFeat: require('../assets/images/icon-feat-5.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.8s'
      },
      {
        titleFeature: 'SEO Optimized',
        iconFeat: require('../assets/images/icon-feat-6.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '0.8s'
      },
      {
        titleFeature: 'Creative Solutions',
        iconFeat: require('../assets/images/icon-feat-7.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '1.2s'
      },
      {
        titleFeature: 'Mega Menus',
        iconFeat: require('../assets/images/icon-feat-8.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '1.2s'
      },
      {
        titleFeature: 'Custom Backgrounds',
        iconFeat: require('../assets/images/icon-feat-9.png'),
        descFeature: 'All our modules are built with the possi bility to thse choose between different design and you change.',
        delay: '1.2s'
      }
    ];
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
    let loopOptions = [
      {
      imageOption: require('../assets/images/option-1.png'),
      descOption: 'Different theme option',
      delay: '0.4s'
      },
      {
        imageOption: require('../assets/images/option-2.png'),
        descOption: 'fully customizable',
        delay: '0.8s'
      },
      {
        imageOption: require('../assets/images/option-3.png'),
        descOption: 'unlimited support',
        delay: '1.2s'
      },
      {
        imageOption: require('../assets/images/option-4.png'),
        descOption: 'responsive all device',
        delay: '1.6s'
      }
    ];
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