import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Registry() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Baby Registry</div>
            </div>

            <div className='d-flex justify-content-center'>
                <a
                    className='btn btn-dark rounded-circle d-flex justify-content-center align-items-center'
                    style={{ width: '15rem', height: '15rem' }}
                    href='https://www.amazon.com/baby-reg/brainna-langness-august-2024-saintcharles/10GFEYPIMMBCY'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon style={{fontSize: '10rem'}} icon={faAmazon} />
                </a>
            </div>
        </>
    );
}
