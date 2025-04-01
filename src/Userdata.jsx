import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                <div className="container c">
                    <div className="row g-4 ">
                        {user.map((data) => (
                            <div className="col-4  " key={data._id}>
                                <div className="card cd container   ">
                                    <div className="con card-body">
                                        <h6>User name : {data.name}</h6>
                                        <h6>Activity : {data.Activity}</h6>
                                        <h6>duration in minutes : {data.Duration}</h6>
                                        <h6>Date : {data.Date}</h6>
                                        <h6>Actions : {data.Actions}</h6>
                                        <button className='del' onClick={() => del_button(data._id)}>Del</button>
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
