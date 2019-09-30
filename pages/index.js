import Layout from '../components/MyLayout';
import Link from 'next/link';





export default function Blog() {
  return (
    <Layout>
      <div>
      <h1>COLLEGE FIT GUIDE</h1>
      <p>HOW TO USE THE GUIDE:   
We designed this guide to be useful to you, Breakthrough students and families! 
We’ve completed hundreds of hours of research to find out which colleges are best serving 
first-generation college students. We looked closely at graduation rates and average net price to 
determine which colleges are out-performing other colleges in graduating their students without
 placing a heavy financial burden on them, and we are including the colleges that we consider to 
 be “best in class” in these two categories. We know other factors are important in choosing a 
 college as well, so we also included other data points related to a university’s academic, 
 financial, and social profile. We know choosing a college is a very personal decision and you will 
 consider many different factors, and we hope this guide will provide useful information to help you in 
 this process! </p> 
<p className = "terms">Below are important terms you’ll find in the guide, along with their definitions:</p>   
<h2>LEVEL OF SELECTIVITY</h2> 
<p>This refers to a college’s admissions process. A school that is more or most 
selective has higher standards for admissions requirements and admits fewer students, whereas a school 
that is less or least selective offers admission to more students.</p>

<h2>GRADUATION RATES</h2> <p>This refers to the rate at which students at a particular institution receive bachelor’s 
degrees within six years or less. For this guide we intentionally included the graduation rates for students 
who receive Pell grants at that institution, since most Breakthrough students qualify for Pell grants.
</p>  
<h2>AVERAGE NET PRICE</h2> 
<p>The “average net price” of a college is defined as the school’s “sticker price” 
(published cost of attendance) minus the average dollar amount of grants and scholarships awarded to 
students ; in other words, the “average net price” allows us to see the “financial gap” (before loans) 
that our students will likely face if they are accepted to that college.  This tells us how much the 
“average” student will need to cover out of pocket, often assisted by borrowing student loans, in order 
to be able to attend that school.  </p>

<h2>PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS</h2> 
<p>This refers to programs that specifically support 
first-generation or other underrepresented students on that campus.  
</p>
<style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');
          
          
          h1{
          color:#0074C8;
          font-size:2.3em;
          font-family: 'Oswald', sans-serif;


        }
          



        h2{
          
          
        font-family: 'Roboto Condensed', sans-serif;
        color:#FA9D1C;
        font-size:2em;
      }


       p{
         font-size:16px;
         font-family: 'Lato', sans-serif;
         

       }
       .terms{
         font-size:1.3em;
       }

       div {
         margin:2em;
       }
       
      `}</style>
      </div>
    </Layout>
   
  );
}