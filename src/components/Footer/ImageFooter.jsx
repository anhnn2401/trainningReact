import React, { Component } from 'react';
import {footerImages} from '../__mock__/Data'
class ImageFooter extends Component {
  render() {
    const Images = footerImages.map((footerImage, index) => {
      return(
        <div key={ index } className="col-sm-5 col-3">
          <img src= { footerImage } className="image-flicke" alt="anh-footer"/>
        </div>
      )
    })
    return (
      <div>
        {Images}
      </div>

    )
  }
}
export default ImageFooter;