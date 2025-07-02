import './App.css'
import Image from './components/Image'
import photosArray from './assets/images/photosArray.json'

function App() {
  const imagePath = "src/assets/images/"
  const images = photosArray.map((path, index) => {
    return <Image key={index} path={imagePath + path} />
  })

  return (
    <>
      {images}
    </>
  )
}

export default App
