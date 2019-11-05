import outside_four from '../data/outside_schools/outside_four'
import Layout from '../components/MyLayout'
import IndividualDetails from '../components/IndividualDetails'



const OutsideFour = ()=> {
  
    return(
      <Layout>
      {outside_four.map(name => <IndividualDetails 
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


export default OutsideFour