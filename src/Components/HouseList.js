import React from 'react';

class HouseList extends React.Component {
renderAll(){
 return this.props.houses.map((obj,id)=>{
   return (
    <p key={id} onClick={()=>this.props.selectFireHouse(obj)}>{obj.FacilityName}</p>
   )
  })
}

  render(){
  return (
<div>
{this.renderAll()}
</div>
  );
}}

export default HouseList;