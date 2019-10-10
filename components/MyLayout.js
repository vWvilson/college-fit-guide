import Header from './Header';
import HeaderTailwinds from './HeaderTailwinds'



const Layout = props => (
    <div >
        <HeaderTailwinds />
        {props.children}
        <style jsx>{`
        div {
          // margin:20px;
         
          border: 1px solid #DDD;

        }
       
       
      `}</style>
</div>
);

export default Layout