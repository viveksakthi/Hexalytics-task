import React from "react";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard";
import Home from "./Home";
import Reports from "./Reports";
import InboundJob from "./InboundJob";
import Timeline from "./Timeline";
import Mailbox from "./Mailbox";
import Messages from "./Messages";

const Container = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/home" element={<Home />}></Route>     
                <Route path="/reports" element={<Reports />}></Route>     
                <Route path="/inbound-job" element={<InboundJob />}></Route>     
                <Route path="/timeline" element={<Timeline />}></Route>     
                <Route path="/mailbox" element={<Mailbox />}></Route>     
                <Route path="/messages" element={<Messages />}></Route>    
            </Routes> 
        </>
    )
}
export default Container;