import Layout from '../components/MyLayout';

export default function OutsideSchools() {
  return (
    <Layout>
      <h1>Out of State Schools</h1>
     <p>ACT Score of 19 or Below && GPA 0f 2.0 - 2.5 <button>Show</button></p>
     <p>ACT Score of 20 - 21  && GPA 0f 2.0 - 3.0 <button>Show</button></p>
     <p>ACT Score of 22 - 25  && GPA 0f 2.5 - 3.5 <button>Show</button></p>
     <p>ACT Score of 26 and Above  && GPA 0f 3.5 - 4.0 <button>Show</button></p>

    </Layout>
      
  );
}