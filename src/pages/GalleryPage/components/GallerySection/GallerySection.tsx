import {styles} from "./GallerySection.style";
import Button from "../../../../components/Button";
import translate from "../../../../utils/lang";
import Photo from "../../../../components/Photo";

const GallerySection = ({photosList, fetchNextPage, loadingNewPhotos, ...props}: any) => {
    const classes = styles()

    return (
        <div {...props}>
            <div className={classes.container}>
                {photosList.map(({id, url}: any) => (
                    <Photo key={id} url={url} id={id}/>
                ))}
            </div>
            <div className={classes.loadMoreBtnContainer}>
                <Button isLoading={loadingNewPhotos} onClick={fetchNextPage}>
                    {translate('loadMore')}
                </Button>
            </div>
        </div>
    )
}
export default GallerySection