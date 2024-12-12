import {useState} from 'react'
import TopHeader from '../TopHeader'
import Navbar from '../Navbar'
import Filters from '../Filters'
import Products from '../Prodcuts'  
import Footer from '../Footer'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './index.css'

const Home = () => {
    const [isShowFilter, setShowFilter] = useState(true)
    

    const onShowFilter = () => {
        setShowFilter(!isShowFilter)
    }
    
    

    const showText = isShowFilter ? 'HIDE FILTER' : 'SHOW FILTER'
    const showIcon = isShowFilter ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />

    return(
    <div className="home-container">
        <TopHeader/>
        <Navbar/>
        <div className="filter-and-recommendation">
            <div className="quantity-filter-container">
                <p className="item-quantity">3425 ITEMS</p>
                <div className="filter-container">
                    <span>{showIcon}</span>
                    <button className="filter-button" onClick={onShowFilter}>{showText}</button>
                </div>
            </div>

            <select className="recommendations">
                <option value="recommended">RECOMMENDED</option>
                <option value="newest-first">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="high-low">PRICE: HIGH TO LOW</option>
                <option value="low-high">PRICE: LOW TO HIGH</option>
            </select>
        </div>
        <div className="filter-product-section">
        <Filters isShowFilter={isShowFilter} />
        <Products />
        </div>
        <Footer />

    </div>
)}

export default Home
