import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
export default function App()
{
  const [buttons, setbuttons] = useState([])
  const [inputs, setinputs] = useState([])
  const [inputname, setinputname] = useState([])
  const [inputsize, setinputsize] = useState([])
  const [dropdown,setdropdown]=useState()
  const [dropdisval,Dropdisval]=useState([])
  const [dropval,Dropval]=useState([])
  const [dropname,Dropname]=useState("")
  const [radio, setradio] = useState('')
  const [isradio,Isradio] = useState(false)
  const [optdisval,Optdisval]=useState([])
  const [optval,Optval]=useState([])
  const [check,Check]=useState()
  const [checkdisval,Checkdisval]=useState([])
  const [checkval,Checkval]=useState([])
  const [jsondata,Jsondata]=useState([])
  const [attri,Attri]=useState([])
  const[ips,Ips]=useState([])

useEffect(
  ()=>{
 var  data = {
  'ActionDisplayName' : 'Submit',
  'Attributes' : [ 
    {
'Type' : 'Checkbox',
'Name' :'Course',
'CheckValues' : [{
  'DisplayValue' : 'B.E',
  'Value' : 'b.e'
},
{
'DisplayValue' : 'B.Sc',
'Value' : 'b.sc'
},
],
    },

    {
      'DropdownValues' : [{
       'DisplayValue' : 'Guest',
       'Value' : 'gust'
    },
  {
    'DisplayValue' : 'Admin',
    'Value' : 'admin'
  },
],
'Name' : 'UserType',
'Type' : 'Dropdown'
},
    
    {
        'Name' : 'Username',
        'Type' : 'TextBox',
        'Size' : 10,
      },
      {
        'Name' : 'Password',
        'Type' : 'SeceretTextBox',
        'Size' : 10,
      },    
     
      
      {
        'Name' : "Gender",
        "Options" : [
          {
            'DisplayValue' : "Male",
            "Value" : "Male"
        },
        {
          'DisplayValue' : "Female",
          "Value" : "Female"
      }
        ],
        'Type' : "RadioButton",
      },  
      
      {
        'Name' : 'Address',
        'Type' : 'TextBox',
        'Size' : 10,
      },
     
  ]
}
/*Drop json
  {
      'DropdownValues' : [{
       'DisplayValue' : 'Guest',
       'Value' : 'gust'
    },
  {
    'DisplayValue' : 'Admin',
    'Value' : 'admin'
  },
],
'Name' : 'UserType',
'Type' : 'Dropdown'
},*/
let ipar=[]
let iparname=[]
let ipsize=[]
let displayvalue=[]
let dropvalue=[]
let optdisplay=[]
let optvalue=[]
      setbuttons([data.ActionDisplayName])  
      var type=data.Attributes;
      console.log(data)
      console.log(data.Attributes)
         console.log(data.Attributes.length)
         for(var i=0;i<data.Attributes.length;i++)
         {
           console.log(data.Attributes[i].Type)
           if(data.Attributes[i].Type=='Dropdown')
           {
           Checkval(slct(1,data.Attributes[i]))
           Dropname(data.Attributes[i].Name)
            for(var j=0;j<data.Attributes[i].DropdownValues.length;j++)
            {
              //dval
              displayvalue.push(data.Attributes[i].DropdownValues[j].DisplayValue)
              console.log(data.Attributes[i].DropdownValues[j].DisplayValue)
              dropvalue.push(data.Attributes[i].DropdownValues[j].Value)
              console.log(data.Attributes[i].DropdownValues[j].Value)
           }
           }
          
           if(data.Attributes[i].Type=="TextBox")
           {
           ipar.push("text")
           iparname.push(data.Attributes[i].Name)
           ipsize.push(data.Attributes[i].Size)
          }
         if(data.Attributes[i].Type=="SeceretTextBox")
          {
            ipar.push("password")
            iparname.push(data.Attributes[i].Name)
            ipsize.push(data.Attributes[i].Size)
          }
        //
          var str = data.Attributes[i].Type; 
          var res = str.toLowerCase();
          var n = res.search("mail");
          if((n!=-1))
          {
            ipar.push("email")
            iparname.push(data.Attributes[i].Name)
            ipsize.push(data.Attributes[i].Size)
          }
          var n = res.search("date");
          if((n!=-1))
          {
            ipar.push("date")
            iparname.push(data.Attributes[i].Name)
            ipsize.push(data.Attributes[i].Size)
          }
         
          var n = res.search("month");
          if((n!=-1))
          {
            ipar.push("month")
            iparname.push(data.Attributes[i].Name)
            ipsize.push(data.Attributes[i].Size)
          }
          var n = res.search("time");
          if((n!=-1))
          {
            ipar.push("time")
            iparname.push(data.Attributes[i].Name)
            ipsize.push(data.Attributes[i].Size)
          }
          var n = res.search("check");
          if((n!=-1))
          {
          Check(ch(1,data.Attributes[i]))
          console.log("checkval      ",data.Attributes[i].Name)
          }
         /* var n = res.search("drop");
          if((r!=-1))
          {
            setdropdown(true)
            Dropname(data.Attributes[i].Name)
            console.log(dropname)
            for(var j=0;j<data.Attributes[i].DropdownValues.length;j++)
            {
              //dval
              displayvalue.push(data.Attributes[i].DropdownValues[j].DisplayValue)
              console.log(data.Attributes[i].DropdownValues[j].DisplayValue)
              dropvalue.push(data.Attributes[i].DropdownValues[j].Value)
              console.log(data.Attributes[i].DropdownValues[j].Value)
            }
          }
          else
          {
            setdropdown(false)
          }
         
         if(data.Attributes[i].Type=='SeceretTextBox')
           {
           setinputs([...inputs,'password'])
          }
          Text box Field over*/
          //Drop Down Starting

         if(data.Attributes[i].Type=="RadioButton")
         { Isradio(true)
             setradio(data.Attributes[i].Name)
          for(let j=0;j<data.Attributes[i].Options.length;j++)
          {
              optdisplay.push(data.Attributes[i].Options[j].DisplayValue)   
              optvalue.push(data.Attributes[i].Options[j].Value)   
          }
         }
          //Drop down ending
          //Radio Starting

          //Radio Ending
          //Value Setting Functions Starts 
         setinputs(ipar)
         setinputname(iparname)
         setinputsize(ipsize)
         //Value Setting Function Dropdown
         Dropdisval(displayvalue)
         Dropval(dropvalue)
         //Value Setting Function Radio
         Optdisval(optdisplay)
         Optval(optvalue)
         //Value Setting Function Check Box
         }
    } ,[jsondata.ActionDisplayName]
)   

function ch(a,val)
{
if(a)
{
  var chd=[]
  var chv=[]
  val.CheckValues.map(value=>
    {
      chd.push(value.DisplayValue)
      chv.push(value.Value)
    })
  console.log(val)
  return <div>
    {val.Name}
    {
      chd.map((dis,index)=>{
        return <div>
        <input type="checkbox" value={chv[index]}></input>&nbsp;
      <label>{dis}</label>
        </div>
      })
    }
    <br/>
  </div>
}
}


function slct(a,dname)
{
if(a==1)
{ 
  var ar=[]
  var arv=[]
dname.DropdownValues.map(val=>{
    ar.push(val.DisplayValue)
    arv.push(val.Value)
  })  
 return (<div>
 {
   dname.Name
 }&nbsp;
   <select>
   {
     ar.map((val,index)=>{
      return <option value={arv[index]}>{val}</option>
     })
   }
   </select>
  </div>)
}
else{
  alert(a)
  return ""
}
}

function rdio()
{
  if(isradio)
  {
  return <div>
  <label>{radio}</label>
    {
      optdisval.map((res,index)=>{
    return <div key={index}>
      <input type="radio" value={optval[index]} name={radio}/> <label>{res}</label>
    </div>
   })
    }
  </div>
  }
}
console.log(checkval)
return <div>
  <nav class="navbar navbar-dark bg-dark">
  <strong class="text-light"> SOLARTIS <code>HACKATHON</code></strong>
  <strong class="text-light">@Developed by <code>Mariraja</code> &nbsp;</strong>
</nav>
<div class="container">
<br/>
<div class="card">
<div class="container">
<div  class="text-center"><h1 ><code>Dynamic web Page Builder</code></h1></div>
<hr/>
<br/>
{
  inputs.map((input,index) =>
  <div key={index}>
    <lable>  {inputname[index]}</lable>&nbsp;
    <input type={input}/><br/><br/></div>
)
}

{checkval}
<br/>
{
  check
}
{
 rdio()
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