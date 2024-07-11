import React, {useState} from 'react'

const SearchParams = () => {
    const [location, setLocation ] = useState()

  return (
    <div className='search-params'>
      <form>
        
        <label htmlFor="Location">location
        <input 
        id='location'
       
        placeholder='location'
          value ={location} 
        onChange={(e) => setLocation (e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
