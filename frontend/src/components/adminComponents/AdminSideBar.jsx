import React from 'react';
import { Sidebar } from 'flowbite-react';
import { FaHome, FaSearch, FaEnvelope, FaBell, FaEdit, FaTrophy, FaUser, FaEllipsisH,FaChartBar  } from 'react-icons/fa';
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';

const SidebarComponent = ({ items }) => {
  return (
    <div className="bg-gray-900 h-screen w-64 fixed top-0 left-0 z-10 flex flex-col justify-between">
      <div className="justify-center items-center flex">
        <img src={Logo} alt="Your Logo" className="h-32 w-auto" />
      </div>
      <Sidebar aria-label="Sidebar">
        <Sidebar.Items>
          {items.map((item, index) => (
            <Sidebar.ItemGroup key={index} className='mt-0'> {/* Added key to Sidebar.ItemGroup */}
              <Link to={item.href}>
                <Sidebar.Item href={item.href} icon={item.icon} className="text-white px-9 py-4 flex items-center justify-start hover:bg-sky-950">
                  {item.label}
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          ))}
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

const SideBar = () => {
  const sidebarItems = [
    { href: '/admin/Home', icon: FaHome, label: 'Overview' },
    { href: '/admin/user-management', icon: FaUser, label: 'User Management' },
    { href: '/post-management', icon: FaEnvelope, label: 'Post Management' },
    { href: '/contest-management', icon: FaTrophy, label: 'Contest Management' },
    { href: '/reports', icon: FaChartBar, label: 'Reports' },
    { href: '#', icon: FaEllipsisH, label: 'More' },
  ];

  return <SidebarComponent items={sidebarItems} />;
};

export default SideBar;
