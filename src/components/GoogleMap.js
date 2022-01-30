import React from 'react';

function GoogleMap({latitude, longitude, w, h}) {
  return <iframe 
  title='map' 
  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.315300445363!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x646147bc70b9878e!2zMzbCsDEwJzU5LjYiTiA0M8KwNTknMDAuMCJF!5e0!3m2!1sen!2siq!4v1643501467411!5m2!1sen!2siq`} 
  width={w} 
  height={h} 
  loading="lazy"></iframe> 

}

export default GoogleMap;
