import CategoryItem from "../../../../components/CategoryItem";
import translate from "../../../../utils/lang";
import {styles} from "./SidebarSection.style";
import {CategoryType} from "../../../../models/types/gallery.type";


const SidebarSection = ({categories, currentCategoryId, setCurrentCategoryId, changeCategory, ...props}: any) => {
    const classes = styles()
    const handleSetNewCategory = (id: number | string) => {
        currentCategoryId !== id && changeCategory(id)
    }

    return (
        <div {...props}>
            <h2 className={classes.title}>{translate('categories')}</h2>
            {categories?.map(({id, name}: CategoryType) => (
                <CategoryItem
                    key={id}
                    handleClick={() => handleSetNewCategory(id)}
                    isSelected={currentCategoryId === id}>
                    - {name}
                </CategoryItem>
            ))}
        </div>
    )
}

export default SidebarSection
