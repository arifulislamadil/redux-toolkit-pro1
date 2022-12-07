import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/postSlice';

const Users = () => {
    const  users  = useSelector(state => state.post.users);
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    console.log(users)
    return (
        <div>
            {
                users.map((user,index)=><div key={index}>
                    <h3>{user.name}</h3>
                </div>)
            }
        </div>
    );
};

export default Users;