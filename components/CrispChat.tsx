'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fcb65866-ec99-4290-8115-49d5ccea4b7e');
  }, []);

  return null;
};

export default CrispChat;
