import { db } from '@/lib/drizzle'
import {UsersTable,UnitsTable} from './drizzle'


export const allUsers = async () => {
    const results= await db.select({
        id:UsersTable.id,
        username:UsersTable.username,
        email:UsersTable.email,
        role:UsersTable.role
    }).from(UnitsTable)
    
    return results
}