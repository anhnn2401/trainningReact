import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    let loopFeedbacks = [
      {
        name: 'Hasan Ali',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      },
      {
        name: 'Tristina',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      },
      {
        name: 'Ken Shin',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      },
      {
        name: 'Yasuo',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      },
      {
        name: 'Master Yi',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      },
      {
        name: 'Darius',
        work: 'UX Designer',
        image: require('../assets/images/img-2.jpg'),
        descFeedback: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
      }
    ];
    const feedback = loopFeedbacks.map((loopFeedback, index) => {
      return (
        <div key= { index } className="slide-feedback">
          <div className="image-slide">
            <img src= { require('../assets/images/img-feedback.png') } alt="feedback" />
          </div>
          <div>
            <p className="content-feedback">{ loopFeedback.descFeedback }</p>
            <h4 className="name-feedback">{ loopFeedback.name }</h4>
            <p className="work-feedback">{ loopFeedback.work }</p>
          </div>
          <div className="image-feedback">
            <img src={ loopFeedback.image } alt="feedback" className="item-slide" />
          </div>
        </div>

      )
    })
    return(
      <div className="feedback" id="testimonial">
        <h3 className="title-feature wow fadeInRight">What People Say About theHam</h3>
        <div className="feedback-slide">
          { feedback }
        </div>
        <div className="feedback-nav">
          <div className="div-image">
            <img src="images/img-2.jpg" alt="feedback" className="image-nav" />
          </div>
          <div className="div-image">
            <img src="images/feedback.png" alt="feedback" className="image-nav" />
          </div>
          <div className="div-image">
            <img src="images/img-3.jpg" alt="feedback" className="image-nav" />
          </div>
          <div className="div-image">
            <img src="images/img-1.jpg" alt="feedback" className="image-nav" />
          </div>
          <div className="div-image">
            <img src="images/img-1.jpg" alt="feedback" className="image-nav" />
          </div>
          <div className="div-image">
            <img src="images/feedback.png" alt="feedback" className="image-nav" />
          </div>
        </div>
      </div>

    )
  }
}
export default Feedback;
