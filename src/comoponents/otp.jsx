import React, { useRef } from 'react';
export function Otp(){
    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();
    const ref5=useRef();
    const ref6=useRef();

    return <div className="flex justify-center">
<OtpBox reference={ref1} onDone={() => {
    ref2.current.focus();
}}/>
<OtpBox reference={ref2} onDone={() => {
    ref3.current.focus();
}}/>
<OtpBox reference={ref3} onDone={() => {
    ref4.current.focus();
}}/>
<OtpBox reference={ref4} onDone={() => {
    ref5.current.focus();
}}/>
<OtpBox reference={ref5} onDone={() => {
    ref6.current.focus();
}}/>
<OtpBox reference={ref6} onDone={() => {
    ref6.current.focus();
}}/>
 </div>   
}

function OtpBox({
    reference,onDone
}) {
    return <div>
 <input ref={reference} onChange={(e) => { onDone() }} 
 type="text" className="m-1 w-[44px] h-[50px] rounded-xl
bg-blue-500 outline-none px-4 text-white"></input>
    </div>
 }