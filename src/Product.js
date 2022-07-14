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
    <ol>
        {posts.map(post =>
             <li key={post.id}>
                <h2>{post.title} </h2>
                <h3>{post.price}$</h3>
                <img src={post.image} alt='' ></img>
                
              </li>)}
    </ol>
</div>
  )
}

export default Product