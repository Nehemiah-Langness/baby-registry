import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faBabyCarriage, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import "./carousel-slide.scss"
import { SubHeader } from '../components/sub-header';
import { DetailText } from '../components/detail-text';
import { DetailSection } from '../components/detail-section';
import { Header } from '../components/header';

export default function Profile() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>We are having a baby!</div>
                <Carousel />
            </div>
            <div className='container text-center py-5'>
                <Header>Here are the ways you can help</Header>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Watching our other kids</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>We don't have any family close by, so we need to rely heavily on friends to stay with our kids while we are in the hospital.</DetailText>
                        <DetailText>Before we can head to the hospital, we'll need someone to call who can get to our house quickly.</DetailText>
                        <DetailText>Once the baby is born, we hope to be back after 6 hours, but if there are complications, we'll need sitters for up two days.</DetailText>
                        <Link className='btn btn-outline-primary' to='/on-call'>
                            If you want to help with baby-sitting and want more details, click here
                        </Link>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Bringing meals</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>Once we have in infant at home, we would love to not worry about cooking for a few days.</DetailText>
                        <DetailText>We have no dietary restrictions or requirements, so anything you can cook we can eat.</DetailText>
                        <DetailText>If you don't enjoy cooking, but still would like to provide food, you can have food delivered.</DetailText>
                        <Link className='btn btn-outline-primary' to='/trains'>
                            If you want to sign up for a meal train and want more details, click here
                        </Link>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Helping with yard work</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>I'll be taking care of three kids and a recovering wife, so mowing the lawn might need to fall to the back-burner.</DetailText>
                        <DetailText>We have just under a quarter-acre lot that needs mowed once a week.</DetailText>
                        <DetailText>We have an self-propelled walk-behind mower, but if you have a riding lawnmower you can use, your legs will thank you.</DetailText>
                        <Link className='btn btn-outline-primary' to='/trains'>
                            If you want to sign up to help with yard work and want more details, click here
                        </Link>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Shop our baby registry</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>You can click on the link below to see our registry on Amazon.</DetailText>
                        <a className='btn btn-dark' href='https://www.amazon.com/baby-reg/brainna-langness-august-2024-saintcharles/10GFEYPIMMBCY' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='display-5' icon={faAmazon} />
                        </a>
                    </DetailSection>
                </div>
            </div>
        </>
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
        <div className='carousel-slide' style={{width: '80rem'}}>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{
                    width: '20rem',
                    height: '20rem',
                }}
            >
                <FontAwesomeIcon className='text-primary text-center' style={{ fontSize: '12rem' }} icon={faBabyCarriage} />
            </div>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{
                    width: '20rem',
                    height: '20rem',
                }}
            >
                <FontAwesomeIcon className='text-primary text-center' style={{ fontSize: '12rem' }} icon={faBaby} />
            </div>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{
                    width: '20rem',
                    height: '20rem',
                }}
            >
                <FontAwesomeIcon className='text-primary text-center' style={{ fontSize: '12rem' }} icon={faHandsHoldingChild} />
            </div>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{
                    width: '20rem',
                    height: '20rem',
                }}
            >
                <FontAwesomeIcon className='text-primary text-center' style={{ fontSize: '12rem' }} icon={faBabyCarriage} />
            </div>
        </div>
    </div>
));


