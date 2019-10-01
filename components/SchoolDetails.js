




const SchoolDetails = (props) => {
    return(
        <div>
        <h1>{props.school}</h1>
        <h2>GENERAL INFORMATION</h2>
        <p>
            <span>SCHOOL NAME:</span>{props.school} <br></br>
            <span> WEBSITE:</span> {props.website}<br></br>
            <span>PUBLIC OR PRIVATE:</span>{props.public}<br></br>
            <span>SIZE OF SCHOOL:</span> {props.size} (total undergraduate size)<br></br> 
            <span>SETTING:</span>{props.setting}<br></br>
            <span>>LOCATION:</span>{props.location} 
        </p>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4123590902464!2d-96.8897749848145!3d32.91370188093109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27a2d5347751%3A0xa4e88076142acd66!2sDallas%20Christian%20College!5e0!3m2!1sen!2sus!4v1569860919808!5m2!1sen!2sus" 
       width="300" height="300" frameborder="0"  allowfullscreen=""></iframe></div>
       <h2>ACADEMIC INFORMATION</h2>
      
       <p>
           <span>LEVEL OF SELECTIVITY:</span> {props.selective} <br></br>
           <span>MEDIAN ACT SCORE:</span>{props.act}<br></br>
           <span>MEDIAN SAT CRITICAL READING SCORE:</span> {props.reading} <br></br>
           <span>MEDIAN SAT MATH SCORE:</span> {props.math} <br></br>
           <span>GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:</span>{props.rate}<br></br>
           <span>MOST POPULAR MAJORS: </span> {props.majors}
        </p>


        </div>


    )
}
export default SchoolDetails;