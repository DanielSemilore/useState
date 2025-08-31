import React from 'react'

const useState5 = () => {
    const [imageCarousel, setImageCarousel] = React.useState(0)
    const images = [
        "src/assets/react.svg",
        "src/assets/2001_mercedes-benz_f400_carving-1 - Copy - Copy - Copy (2).jpg",
        "src/assets/2001_mercedes-benz_s600_pullman-3.jpg",
        "src/assets/2001_mg_f_xpower_500-1024x768.jpg",
        "src/assets/2001jaguar.jpg",
        "src/assets/2002_dodge_viper_rt10-1.jpg",
        "src/assets/2003_cadillac_xlr-1[1].jpg",
        "src/assets/2003_mercedes-benz_sl500-5.jpg",
        "src/assets/2003_mercedes-benz_sl500-1280x960.jpg",
        "src/assets/2003_mustang_mach_1-1024x768 - Copy.jpg",
        "src/assets/2004 Bugatti Veyron 16.4.jpg",
        "src/assets/7083_image.jpg",
    ]

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Image Carousel</h1>
      <img src={images[imageCarousel]} alt={`Image ${imageCarousel}`} className="w-full max-w-md" />
      
      <p className="mt-2">Current Image: {imageCarousel}</p>
      <div className="flex space-x-4 mt-4 ">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setImageCarousel((prev) => (prev === 0 ? 11 : prev - 1))}>Previous</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setImageCarousel((prev) => (prev === 11 ? 0 : prev + 1))}>Next</button>
      </div>
    </div>
  )
}

export default useState5