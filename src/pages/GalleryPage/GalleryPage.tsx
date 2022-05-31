import React, {Suspense, lazy} from "react";
import {RootState, Dispatch} from "../../store";
import {useEffect} from "react";
import {styles} from "./GalleryPage.style";
import SectionContainer from "../../components/SectionContainer";
import LoadingSpinner from "../../components/LoadingSpinner";
import {useSelector} from 'react-redux'
import useRematchDispatch from "../../hooks/useRematchDispatch";

const SidebarSection = lazy(() => import( "./components/SidebarSection/SidebarSection"));
const PhotosSection = lazy(() => import("./components/PhotosSection/PhotosSection"));

const GalleryPage: React.FC = () => {
    const classes = styles()

    const {
        categories,
        currentCategoryId,
        isLoadingNewPhotos,
        photoList
    } = useSelector((state: RootState) => ({
        categories: state.gallery.categories,
        currentCategoryId: state.gallery.currentCategoryId,
        isLoadingNewPhotos: state.loading?.models.gallery,
        photoList: state.gallery.photoList
    }))

    const {
        fetchPhotos,
        fetchCategories,
        changeCategory
    } = useRematchDispatch((dispatch: Dispatch) => ({
        fetchPhotos: dispatch.gallery.fetchPhotos,
        fetchCategories: dispatch.gallery.fetchCategories,
        setCurrentCategoryId: dispatch.gallery.setCurrentCategoryId,
        changeCategory: dispatch.gallery.changeCategory,
    }))

    useEffect(() => {
        (photoList?.length || 0) < 1 && fetchCategories().then(() => {
            fetchPhotos({})
        })
        // eslint-disable-next-line
    }, [fetchCategories, fetchPhotos])

    const handleLoadMore = () => {
        fetchPhotos({})
    }
    return (
        <SectionContainer>
            <div className={classes.container}>

                <Suspense
                    fallback={<div className={classes.photosLoadingWrapper}><LoadingSpinner/></div>}>
                    {categories.length > 0 && <SidebarSection className={classes.sidebar}
                                                              categories={categories}
                                                              currentCategoryId={currentCategoryId}
                                                              changeCategory={changeCategory}
                    />}
                </Suspense>

                <Suspense
                    fallback={<div className={classes.photosLoadingWrapper}><LoadingSpinner/></div>}>
                    {photoList.length > 0 && <PhotosSection className={classes.gallery}
                                                            photosList={photoList}
                                                            fetchNextPage={() => {
                                                                handleLoadMore()
                                                            }}
                                                            isLoadingNewPhotos={isLoadingNewPhotos}/>}
                </Suspense>
                {photoList.length < 1 && isLoadingNewPhotos ?
                    <div className={classes.photosLoadingWrapper}><LoadingSpinner/></div> : null}
            </div>
        </SectionContainer>
    )
}
export default GalleryPage