import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Userdata.css'; // Create a custom CSS file for additional styling

function Userdata() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/api')
            .then(res => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const del_button = async (id) => {
        await axios.delete(`http://localhost:8086/api/${id}`);
        setUser(user.filter(r => r._id !== id));
    };

    return (
        <>
            <div className="bg">
                <div className="container c py-4">
                    <div className="row g-4">
                        {user.map((data) => (
                            <div 
                                className="col-12 col-sm-6 col-lg-4" 
                                key={data._id} // Responsive classes for small to large devices
                            >
                                <div className="card cd shadow-sm">
                                    <div className="card-body">
                                        <h6><strong>User name:</strong> {data.name}</h6>
                                        <h6><strong>Activity:</strong> {data.Activity}</h6>
                                        <h6><strong>Duration (minutes):</strong> {data.Duration}</h6>
                                        <h6><strong>Date:</strong> {data.Date}</h6>
                                        <h6><strong>Actions:</strong> {data.Actions}</h6>
                                        <button 
                                            className="btn btn-danger btn-sm mt-2" 
                                            onClick={() => del_button(data._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userdata;
