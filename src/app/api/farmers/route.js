import { NextResponse } from 'next/server'

export async function GET () {
  const res =[
    {
      name:'pepito',
      uid:'asdada',
      image:'locotron',
      city:'medellin'
    }
  ]
  return NextResponse.json(res)
}