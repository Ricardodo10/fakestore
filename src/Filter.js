import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Filter() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
  return (
    <div>
    
    </div>
  )
}