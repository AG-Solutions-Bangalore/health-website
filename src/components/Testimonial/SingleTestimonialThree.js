import React from "react";

const SingleTestimonialThree = (props) => {
  const { itemClass, description, authorName } = props;

  return (
    <div className={itemClass ? itemClass : "ed-testimonial-item p-relative"}>
      <div className="ed-testimonial-ratting">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="ed-testimonial-text">
        <p style={{ textAlign: "justify" }}>{description}</p>
      </div>
      <div className="ed-testimonial-author-box d-flex align-items-center">
        <div>
          <h5>{authorName ? authorName : ""}</h5>
        </div>
      </div>
    </div>
  );
};
export default SingleTestimonialThree;
