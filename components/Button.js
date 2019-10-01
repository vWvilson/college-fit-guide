import Link from 'next/link';


const Button = (props) => {
    return(
        <div>
            <Link to href = {props.url}>
               <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {props.label}
                </button>
            </Link>
      </div>

)};

export default Button;






            

  
            
        

 
  
 