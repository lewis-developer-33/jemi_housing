import { db } from '@/lib/drizzle'
import {users,units} from './drizzle'


export const allUsers = async () => {
    const results= await db.select({
        id:users.id,
        username:users.username,
        email:users.email,
        role:users.role
    }).from(users)
    
    return results
}