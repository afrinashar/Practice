import {useEffect,useState} from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import "./Freecodecamp.css"
const url ="https://picsum.photos/v2/list"
export const ImageLoader = () => {
const [image, setImage] = useState([]);
const [currentSlide, setCurrentSlide] = useState(0)
const [errorMsg, setErrorMsg] = useState(null)
   const [loading, setLoading] = useState(false)

async function  fetchImages ( geturl  )  {
    try {
        setLoading(true)
        const response =await fetch(geturl)
        const data = await response.json()
        if (data) {
            setImage(data)
            setLoading(false)
        }
    } catch (error) {
        setErrorMsg(error)
    }
}
   useEffect(() => {
      if(url !=="") fetchImages(url) 
    
       
    }, [url])
    console.log(image);
    if (loading) {
        return <>Loading...</>
        
    }
    if (errorMsg!=null) {
        return <>error:{errorMsg}</>
        
    }
  return (
    <div className='container'><BsArrowLeftCircleFill/>
    {
              image?.length? 
                  image.map( images=>(
   <img key={images.id} 
   src={images.download_url}
/>
))

:null

    }
    
     </div>
 
)
}
