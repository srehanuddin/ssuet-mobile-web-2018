import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component{
  render (){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Header></Header>        


<div className="container">

<div className="row">

  <div className="col-lg-3">

    <h1 className="my-4">Shop Name</h1>
    <div className="list-group">
      <a href="#" className="list-group-item">Category 1</a>
      <a href="#" className="list-group-item">Category 2</a>
      <a href="#" className="list-group-item">Category 3</a>
    </div>

  </div>

  <div className="col-lg-9">

    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    <div className="row">

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item One</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item Two</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item Three</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item Four</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item Five</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Item Six</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

    </div>
    

  </div>

</div>

</div>









      




      </div>
    );
  }
}
export default App;
