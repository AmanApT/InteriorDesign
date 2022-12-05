import { Card, CardHeader, CardBody, CardFooter,Typography, } from "@material-tailwind/react";
import React from 'react'

const ServiceCards = ({image,content,description}) => {
  return (
    <div data-aos="fade">
<Card className="w-72 rounded-2xl p-1 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] ">
      <CardHeader className="relative rounded-2xl h-56 -mt-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img
          src={image}
          alt="img-blur-shadow"  
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {content}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
    </Card>
    {/* Your beautiful bedroom where you dream of future */}

    </div>
  )
}

export default ServiceCards