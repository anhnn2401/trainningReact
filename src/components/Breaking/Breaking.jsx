import React, { Component } from 'react';
import { NewsBreak } from '../__mock__/Data';
import BlogBreaks from './BlogBreaks';

export default class Breaking extends Component {
  render () {
    const BreakNews = NewsBreak.map((NewBreak, index) => {
      return (
        <BlogBreaks key={index} { ...NewBreak } />
        )
    })
    return (
      <div className="breaking-new container" id="blog">
        <h3 className="title-feature wow FadeInRight">Breaking News</h3>
        <div className="row">
          { BreakNews }
        </div>
      </div>
    )
  }

}
