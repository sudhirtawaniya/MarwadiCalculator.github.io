import './button.css';
import Buttoni from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from 'react'

function Button(){
   
    const [sal, setVal] = useState("");
    const [dis, disset] = useState("");
    

   let cl=['DEL','C'];
    let num=[1,2,3,4,5,6,7,8,9,0,'.','='];
    let op=[<AddIcon/>,<RemoveIcon/>,<ClearIcon/>,<img src="https://img.icons8.com/material/24/000000/divide--v1.png"/>];
    return(
        <>
       

     <div className='display' id='disp'>{dis||0}</div>
     <div className="clear">
     { cl.map((val,i)=>{
            return(<Buttoni variant="outlined" className='clearbutton' key={i}id={val} name={val} onClick={()=>{
                if(val==='DEL'){
                    
                    setVal(sal.slice(0,-1));
                   disset(dis.slice(0,-1));
                   }
                  
                  else{
                    setVal("");
                    disset("");
                   
                  }
            }}>{val}</Buttoni>);
        
           
        })}
     </div>
   
      <div className='operators'>
    
      { op.map((opr,i)=>{
            return(<Buttoni variant="outlined" key={i} className='operatorbutton'  name={opr} onClick={()=>{
               
                if(sal==='')return;
                if(i===0&&(!sal.endsWith('+')&&!sal.endsWith('-')&&!sal.endsWith('/')&&!sal.endsWith('*'))){
     
                    setVal(sal+'+');
                    disset(dis+" "+'म जोड्या ');
                    return;
                   }
                   if(i===1&&(!sal.endsWith('+')&&!sal.endsWith('-')&&!sal.endsWith('/')&&!sal.endsWith('*'))){
     
                    setVal(sal+'-');
                    disset(dis+" "+'हु घटाया ');
                    return;
                   }
                   if(i===2&&(!sal.endsWith('+')&&!sal.endsWith('-')&&!sal.endsWith('/')&&!sal.endsWith('*'))){
                  
                   
                 
                     
                    setVal(sal+'*');
                    disset(dis+" "+'गुणा ');
                    return;
                   }
                   if(i===3&&(!sal.endsWith('+')&&!sal.endsWith('-')&&!sal.endsWith('/')&&!sal.endsWith('*'))){
     
                    setVal(sal+'/');
                    disset(dis+" "+'म भाग ');
                    return;
                   }
                  
                   
            }}>{opr}</Buttoni>);
        
           
        })}

      </div>
       <div className='number'>
        { num.map((val,i)=>{
            return(<Buttoni variant="outlined" key={i}className='numberbutton'  name={val} onClick={()=>{
                if(val==='='){
                    let ans=eval(sal).toString();
                    setVal(ans);
                    disset(ans);
                    return;
                   }
                  
                   setVal(sal+val);
                   disset(dis+val);
            }}>{val}</Buttoni>);
        
           
        })}
        </div>
        </>
    );
}
export default Button;
