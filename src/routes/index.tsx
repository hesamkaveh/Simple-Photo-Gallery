import {
    Route,
    Routes,
    BrowserRouter,
    Outlet
} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import translate from "../utils/lang";
import LoadingSpinner from "../components/LoadingSpinner";
import {Suspense, lazy} from "react";
import _404_notFound from "../pages/_404_notFound";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));

export const routeObject = {
    home: {
        path: '/',
        name: () => translate('pages.home')
    },
    gallery: {
        path: '/gallery',
        name: () => translate('pages.photosList')
    }
}
const RouteList = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<DefaultLayout><Suspense
                        fallback={<LoadingSpinner/>}><Outlet/></Suspense></DefaultLayout>}>
                    <Route path={routeObject.home.path} element={<HomePage/>}/>
                    <Route path={routeObject.gallery.path} element={<GalleryPage/>}/>
                    <Route path="*" element={<_404_notFound/>}>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
export default RouteList