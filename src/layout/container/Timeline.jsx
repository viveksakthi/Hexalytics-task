import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Timeline = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type: 'TIMELINE', 
                payload: {
                    pageTitle: "Timeline"
                }
            }); // Dispatch the page title to reducer
        }, 500);
    },[]);

    return(
        <h1 className="text-md">Page coming soon...</h1>
    )
}
export default Timeline;