import { DataTableDemo,columns } from '@/components/user-table'
import {viewUsers} from '@/lib/actions'

const Page = async () => {

  const users = await viewUsers()
  console.log(users)
    return (
      <div>
        <DataTableDemo data={users} columns={columns}/>
      </div>
    )
  }
  
  export default Page