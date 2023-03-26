import React, { useEffect, useState } from 'react'
import "./Pagination.css"
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

function Pagination({showPerPage, onPaginationChange, total}) {

    const [counter, setCounter] = useState(1)

    const onButtonClick = (type) => {
        if(type === "prev") {
            if(counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            } else{
                setCounter(counter + 1)
            }
        } 
    }

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)  //value - showPerPage: startValue, value = endValue   
    }, [counter])

    // const getPageLink = ( pageNo ) => {
        // return `/blogs/${ pageNo }`
    // }

    useLayoutEffect(() => {
    window.scrollTo(0, 0)
    },[counter]);

    const getPageLink = () => {
        return `/blogs/`
    }
 
    return (
        <div className="pagination">
        {/* <Link to={ getPageLink( { pageNo: currentPage - 1})} > */}
        <Link to={ getPageLink()} >
            <button className="pagination__button" onClick={() => onButtonClick("prev")}>Previos</button>
        </Link>

        {/* <Link to={ getPageLink( { pageNo: currentPage + 1})}> */}
        <Link to={ getPageLink()}>
            <button className="pagination__button" onClick={() => onButtonClick("next")}>Next</button>
        </Link>
        </div>
    )
}

export default Pagination
