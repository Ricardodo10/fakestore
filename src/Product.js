import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
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
    <ul>
        {posts.map(post =>
             <li key={post.id}>
                <img src={post.image} ></img>
                <h1>{post.title} </h1>
                    <h3>{post.price}$</h3>
              </li>)}
    </ul>
</div>
  )
}

export default Product