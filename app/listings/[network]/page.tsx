'use client';
import { useParams } from 'next/navigation'
import React from 'react'

export default function ListingNetworks() {

  const { network } = useParams()

  console.log('network', network)

  return (
    <div>
        <h1>ListingNetworks</h1>
        {network}
    </div>
  )
}
