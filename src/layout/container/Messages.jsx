import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Messages = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type: 'MESSAGES', 
                payload: {
                    pageTitle: "Messages"
                }
            }); // Dispatch the page title to reducer
        }, 500);
    },[]);

    return(
        <h1 className="text-md">Page coming soon...</h1>
    )
}
export default Messages;