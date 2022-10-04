import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getFilteredCategory} from '../api'
import {Preloader} from '../components/Preloader'

import {MealList} from '../components/MealList'

function Category() {
    const {name} = useParams();
    const [meals, SetMeals] = useState([])
    useEffect(()=>{
        getFilteredCategory(name).then(data => SetMeals(data.meals))
    }, [name])

    return<>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
    </>
}

export {Category}