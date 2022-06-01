import React from 'react';
import "./Quotes.scss";
import bgQuote from "../../images/bg-quotes.png"
import Satish from "../../images/profile-1.jpg"
import Bruce from "../../images/profile-2.jpg"
import Iva from "../../images/profile-3.jpg"

const text = "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine";
const authorTitle = "Founder & CEO, Huddle";

const testimonials = [
  {
    id: 0,
    image: Satish,
    author: "Satish Patel",
  },
  {
    id: 1,
    image: Bruce,
    author: "Bruce McKenzie",
  },
  {
    id: 2,
    image: Iva,
    author: "Iva Boyd",
  },
]

const Quotes = () => {
  return (
    <div className='quotes-container'>
      <div className="testimonials-container">
        <img className='bgQuote' src={bgQuote} alt="" />
        {testimonials.map((testimonial) => (
          <div className="testimonials" id={testimonial.id}>
            <div className="testimonials-padding">
              <p>{text}</p>
              <p className='author'>{testimonial.author}</p>
              <p className='author'>{authorTitle}</p>
              <img src={testimonial.image} alt={testimonial.author} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;

// {features.map((feature) => (
//   <div className="feature">
//     <img src={process.env.PUBLIC_URL + feature.image } alt="" />
//     <h2>{feature.title}</h2>
//     <p>{feature.text}</p>
//   </div>
// )
// )}