export default function PixelCard({ children, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
