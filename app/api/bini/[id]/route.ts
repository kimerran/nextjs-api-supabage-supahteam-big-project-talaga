
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { BiniMember, biniMembers } from '../route';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rwhzvhloasuhtybamght.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3aHp2aGxvYXN1aHR5YmFtZ2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDI0NjEsImV4cCI6MjAzNzU3ODQ2MX0.a2U-lcEE0v554OWqWXd-POPwm9RVDKBFQ3UB1h9ECfw'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getMember(id: string, biniMembers: Array<any>) {

    const { data, error } = await supabase
    .from('bini_members')
    .select('*')
    .eq('id', Number(id))
    .returns<BiniMember[]>()
    return data?.shift()
    // return data ? data[0] : undefined
}

export const GET = async (request: NextApiRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const biniMember = await getMember(id, biniMembers)
    return NextResponse.json(biniMember || {}, { status: 200 })
}