import Image from 'next/image';
import React from 'react';

interface EmptyProps {
  label: string;
}

const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-20'>
      <div className='relative h-72 w-72'>
        <Image src='/empty.png' alt='empty' sizes='640px' fill priority />
      </div>
      <p className='text-center text-sm text-muted-foreground'>{label}</p>
    </div>
  );
};

export default Empty;
