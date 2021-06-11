import React from "react"

export default function HogOption({ name, handleHide }) {
   return (
      <option onChange={handleHide} value={name}>
         {name}
      </option>
   )
}
