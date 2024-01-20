import Header from '@/components/Header'
import {Card} from '@/components/Card'

// export const runtime = 'edge'
// export const dynamic = 'force-dynamic'

export default async function Home() {
  
  return (
    <main className="max-w-[390px]">
      <Header/>
      <div className='mt-5 flex justify-center w-full'>
        <Card/>
      </div>
    </main>
  )
}
