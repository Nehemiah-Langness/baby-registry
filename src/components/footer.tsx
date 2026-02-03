import { memo } from 'react';

export const Footer = memo(({ container, className }: { container?: boolean; className?: string }) => (
    <div className={`fs-10 bg-primary-subtle d-flex align-items-center justify-content-end p-2 ${container ? 'container' : ''} ${className ?? ''}`} style={{ minHeight: '2rem' }}>
        <span className='opacity-75' style={{ fontSize: 11 }}>
            &copy; {new Date().getFullYear()} - Nehemiah Langness
        </span>
    </div>
));
