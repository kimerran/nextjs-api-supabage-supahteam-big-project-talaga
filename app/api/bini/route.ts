import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const biniMembers = [
    {
        id: 1,
        name: "Maloi",
        role: "composer",
        color: "red",
        age: 19,
    },
    {
        id: 2,
        name: "Colete",
        role: "lead singer",
        color: "purple",
        age: 20,
    },
    {
        id: 3,
        name: "Mika",
        role: "rapper",
        color: "pink",
        age: 21,
    },
]

export type BiniMember = {
    id: number,
    name: string;
    age: number;
    role: string;
    color: string;
}

const supabaseUrl = 'https://rwhzvhloasuhtybamght.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3aHp2aGxvYXN1aHR5YmFtZ2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDI0NjEsImV4cCI6MjAzNzU3ODQ2MX0.a2U-lcEE0v554OWqWXd-POPwm9RVDKBFQ3UB1h9ECfw'
const supabase = createClient(supabaseUrl, supabaseKey)

export const GET = async (request: Request) => {
    const { data, error } = await supabase
        .from('bini_members')
        .select('*')
        .returns<BiniMember>()

    return NextResponse.json(
        data, { status: 200 })
}