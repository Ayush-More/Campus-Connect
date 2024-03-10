import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel,EffectCreative } from 'swiper/modules';
import "./../../assets/style/myStyle.css"
import "swiper/css";
import "swiper/css/effect-creative";
import Resource from "./../../assets/images/resource.png";
import mentor from "./../../assets/images/mentor.png";
import calender2 from "./../../assets/images/calender2.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
function Features() {
  const nav = useNavigate();
  return (
    <div className='LandPage'>
          <Swiper
         
         mousewheel={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-1%', 0, -1],
          },
          next: {
            translate: [0 ,'100%', 0],
          },
        }}
        modules={[Mousewheel ,EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide className='slide-swiper'><div style={{backgroundColor:"white", height:"100%" , width:"100%"}}><div style={{margin:"0px 100px", paddingTop:"70px"}} className="landingContent">
          <div><p className="tagLine">Share the <span style={{color:"#63d7b0"}}>Knowledge</span>, Share the <span style={{color:"#63d7b0"}}>Joy</span><br/><br/> <span style={{fontSize:"20px"}}>With Campus Connect we can Explore, Connect, and Grow with Our Book-Sharing feature </span></p>
          <div style={{display:"flex", columnGap:"40px", alignItems:"center", justifyContent:"center"}}>
            <div className='taglineKey'><AutoStoriesIcon className='icon'/><div>Exclusive</div></div>
            <div className='taglineKey'><CloudDownloadIcon className='icon'/><div>Free Download</div></div>
          </div>
          <Button onClick={()=>{nav("/resource")}} style={{ backgroundColor:"#63d7b0", margin:"30px"}}  variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          <div style={{marginBottom:"50px"}}><img src={Resource} alt="college" height={500}width={490} /></div>
        </div></div></SwiperSlide>


        <SwiperSlide className='slide-swiper'><div style={{backgroundColor:"#C0EEE4", height:"100%" , width:"100%"}}><div style={{margin:"0px 100px",paddingTop:"70px"}} className="landingContent">
          <div><p className="tagLine"> <span style={{color:"#63d7b0"}}>Connect. Learn. Grow</span>: Mentorship at Your Fingertips!<br/><br/> <span style={{fontSize:"20px"}}>With Campus Connect we can Explore, Connect, and Grow with Our Book-Sharing feature </span></p>
          <div style={{display:"flex", columnGap:"40px", alignItems:"center", justifyContent:"center"}}>
            <div className='taglineKey'><AutoStoriesIcon className='icon'/><div>Exclusive</div></div>
            <div className='taglineKey'><CloudDownloadIcon className='icon'/><div>Free Download</div></div>
          </div>
          <Button onClick={()=>{nav("/chat")}} style={{ backgroundColor:"#63d7b0", margin:"30px"}}  variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          <div style={{marginBottom:"50px"}}><img src={mentor} alt="college" height={500}width={490} /></div>
        </div></div></SwiperSlide>


        <SwiperSlide className='slide-swiper'><div style={{backgroundColor:"#F8F988", height:"100%" , width:"100%"}}><div style={{margin:"0px 100px", paddingTop:"70px"}} className="landingContent">
          <div><p className="tagLine">Stay <span style={{color:"#FF725E"}}>Ahead,</span>Stay <span style={{color:"#FF725E"}}>Informed </span><br/>Your College Events & Calendar Hub!<br/><br/> <span style={{fontSize:"20px"}}>With Campus Connect we can Explore, Connect, and Grow with Our Book-Sharing feature </span></p>
          <div style={{display:"flex", columnGap:"40px", alignItems:"center", justifyContent:"center"}}>
            <div className='taglineKey'><AutoStoriesIcon className='icon'/><div>Exclusive</div></div>
            <div className='taglineKey'><CloudDownloadIcon className='icon'/><div>Free Download</div></div>
          </div>
          <Button onClick={()=>{nav("/calender")}} style={{ backgroundColor:"#FF725E", margin:"30px"}}  variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          <div style={{marginBottom:"50px"}}><img src={calender2} alt="college" height={500}width={490} /></div>
        </div></div></SwiperSlide>
          

        <SwiperSlide className='slide-swiper'><div style={{backgroundColor:"#FFCAC8", height:"100%" , width:"100%"}}><div style={{margin:"0px 100px", paddingTop:"70px"}} className="landingContent">
          <div><p className="tagLine">Share the <span style={{color:"#63d7b0"}}>Knowledge</span>, Share the <span style={{color:"#63d7b0"}}>Joy</span><br/><br/> <span style={{fontSize:"20px"}}>With Campus Connect we can Explore, Connect, and Grow with Our Book-Sharing feature </span></p>
          <div style={{display:"flex", columnGap:"40px", alignItems:"center", justifyContent:"center"}}>
            <div className='taglineKey'><AutoStoriesIcon className='icon'/><div>Exclusive</div></div>
            <div className='taglineKey'><CloudDownloadIcon className='icon'/><div>Free Download</div></div>
          </div>
          <Button onClick={()=> (nav("/roadmap"))} style={{ backgroundColor:"#63d7b0", margin:"30px"}}  variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          <div style={{marginBottom:"50px"}}><img src={Resource} alt="college" height={500}width={490} /></div>
        </div></div></SwiperSlide>
          
       
      </Swiper>
    </div>
  )
}

export default Features