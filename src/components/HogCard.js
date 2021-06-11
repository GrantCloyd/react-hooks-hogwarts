import React, { useState } from "react"
import HogInfo from "./HogInfo"

export default function HogCard({ name, image, hog }) {
   const [hogInfoDisplay, setHogInfoDisplay] = useState(false)

   const handleHogDisplay = () => setHogInfoDisplay(!hogInfoDisplay)

   return (
      <div className="ui eight wide column card">
         <img className="maxPigTile" src={image}></img>
         <h3>{name}</h3>
         <button onClick={handleHogDisplay}>Click for Additional Info</button>
         {hogInfoDisplay ? <HogInfo hog={hog} /> : null}
      </div>
   )
}
