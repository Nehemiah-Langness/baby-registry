import { PropsWithChildren, memo } from 'react';

export const DetailSection = memo(({ children }: PropsWithChildren<object>) => <div className='fs-16 text-center'>{children}</div>);
