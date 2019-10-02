import Layout from '../components/MyLayout';
import '../data/hbcu'
import hbcu from '../data/hbcu';
import SchoolList from '../components/SchoolList';



export default function HbcuSchools() {
  return (
    <div>
      <Layout>
      <div className = "container">
      <h1>Historically Black Colleges & Universities</h1>
      <div>

    {hbcu.map(name => <SchoolList 
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

    
      
  );
}