import React, { Component } from 'react';

class Company extends Component {

    render() {
      let loopCompanys = [
        {
          id: 'nav-history',
          classUser: 'interface-history progress',
          classWeb: 'web-design-history progress',
          classWordpress: 'wordpress-history progress',
          classHtml: 'html-history progress',
          classApp: 'app-design-history progress'
        },
        {
          id: 'nav-biography',
          classUser: 'interface-biog progress',
          classWeb: 'web-design-biog progress',
          classWordpress: 'wordpress-biog progress',
          classHtml: 'html-biog progress',
          classApp: 'app-design-biog progress'
        },
        {
          id: 'nav-skills',
          classUser: 'interface-skill progress',
          classWeb: 'web-design-skill progress',
          classWordpress: 'wordpress-skill progress',
          classHtml: 'html-skill progress',
          classApp: 'app-design-skill progress'
        }
      ];
    const element = loopCompanys.map((loopCompany, index) => {
      return (
        <div key={ index } className={`tab-pane fade ${(index === 0 && 'show active') || ''}`} id={ loopCompany.id } role="tabpanel" aria-labelledby="nav-history-tab">
          <p className={ loopCompany.classUser }>user interface</p>
          <p className={ loopCompany.classWeb }>web design</p>
          <p className={ loopCompany.classWordpress }>wordpress</p>
          <p className={ loopCompany.classHtml }>html & css</p>
          <p className={ loopCompany.classApp }>app design</p>
        </div>
      )
    });
        return (
          <div className='about-company row' id="about">
            <div className="col-lg-6 col-sm-12">
              <img src={ require('../assets/images/devices.png') } alt="progress" className="image-company wow fadeInLeft" data-wow-delay="0.5s" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h3 className="title-feature wow fadeInRight" data-wow-duration="5s">About Our Company</h3>
              <div className="wow fadeInRight" data-wow-delay="0.5s">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-history-tab" data-toggle="tab" href="#nav-history" role="tab" aria-controls="nav-history" aria-selected="true">our history</a>
                    <a className="nav-item nav-link" id="nav-biography-tab" data-toggle="tab" href="#nav-biography" role="tab" aria-controls="nav-biography" aria-selected="false">our biography</a>
                    <a className="nav-item nav-link" id="nav-skills-tab" data-toggle="tab" href="#nav-skills" role="tab" aria-controls="nav-skills" aria-selected="false">our skills</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  { element }
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Company;