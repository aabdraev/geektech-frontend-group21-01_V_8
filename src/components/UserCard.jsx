import React from 'react'

const UserCard = ({ userInfo }) => {
    return (
        <div className='user_card'>
            <p>name: {userInfo.name}</p>
            <p>username: {userInfo.username}</p>
            <p>email: {userInfo.email}</p>
        </div>
    )
}

export default UserCard