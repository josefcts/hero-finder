import React from 'react'
import SearchFilter from '../Search/SearchFilter'
import SearchResults from '../Search/SearchResults'

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-1 col-span-12 lg:col-start-5 lg:col-span-4">
        <SearchFilter />
        <SearchResults />
      </div>
    </div>
  )
}

export default Home
