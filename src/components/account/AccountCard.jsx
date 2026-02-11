export default function AccountCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <h3 className="px-4 py-3 font-semibold  bg-black/90 text-white">
        {title}
      </h3>
      <div className="divide-y">{children}</div>
    </div>
  );
}
