import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/ServicesPage.css"; // Import the CSS file

const ServicesPage = () => {
  const [clicked, setClicked] = useState(null); // Track the clicked button

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Boost your online presence with our tailored digital marketing strategies.",
      link: "/services/digital-marketing",
      image: "https://www.shutterstock.com/image-photo/checklist-business-performance-monitoring-concept-600nw-2503514245.jpg",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Build responsive, secure, and SEO-optimized websites for your business.",
      link: "/services/web-development",
      image: "https://nexago.fr/wp-content/uploads/2023/06/Internet-2.png",
    },
    {
      id: 3,
      title: "Branding Solutions",
      description: "Create a strong and unique brand identity with our creative branding services.",
      link: "/services/branding-solutions",
      image: "https://crimsonbluecc.com/wp-content/uploads/2020/10/creative-post-1-1024x641.jpg",
    },
    {
      id: 4,
      title: "HR Recruitment Solutions",
      description: "Streamline your hiring process with our professional HR recruitment services.",
      link: "/services/hr-recruitment",
      image: "https://img.freepik.com/premium-photo/human-resources-concept-with-hand_23-2150389097.jpg",
    },
  ];

  const handleButtonClick = (id) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 500); // Reset the button state after animation
  };

  return (
    <div className="pageContainer">
      {/* Services Heading */}
      <h1 className="servicesHeading">Our Services</h1>
      <div className="servicesGrid">
        {services.map((service) => (
          <div
            key={service.id}
            className="serviceBox"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="overlay">
              <h2 className="serviceTitle">{service.title}</h2>
              <p className="serviceDescription">{service.description}</p>
              <Link
                to={service.link}
                className={`getQuoteButton ${clicked === service.id ? "active" : ""}`}
                onClick={() => handleButtonClick(service.id)}
              >
                Get Quota
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;