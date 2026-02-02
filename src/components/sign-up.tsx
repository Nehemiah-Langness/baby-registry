import { DetailText } from './detail-text';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const SignUp = memo(() => (
    <div className='d-flex flex-column align-items-center mb-2'>
        <DetailText>You can contact me directly via text or email or fill out a quick sign-up sheet with your contact preferences and I'll reach out to you.</DetailText>
        <div className='d-flex flex-column'>
            <Link className='btn btn-primary my-2' to='/sign-up'>
                Sign-up Online
            </Link>
        </div>
    </div>
));
