export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Don't forget ()=> otherwise React will immediately call the function while execution. We need to call this function only when the event happens. */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
