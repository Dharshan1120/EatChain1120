export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
