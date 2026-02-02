import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import Diapers from '../assets/diapers.svg?react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '../config';

export default function Registry() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Baby Registries</div>
            </div>

            <div className='d-flex justify-content-center gap-5'>
                <a
                    className='btn btn-dark rounded-circle d-flex flex-column justify-content-center align-items-center'
                    style={{ width: '15rem', height: '15rem' }}
                    href={config.registryUrl}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon style={{ fontSize: '10rem' }} icon={faAmazon} />
                    Registry
                </a>
                <a
                    className='btn btn-dark rounded-circle d-flex flex-column justify-content-center align-items-center'
                    style={{ width: '15rem', height: '15rem' }}
                    href='https://everylife.com/collections/diaper-collection/products/everylife-diapers?variant=50896563405080'
                    target={config.diaperUrl}
                    rel='noreferrer'
                >
                    <Diapers height={'10rem'}/>
                    Diapers
                </a>
            </div>
        </>
    );
}
