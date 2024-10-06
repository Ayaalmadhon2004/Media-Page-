import React, { useState } from 'react';
import "./services.css";
import photo1 from "../images/Apartment.png";
import photo2 from "../images/service-icon-02.png";
import photo3 from "../images/service-icon-03.png";
import img1 from "../images/services-image-04.jpg";
import img2 from "../images/services-image.jpg";
import img3 from "../images/services-image-02.jpg";
import img4 from "../images/services-image-03.jpg";

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleClick = (serviceId) => {
        const service = servicesData.find(item => item.id === serviceId);
        setSelectedService(service);
    };

    const ServicesData = [
        { id: 1, photo: photo1, text: "Apartment" },
        { id: 2, photo: photo2, text: "Food & Life" },
        { id: 3, photo: photo3, text: "Cars" },
        { id: 4, photo: photo1, text: "Shopping" },
        { id: 5, photo: photo2, text: "Traveling" },
    ];

    const servicesData = [
        { id: 1, title: "Online Shopping & Tracking ID", parg: "Lorem ipsum...", photo: img1 },
        { id: 2, title: "Food & Life Services", parg: "Lorem ipsum...", photo: img2 },
        { id: 3, title: "Car Rentals & Services", parg: "Lorem ipsum...", photo: img3 },
        { id: 4, title: "Shopping and E-commerce", parg: "Lorem ipsum...", photo: img4 },
        { id: 5, title: "Traveling Services", parg: "Lorem ipsum...", photo: img1 },
    ];

    return (
        <div className="containerS container">
            <div className="sub-cont-part1">
                <h3>OUR SERVICES</h3>
                <h1>What Our Agency <span>Provides</span></h1>
                <div className="list-services">
                    {ServicesData.map(item => (
                        <div 
                            key={item.id} 
                            className="service-item" 
                            onClick={() => handleClick(item.id)}
                        >
                            <img src={item.photo} alt={item.text} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                {selectedService && (
                    <div className="sub-cont-part2">
                        <div className="service-details">
                            <div className="service-details-right">
                                <h4>{selectedService.title}</h4>
                                <p>{selectedService.parg}</p>
                            </div>
                            <div className="service-details-left">
                                <img src={selectedService.photo} alt={selectedService.title} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
