import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Filter({category, setCategory}) {
    const [categories, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
  return (
    <div>
        <p>Categories</p>
        <hr></hr>
        <ul>
        {categories.map(post =>
         <li key={post.id}>
          <input id={post.id} type="radio"  name="choice" onChange={() => {
                        setCategory(post); console.log(category)}}></input>
          <label for={post.id} >{post}</label>
        </li>)}
        </ul>
    </div>
  )
}