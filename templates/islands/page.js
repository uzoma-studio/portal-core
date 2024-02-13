import React from 'react'
import './style.scss'

const Page = ({ currentIsland, setCurrentIsland }) => {

    console.log(currentIsland)
    
    return (
        <div className='single-island-overlay'>
            <h6
                style={{
                    fontSize: '32px',
                    cursor: 'pointer',
                    color: 'red',
                    position: 'absolute',
                    right: '50px',
                    margin: '0'
                }}
                onClick={() => setCurrentIsland(null)}
            >x</h6>
            <img
                src={currentIsland.imageUrl}
                alt=''
            />
            <h1>{currentIsland.name}</h1>
            <p>By {currentIsland.participant}</p>
            <iframe
                src={`${currentIsland.contentUrl}/pub?embedded=true`}
            />
        </div>
    )
}

export default Page