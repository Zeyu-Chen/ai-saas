'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { formSchema } from './constants';

import { cn } from '@/lib/utils';

import BotAvatar from '@/components/BotAvatar';
import Empty from '@/components/Empty';
import Heading from '@/components/Heading';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import UserAvatar from '@/components/UserAvatar';

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: 'user',
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      // todo: open pro modal
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title='Conversation'
        description='Our most advanced conversation model.'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid w-full grid-cols-12 gap-2 rounded-lg border p-4
                px-3 focus-within:shadow-sm md:px-6'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='flex items-center border-0
                     outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='How do I caculate the radius of a circle?'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <Button className='col-span-12 w-full lg:col-span-2' disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='mt-4 space-y-4'>
          {isLoading && (
            <div className='flex w-full items-center justify-center rounded-lg bg-muted p-8'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && <Empty label='No conversation started.' />}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex w-full items-start gap-x-8 rounded-lg p-8',
                  message.role === 'user' ? 'border border-black/10 bg-white' : 'bg-muted'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p className='text-sm'>{message.content?.toString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
