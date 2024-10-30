import React, { useEffect, useState } from 'react'
import ShopProduct from './ShopProduct'
import { allProducts } from '../dummydata/DummyData'
import styles from './AllProducts.module.css'
import { useQuery } from '../context/SearchContext'

function AllProducts() {
    const [allShopProducts, setAllShopProducts] = useState(allProducts)
    const {query, setQuery} = useQuery()

    useEffect(function() {
        if(query.length === 0) return setAllShopProducts(allProducts)

        setAllShopProducts(allProducts)

        setAllShopProducts((shop) => shop.filter((shop) => shop.category.toLowerCase().includes(query.toLowerCase()) || shop.productName.toLowerCase().includes(query.toLowerCase())))

    }, [query])

    const anyProductFound = allShopProducts.filter((shop) => shop.category.toLowerCase().includes(query.toLowerCase()) || shop.productName.toLowerCase().includes(query.toLowerCase()))

    function handleShowProducts() {
        setQuery('')
    }

  return (
    <section className={styles.allProductContainer} data-aos="fade-down">
        <p onClick={handleShowProducts} className={styles.showAll}>Show All Products</p>
        <h2>All Products</h2>
        <div className={styles.products}>
            {anyProductFound.length === 0 ? <h1>Ooops ! No Products Found for this Search</h1> : allShopProducts.map((product) => (
                <ShopProduct product={product} key={product.id}/>
            ))}
        </div>
    </section>
  )
}

export default AllProducts