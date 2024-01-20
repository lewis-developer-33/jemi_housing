'use client'
import { UserT, columns } from "./columns"
import { useState,useEffect } from "react"
import { DataTable } from "./data-table"
import axios from 'axios'
import { url } from "@/lib/utils"


export default async function UserTable() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${url}api/admin/all-tenants`).then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  },[])

  console.log(data)

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
