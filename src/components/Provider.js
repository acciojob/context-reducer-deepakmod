import React,{useState} from 'react';
import user from './Context';
const Provider = (props) => {
    const [userDetails,setUserDetails] = useState({name:"",authenticated:""});
    return (
        <div>
            <user.Provider value={[userDetails,setUserDetails]} >
                {props.children}
            </user.Provider>
        </div>
    );
};

export default Provider;