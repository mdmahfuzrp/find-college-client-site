import { Outlet } from 'react-router-dom';
import Nabvar from '../components/nabvar/Nabvar';
import Footer from '../components/footer/footer';

const Root = () => {
    return (
        <>
            <Nabvar></Nabvar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;