import { UserT, columns } from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios'


export default async function DemoPage() {
  const data:UserT[] = await axios.get('/api/admin/all-tenants')

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
