import { PropsWithChildren, memo } from 'react';

export const DetailText = memo(({ children }: PropsWithChildren<object>) => <div className='mb-3'>{children}</div>);
