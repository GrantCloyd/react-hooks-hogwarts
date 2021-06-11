import React, { useState } from "react"
import AddAHogForm from "./AddAHogForm"
import HogCard from "./HogCard"
import HogHide from "./HogHide"

export default function HogList({ hogs }) {
   const [filteredHogs, setFilteredHogs] = useState(hogs)
   const [areFiltered, setAreFiltered] = useState(true)
   const [areSorted, setAreSorted] = useState(false)

   const handleAddHog = addedHog => {
      console.log(addedHog)
      let newHog = [addedHog, ...filteredHogs]
      console.log(newHog)
      setFilteredHogs(newHog)
   }

   const handleHide = e => {
      let pigToHide = e.target.value
      const newList = [...filteredHogs].filter(hog => hog.name !== pigToHide)
      setFilteredHogs(newList)
   }

   const handleFilterHogs = () => {
      setAreFiltered(!areFiltered)
      if (areFiltered) {
         let newList = [...filteredHogs].filter(hog => hog.greased)
         setFilteredHogs(newList)
      } else {
         setFilteredHogs(hogs)
      }
   }

   const handleSortWeight = () => {
      setAreSorted(!areSorted)
      if (areSorted) {
         let sortedPigs = [...filteredHogs].sort((h1, h2) => h2.weight - h1.weight)
         setFilteredHogs(sortedPigs)
      } else {
         setFilteredHogs(hogs)
      }
   }

   const handleSortName = () => {
      let sortedPigs = [...filteredHogs].sort((h1, h2) => (h1.name > h2.name ? 1 : -1))

      setFilteredHogs(sortedPigs)
   }

   const hogDisplay = filteredHogs.map(hog => (
      <HogCard hog={hog} key={hog.name} name={hog.name} image={hog.image} />
   ))

   return (
      <div>
         <hr />
         <h1>Hogs</h1>
         <AddAHogForm handleAddHog={handleAddHog} />
         <HogHide hogs={hogs} handleHide={handleHide} />
         <div className="ui horizontal divider">
            <button onClick={handleFilterHogs}>
               {areFiltered ? "Filter by Greased?" : "Filtered by Greased"}
            </button>
            <button onClick={handleSortWeight}>Sort by Weight</button>
            <button onClick={handleSortName}>Sort by Name</button>
         </div>
         <br />

         <div className="ui grid container">{hogDisplay}</div>
      </div>
   )
}
