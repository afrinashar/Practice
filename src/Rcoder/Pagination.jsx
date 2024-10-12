import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
export const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)

     useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const data = await res.json()

        console.log(data);

        if (data && data.products) {
            setProducts(data.products)
        }
    }
    console.log(([...Array(products.length/10)]),"producrs");
   const selectedPage=(pages)=>{
    setPage(pages)
   }
    return (<>
        <div>Pagination</div>{products.slice(0,10*page).map((data) => {return (<div className='row justify-content-md-center'><div className='col col-lg-2'><Card  ><Card.Img variant="top" src={data.thumbnail} /><Card.Title><h1>{data.title}</h1>{data.brand}</Card.Title>
    <Card.Text>
      
     {data.description}
    </Card.Text>
    <Link to={data.link} variant="btn btn-success">  <h4>{data.category}</h4><h6>{data.
discountPercentage}</h6></Link>   <Card.Body>
<Card.Link href="#"> Price:<h6 className=''> {data.rating}</h6></Card.Link>
<Card.Link href="#">Rating :<h5>{data.price}</h5></Card.Link>
</Card.Body></Card></div></div>) })}
<div className='d-flex'>
    <div className='border p-2' onClick={()=>selectedPage(page-1)}>◀️</div>
 
{[...Array(products.length/10)].map((_,i)=>{return(
   <div className={`border p-2 ${`bg-secondary`}`  }  onClick={()=>selectedPage(i+1)}  key={i}> {i+1}</div>
)})}
   
    <div className='border p-2' onClick={()=>selectedPage(page+1)}>▶️</div>
</div>

</>
    )
}
