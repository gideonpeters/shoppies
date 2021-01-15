import React from 'react'

const MainContext = React.createContext({ search: '', setSearch: () => { }, movies: [], setMovies: () => { }, nominations: [], setNominations: () => { }, })

export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

export default MainContext