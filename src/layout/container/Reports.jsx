import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Reports = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type: 'REPORTS', 
                payload: {
                    pageTitle: "Reports"
                }
            }); // Dispatch the page title to reducer
        }, 500);
    },[]);

    return(
        <h1 className="text-md">Page coming soon...</h1>
    )
}
export default Reports;