import {styles} from "./PhotosSection.style";
import Button from "../../../../components/Button";
import translate from "../../../../utils/lang";
import Photo from "../../../../components/Photo";
import {PhotoType} from "../../../../models/models.types";
import React from "react";

type PhotosSectionType = {
    photosList: PhotoType[]
    fetchNextPage: React.MouseEventHandler<HTMLButtonElement> | undefined
    isLoadingNewPhotos: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const PhotosSection: React.FC<PhotosSectionType> = ({
                                                        photosList,
                                                        fetchNextPage,
                                                        isLoadingNewPhotos,
                                                        ...props
                                                    }) => {
    const classes = styles()

    return (
        <div {...props}>
            <div className={classes.container}>
                {photosList.map(({id, url}: PhotoType) => (
                    <Photo key={id} url={url} id={id}/>
                ))}
            </div>
            <div className={classes.loadMoreBtnContainer}>
                <Button isLoading={isLoadingNewPhotos} onClick={fetchNextPage}>
                    {translate('loadMore')}
                </Button>
            </div>
        </div>
    )
}
export default PhotosSection