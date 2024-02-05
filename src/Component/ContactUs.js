import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <>
     <div className="arrow">
        <Link to="/">
          <button className="backArrow">
            <FaArrowLeftLong size="25px" color="black" />
          </button>
        </Link>
      </div>
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Prabhadevi, NP12</div>
              <div class="text-two">Dadar 06</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+9197 6995 7469</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">sanketzore@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>
              If you have any work from Us or any types of quries related to our
              Product, you can send Us message from here. It's our pleasure to
              help you.
            </p>

            <form action="post">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box">
                <textarea type="text" placeholder="Enter your Query" />
              </div>
              <div class="input-box message-box"></div>
              <div class="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
