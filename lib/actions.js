'use server'
import { db } from '@/lib/drizzle'
import {users,units} from './drizzle'

export const viewUsers = async () => {
    try {
        const results= await db.select({
            id:users.id,
            username:users.username,
            email:users.email,
            role:users.role
        }).from(users)
        if (results.length < 1) console.log("No users")
        return results
    } catch (error) {
        console.log(error.message)
    }
}

export const createUser = () => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}

export const viewUnits = () => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}

export const createUnit = () => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}

export const editUnit = () => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUnit = () => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}