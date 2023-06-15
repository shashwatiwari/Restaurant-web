import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData)  -> all data comes in the form of array from th api
    return (
        <>
            <section className='main-card--container'>
                {
                    menuData.map((currElem) => {
                        const { id, name, category, image, description } = currElem;
                        return (
                            <div>
                                <div className='card-container' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtle'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description subtle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        <img src={image} alt="images" className='card-media'></img>
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard
