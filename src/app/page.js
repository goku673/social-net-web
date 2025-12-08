'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Input from './components/common/input';
import Register from './components/register';
import Login from './components/login';
import NavBar from './components/navBar';
import Sidebar from './components/sidebar';
import RightSidebar from './components/rightBar';
import SocialNetwork from './components/screens/socialNetwork';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const navigate = useRouter();
  useEffect(() => {
    //const user = localStorage.getItem('user');
    //user ? navigate.push("/socialNet") : ""
  }, [navigate]);

  return (
    <div className="pt-56">
      <Login />
    </div>
  );
};
export default Home;
