export function PlaceholderLabel({ children = "Content needed" }: { children?: string }) {
  return <span className="placeholder-label">{children}</span>;
}
