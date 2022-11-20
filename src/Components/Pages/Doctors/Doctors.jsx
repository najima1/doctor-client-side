import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./doctors.css";
import img1 from "../../image/haha1.png";
import img2 from "../../image/haha2.png";
import img3 from "../../image/haha3.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" px-6 bg-[#c7ecee] py-24">
        <Slider {...settings} className="container">
          <div className="block px-4">
            <div className="img_wraper bg-[#1abc9c]">
              <img src={img1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Lesly Hull</h1>
              <small>Medicine</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#D980FA]">
              <img src={img2} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Ahmad Stevens</h1>
              <small>Neurologist</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#FDA7DF]">
              <img src={img3} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Hunter Farley</h1>
              <small>Orthopadics</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#18dcff]">
              <img src={img2} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Lesly Hull</h1>
              <small>Medicine</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#ffb8b8]">
              <img src={img1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Ahmad Stevens</h1>
              <small>Medicine</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#18dcff]">
              <img src={img1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Lesly Hull</h1>
              <small>Medicine</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#7d5fff]">
              <img src={img1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Ahmad Stevens</h1>
              <small>Orthopadics</small>
            </div>
          </div>
          <div className="px-4">
            <div className="img_wraper bg-[#cd84f1]">
              <img src={img1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="mt-1 text-[#778ca3]">Dr. Lesly Hull</h1>
              <small>Medicine</small>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
