import React from "react";
import logo1 from "../../image/image-01-1.png";
import logo2 from "../../image/image-02-1.png";
import logo3 from "../../image/image-20.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial_bg py-36">
      <section className="">
        <div className="container">
          <div className="testimonial">
            <div className=" relative px-5 flex justify-items-end">
              <img src={logo2} alt="" className="w-full" />
              <img src={logo1} alt="" className="absolute top-1/2 right-32" />
            </div>
            <div className="flex flex-col mt-40 md:px-2 justify-center flex-1 ">
              <span className="text-xl uppercase dark:text-gray-400">
                25+ Years Of Experiences
              </span>
              <span className="text-3xl lg:text-5xl py-5 font-bold">
                We’re Always Ensure Medical Treatment
              </span>
              <p className="my-6 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage
              </p>
              <div className="flex items-center gap-8">
                <img className="rounded-full" src={logo3} alt="" />
                <div>
                  <strong className="block text-xl">Daniel Stiven</strong>
                  <span className="block">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
