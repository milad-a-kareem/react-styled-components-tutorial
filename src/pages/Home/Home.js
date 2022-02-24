import "../../App.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


function Home() {
  const [data, setData] = useState([]);

  const App =  styled.div`
  
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      padding: 20px;
  
  
  `

  const Mag = styled.div`
  box-sizing: border-box;
  width: 200px !important;
  height: 200px;
  font-size:x-large;
  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  border-radius: 15px;

  background-color: rgba(255, 0, 0, ${props => props.m})

`


const StyledLink = styled(Link)`
  background-color: rgb(187, 205, 255);
  margin: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  max-width:500px;
  width:500px;
  margin-inline:auto;

  &:hover{
      background-color: rgb(187, 255, 235);
  }

  @media only screen and (max-width: 700px){
    flex-direction: column;

`;
  
  
  

useEffect(() => {
  fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20"
  )
    .then((res) => res.json())
    .then((data) => {
      setData(data.features.map(earthquake => ({
          id: earthquake.id, 
          place: earthquake.properties.place, 
          magnitude: earthquake.properties.mag, 
          time: (new Date(earthquake.properties.time).toLocaleString()),
          })
      ))
    }).catch(e=>console.log(e));
}, []);

return <div>
  {data.map(earthquake => {
    return <div to={`details/${earthquake.id}`} key={earthquake.id} >
        <div  m={earthquake.magnitude*0.2} >
            <h1>
              {earthquake?.magnitude.toFixed(2)}
            </h1>
        </div>
        <div className="cont">
          <h2>{earthquake?.place}</h2>
          <h3>{earthquake?.time}</h3>

        </div>
    </div>
  })}
</div>;
}

export default Home;





//function Home() {
  //     const [data, setData] = useState([]);
  
  //   useEffect(() => {
  //     fetch(
  //       "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data.features.map(earthquake => ({
  //             id: earthquake.id, 
  //             place: earthquake.properties.place, 
  //             magnitude: earthquake.properties.mag, 
  //             time: (new Date(earthquake.properties.time).toLocaleString()),
  //             })
  //         ))
  //       }).catch(e=>console.log(e));
  //   }, []);
  
  //   return <div className="App">
  //     {data.map(earthquake => {
  //       return <Link to={`details/${earthquake.id}`} key={earthquake.id} className='card'>
  //           <div className="mag" style={{ backgroundColor: `rgba(255, 0, 0, ${earthquake.magnitude*0.2})`}}>
  //               <h1>
  //                 {earthquake?.magnitude.toFixed(2)}
  //               </h1>
  //           </div>
  //           <div className="cont">
  //             <h2>{earthquake?.place}</h2>
  //             <h3>{earthquake?.time}</h3>
  
  //           </div>
  //       </Link>
  //     })}
  //   </div>;
  // }
  
  // export default Home;
  
  
  
  
  