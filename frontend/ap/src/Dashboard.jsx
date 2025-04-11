import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    Activity: '',
    Duration: '',
    Date: '',
    Actions: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8086/api/');
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    if (
      !newUser.name ||
      !newUser.Activity ||
      !newUser.Duration ||
      !newUser.Date ||
      !newUser.Actions
    )
      return;

    try {
      const res = await axios.post('http://localhost:8086/api/', newUser);
      setUser([...user, res.data]);
      setNewUser({
        name: '',
        Activity: '',
        Duration: '',
        Date: '',
        Actions: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='bg d-flex'>
        <div className='d container'>
          <div className='t2 d-flex flex-column'>
            <h1 className='main text-center h5 container t'>User Data Registration</h1>
            <div className='d2'>
              <form onSubmit={addUser}>
                <div className='form-group'>
                  <label htmlFor='exampleInputUsername'>User name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputUsername'
                    name='name'
                    value={newUser.name}
                    onChange={handleChange}
                    placeholder='Enter user name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputActivity'>Activity</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputActivity'
                    name='Activity'
                    value={newUser.Activity}
                    onChange={handleChange}
                    placeholder='Enter activity'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputDuration'>Enter duration (in minutes)</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputDuration'
                    name='Duration'
                    value={newUser.Duration}
                    onChange={handleChange}
                    placeholder='Enter duration'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputDate'>Enter date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='exampleInputDate'
                    name='Date'
                    value={newUser.Date}
                    onChange={handleChange}
                    placeholder='Enter date'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputActions'>Enter Actions</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputActions'
                    name='Actions'
                    value={newUser.Actions}
                    onChange={handleChange}
                    placeholder='Enter Actions'
                  />
                </div>
                <div className='bn'>
                  <button type='submit' className='btn btn-light'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
