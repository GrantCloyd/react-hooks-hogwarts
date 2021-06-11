import React from "react"
import HogOption from "./HogOption"

export default function HogHide({ hogs, handleHide }) {
   const hogOptions = hogs.map(hog => <HogOption name={hog.name} key={hog.name} />)

   return (
      <div>
         <label for="hide-hog">Hide a hog:</label>
         <select onChange={handleHide} name="hide-hog">
            <option value="">Select a pig to hide</option>
            {hogOptions}
         </select>
      </div>
   )
}
