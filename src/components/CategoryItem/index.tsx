import React from "react";
import {styles} from "./CategoryItem.style";

type CategoryItemType = {
    handleClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined
    isSelected: boolean
    children: React.ReactNode
}

const CategoryItem: React.FC<CategoryItemType> = React.memo(({handleClick, isSelected, children}) => {
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