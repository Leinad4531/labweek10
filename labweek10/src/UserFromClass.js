import React, { useState } from 'react'

export default function UserFromClass() {
    var [formData, setFormData] = useState({
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postal_code: '',
            check: ''
    
    })

    const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labraodr', 'Nova scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    var [submitted, setSubmitted] = useState(false);

    const onSubmitForm = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            {submitted ? (
            <div className="App">
              <h2>Email: {formData.email}</h2>
              <h2>Full Name: {formData.name}</h2>
              <h2>Address: {formData.address}</h2>
              <h2>City: {formData.city}</h2>
              <h2>Province: {formData.province}</h2>
              <h2>Postal Code: {formData.postal_code}</h2>
            </div>
          ) : (
            <form onSubmit={(e) => onSubmitForm(e)} > 
    
            <label>Name:</label><br />
    
                    <input 
                    name='name'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="Full name" />
    
            <label>Email:</label><br />
                    <input 
                    name='email'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="Enter email" />
    
    <label>Address:</label><br />
                <input 
                    name='address'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="1234 Main Street" />
    
    <label>Address2:</label><br />
                <input 
                    name='address2'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="Apartment, Studio, Floor" />
    
    <label>City</label><br />
                    <input 
                    name='city'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="" />
    
    <label>Province</label>
                    <select name='province' onChange={(e) => onValueChanged(e)}>
                    {
                        provinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                        ))
                    }
                </select>
                <input 
                    name='check'
                    type="checkbox"
                    value="terms"
                    id="terms"
                    onChange={(e) => onValueChanged(e)} /> Agree terms &conditions
                
                <input 
                    name='btnSubmit'
                    type="submit"
                    value="Submit"
                    id='submit-btn'
                     />
    
                <label>Postal Code</label>
                    <input 
                    name='postal_code'
                    type="text"
                    onChange={(e) => onValueChanged(e)} 
                    placeholder="Postal Code" /> 
             
            </form>
            )}
        </>
      )
}
    
    
//   render() {
//     return (
//       <div className='App'>
//         <Form/>
//         <form onSubmit={(e) => this.onSubmitForm(e)} > 
//                 <label>
//                     Email:
//                     <input 
//                         name='email'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)} 
//                         placeholder="Enter Email" />
//                 </label>
//                 <label>
//                     Name:
//                     <input 
//                         name='name'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)} 
//                         placeholder="Full Name" />
//                     </label>
//                 <label>
//                     Address:
//                     <input 
//                         name='address'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)}
//                         placeholder='1234 Main Street' />
//                 </label> 
//                 <label>
//                     Address 2:
//                     <input 
//                         name='address2'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)}
//                         placeholder='Apartment, studio, or floor' /> 
//                  </label>
//                 <label>
//                     City:
//                     <input 
//                         name='city'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)} 
//                         /> 
//                 </label>   
//                 <label>
//                     Province:
//                     <select name='country' placeholder='choose' onChange={(e) => this.onValueChanged(e)}>
//                         {
//                             this.countries.map((country) => (
//                                  <option key={country} value={country}>{country}</option>
//                             ))
//                         }
//                     </select>
//                 </label>
//                 <label>
//                     Postal Code:
//                     <input 
//                         name='postal_code'
//                         type="text"
//                         onChange={(e) => this.onValueChanged(e)} 
//                         /> 
//                 </label>

//                     <input 
//                         name='check'
//                         type="checkbox"
//                         onChange={(e) => this.onValueChanged(e)} 
//                         />Agree terms and condition?
                    
//                     <input 
//                         name='btnSubmit'
//                         type="submit"
//                         value="Login" />
//                 </form>
//       </div>
//     )
//   }

