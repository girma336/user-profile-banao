import React from 'react'
import {useSelector} from 'react-redux';
import Skeleton from '../components/Skeleton';
import Users from '../components/Users';

const Dashboard = () => {
  
  const {user, isLoading, isError, message} = useSelector((state) => state.user)
  if(isLoading) {
    return (
        <Skeleton times={10} className="h-8 w-full" />
    )
  }

  if(isError) {
    return <div className='text-center text-[16px] text-red-500 mt-10'>{message}</div>
  }
  return (
    <div className='bg-[#ffffffE6]'>
        <Users user={user} />
    </div>
  )
}

export default Dashboard