import { PropsWithChildren, memo } from 'react';

export const SubHeader = memo(({ children }: PropsWithChildren<object>) => <span className='d-block h4 mb-0 fw-light'>{children}</span>);
