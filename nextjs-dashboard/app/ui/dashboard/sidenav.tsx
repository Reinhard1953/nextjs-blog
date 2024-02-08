
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';


export default function SideNav() {
 
  
return (
    <div className="flex h-full flex-column px-3 py-4 md:px-6">
      <h1 className=" text-red-600 text-3xl flex h-full flex-column px-3 py-4 md:px-6" >Links</h1>
      <div className="text-blue-400 underline flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">    
        <NavLinks />
      <br></br>    
    
      <Link href="/">Startseite</Link>
      <Link href="/dashboard">Team Schaltzentrale</Link>
      <Link href="/dashboard/customers">Kundenliste</Link>
      <Link href="/dashboard/invoices">Rechnungen</Link>
   
    <br></br>
    <br></br>

    <Link
      className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      href="/">

      <div className="w-32 text-white md:w-40">
        <AcmeLogo />
      </div>
    </Link>

      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          
          <button className="flex h-[24px] pb-16 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            
            <Link
            className="hidden md:block text-red-600"
            href="/">
              Zur Startseite
            </Link>

          </button>
            
        
        </form>
      </div>

    </div>
  );
}
