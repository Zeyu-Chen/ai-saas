import React from 'react';

import { getApiLimitCount } from '@/lib/api-limit';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({ children }) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className='relative h-full'>
      <div className='hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
