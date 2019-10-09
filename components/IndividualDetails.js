
import React, {useState} from 'react'



const IndividualDetails =(props)=> {
    const  [showText,setShowText] = useState(false)
    return(
        <div>
            <h1 className="h1" onClick ={()=> setShowText(!showText)}>{props.name}</h1>

            {showText && <div className = "one" >
            <h2>GENERAL INFORMATION</h2>
            <p>
                <span>SCHOOL NAME:</span> {props.name} <br></br>
                <span> WEBSITE:</span> {props.url}<br></br>
                <span>PUBLIC OR PRIVATE:</span> {props.private}<br></br>
                <span>SIZE OF SCHOOL:</span> {props.size}(total undergraduate size)<br></br> 
                <span>SETTING:</span> {props.setting} <br></br>
                <span>LOCATION:</span> {props.location} 
            </p>
            <div><iframe src= {props.iframe} 
           width="300" height="300" frameborder="0"  allowfullscreen=""></iframe></div>
           <h2>ACADEMIC INFORMATION</h2>
          
           <p>
               <span>LEVEL OF SELECTIVITY:</span> {props.selectivity} <br></br>
               <span>MEDIAN ACT SCORE:</span> {props.act}<br></br>
               <span>MEDIAN SAT CRITICAL READING SCORE:</span> {props.reading} <br></br>
               <span>MEDIAN SAT MATH SCORE:</span> {props.math} <br></br>
               
               <span>GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:</span> {props.rate} <br></br>
               <span>MOST POPULAR MAJORS: </span> {props.majors}<br></br>
               <h2>FINANCIAL INFORMATION</h2>
               <span>AVERAGE NET PRICE FOR LOW INCOME STUDENTS:</span> {props.price}<br></br>
               <h2>SOCIAL INFORMATION</h2>
               <span>RACIAL DEMOGRAPHIC DATA:</span> {props.damographic}<br></br>
               <span>PERCENT OF STUDENTS AWARDED PELL GRANTS:</span> {props.grants}<br></br>
               <span>PERCENT OF STUDENTS WHO LIVE ON CAMPUS:</span> {props.lives}<br></br>
               <span>PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: </span>{props.programs}<br></br>
               <span>BREAKTHROUGH ALUMNI:</span> {props.alumni}
            </p>
       
            </div>}

        
        <style jsx>{`
                  @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');

    

        .h1 {
            color:#82B441;
            font-size:2em;
            font-family: 'Oswald', sans-serif;
            cursor: pointer;
        }
       
       
        .one {
            background-color:#E2E2E2;
            margin:20px;
        }
        h2{
            font-family: 'Roboto Condensed', sans-serif;
             color:#FA9D1C;
             font-size:1.5em;
             padding:10px;
            }
        span {
            color:#0074C8;
            font-family: 'Roboto Condensed', sans-serif;


        }
       
        p {
            font-family: 'Roboto Condensed', sans-serif;
            font-size:1.3em;
            padding:20px;

        }

        iframe{
            margin:0 20px;
            background: grey;
        }
        
     h3{
         font-size:1.3em;
         font-family: 'Oswald', sans-serif;
         color: #0074C8;
         margin:10px 20px;

     }

    
       
      `}</style>
        </div>
    )
}


export default IndividualDetails;