import Link from 'next/link';


const Button = (props) => {
    return(
        <div>
        <Link to href = {props.url}>
        <button>
            {props.label}
        </button>
        </Link>
        <style jsx>{`
        button {
            cursor: pointer;
            background: #FA9D1C;
            font-size: 16px;
            border-radius: 7px;
            color: white;
            border: 2px solid #FA9D1C;
            margin: 0 1em;
            padding: 0.25em .5em;
            transition: 0.5s all ease-out;
        }
      `}</style>
        </div>

            

          
            
        

 
  
 
    )};



  
    


export default Button;