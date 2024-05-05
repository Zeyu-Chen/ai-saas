'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
  // todo: check this if it's necessary
  // const [isMounted, setIsMounted] = useState<boolean>(false);
  //
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);
  //
  // if (!isMounted) {
  //   return null;
  // }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
