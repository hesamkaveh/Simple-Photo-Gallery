import CategoryItem from "../../../../components/CategoryItem";
import translate from "../../../../utils/lang";
import {styles} from "./SidebarSection.style";
import {Modal} from "../../../../components/Modal";
import React, {useState} from "react";
import Button from "../../../../components/Button";
import {CategoryType} from "../../../../models/models.types";

type SidebarSectionPropsType = {
    categories: CategoryType[]
    currentCategoryId: number | string | undefined
    changeCategory: (arg0: number | string) => {}
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const SidebarSection: React.FC<SidebarSectionPropsType> = ({
                                                               categories,
                                                               currentCategoryId,
                                                               changeCategory,
                                                               ...props
                                                           }) => {
    const classes = styles()

    const [open, setOpen] = useState<boolean>(false)

    const handleSetNewCategory = (id: number | string) => {
        if (currentCategoryId !== id) {
            changeCategory(id)
            open && setOpen(false)
        }
    }

    return (
        <div {...props}>
                        <span className={classes.displayNoneOnMobile}>
            <h2 className={classes.title}>{translate('categories')}</h2>
                            {categories?.map(({id, name}: CategoryType) => (
                                <CategoryItem
                                    key={id}
                                    handleClick={() => handleSetNewCategory(id)}
                                    isSelected={currentCategoryId === id}>
                                    - {name}
                                </CategoryItem>
                            ))}
                                    </span>

            <div className={classes.mobileCategoryButtonWrapper}>
                <Button onClick={() => setOpen(true)}>
                    <h3 className={classes.mobileTitle}>{translate('selectCategory')}</h3>
                </Button>
                {categories.map(({name, id}: CategoryType) => currentCategoryId === id ?
                    <h4 className={classes.mobileCategory}>«{name}»</h4> : null)}
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={classes.modalWrapper}>
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
            </Modal>
        </div>
    )
}

export default SidebarSection
