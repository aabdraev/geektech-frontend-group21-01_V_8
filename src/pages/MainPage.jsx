import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../components/UserCard'
import { getUserInfo } from '../store/userSlice'

const MainPage = () => {

    const dispatch = useDispatch()
    const { users, loader } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])


    return (
        <div className='main__inner'>
            <h1>Users</h1>
            <div className='main__users'>
                {
                    users.length > 0 &&
                    users.map((item) => <UserCard key={item.id} userInfo={item} />)

                }
                {loader && <h2>loading...</h2>}
            </div>
        </div>
    )
}

export default MainPage