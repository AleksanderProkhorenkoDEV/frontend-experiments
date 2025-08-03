import { getEmployers } from "@/actions/employes";

const EmployerSlot = async () => {
  const employers = await getEmployers();
  return (
    <section className="flex-1 bg-[#63C7B2] rounded-md shadow-md h-full p-4">
      <h1 className="text-center font-bold uppercase">Employeers section</h1>
      <ol className="list-decimal list-inside">
        {employers.map((employers) => {
          return <li key={employers.id}>{employers.username}</li>;
        })}
      </ol>
    </section>
  );
};

export default EmployerSlot;
