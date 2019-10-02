import SchoolList from '../components/SchoolList'
import outside_four from '../data/outside_schools/outside_four'
import Layout from '../components/MyLayout'
 



const OutsideFour = ()=> {
  
    return(
        <div>
            <Layout>
            <div className = "container">
            <h1>ACT Score of 26 & Above & GPA 0f 3.5 - 4.0</h1>
            <div>

                {outside_four.map(name => <SchoolList 
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
        padding:10px;
      }
  
       
      `}</style>
        </div>


    )







}


export default OutsideFour