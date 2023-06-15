import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './menuCard'
import Navbar from './Navbar'

//To get unique category of item
const uniqueList = [...new Set(Menu.map((currElem) => {
    return currElem.category;
})
), "All",
];
// console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu) //to manage and hold data we use useState
    const [menuList, setMenuList] = useState(uniqueList)
    // console.log(menuData);
    // const myStyle = { color: "red" };

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedList)
    }

    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </div>
    )
}

export default Restaurant

