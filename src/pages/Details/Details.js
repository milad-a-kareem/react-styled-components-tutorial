import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../App.css";

function Details() {
   const [isloading, setIsloading] = useState(true);
   const [isError, setIsError] = useState(false);
  const [earthquake, setEarthquake] = useState({
    place: "",
    time: "",
    magnitude: "",
    latitude: "",
    longitude: "",
  });
  const { eventid } = useParams();

  useEffect(() => {
    console.log(eventid);
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventid}`
    )
      .then((res) => res.json())
      .then(({ properties, geometry }) => {
        setIsloading(false)
        setEarthquake({
          latitude: geometry.coordinates[1],
          longitude: geometry.coordinates[0],
          place: properties.place,
          magnitude: properties.mag,
          time: new Date(properties.time).toLocaleString(),
        });
      })
      .catch((e) => {setIsError(true); setIsloading(false)});
  }, [eventid]);

  return (
    <div style={{textAlign: 'center'}}>
        <Link to='/'>back to home</Link>
      {isloading && <h1>Loading...</h1>}
      {isError && <h1 style={{color: 'red'}}>Oooops Something is not okay</h1>}

    {!isloading && !isError && <div>
        <h1>Magnitude: {earthquake?.magnitude}</h1>
        <h2>Address: {earthquake?.place}</h2>
        <h3>Time: {earthquake?.time}</h3>

        <h3>Latitude: {earthquake?.latitude}</h3>
        <h3>Longitude: {earthquake?.longitude}</h3>

        <a
            href={`https://www.google.com/maps/@${earthquake.latitude},${earthquake.longitude},11z?hl=en`}
            target='_blank'
            rel='noreferrer'
        >
            Show on Map
        </a>
    </div>}

    </div>
  );
}

export default Details;








// function Details() {
//     const [isloading, setIsloading] = useState(true);
//    const [earthquake, setEarthquake] = useState({
//      place: "",
//      time: "",
//      magnitude: "",
//      latitude: "",
//      longitude: "",
//    });
//    const { eventid } = useParams();
 
//    useEffect(() => {
//      console.log(eventid);
//      fetch(
//        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventid}`
//      )
//        .then((res) => res.json())
//        .then(({ properties, geometry }) => {
//          setIsloading(false)
//          setEarthquake({
//            latitude: geometry.coordinates[1],
//            longitude: geometry.coordinates[0],
//            place: properties.place,
//            magnitude: properties.mag,
//            time: new Date(properties.time).toLocaleString(),
//          });
//        })
//        .catch((e) => console.log(e));
//    }, [eventid]);
 
//    return (
//      <div style={{textAlign: 'center'}}>
//          <Link to='/'>back to home</Link>
//        {isloading && <h1>Loading...</h1>}
 
//      {!isloading && <div>
//          <h1>Magnitude: {earthquake?.magnitude}</h1>
//          <h2>Address: {earthquake?.place}</h2>
//          <h3>Time: {earthquake?.time}</h3>
 
//          <h3>Latitude: {earthquake?.latitude}</h3>
//          <h3>Longitude: {earthquake?.longitude}</h3>
 
//          <a
//              href={`https://www.google.com/maps/@${earthquake.latitude},${earthquake.longitude},11z?hl=en`}
//              target='_blank'
//              rel='noreferrer'
//          >
//              Show on Map
//          </a>
//      </div>}
 
//      </div>
//    );
//  }
 
//  export default Details;
 