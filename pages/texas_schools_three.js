import SchoolList from '../components/SchoolList'
import texas_schools_three from '../data/texas_schools/texas_schools_three'
import Layout from '../components/MyLayout'
 



const TexasSchoolsThree = ()=> {
  
    return(
        <div>
            <Layout>
            <div className = "container">
            <h1>ACT Score of 22 - 25 & GPA 0f 2.5 - 3.5</h1>
            <div>

                {texas_schools_three.map(name => <SchoolList 
                
                name = {name.name}           
                />)}
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


    )







}


export default TexasSchoolsThree