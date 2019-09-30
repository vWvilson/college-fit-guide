import Layout from '../components/MyLayout';
import texas_schools from '../data/texas_schools'




import React, {useState} from 'react'

export default function TexasSchoolsOneHundred() {
    const[showText,setShowText] = useState(false);
    
    return(
        <Layout>
        <div>
        <h3>ACT Score of 19 or Below && GPA 0f 2.0 - 2.5</h3>
        <p className ="dcu" onClick = {() => setShowText(!showText)}>Dallas Christian College</p>

        {showText && <div className = "one" >
            <h1>Dallas Christian College</h1>
            <h2>GENERAL INFORMATION</h2>
            <p>
                <span>SCHOOL NAME:</span>  Dallas Christian College <br></br>
                <span> WEBSITE:</span> www.dallas.edu<br></br>
                <span>PUBLIC OR PRIVATE:</span> Private<br></br>
                <span>SIZE OF SCHOOL:</span> 248 (total undergraduate size)<br></br> 
                <span>SETTING:</span> Large Suburb LOCATION: Dallas, TX 
            </p>
           <h2>ACADEMIC INFORMATION</h2>
           <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4123590902464!2d-96.8897749848145!3d32.91370188093109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27a2d5347751%3A0xa4e88076142acd66!2sDallas%20Christian%20College!5e0!3m2!1sen!2sus!4v1569860919808!5m2!1sen!2sus" 
           width="300" height="300" frameborder="0"  allowfullscreen=""></iframe></div>
           <p>
               <span>LEVEL OF SELECTIVITY:</span> Least Selective <br></br>
               <span>MEDIAN ACT SCORE:</span>  19<br></br>
               <span>MEDIAN SAT CRITICAL READING SCORE:</span> 424 <br></br>
               <span>MEDIAN SAT MATH SCORE:</span> 424 <br></br>
               <span>GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:</span>   36% <br></br>
               <span>MOST POPULAR MAJORS: </span> Interdisiplinary studies -  Practical Ministries -  
               Worship Arts - Humanities - Business - Psychology - Teacher Education - Biblical Ministry 
            </p>
        </div>}


        <p>Prairie View A&M University</p>
        <p>Texas A&M International University</p>
        <p>University of the Incarnate Word</p>
        </div>
        <style jsx>{`
                  @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');

        h1 {
            font-family: 'Oswald', sans-serif;
            background-color:#0074C8;
            color:white;
            padding:10px;

        }
        .dcu{
            cursor: pointer;

        }
        .dcu : hover {
            background-color: yellow;

        }
        .one {
            background-color:#E2E2E2;
            margin:0 20px;
        }
        h2{
            font-family: 'Roboto Condensed', sans-serif;
             color:#FA9D1C;
             padding:10px;
            }
        span {
            color:#0074C8;
            font-family: 'Roboto Condensed', sans-serif;


        }
       
        p {
            font-family: 'Lato', sans-serif;
            padding:20px;

        }

        iframe{
            padding:0 20px;
        }
        
     h3{
         font-size:1.3em;
         font-family: 'Oswald', sans-serif;
         color: #0074C8;
         margin:10px 20px;

     }
       
      `}</style>
        </Layout>

        
        
   


    )
}