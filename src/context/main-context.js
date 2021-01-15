import React from 'react'

const MainContext = React.createContext({ search: '', setSearch: () => { }, movies: [], setMovies: () => { }, nominations: [], setNominations: () => { }, total: 0, setTotal: () => { }, isLoading: false, setIsLoading: () => { }, isBannerVisible: false, setIsBannerVisible: () => { } })

export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

export default MainContext