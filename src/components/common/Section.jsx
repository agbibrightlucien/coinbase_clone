export const Section = ({ id, children, gray }) => (
  <section id={id} className={`py-14 ${gray ? "bg-gray-50" : "bg-white"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
