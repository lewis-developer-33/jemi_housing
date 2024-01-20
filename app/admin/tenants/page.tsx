import { DataTableDemo,columns } from '@/components/user-table'
import {useQuery} from '@tanstack/react-query'
import { url } from "@/lib/utils"

const Page = () => {
  
  const { isPending, error, data } = useQuery({
    queryKey: ['tenants'],
    queryFn: () =>
      fetch(`${url}api/admin/all-tenants`).then((res) =>res.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
    return (
      <div>
        <DataTableDemo data={data} columns={columns}/>
      </div>
    )
  }
  
  export default Page