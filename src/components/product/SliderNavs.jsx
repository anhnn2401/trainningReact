const { descrip1, descrip2, title, description, titleHome } = this.props;
<div className="slider-for">
  <div className="slide-home">
    <div>
      <img className="images-home" src={ product.image } alt="images-home"/>
    </div>
    <div className="content-home">
      <h3 className="title-home">{ product.descrip1 } <span className="descrip-home">{ product.descrip2 }</span></h3>
      <h2 className="title-home-creative">{ product.title }</h2>
      <p className="descrip-slide">{ product.description }</p>
    </div>
    <div className="btn-home">
      <button type="button" className="btn btn-lg">explore now</button>
      <button  type="button" className="btn btn-lg">purchase now</button>
    </div>
  </div>
</div>