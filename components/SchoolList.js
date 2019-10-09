import Layout from '../components/MyLayout';



const SchoolList =(props)=> {
  return (
    <div>
    
    <div className = "container">
  
  <div>
    <p>{props.name}</p>
  </div>

   </div>
    
    <style jsx>{`
     @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');

       
     h1{
      color:#0074C8;
      font-size:2.3em;
      font-family: 'Oswald', sans-serif;
      margin: 10px;
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

export default SchoolList