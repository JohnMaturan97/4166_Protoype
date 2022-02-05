import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector , useDispatch } from 'react-redux'

const Home = () => {
  const {ships} = useSelector(state=>state.shipsReducer)

  return (
    <DefaultLayout>
     <h1>Home page</h1>
     <h3>{ships}</h3>
    </DefaultLayout>
  )
}

export default Home
