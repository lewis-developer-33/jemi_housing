import { UserT, columns } from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios'
import { url } from "@/lib/utils"


export default async function UserTable() {
  
  const data:UserT[] = await axios.get(`${url}api/admin/all-tenants`)


  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
