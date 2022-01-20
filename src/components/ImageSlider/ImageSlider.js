import './imageslider.css'
import { ImagesData } from '../ImagesData/ImagesData';

var idx=0

function ImageSlider() {
    function changeImg(){
        idx = (idx+1)%5 
        document.getElementById('sample').src = ImagesData[idx].image
    }
    return (
        <div id="imgslider" className="flex justify-between wh text-white">
            <button onClick={()=>{changeImg()}} className="px-2">Prev</button>
            <button className="px-2">Next</button>
            <img id='sample' alt ='..' src = {ImagesData[0].image} />
        </div>
    );
  }
  
  export default ImageSlider;