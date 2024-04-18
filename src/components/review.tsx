import React from 'react'

const Review = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <div>
            Review Here
        </div>
    )
}

export default Review
