import {init} from "@rematch/core";
import {models} from "../../models";
import {RootModel} from "../../models/models.types";


describe("[gallery] model", () => {
    it("fetchPhotos should increment page number", async () => {
        const store = init<RootModel>({
            models,
        });
        const prevPageNumber = store.getState().gallery.page;
        await store.dispatch.gallery.fetchPhotos({});
        const nextPageNumber = store.getState().gallery.page;
        expect(nextPageNumber).toEqual(prevPageNumber + 1);
    });

    it("fetchPhotos should change photoList", async () => {
        const store = init<RootModel>({
            models,
        });
        const prevPhotoList = store.getState().gallery.photoList;
        await store.dispatch.gallery.fetchPhotos({});
        const nextPhotoList = store.getState().gallery.photoList;
        expect(nextPhotoList).not.toEqual(prevPhotoList);
        expect(nextPhotoList.length).toBeGreaterThan(prevPhotoList.length);
    });

    it("changeCategory should reset nextPage number", async () => {
        const store = init<RootModel>({
            models,
        });
        await store.dispatch.gallery.changeCategory(1);
        const page = store.getState().gallery.page;
        expect(page).toEqual(1);
    });

    it("fetchCategories should set currentCategory correctly", async () => {
        const store = init<RootModel>({
            models,
        });
        const prevCurrentCategory = store.getState().gallery.currentCategoryId;
        const data = await store.dispatch.gallery.fetchCategories();
        const nextCurrentCategory = store.getState().gallery.currentCategoryId;
        expect(typeof nextCurrentCategory).toBe('number');
        expect(nextCurrentCategory).toEqual(data[0].id);
        expect(nextCurrentCategory).not.toEqual(prevCurrentCategory);
    });
});
