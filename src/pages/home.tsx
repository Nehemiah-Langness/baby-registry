import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faBabyCarriage, faCakeCandles, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import './carousel-slide.scss';
import { SubHeader } from '../components/sub-header';
import { DetailText } from '../components/detail-text';
import { DetailSection } from '../components/detail-section';
import { Header } from '../components/header';
import Diapers from '../assets/diapers.svg?react';
import { config } from '../config';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavbarComponent } from '../components/navbar';
import { PageHeader } from '../components/page-header';

export default function Home() {
    return (
        <div className='page-container'>
            <div className='d-flex flex-column full-page'>
                <div className='opacity-0'>
                    <NavbarComponent />
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <PageHeader>We are having a baby!</PageHeader>
                        <Carousel />
                    </div>
                </div>
                <div className='container text-center py-5'>
                    <SubHeader>
                        <FontAwesomeIcon icon={faChevronDown} bounce /> Here are the ways you can help <FontAwesomeIcon icon={faChevronDown} bounce />
                    </SubHeader>
                </div>
            </div>
            <div className='bg-white d-flex flex-column justify-content-center full-page'>
                <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                    <div className='container py-5'>
                        <div className='text-center pb-5'>
                            <Header>Bringing meals</Header>
                        </div>
                        <DetailSection>
                            <DetailText>We would greatly appreciate having meals provided during the first days of having our newborn at home.</DetailText>
                            <DetailText>We have no dietary restrictions or requirements, so anything you can cook we can eat.</DetailText>
                            <DetailText>If you don't enjoy cooking, but still would like to provide food, you can have food delivered or drop-off takeout.</DetailText>
                        </DetailSection>
                    </div>
                    <div className='d-flex justify-content-center pb-5'>
                        <Link className='btn btn-primary d-flex align-items-center gap-2' to='/meal-train'>
                            <FontAwesomeIcon icon={faChevronRight} />
                            View our meal train coverage
                        </Link>
                    </div>
                </div>

                <div className='container text-center py-5'>
                    <SubHeader>
                        <FontAwesomeIcon icon={faChevronDown} bounce /> Shop our registry <FontAwesomeIcon icon={faChevronDown} bounce />
                    </SubHeader>
                </div>
            </div>
            {/* <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Helping with yard work</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>I'll be taking care of three kids and a recovering wife, so mowing the lawn might need to fall to the back-burner.</DetailText>
                        <DetailText>We have just under a quarter-acre lot that needs mowed once a week.</DetailText>
                        <DetailText>We have an self-propelled walk-behind mower, but if you have a riding lawnmower you can use, your legs will thank you.</DetailText>
                        <Link className='btn btn-outline-primary' to='/yard-work'>
                            If you want to sign up to help with yard work and want more details, click here
                        </Link>
                    </DetailSection>
                </div>
            </div> */}
            <div className='bg-light d-flex flex-column justify-content-center full-page'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <Header>Shop our baby registry</Header>
                    </div>
                    <DetailSection>
                        <DetailText>Even though we already have had a few kids already, there are some items that are worn out and could stand to be replaced.</DetailText>
                        <DetailText>There is also always a need for on-going necessities such as diapers and wipes.</DetailText>
                    </DetailSection>
                    <br />

                    <DetailSection className='d-flex flex-column align-items-center gap-3'>
                        <SubHeader>You can click on the link below to see our registry on Amazon.</SubHeader>
                        <a className='btn btn-dark' href={config.registryUrl} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='display-5' icon={faAmazon} />
                        </a>
                    </DetailSection>
                    <br />
                    <DetailSection className='d-flex flex-column align-items-center gap-3'>
                        <SubHeader>Or send us diapers from the link below</SubHeader>
                        <a className='btn btn-dark' href={config.diaperUrl} target='_blank' rel='noreferrer'>
                            <Diapers height='3rem' />
                        </a>
                    </DetailSection>
                </div>
            </div>
        </div>
    );
}

const Carousel = memo(() => (
    <div
        className='border border-5 bg-white border-secondary rounded-circle overflow-hidden position-relative'
        style={{
            width: '20rem',
            height: '20rem',
        }}
    >
        <div className='carousel-slide' style={{ width: '80rem' }}>
            <Slide icon={faBabyCarriage} />
            <Slide icon={faBaby} />
            <Slide icon={faCakeCandles} />
            <Slide icon={faBabyCarriage} />
        </div>
    </div>
));

const Slide = memo(({ icon }: { icon: IconProp }) => (
    <div
        className='d-flex justify-content-center align-items-center'
        style={{
            width: '20rem',
            height: '20rem',
        }}
    >
        <FontAwesomeIcon className='text-primary text-center' style={{ fontSize: '12rem' }} icon={icon} />
    </div>
));
