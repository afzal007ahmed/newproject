import './App.css';
import {useEffect, useState , useRef} from 'react' ;
function App() {
  const[ last , setlast ] = useState(false) ;
const[ check , setcheck ] = useState(false) ;
const[ back , setback ] = useState(false) ;
const[ change , setChange] = useState("") ;  
const[ display , setdisplay ] = useState([]);
const[ firstitem , setfirstitem ] = useState(true) ;
const[pad , setpad ] = useState() ;
const container = [
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"ajay" , mail:"ajay@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"aman" , mail:"aman@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"znm" , mail:"znm@example.com"} ,
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"sanjay" , mail:"sanjay@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Jack" , mail:"jack@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Zoya" , mail:"zoya@example.com"} ,
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"inha" , mail:"inha@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Zack" , mail:"zack@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Adam" , mail:"adam@example.com"} ,
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"Prince" , mail:"prince@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Sanju" , mail:"sanju@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Samay" , mail:"samay@example.com"} ,
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"Preethi" , mail:"preethi@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Saumya" , mail:"saumya@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Tanisha" , mail:"Tanisha@example.com"} ,
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" , name:"Gaurav" , mail:"gaurav@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Ashish" , mail:"ashish@example.com"} , 
  {link:"https://avatars.githubusercontent.com/u/97433256?v=4" ,name:"Aditya" , mail:"aditya@example.com"} 
 ] ;

const reference = useRef(null) ;
 function manageinput(e) {
   setChange( (prev) => {
    return e.target.value
   })
 setcheck(true) ; 

 }
useEffect(() => { 
 if( change.length == 0)
  {  setcheck(false) ;
    const w = reference.current.offsetWidth + 15;
    const h = reference.current.offsetHeight + 15;
setpad(w) ;
setlast(h);
  }
  
  setfirstitem(true) ;
} , [change])

useEffect(() => {
  const w = reference.current.offsetWidth + 15;
  const h = reference.current.offsetHeight + 15;
setpad(w) ;
setlast(h);
setback(false);

} , [back == true])
function handledisplay( obj , ind ) {
setdisplay( (prev) => [...prev,obj]) ;
setChange("");
}
function handlebackspace(e , obj) {
  
  if( e.key === 'Backspace' && e.target.value === '') {
    setdisplay((prev) => prev.slice(0,-1)) ;
   }
   setback(true) ;
   if( e.key === "Enter"){
     if( obj.length == 0 ) {
      alert('There is no Such Data Present') ;
      return ;
     }  
    setdisplay( (prev) => [...prev,obj[0]]) ;
  setChange("");
   }
}
function handledelete(index) {
  setdisplay((prev) => prev.slice(0,-1)) ;
  setback(true);
}
  return (
    <>
    <input type ="text" onChange={(e) => manageinput(e) } value = {change} style ={{paddingLeft:pad , width:"100%" }} onKeyDown={(e)=>handlebackspace(e , container.filter((val ,index) => val.name.toLowerCase().includes(change.toLowerCase())))}  />
   <div className='display' ref ={reference}>
    {
      display.map((obj ,index) =>{ 
          return ( <span className='display-items'>
            <img src = {`${obj.link}`}/>
            <span className='name'>{obj.name}</span>
            <span className='mail'>{obj.mail}</span>
            <span className='delete' onClick={() => handledelete(index)}>x</span>
           </span>
)      } )
    }
    </div>
     { check ? <div className='container-class' style ={{marginLeft:pad}}>
       {
         !container.filter((val) => val.name.toLowerCase().includes(change.toLowerCase())).length == 0 ?  container.filter((val ,index) => val.name.toLowerCase().includes(change.toLowerCase())).map((val , index) => {
          return(
            <>
            <div className = {`container-items ${index == 0 ? 'first' : ''}`} onClick = { () => handledisplay(val , index )}   >
              <img src={`${val.link}`} alt ="image"/>
              <span className='container-name'>{val.name}</span>
              <span className='container-mail'>{val.mail}</span>
            </div>
            </>
          )
        }):setcheck(false)
        
       }
       </div> :''}
</>
 )
  }
 
export default App;
