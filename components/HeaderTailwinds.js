import '../styles/main.css'
import Link from 'next/link';



const HeaderTailwinds = () => (
<nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
<div className="text-sm lg:flex-grow">


<ul className="flex">
  <li className="mr-6">
      <Link href = "/">
       <a class="block mt-4 lg:inline-block lg:mt-0  text-lg text-blue-500 hover:text-blue-900 mr-4" >Home</a>
      </Link>
  </li>
  
  <li className="mr-6">
    <Link href = "texas_schools">
      <a className="block mt-4 lg:inline-block lg:mt-0 text-lg text-blue-500 hover:text-blue-900 mr-4" >Texas Schools</a>
    </Link>
  </li>
  <li className="mr-6">
      <Link href = "/outside_texas">
    <a className="block mt-4 lg:inline-block lg:mt-0 text-lg text-blue-500 hover:text-blue-900 mr-4" >Out of State Schools</a>
    </Link>
  </li>

  <li className="mr-6">
      <Link href = "/hbcu">
    <a className="block mt-4 lg:inline-block lg:mt-0  text-lg text-blue-500 hover:text-blue-900 mr-4" >HBCUs</a>
    </Link>
  </li>
</ul>
</div>
</div>
</nav>
)

export default HeaderTailwinds;