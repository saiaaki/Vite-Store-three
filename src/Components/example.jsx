// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Page = () => {
//   const [photo, setPhoto] = useState([]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [editedUserName, setEditedUserName] = useState('');

//   useEffect(() => {
//     axios.get("https://pixabay.com/api/?key=33308132-924ef99a0b254b15757eb3cb9&q=yellow+flowers&image_type=photo&pretty=true")
//       .then((res) => {
//         setPhoto(res?.data.hits);
//       });
//   }, []);

//   const handleEditClick = (userId, userName) => {
//     setEditingUserId(userId);
//     setEditedUserName(userName);
//   };

//   const handleSaveClick = () => {
//      setPhoto((prevPhoto) =>
//       prevPhoto.map((item) => {
//         if (item.id === editingUserId) {
//           return { ...item, user: editedUserName };
//         }
//         return item;
//       })
//     );
//     setEditingUserId(null);
//   };

//   return (
//     <div>
//       <center>
//         <h1>VITE - PROJECT THREE</h1>
//         <br />
//         <div className='maindiv'>
//           {photo.map((item) => (
//             <div key={item.id} className='subdiv'>
//               <img alt='image' className='pictures' src={item.largeImageURL} />
//               <br />
//               {editingUserId === item.id ? (
//                 <div>
//                   <input type="text" value={editedUserName} onChange={(e) => setEditedUserName(e.target.value)}/>
//                   <button onClick={handleSaveClick}>Save</button>
//                 </div>
//               ) : (
//                 <div>
//                   {item.user}
//                   <br />
//                   <button onClick={() => handleEditClick(item.id, item.user)}>
//                     Edit
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </center>
//     </div>
//   );
// };

// export default Page;



 
// import React, { useState } from 'react';

// function Page3() {
//   const [inputValue, setInputValue] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       {isEditing ? (<input type="text" value={inputValue} onChange={handleChange} />) : (<p>{inputValue}</p> )}
//       {isEditing ? (<button onClick={handleSaveClick}>Save</button>
//       ) : (
//         <button onClick={handleEditClick}>Edit</button>
//       )}
//     </div>
//   );
// }

// export default Page3;