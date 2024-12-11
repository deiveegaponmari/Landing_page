import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icons/Icons";
import Imgshowcase from "../../components/Imageshowcase/Imgshowcase";
import Testimonial from "../../components/Testimonials/Testimonial";
import Action from "../../components/Action/Action";

export default function Home(){
    return <>
    <div>
        <Navbar/>
        <Header/>
        <Icon/>
          <Imgshowcase/> 
          <Testimonial/>
        <Action/>  
    </div>
    </>
}