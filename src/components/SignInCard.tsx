"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DottedSeparator } from './dotted-separator'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import {
  Form,
  FormItem,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required").max(256),
})

export const SignInCard = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }

  return (
    <Card className=' w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-between text-center p-7'>
        <CardTitle className='text-2xl'>
          Welcome Back!
        </CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name='email' control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='email' placeholder='Enter email address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='password' control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='password' placeholder='Enter password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button className='w-full' disabled={false} size="lg">Login</Button>
          </form>
        </Form>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button variant="secondary" size="lg" className='w-full' disabled={false}>
          <FcGoogle className='mr-2 size-5' />
          Login with Google
        </Button>
        <Button variant="secondary" size="lg" className='w-full' disabled={false}>
          <FaGithub className='mr-2 size-5' />
          Login with GitHub
        </Button>
      </CardContent>
      <div className=''>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex items-center justify-center'>
        <p>
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className='text-blue-700'>
              &nbsp;Sign Up
            </span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}

