import Header from './Header';



const Layout = props => (
    <div >
        <Header />
        {props.children}
        <style jsx>{`
        div {
          margin:20px;
         
          border: 1px solid #DDD;

        }
       
       
      `}</style>
</div>
);

export default Layout