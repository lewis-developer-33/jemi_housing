
import {MenuIcon} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { UserButton,auth } from "@clerk/nextjs";
import Image from 'next/image';
  

const Header = async () => {
    const {userId} = auth()

  return (
    <div className='px-1 py-1 shadow-sm flex items-center justify-between font-semibold'>
        <div className='w-[100px] h-[80px] relative'>
            <Image
            src='/logo.png'
            alt='logo'
            fill={true}
            />
        </div>
        <div className="flex items-center gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon className='hover:cursor-pointer'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div>
                {userId && (<UserButton afterSignOutUrl="/"/>)}
            </div>
        </div>
        
    </div>
  )
}

export default Header