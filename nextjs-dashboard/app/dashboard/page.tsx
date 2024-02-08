{/*
export default function Page() {
    return (
    <p>Dashboard</p>
*/}


export default function NavLinks() {


  const names = ['Reinhard Krapp', 'Werner Lappessen', 'Bettina Kupp'];

  return (
    <div className="px-32 py-32">
    
      <h1 className="text-red-500 text-3xl">Next-Übung 1</h1>
      <br></br>
      <p>Speicher: C:\xampp\htdocs\next-crash-course\next-project10\nextjs-dashboard\app\dashboard/page.tsx </p>
      <br></br>
      <p>Browser: localhost:3000/dashboard (vorher im Terminal bei "next-crash-course/next-project10/nextjs-dashboard" "npm run dev" eingeben und Server starten)</p>
      <br></br>


      <h1 className="text-3xl text-red-600">Dashboard-Page</h1>
      <br></br>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>

);
}