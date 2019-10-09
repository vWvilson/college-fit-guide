import Layout from '../components/MyLayout';
import IndividualDetails from '../components/IndividualDetails'
import texas_schools_three from '../data/texas_schools/texas_schools_three'


const texas_schools_300 =() => {
    
    return(
        <Layout>
         {texas_schools_three.map(name => <IndividualDetails 
         key = {name.id}
         name = {name.name}
         url = {name.url}
         private = {name.public}
         size ={name.size}
         setting = {name.setting}
         location = {name.location}
         iframe = {null}
         selectivity = {name.selectivity}
         act = {name.act}
         reading = {name.reading}
         math = {name.math}
         majors = {name.majors}
         rate = {name.rate}
         price = {name.netPrice}
         demographic = {name.demographic}
         grants = {name.grants}
         lives = {name.livesOnCampus}
         programs = {name.programs}
         alumni  ={name.alumni}

         
         />)}   
        
        </Layout> 
    )
}

export default texas_schools_300