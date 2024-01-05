import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import profile from "../../../assets/profile.jpg"


const Banner = () => {
     return (
       <AwesomeSlider>
         <div>
           <img src={profile} alt="" />
         </div>
         <div>2</div>
         <div>3</div>
         <div>4</div>
       </AwesomeSlider>
     );
};

export default Banner;