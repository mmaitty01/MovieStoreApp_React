export const Button = ({ onClick, children }) => (
    <button onClick={onClick} className="p-2 mt-auto transition text-blue-400 bg-stone-500/30 rounded">
      {children}
    </button>
  );
  
  export const Input = ({ value, onChange, placeholder }) => (
    <input value={value} onChange={onChange} placeholder={placeholder} className="p-2 border rounded w-full" />
  );
  
  export const Card = ({ children }) => (
    <div className="border p-4 rounded shadow-md">{children}</div>
  );
  
  export const CardContent = ({ children }) => <div>{children}</div>;
  