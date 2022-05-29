import React from "react";
import {styles} from "./CategoryItem.style";

type CategoryItemType = {
    handleClick: any
    isSelected: boolean
    children: React.ReactNode
}

const CategoryItem = React.memo(({handleClick, isSelected, children}: CategoryItemType) => {
    const classes = styles()

    return (
        <h4
            onClick={handleClick}
            className={`${classes.element}  ${isSelected ? classes.selectedElement : ''}`}
        >
            {children}
        </h4>
    )
})

export default CategoryItem