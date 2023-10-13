export function ToggleButton({ children, onClick }) {
  return <button onClick={onClick}>
    {children}
  </button>
}