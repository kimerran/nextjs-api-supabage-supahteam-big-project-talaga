"use client"
import React, { useEffect, useState } from "react"

type BiniMember = {
    id: number,
    name: string;
    age: number;
    role: string;
    color: string;
}

export default function Listings() {
  // biniMembers from API?????
  // fetch?
  const [biniMembers, setBiniMembers ] = useState<BiniMember[]>()

  useEffect(() => {
    fetch("/api/bini")
      .then((response) => response.json())
      .then((data) => setBiniMembers(data))
  }, [])

  return (
    <div>
      Listings
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Color</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {biniMembers && biniMembers.map((member) => (
            <tr key={member.id}>
              <td>
                <a href={`/listings/${member.id}`}>{member.name}</a>
              </td>
              <td>{member.role}</td>
              <td>{member.color}</td>
              <td>{member.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
