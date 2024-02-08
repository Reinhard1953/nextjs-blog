import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {
  return (
  <>
    <h1 className="text-red-500 text-3xl px-32">Next-Übung 1</h1>
    <br></br>
    <p className="px-32" >Speicher: C:\xampp\htdocs\next-crash-course\next-project10\nextjs-dashboard\app\dashboard/invoices/page.tsx </p>
    <br></br>
    <p className="px-32"  >Browser: http://localhost:3000/dashboard/invoices (vorher im Terminal bei "next-crash-course/next-project10/nextjs-dashboard" "npm run dev" eingeben und Server starten)</p>
    <br></br>

    <div className="w-full">
      <div className="px-32 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="px-32 mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  </>
  );
}