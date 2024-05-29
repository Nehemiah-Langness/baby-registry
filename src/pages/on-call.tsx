import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';

export default function OnCall() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>On Call and Baby-Sitting Schedule</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Volunteer Categories</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText><b>On Call Tier 1</b>: Someone who is willing to receive a call during set days and times and and arrive at our house in under 15 to 20 minutes and watch the kids for up to 2 hours</DetailText>
                        <DetailText><b>On Call Tier 2</b>: Someone who is willing to receive a call during set days and times and head to our house with an arrival window under 2 hours and watch the kids for up to 8 hours</DetailText>
                        <DetailText><b>Baby Sitter</b>: Someone who is willing to block out pre-scheduled days and times to come watch the kids in 8-hour blocks</DetailText>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>How this works</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>When it is time for us to head to the hospital, we'll call whoever is scheduled for being on-call as a tier 1 volunteer so we can get on the road as soon as possible.</DetailText>
                        <DetailText>Once we know a tier 1 volunteer is coming to watch the kids, we'll call the scheduled tier 2 volunteer so they can relieve the tier 1 volunteer when they are able.</DetailText>
                        <DetailText>The tier 2 volunteer will have access to the next scheduled sitter's time slot and contact information so they can make plans to hand-off baby-sitting duty.</DetailText>
                        <DetailText>Each subsequent baby sitter will follow the same process of contacting the next person in line and coordinating timing for switching places.</DetailText>
                    </DetailSection>
                </div>
            </div>

        </>
    );
}
