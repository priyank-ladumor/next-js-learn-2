import React from 'react'

const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return (
        <div>
            Product Here
        </div>
    )
}

export default Product
