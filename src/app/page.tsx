import Image from 'next/image'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <head>
          <title>Happy Homes</title>

          <h1>Welcome to Happy Homes!</h1>
         
      </head>
     
      <div className="bg-white flex flex-col justify-between items-center">
  <div className="flex flex-row justify-between items-center p-4">
    <img src="https://example.com/logo.png" alt="Logo" className="h-8 w-8"></img>
    <div className="flex flex-row justify-between items-center space-x-4">
      <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">Signup</a>
    </div>
  </div>

  <div className="flex flex-col justify-between items-center p-4">
    <div className="flex flex-row justify-between items-center space-x-4">
      <select name= "city" className="w-full border border-gray-300 px-4 py-2 rounded-md">
      <option value="City">City</option>
        <option value="Abu Dhabi">Abu Dhabi</option>
        <option value="Dubai">Dubai</option>
        <option value="Mumbai">Mumbai</option>
        </select>

      <input type="text" placeholder="Available From" className="w-full border border-gray-300 px-4 py-2 rounded-md"></input>

      <select name="price" className="w-full border border-gray-300 px-4 py-2 rounded-md">
      <option value="price">Price Range</option>
        <option value="$3k- $8k">$3k- $8k</option>
        <option value="$9k- $15k">$9k- $15k</option>
        <option value="$15k- $30K">$15k- $30K</option>
        <option value="$31k & above">$31k & above</option>
      </select>

      <select name="propertyType" className="w-full border border-gray-300 px-4 py-2 rounded-md">
      <option value="Property Type">Property Type</option>
        <option value="1 BHK">1 BHK</option>
        <option value="2 BHK">2 BHK</option>
        <option value="3 BHK">3 BHK</option>
        <option value="Duplex">Duplex</option>
      </select>
      <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
    </div>

    
    </div>
   
  </div>

  

</main>

    
  )
}
