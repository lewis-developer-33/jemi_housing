import { DataTableDemo,columns } from '@/components/user-table'
import {viewUsers} from '@/lib/actions'

const Page = async () => {

  const users = await viewUsers()
  console.log(users)
    return (
      <div>
        {/* <DataTableDemo data={data} columns={columns}/> */}
      </div>
    )
  }
  
  export default Page