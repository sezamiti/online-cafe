import {useEffect, useState} from 'react';
import {getAllCategories} from '../api';
import{Preloader} from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

const Home = () => {
  const [catalog, setcatalog]= useState([])

  useEffect(()=>{
    getAllCategories().then(data=>{
      setcatalog(data.categories)
    })
  },[])

  return (
    <>
      {!catalog.length? <Preloader/>: (
        <CategoryList catalog={catalog}/>
      )}
    </>
  )
}

export  {Home}