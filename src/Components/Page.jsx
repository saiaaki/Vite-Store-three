import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Page = () => {
    const [photo,setPhoto] = useState([]);
    const [Edituserid,SeteEdituserid] = useState('');
    const [editname , setEditname] = useState('');

    useEffect(()=>{
    axios.get("https://pixabay.com/api/?key=33308132-924ef99a0b254b15757eb3cb9&q=yellow+flowers&image_type=photo&pretty=true")
    .then(res =>{
        console.log(res?.data.hits ,"json");
        setPhoto(res?.data.hits);
    })
  },[]) 
  const editBtnClick = (userId , userName) =>{
    SeteEdituserid(userId);
    setEditname (userName);
  };

  const handleSaveClick = () => {
    setPhoto((prevData) =>
    prevData.map((item) => {
       if (item.id === Edituserid) {
         return { ...item, user: editname };
       }
       return item;
     })
   );
   SeteEdituserid('');
 };
  return (
    <div>
        <center>
    <h1>VITE - PROJECT THREE</h1><br/>
    <div className='maindiv'>
        {photo.map((item)=>(
            <div key={item.id} className='subdiv'>
                <img alt='image' className='pictures' src={item.largeImageURL}/><br/>
                {Edituserid === item.id ? (
                <div>
                    <input type='text' value={editname} onChange={(e)=>setEditname(e.target.value)}/> 
                    <button onClick={handleSaveClick}>save</button>
                </div>) :
                ( <div>
                    {item.user}  <br/>
                <button onClick={()=>editBtnClick(item.id,item.user)}>Edit</button>
                </div>
                )}
            </div>
        ))}
    </div>
    </center>
    </div>
  )
}

export default Page
  

