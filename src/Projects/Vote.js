import React, {useState} from 'react'
import "./Vote.css"

 function Vote(props) {

    const [lang1,setCountOne] =useState(0);
    const [lang2,setCountTwo] =useState(0);
    const [lang3,setCountThree] =useState(0);
    const [lang4,setCountFour] =useState(0);
    return (
        <div style={{float:"inline-end"}} align="center"> 
           <h2 style={{color:"Black"}}>CAST YOUR VOTE</h2>
           <table className="vote" >
                <tr>
                    <td >Java</td>
                   <td className="language"> <h2>{lang1}</h2> </td>
                   <td> <button  style={{color:"green"}}  onClick={()=>{
                setCountOne(lang1+1)
            }}>Up Vote </button> </td>
                </tr>
                
                <tr>
                    <td>Php</td>
                   <td className="language"> <h2>{lang2}</h2> </td>
                   <td> <button style={{color:"green"}}  onClick={()=>{
                setCountTwo(lang2+1)
            }}>Up Vote</button> </td>
                </tr>

                <tr>
                    <td>SQL</td>
                   <td> <h2 className="language">{lang3}</h2> </td>
                   <td> <button style={{color:"green"}}  onClick={()=>{
                setCountThree(lang3+1)
            }}>Up Vote</button> </td>
                </tr>

                <tr>
                    <td>Phyton</td>
                   <td> <h2 className="language">{lang4}</h2> </td>
                   <td> <button style={{color:"green"}}  onClick={()=>{
                setCountFour(lang4+1)
            }}>Up Vote</button> </td>
                </tr>

           </table>
        </div>
    );
}

export default React.memo(Vote);
