import React from 'react'
import TextTransition, { presets } from "react-text-transition";

const SampleText = () => {

    const TEXTS = [
        "Perfection",
        "Beauty",
        "Creativity"
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    //   "
        return (
            <div className="sampleText" data-aos="slide-left" >
            <div className='writtenText'>You can believe in us because we believe in</div>
            
                <TextTransition className="transitionText" springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                </TextTransition>
            </div>
        )
    }

export default SampleText;