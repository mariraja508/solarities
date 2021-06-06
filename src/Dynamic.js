import './App.css';
import {useState,useEffect,useCallback} from 'react'
import axios from 'axios'
import App from './App'
export default function Dynamic(props)
{
  const [buttons, setbuttons] = useState([])
  const [inputs, setinputs] = useState([])
  const [inputname, setinputname] = useState([])
  const [inputsize, setinputsize] = useState([])
  const [dropdown,setdropdown]=useState([])
  const [dropdisval,Dropdisval]=useState([])
  const [dropval,Dropval]=useState([])
  const [radio, setradio] = useState([])
  const [optdisval,Optdisval]=useState([])
  const [optval,Optval]=useState([])
  const [check,Check]=useState([])
  const [checkdisval,Checkdisval]=useState([])
  const [checkval,Checkval]=useState([])
  const [jsondata,Jsondata]=useState([])
  const [attri,Attri]=useState([])
  const [len,Length] = useState([])

useEffect(
  ()=>{
      console.log(props.name.ActionDisplayName)
     Jsondata(props.name)
     console.log(props.name)
      setbuttons([jsondata.ActionDisplayName])  
      var type=jsondata.Attributes;
      console.log(jsondata)
      Length(jsondata.Attributes.length)
      Attri(jsondata.Attributes)
         console.log(len)
         for(var i=0;i<len;i++)
         {
           console.log(attri[i].Type)
        }
    } ,[jsondata.ActionDisplayName]
)   
return <div>
  <nav class="navbar navbar-dark bg-dark">
  <strong class="text-light"> SOLARTIS <code>HACKATHON</code></strong>
  <strong class="text-light">@Developed by <code>Mariraja</code> &nbsp;</strong>
</nav>
<div class="container">
<br/>
<div class="card text-center">
<div class="container">
<h1><code>Dynamic web Page Builder</code></h1>
<hr/>
<br/>
{
  
  inputs.map((input) =>
  <div><input  type={input}/><br/><br/></div>
)
}
<br/>
{
  radio.map((input) =>
  <input type={input}/>
)
}
<br/>
{
  buttons.map((btn) =>
  <div><button class="btn btn-primary">{btn}</button><br/><br/></div>
)
}
</div>
</div>
</div>
</div>
}

