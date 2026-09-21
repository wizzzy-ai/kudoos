/* Placeholder-link toast — matches the original site's inline notice. */
export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: '26px',
        transform: 'translate(-50%, 0)',
        zIndex: 1200,
        maxWidth: 'calc(100vw - 32px)',
        padding: '13px 18px',
        borderRadius: '6px',
        background: 'rgba(14,16,22,.96)',
        border: '1px solid rgba(255,255,255,.22)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: '#EDEFF4',
        fontSize: '.82rem',
        fontWeight: 500,
        boxShadow: '0 20px 50px -20px #000',
        opacity: 1,
        transition: 'opacity .3s, transform .4s cubic-bezier(.16,1,.3,1)',
      }}
    >
      {message}
    </div>
  );
}
