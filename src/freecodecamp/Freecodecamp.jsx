import { Accordian } from "./Accordian"
import { ColorGenerattor } from "./ColorGenerattor"
//import Grgenerator from "./Grgenerator"
import { Star } from "./Star"
import Tabs from "./Tabs"

 
const Freecodecamp = () => {
  return (
    <div>
      <Tabs/>
      {/* <Grgenerator/> */}
      <Star/>
      <ColorGenerattor/>
      <Accordian/>
    </div>
  )
}

export default Freecodecamp
