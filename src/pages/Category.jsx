import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getFilteredCategory} from '../api'
import {Preloader} from '../components/Preloader'

import {MealList} from '../components/MealList'
import {useNavigate} from 'react-router-dom';

function Category() {
    
    const {name} = useParams();
    const [meals, SetMeals] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        getFilteredCategory(name).then(data => SetMeals(data.meals))
    }, [name])

    return<>

        <button className='btn' onClick={() => navigate(-1)}>Go back</button>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        
    </>
}

export {Category}