import { useState, useEffect } from "react"
import axios from "axios"

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState)

  const flip = () => {
    setFlipped(flipState => !flipState)
  }

  return [isFlipped, flip]
}

function useAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = useState([])

  const addResponses = async (formatter = data => data, restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`)
    setResponses(data => [...data, formatter(response.data)])
  }

  return [responses, addResponses]
}

export {useFlip, useAxios}