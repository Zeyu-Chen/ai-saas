import Image from 'next/image';

const Loader = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-y-4'>
      <div className='relative h-10 w-10 animate-spin'>
        <Image src='/logo.png' alt='logo' sizes='640px' fill priority />
      </div>
      <p className='text-sm text-muted-foreground'>Genius is thinking...</p>
    </div>
  );
};

export default Loader;
