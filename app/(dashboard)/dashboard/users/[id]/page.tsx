import React from 'react'

const User = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    return (
        <div>
            <h3 className='text-3xl'>User profile: {id}</h3>
        </div>
    )
}

export default User
