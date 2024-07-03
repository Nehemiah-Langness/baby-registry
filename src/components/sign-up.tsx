import { DetailText } from './detail-text';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const SignUp = memo(() => (<div className='d-flex flex-column align-items-center mb-2'>
    <DetailText>
        Contact me with your information, or fill out a quick sign-up sheet to get information when we are ready to start the meal train
    </DetailText>
    <div className='d-flex flex-column'>
        <a className='btn btn-outline-primary my-2' target='_blank' href='https://lordoflifelcms.360unite.com/households/963434060'>
            Contact Info for Lord of Life Members
        </a>
        <Link className='btn btn-outline-primary my-2' to='/sign-up'>
            Sign-up Online
        </Link>
    </div>
</div>));
