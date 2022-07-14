
import Filter from './Filter';
import Product from './Product'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


  function App() {
    const [category, setCategory] = useState([])
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
      if (category.length === 0) {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        });
        
    } else {
      axios.get('https://fakestoreapi.com/products/category/' + category)
    .then(res => {
        setPosts(res.data)
        console.log(posts)
    })
    .catch(err => {
        console.log(err)
    })
  }}, [category, posts])

  return (
    <>
    <h1>Fake Store</h1>
    <Filter category={category} setCategory={setCategory}/>
    <Product posts={posts} />
    
    </>

  )
}

export default App;
