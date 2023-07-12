import React from 'react'
import '../Pagination/Pagination.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Pagination = ({pages, setCurrentPage}) => {

const numberOfPages = [];

for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
}

const [currentButton, setCurrentButton] = useState(1)

useEffect(() => {
    setCurrentPage(currentButton)
}, [currentButton, setCurrentPage])

const handlePreviousButton = () => {
    setCurrentButton((currentButton) => currentButton === 1 ? currentButton : currentButton - 1)
}
const handleNextButton = () => {
    setCurrentButton((currentButton) => currentButton === numberOfPages.length ? currentButton : currentButton + 1)
}

return (

<>
    <div className='paginationContainer'>
    
        <ul className='pageLinks'>

            <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}>
                <Link onClick={handlePreviousButton}> &lt; Previous </Link>
            </li>

                {numberOfPages.map((page, index) =>(
                    <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}> 
                    <Link onClick={() => setCurrentButton(page)}> {page} </Link> </li>
                ))}

            <li className={`${currentButton === numberOfPages.length ? 'page-item disabled' : 'page-item' }`}> 
                <Link onClick={handleNextButton}> Next &gt; </Link></li>

        </ul>

    </div>
</>

)
}

export default Pagination