import {useState} from 'react'

const Tabs = ( ) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const TabesContent=[
{
    label:"tab1",
    contemt:<div>this content for tab 1</div>
},
{
    label:"tab2",
    contemt:<div>this content for tab 2</div>
},
{
    label:"tab3",
    contemt:<div>this content for tab 3</div>
},

]

const handleClick=(currentIndex)=>{
    setCurrentTabIndex(currentIndex)
    onchange(currentIndex)
}
  return (
    <div className='wrapper'>
      <div className='heading'>
{
    TabesContent.map( (tableItem)=>
        <div onClick={()=>handleClick()} key={tableItem.label}>
<span className='label'>{tableItem.label}

</span>
            </div>
    )
}

      </div>
      <div className='contnent'>{
        TabesContent[currentTabIndex] && TabesContent[currentTabIndex].content
}</div>
    </div>
  )
}

export default Tabs
