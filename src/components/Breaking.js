import React, { Component } from 'react';


class Breaking extends Component {

  render() {
  
    let loopBreaks = [
      {
        id: 1,
        image: require('../assets/images/img-1.jpg'),
        delay: '0.3s',
        title: 'Amazing Image Post'
      },
      {
        id: 2,
        image: require('../assets/images/img-1.jpg'),
        delay: '0.6s',
        title: 'Amazing Image Post'
      },
      {
        id: 3,
        image: require('../assets/images/img-1.jpg'),
        delay: '0.9s',
        title: 'Amazing Image Post'
      },
      {
        id: 4,
        image: require('../assets/images/img-1.jpg'),
        delay: '1s',
        title: 'Amazing Image Post'
      },
      {
        id: 5,
        image: require('../assets/images/img-1.jpg'),
        delay: '1.3s',
        title: 'Amazing Image Post'
      },
      {
        id: 6,
        image: require('../assets/images/img-1.jpg'),
        delay: '1.6s',
        title: 'Amazing Image Post'
      },
      {
        id: 7,
        image: require('../assets/images/img-1.jpg'),
        delay: '2s',
        title: 'Amazing Image Post'
      },
      {
        id: 8,
        image: require('../assets/images/img-1.jpg'),
        delay: '2.4s',
        title: 'Amazing Image Post'
      },
    ];
    const element = loopBreaks.map((loopBreak, index) => {
      return (
        <div key={ loopBreak.id } className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="{ loopBreak.delay }">
          <div className="content-breaking">
            <img src={ loopBreak.image } alt="anh new" className="image" />
            <div className="date">
              <p>12</p>
              <p>Feb</p>
            </div>
          </div>
          <div className="title-desc">
            <h3><a className="title-post" href="#a">{ loopBreak.title }</a></h3>
            <div className="desc-post">
              <p><a className="desc-link" href="#a">By admin</a></p>
              <p className="desc-link">|</p>
              <p><a className="desc-link" href="#a">2 comment</a></p>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="breaking-new container" id="blog">
        <h3 className="title-feature wow FadeInRight">Breaking News</h3>
        <div className="row">
          { element }
        </div>
      </div>
    )
  }
}

export default Breaking;
