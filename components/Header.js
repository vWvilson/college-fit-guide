import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href="/texas_schools">
      <a style={linkStyle}>Texas Schools</a>
    </Link>

    <Link href ="/outside_texas">
    <a style={linkStyle}>Schools outside of Texas</a>
    </Link>

    <Link href ="/hbcu">
    <a style={linkStyle}>Historically Black Colleges & Universities</a>
    </Link>
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
      a{
       text-decoration:none;
       font-family: 'Ubuntu', sans-serif;
       color:white;
       

       
      }
      
       a {
         font-size:1em;

       }
       
       div {
         background:#004464;
         height:20vh;
       }

       
      `}</style>
    
  </div>
);


export default Header;