// src/components/Testimonials.jsx
import React from "react";
import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
const testimonialsData = [
  {
    id: 1,
    name: "Webcly Jhonson",
    role: "Senior Engineer",
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Wilson",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=2",
    feedback:
      "Working with this team was a great experience. The final product exceeded our expectations and boosted our sales significantly!",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=3",
    feedback:
      "Their design skills and attention to user experience really brought our app to life. Amazing service!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge-custom">⭐ Testimonial</span>
          <h2 className="section-title">Peoples Say's About Me</h2>
        </div>

        {/* Carousel */}
        <Carousel interval={4000} controls indicators>
          {testimonialsData.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial-card mx-auto">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>

                <p className="testimonial-text">"{testimonial.feedback}"</p>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
