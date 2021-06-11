import React from "react"

export default function HogInfo({ hog }) {
   return (
      <div>
         <ul>
            Hog Info
            <li>Specialty: {`${hog.specialty}`}</li>
            <li>Highest Medal Achieved: {`${hog["highest medal achieved"]}`}</li>
            <li>Weight: {`${hog.weight}`}</li>
            <li>Greased: {`${hog.greased}`}</li>
         </ul>
      </div>
   )
}
