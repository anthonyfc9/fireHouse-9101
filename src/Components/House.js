import React from 'react';


function House(currentHouse){
if(currentHouse.current){
return(  
  <div>
{console.log('u donde messed up')}
<h1>{currentHouse.current.FacilityName}</h1>
<h1>{currentHouse.current.FacilityAddress}</h1>
<h1>{currentHouse.current.Borough}</h1>
</div>
)


}else{

  return (
    <div><h1>Select a house to get started. </h1> {console.log(currentHouse)}</div>




  
    );
}


}

export default House;