import React from 'react'
import css from './Searchbox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../redux/filtersSlice'
import {selectFilter} from '../../redux/filtersSlice'


export const SearchBox = () => {

  const dispatch = useDispatch()
  const filterValue = useSelector(selectFilter)


  const handleSearch = (evt) => {
      const keyword = evt.currentTarget.value.trim();
      dispatch(search(keyword))
  }

  return (
    <form>
      <label htmlFor="search">
        Search in contacts:
      </label>
      <input type="text" 
      id='search' 
      value={filterValue}
      onChange={handleSearch} 
      className={css.searchInput}/>
    </form>
  )
}