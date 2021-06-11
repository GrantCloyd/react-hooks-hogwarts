import React, { useState } from "react"

export default function AddAHogForm({ handleAddHog }) {
   const [formData, setFormData] = useState({
      name: "",
      specialty: "",
      weight: 0,
      image: "",
      greased: false,
   })

   const getCheckedData = e => {
      let greased = e.target.checked

      setFormData({ ...formData, greased })
   }

   const getData = (e, type) => {
      let value = e.target.value
      setFormData({ ...formData, [type]: value })
   }

   const handleSubmitHog = e => {
      e.preventDefault()
      handleAddHog(formData)
   }

   return (
      <div>
         <hr />
         Add your own Hog, y'all!
         <form onSubmit={e => handleSubmitHog(e)}>
            <input
               onChange={e => getData(e, "name")}
               name="name"
               type="text"
               placeholder="Enter name"
            />
            <input
               onChange={e => getData(e, "specialty")}
               name="specialty"
               type="text"
               placeholder="Enter specialty"
            />
            <input
               onChange={e => getData(e, "weight")}
               name="weight"
               type="text"
               placeholder="Enter weight"
            />
            <input
               onChange={e => getData(e, "image")}
               name="image"
               type="text"
               placeholder="Enter image url"
            />
            <div>
               {" "}
               Greased?
               <input onChange={getCheckedData} name="greased" type="checkbox" />
            </div>
            <button>Submit</button>
         </form>
         <hr />
      </div>
   )
}
