import ServiceCards from "./ServiceCards";
import image1 from '../images/bedroom.jpg';
import image2 from '../images/corporate.jpg';
import image3 from '../images/office.jpg';
import image4 from '../images/modular kitchen.jpg';
import image5 from '../images/sampleImage2.jpg';
import image6 from '../images/construction.jpg';

export default function ServicesOffered() {
  return (
    <div id="services" className="servicesOffered" >
       <p class="uppercase text-peach text-3xl -mt-10 mb-12 ml-96 font-bold">Services we offer for:</p>
      <div className="flex justify-around">
        <ServiceCards image={image1} content={"Beautiful Bedrooms"} description={"Your beautiful bedroom where you dream of future"}/>
        <ServiceCards image={image2} content={"Corporate Offices"} description={"Soothing offices design for max productivity"} />
        <ServiceCards image={image3} content={"Workspace"} description={"Creative workspaces that motivates you to do something new everyday"}/>
      </div>
      <div className="flex justify-around mt-24">
        <ServiceCards image={image4} content={"Kitchen"} description={"Delicious designs space for your delicious dinings."}/>
        <ServiceCards image={image5} content={"Halls"} description={"Simple yet beauitful designer halls that matches your vibe"}/>
        <ServiceCards image={image6} content={"Construction Work"} description={"Recreate the space from scratch and rebuild your dreams"}/>
      </div>
      <hr className="breaker"/>
    </div>
  );
}