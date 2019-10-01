import Layout from '../components/MyLayout';
import '../data/hbcu'
import hbcu from '../data/hbcu';



export default function HbcuSchools() {
  return (
    <div>
    <Layout>
    <div className = "container">
  <h1>Historically Black Colleges & Universities</h1>
  <div>
    {hbcu.map(name =><p>{name.name}</p>)}
  </div>

   </div>
    </Layout>
    <style jsx>{`
     @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');

       
     h1{
      color:#0074C8;
      font-size:2.3em;
      font-family: 'Oswald', sans-serif;
    }
    p{
      font-family: 'Roboto Condensed', sans-serif;
      font-size:1.3em;
      padding:20px;
    }
          
    .container {
      padding:20px;
    }


       
      `}</style>
    </div>

    
      
  );
}