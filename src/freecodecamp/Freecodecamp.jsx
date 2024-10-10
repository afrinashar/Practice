import { Accordian } from "./Accordian"
import { ColorGenerattor } from "./ColorGenerattor"
import Grgenerator from "./Grgenerator"
import { ImageLoader } from "./ImageLoader"
import { Star } from "./Star"
import Tabs from "./Tabs"

 
const Freecodecamp = () => {
  return (
    <div>
      {/* <ImageLoader/> */}
      <Tabs/>
      {/* <Grgenerator/>   */}
      <Star/>
      <ColorGenerattor/>
      <Accordian/>
    </div>
  )
}

export default Freecodecamp
