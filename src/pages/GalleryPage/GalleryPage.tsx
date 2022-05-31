import React, {Suspense, lazy} from "react";
import {RootState, Dispatch} from "../../store";
import {styles} from "./GalleryPage.style";
import SectionContainer from "../../components/SectionContainer";
import LoadingSpinner from "../../components/LoadingSpinner";
import {useSelector} from 'react-redux'
import useRematchDispatch from "../../hooks/useRematchDispatch";
import {useErrorHandler, withErrorBoundary} from "react-error-boundary";
import ErrorBoundaryFallback from "../../components/ErrorBoundaryFallback/ErrorBoundaryFallback";
import {useEffectOnce} from "../../hooks/useEffectOnce";

const SidebarSection = lazy(() => import( "./components/SidebarSection/SidebarSection"));
const PhotosSection = lazy(() => import("./components/PhotosSection/PhotosSection"));

const GalleryPage: React.FC = () => {
    const classes = styles()
    const handleError = useErrorHandler()

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

    useEffectOnce(() => {
        (photoList?.length || 0) < 1 && fetchCategories()
            .then(() => handleLoadMorePhotos())
            .catch((e) => handleError(e))
    })

    const handleLoadMorePhotos = () => {
        fetchPhotos({})
            .catch((e) => {
                handleError(e)
            })
    }

    const handleChangeCategory = (catId: number | string) => {
        changeCategory(catId)
            .then(() => (catId))
            .catch(e => handleError(e))
        return ({})
    }

    return (
        <SectionContainer>
            <div className={classes.container}>

                <Suspense
                    fallback={<div className={classes.photosLoadingWrapper}><LoadingSpinner/></div>}>
                    {categories.length > 0 && <SidebarSection className={classes.sidebar}
                                                              categories={categories}
                                                              currentCategoryId={currentCategoryId}
                                                              changeCategory={handleChangeCategory}
                    />}
                </Suspense>

                <Suspense
                    fallback={<div className={classes.photosLoadingWrapper}><LoadingSpinner/></div>}>
                    {photoList.length > 0 && <PhotosSection className={classes.gallery}
                                                            photosList={photoList}
                                                            fetchNextPage={handleLoadMorePhotos}
                                                            isLoadingNewPhotos={isLoadingNewPhotos}/>}
                </Suspense>
                {photoList.length < 1 && isLoadingNewPhotos ?
                    <div className={classes.photosLoadingWrapper}><LoadingSpinner/></div> : null}
            </div>
        </SectionContainer>
    )
}

export default withErrorBoundary(GalleryPage, {
    FallbackComponent: ErrorBoundaryFallback
})