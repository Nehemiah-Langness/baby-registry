import { memo, PropsWithChildren } from 'react';

export const PageHeader = memo(({ children }: PropsWithChildren) => <div className='display-5 mb-4'>{children}</div>);
