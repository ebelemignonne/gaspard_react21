import React, { Component } from "react";
import Slider from "react-slick";
import Nike from "../logo/Nike.png";
import Adidas from "../logo/Adidas.png";
import Reebok from "../logo/Reebok.png";
import Puma from "../logo/Puma.png";
import Asics from "../logo/Asics.png";
import Converse from "../logo/Converse.png";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="MarquesBox">
        <center>
          <h2 className="titre">MARQUES DISPONIBLE</h2>
        </center>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <div className="Marques">
              <img
                src={Nike}
                alt="Nike"
                className="logo"
                style={{ width: 130 }}
              />
            </div>
            <h3>Nike</h3>
          </div>
          <div>
            <div className="Marques">
              <img
                src={Adidas}
                alt="Adidas"
                className="logo"
                style={{ width: 120 }}
              />
            </div>
            <h3>Adidas</h3>
          </div>
          <div>
            <div className="Marques">
              <img
                src={Puma}
                alt="Puma"
                className="logo"
                style={{ width: 150 }}
              />
            </div>
            <h3>Puma</h3>
          </div>
          <div>
            <div className="Marques">
              <img
                src={Converse}
                alt="Converse"
                className="logo"
                style={{ width: 160 }}
              />
            </div>
            <h3>Converse</h3>
          </div>
          <div>
            <div className="Marques">
              <img
                src={Asics}
                alt="Asics"
                className="logo"
                style={{ width: 180 }}
              />
            </div>
            <h3>Asics</h3>
          </div>
          <div>
            <div className="Marques">
              <img
                src={Reebok}
                alt="Reebok"
                className="logo"
                style={{ width: 180 }}
              />
            </div>
            <h3>Reebok</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
