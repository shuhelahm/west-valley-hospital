import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='row services-container mx-auto my-4' id="services">
            {
                services.map(service => <Service 
                key={service.key}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;