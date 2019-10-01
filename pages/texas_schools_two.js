import SchoolList from '../components/SchoolList'
import texas_school_two from '../data/texas_schools/texas_schools_two'
import Layout from '../components/MyLayout'
 



const TexasSchoolsTwo = ()=> {
  
    return(
        <div>
            <Layout>
            <h3>ACT Score of 20 - 21 && GPA 0f 2.0 - 3.0</h3>
                {texas_school_two.map(name => <SchoolList 
                
                name = {name.name}           
                />)}
            </Layout>

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
            font-family: 'Roboto Condensed', sans-serif;
            font-size:1.3em;
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
        </div>


    )







}


export default TexasSchoolsTwo