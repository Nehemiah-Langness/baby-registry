import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';

export default function OnCall() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Care trains</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Meal Train</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>More info coming</DetailText>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Yard Work Train</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>More info coming</DetailText>
                    </DetailSection>
                </div>
            </div>
        </>
    );
}
