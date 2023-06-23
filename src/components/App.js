import React, { useContext, useState } from 'react';
import user from './Context';

const App = () => {

    const [list,setList]=useState([]);
    const [item,setItem] = useState('');

    const [userDetails,setUserDetails] = useContext(user);

    function removeItem(position){
        let updatedList=[];
        list.map((e,i)=>{
            if(i !== position)
                updatedList.push(e);
        });
        setList(updatedList);
    }


    return (
        <div>
            {userDetails.authenticated && <p id='current-user' >Current user:{userDetails.name}, isAuthenticated: {userDetails.authenticated}</p>}
            <button id='login-btn' onClick={()=>{setUserDetails({name:"rohan",authenticated:"Yes"})}} >Login</button>
            <button id='signout' onClick={()=>{setUserDetails({name:"",authenticated:"No"})}} >Signout</button>
            <input id='shopping-input' value={item} onChange={(e)=>{setItem(e.target.value)}} type='text' ></input>
            <button onClick={()=>{
                setItem("");
                setList([...list,item]);
            }} >Add</button>
            <button id='clear-list' onClick={()=>{setList([])}} >Clear List</button>
            {
                list.length > 0 && <ul>
                    {
                        list.map((item,index)=><li 
                        id={`item-${item}`} key={`item-${item}`} >
                            {item} 
                        <button id={`remove-${item}`} onClick={()=>{removeItem(index)}}  >Remove</button> 
                        </li>)
                    }
                </ul>
            }
        </div>
    );
};

export default App;
