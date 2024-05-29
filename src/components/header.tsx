import { PropsWithChildren, memo } from 'react';

export const Header = memo(({ children }: PropsWithChildren<object>) => <span className='display-5'>{children}</span>);
