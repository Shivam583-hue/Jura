"use client"

import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DottedSeparator } from './dotted-separator'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  Form,
  FormItem,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'


const formSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(8, "Required atleast 8 characters").max(256),
})

export const SignUpCard = () => {
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  return (
    <Card className=' w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-between text-center p-7'>
        <CardTitle className='text-2xl'>
          Sign Up
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className='text-blue-700'>Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className='text-blue-700'>Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name='name' control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='text' placeholder='Enter your name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
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
          Already have an account?
          <Link href="/sign-in">
            <span className='text-blue-700'>
              &nbsp;Log In
            </span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}

