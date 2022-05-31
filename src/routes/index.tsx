import {
    Route,
    Routes,
    BrowserRouter,
    Outlet
} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import translate from "../utils/lang";
import React, {Suspense, lazy} from "react";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
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
const RouteList:React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <DefaultLayout>
                            <Suspense fallback={<div></div>}>
                                <Outlet/>
                            </Suspense>
                        </DefaultLayout>
                    }>
                    <Route path={routeObject.home.path} element={<HomePage/>}/>
                    <Route path={routeObject.gallery.path} element={<GalleryPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
export default RouteList