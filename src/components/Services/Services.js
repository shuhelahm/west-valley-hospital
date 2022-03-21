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
            <div className='sevices-container row mx-auto my-5' id="services">
            <h1 className='my-4'>Services</h1>
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