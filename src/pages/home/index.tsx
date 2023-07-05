import { useState, useEffect } from "react";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import "../../styles/home/index.css"

export function Home() {

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      } 
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      useEffect(() => {
        const onResize = () => {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
      }, []);

    // タイトル設定
    document.title = "Home | EarthUnity"

    return (
        <div>

            <div>
                <div className="mainImage"><img src="/images/home/img1.svg" width="100%" style={{objectFit: "cover"}} /></div>
                <div className="mainImageText" style={{top: windowDimensions.height/2-150, color: "white"}}>
                    <h2>EarthUnity</h2>
                    <h3>- 地球 x 経済 -</h3>
                    <div className="commingsoon animated">
                      <div className="comingsoonText">
                        <p>Developing...</p>
                      </div>
                    </div>
                </div>
                <div className="animated mainImageBottomText" style={{top: windowDimensions.height-70, left: windowDimensions.width/2-15, color: "white"}}>
                    <KeyboardDoubleArrowDownIcon fontSize="large" />
                </div>
            </div>

            <div className="mainContent">

            </div>
            
        </div>
    );
}