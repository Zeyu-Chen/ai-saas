'use client';

import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John',
    avatar: '/testimonials/1.webp',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!",
  },
  {
    name: 'Julia',
    avatar: '/testimonials/2.webp',
    title: 'Designer',
    description: 'I use this daily for generating new photos!',
  },
  {
    name: 'Mark',
    avatar: '/testimonials/3.webp',
    title: 'Manager',
    description: 'This app has changed my life, cannot imagine working without it!',
  },
  {
    name: 'Amy',
    avatar: '/testimonials/4.webp',
    title: 'Student',
    description: 'The best in class, definitely worth the premium subscription!',
  },
];

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>Testimonials</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2 justify-between'>
                <div>
                  <p className='text-lg'>{testimonial.name}</p>
                  <p className='text-zinc-400 text-sm'>{testimonial.title}</p>
                </div>
                <div className='w-12 h-12 relative'>
                  <Image
                    src={testimonial.avatar}
                    alt='avatar'
                    sizes='64px'
                    fill
                    className='rounded-full'
                  />
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>{testimonial.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
