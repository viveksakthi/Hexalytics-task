import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const InboundJob = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type: 'INBOUNDJOB', 
                payload: {
                    pageTitle: "Inbound Job"
                }
            }); // Dispatch the page title to reducer
        }, 500);
    },[]);

    return(
        <h1 className="text-md">Page coming soon...</h1>
    )
}
export default InboundJob;