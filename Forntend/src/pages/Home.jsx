import react from 'react';
import { Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import footer from '../Components/Footer'

function Index(){
    return(
     <>
     <Navbar/>
     
      <main>
        <section>
        
            
            <Outlet/>
          
        </section>
      </main>
      <footer/>

    
     </>
    )
}

export default Index;