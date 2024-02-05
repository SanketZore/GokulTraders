import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function AboutUs() {
  return (
    <div>
      <div className="arrow">
        <Link to="/">
          <button className="backArrow">
            <FaArrowLeftLong size="25px" color="black" />
          </button>
        </Link>
      </div>
      <section>
        <div class="about">
          {/* <img src={img} class="pic" /> */}
          <div class="text">
            <h2>About Us</h2>
            <h5>
              Front-end Developer & <span id="desig">Designer</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              natus ad sed harum itaque ullam enim quas, veniam accusantium,
              quia animi id eos adipisci iusto molestias asperiores explicabo
              cum vero atque amet corporis!
            </p>
            <div class="data">
              <a href="#" class="hire">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
