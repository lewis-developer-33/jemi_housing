import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  pgEnum,
  integer,
  PgArray
  
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const roleEnum = pgEnum('role',['ADMIN','USER'])
export const stateEnum = pgEnum('state',['VACANT','OCCUPIED','BOOKED'])
export const unitTypeEnum = pgEnum('type',['2 BEDROOM','1 BEDROOM','BEDSITTER','STUDIO'])

export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    role: roleEnum('role').default('USER'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    }
  }
)

export const UnitsTable = pgTable(
  'units',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    cover: text('cover').notNull(),
    price: text('price').notNull(),
    images: text('images').array(),
    state: stateEnum('state').default('VACANT'),
    type:unitTypeEnum('type').default('BEDSITTER'),
    tenantId: integer("tenantId").references(() => UsersTable.id),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (units) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(units.name),
    }
  }
)



export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>

export type Unit = InferSelectModel<typeof UnitsTable>
export type NewUnit = InferInsertModel<typeof UnitsTable>

// Connect to Vercel Postgres
export const db = drizzle(sql)
