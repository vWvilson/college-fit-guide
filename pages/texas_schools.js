import Layout from '../components/MyLayout';
import Link from 'next/link';
import Button from '../components/Button'
import Cards from '../components/Cards'



 
 
 

const TexasSchools =()=> {

  return (
    <div>
    <Layout>
      <div className = "container">
  <h1>Texas Schools</h1>

   <div>
     <p>ACT Score of 19 or Below && GPA 0f 2.0 - 2.5 </p> 
     <Button label = "SHOW" url = "/texas_schools_100"/> 
    </div>
        

     <div><p>ACT Score of 20 - 21  && GPA 0f 2.0 - 3.0 </p>
     <Button label = "SHOW" url = "/texas_schools_two"/>
     </div>
     <div><p>ACT Score of 22 - 25  && GPA 0f 2.5 - 3.5 </p>
     <Button label = "SHOW"/>
     </div>
     
     <div><p>ACT Score of 26 and Above  && GPA 0f 3.5 - 4.0 </p>
     <Button label = "SHOW"/>
     </div>
     
     </div>

    </Layout>

    <style jsx>{`
     @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');

       
     h1{
      color:#82B441;
      font-size:2.3em;
      font-family: 'Oswald', sans-serif;
    }
    p{
      font-family: 'Roboto Condensed', sans-serif;
      font-size:1.3em;
    }
          
    .container {
      padding:20px;
    }


       
      `}</style>
    </div>

  );
}
export default TexasSchools;