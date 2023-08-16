import { useEffect, useState } from "react";
import axios from "axios";
function Home(){

    //El estado
    const [apodData, setApodData] = useState({});
    useEffect(() =>{
        //el codigo que se ejecutara despues de que el codigo se monte
        axios.get('https://api.nasa.gov/planetary/apod?api_key=hP4c1Me3LOlRZ3IZJ1IgywMoQirUXI7EeFjLom1G')
        .then(response => {
            setApodData(response.data);
        })
        .catch(error => {
            console.error('error fatching APOD data:', error);
        });
    }, []);
    //[] este es un segundo argumento una lista de dependencias
    return(

        <div className=" grid gap[10rem] grid-cols-2 items center ">
            <div>
            <div className="p-4 text-3xl text-gray-500 flex text-center">
            <h1 className="text-medium  text-blue-950 p-3 ">{apodData.title}</h1>
            </div>
            <img className="object-cover h-2/3" src={apodData.url} alt={apodData.title}></img> 
            </div>
            <div className="p-4 mt-4">
                <h2 className="mb-4 p-3 text-blue-950 text-xl">Description: </h2>
                <p className="mt-4 mr-4 p-3">{apodData.explanation}</p>
              </div>
        </div>

    )
}
export { Home };