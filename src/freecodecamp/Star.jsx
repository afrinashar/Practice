  
export const Star = () => {
  return (<>
    <div>Star</div>
{
    [...Array(5)].map((stars)=>
    {return <button  key={stars} style={{background:"red"}}  /> }
    )
}

  </>)
}
