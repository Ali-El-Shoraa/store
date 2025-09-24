export default function GuaranteesGrid({ guarantees }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {guarantees.map((guarantee, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
        >
          <div className="text-blue-600 mb-4 p-2 bg-blue-50 rounded-full">
            {guarantee.icon}
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {guarantee.title}
          </h3>
          <p className="text-slate-600">{guarantee.description}</p>
        </div>
      ))}
    </section>
  );
}
