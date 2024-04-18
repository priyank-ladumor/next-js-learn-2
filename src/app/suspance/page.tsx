import Product from '@/components/product'
import Review from '@/components/review'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <Suspense fallback={<p>Product Spinner Here..</p>} >
                <Product />
            </Suspense>
            <Suspense fallback={<p>Review Spinner Here..</p>} >
                <Review />
            </Suspense>
        </div>
    )
}

export default page
