import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navber from '../components/Navber';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../Page/Loading';

const HomeLayout = () => {
    const {state}=useNavigation()
    return (
        <div>
            <header>
     <Header></Header>
     
     <section className='w-11/12 mx-auto my-3'>
        <LatestNews></LatestNews>
     </section>
     <nav className='w-11/12 mx-auto my-3'>
        <Navber></Navber>
     </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 gap-5 grid grid-cols-12'>
             
               <aside className='col-span-3 sticky top-0 h-fit'> <LeftAside></LeftAside></aside>
                <section className='Main col-span-6'>
              {state=="loading"? <Loading/>: <Outlet></Outlet>} 
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'><RightAside></RightAside> </aside>
            </main>
        </div>
    );
};

export default HomeLayout;