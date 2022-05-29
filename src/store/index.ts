import {init, RematchDispatch, RematchRootState} from '@rematch/core'
import {models, RootModel} from '../models'
import persist from '@rematch/persist'
import storage from 'redux-persist/lib/storage'
import loadingPlugin, {ExtraModelsFromLoading} from "@rematch/loading"

type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
    models,
    plugins: [// @ts-ignore
        persist({
            key: 'root',
            storage,
            whitelist: ['lang']
        }),
        loadingPlugin()
    ]
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>