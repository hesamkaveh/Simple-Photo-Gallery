import {init} from "@rematch/core";
import {models} from "../../models";
import {RootModel} from "../../models/models.types";

describe("[lang] model", () => {
    it("switch language to en", async () => {
        const store = init<RootModel>({
            models,
        });
        await store.dispatch.lang.setLang('en');
        const lang = store.getState().lang.lang;
        expect(lang).toEqual('en');
    });

    it("switch language to fa", async () => {
        const store = init<RootModel>({
            models,
        });
        await store.dispatch.lang.setLang('fa');
        const lang = store.getState().lang.lang;
        expect(lang).toEqual('fa');
    });

    it("setLang should not set unsuitable lang", async () => {
        const store = init<RootModel>({
            models,
        });
        const prevLang = store.getState().lang.lang
        await store.dispatch.lang.setLang('farsi'); // "farsi" is not suitable
        const nextLang = store.getState().lang.lang;
        expect(nextLang).toEqual(prevLang);
    })

    it("Application should have a default lang", async () => {
        const store = init<RootModel>({
            models,
        });
        const lang = store.getState().lang.lang;
        expect(typeof lang).toBe('string');
    });
});
