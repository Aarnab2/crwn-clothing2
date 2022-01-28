import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections ? shop.collections : {}
)

export const selectCollectionsForOverview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

// export const selectCategory = categoryUrlParam => createSelector(
//     [selectShopCollections],
//     collections => collections[categoryUrlParam]
// )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

