import React,{useEffect} from 'react'
import { useAppDispatch,useAppSelector } from '../store/store'
import { increment, decrement, incrementByTen, decrementByTen } from '../store/reducers/counter'
import { useGetToDoByIdQuery, useGetToDosQuery, useLazyGetToDoByIdQuery } from "../services/api"

const Home = () => {
     const value = useAppSelector(state => state.counter)
     const{data = [], isError, isLoading} = useGetToDosQuery()
     const storeDispatch = useAppDispatch()
     useEffect(()=>{
          if(isError) console.log("Error occured")
     },[data])

  return (
     isLoading ? <div> Loading ...</div> :
  
    <div>
     {
          data.map((d)=>{
               return <div>{d.title}</div>
          })
     }
    </div>
  )
}

export default Home