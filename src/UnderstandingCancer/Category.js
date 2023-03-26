import React from 'react'
import { Link } from 'react-router-dom'
import "./Category.css"

function Category() {
    return (
        <div className="category">
            <Link className="category__link" to="./what-is-cancer">What is Cancer</Link>
            <Link className="category__link" to="./signs-and-symptoms">Signs and Symptoms</Link>
            <Link className="category__link" to="./causes-and-risk-factors">Causes and Risk Factors</Link>
            <Link className="category__link" to="./preventing-cancer">Preventing Cancer</Link>
            <Link className="category__link" to="./managing-and-treating-cancer">Managing and Treating Cancer</Link>
            <Link className="category__link" to="./key-cancer-statistics">Key Cancer Statistics</Link>
            <Link className="category__link" to="./faq's">FAQ’s</Link>
        </div>
    )
}

export default Category
