import React from 'react'

function Home(props: any) {
    const {addToCartHandler} = props
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://www.seekpng.com/png/detail/285-2851882_cart-add-cart-icon-svg-add.png" />
            </div>
            <h1>Home Container</h1>
            <div className='cart-wrapper' >
                <div className='img-wrapper item' >
                    <img src="https://picsum.photos/200/300" />
                </div>
                <div className='text-wrapper item' >
                    <span>iPhone</span>
                    <span>Price : $1000</span>
                </div>
                <div className='btn-wrapper item' >
                    <button onClick={()=>addToCartHandler({ name:'iPhone',price: '1000' })} >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
