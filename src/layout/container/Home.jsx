import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type: 'HOME', 
                payload: {
                    pageTitle: "Home"
                }
            }); // Dispatch the page title to reducer
        }, 500);
    },[]);

    return(
        <h1 className="text-md">Page coming soon...</h1>
    )
}
export default Home;