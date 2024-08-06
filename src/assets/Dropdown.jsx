import React, { useEffect, useState } from 'react'

export const Dropdown = () => {
    const [Products, setProducts] = useState([])
    const [value, setValue] = useState("")
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const data = await res.json()

        console.log(data, "result");

        if (data && data.products) {
            setProducts(data.products)
        }
    }
    console.log(Products, "datas");
    const selected = (e) => {
        setValue(e.target.value);
    }
    return (
        <><select onClick={(e) => selected(e)}>{Products.map((datas) => { return (<option key={datas.value} value={datas.value}>{datas.title}</option>) })}</select>
     <p><h3>Selected:</h3>  <h1>{value}</h1></p> 
        </>
    )
}
