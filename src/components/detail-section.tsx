import { PropsWithChildren, memo } from 'react';

export const DetailSection = memo(({ children, className }: PropsWithChildren<{ className?: string }>) => <div className={`fs-16 text-center ${className ?? ''}`}>{children}</div>);
