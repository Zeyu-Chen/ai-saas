'use client';

import { MAX_FREE_COUNTS } from '@/constants';
import { useProModal } from '@/hooks/useProModal';
import { Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface FreeCounterProps {
  apiLimitCount: number;
}

const FreeCounter: React.FC<FreeCounterProps> = ({ apiLimitCount = 0 }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress value={(apiLimitCount / MAX_FREE_COUNTS) * 100} className='h-3' />
          </div>
          <Button className='w-full' variant='premium' onClick={proModal.onOpen}>
            Upgrade
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
