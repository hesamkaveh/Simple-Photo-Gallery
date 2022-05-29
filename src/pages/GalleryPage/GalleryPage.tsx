import {Suspense, lazy} from "react";
import {RootState, Dispatch} from "../../store";
import {useEffect} from "react";
import {styles} from "./GalleryPage.style";
import SectionContainer from "../../components/SectionContainer";
import LoadingSpinner from "../../components/LoadingSpinner";
import {useSelector} from 'react-redux'
import useRematchDispatch from "../../hooks/useRematchDispatch";

const GallerySection = lazy(() => import("./components/GallerySection/GallerySection"));
const SidebarSection = lazy(() => import( "./components/SidebarSection/SidebarSection"));

const GalleryPage = () => {
    const classes = styles()

    const {
        categories,
        currentCategoryId,
        loadingNewPhotos
    } = useSelector((state: RootState) => ({
        categories: state.gallery.categories,
        currentCategoryId: state.gallery.currentCategoryId,
        loadingNewPhotos: state.loading?.models.gallery
    }))

    const {
        fetchPhotos,
        fetchCategories,
        setCurrentCategoryId,
        changeCategory
    } = useRematchDispatch((dispatch: Dispatch) => ({
        fetchPhotos: dispatch.gallery.fetchPhotos,
        fetchCategories: dispatch.gallery.fetchCategories,
        setCurrentCategoryId: dispatch.gallery.setCurrentCategoryId,
        changeCategory: dispatch.gallery.changeCategory,
    }))

    const photosList = useSelector((state: RootState) => state.gallery.photoList)


    useEffect(() => {
        fetchCategories().then(() => {
            fetchPhotos({})
        })
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
                                                              setCurrentCategoryId={setCurrentCategoryId}
                                                              changeCategory={changeCategory}
                    />}
                </Suspense>

                <Suspense
                    fallback={<div className={classes.photosLoadingWrapper}><LoadingSpinner/></div>}>
                    {photosList.length > 0 && <GallerySection className={classes.gallery}
                                                              photosList={photosList}
                                                              fetchNextPage={() => {
                                                                  handleLoadMore()
                                                              }}
                                                              loadingNewPhotos={loadingNewPhotos}/>}
                </Suspense>
                {photosList.length < 1 && loadingNewPhotos ?
                    <div className={classes.photosLoadingWrapper}><LoadingSpinner/></div> : null}
            </div>
        </SectionContainer>
    )
}
export default GalleryPage