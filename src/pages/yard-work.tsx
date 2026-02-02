import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';
import { Calendar } from '../components/calendar/calendar';
import { yardWork } from '../data/yard-work';
import { SignUp } from '../components/sign-up';
import { config } from '../config';

export default function Trains() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Yard Work</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5' id='yard-work'>
                        <SubHeader>Information & Sign-Up</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>
                            If you are interested in helping mow or any other yard work tasks, let us know and we'll add you to a list to contact once the baby is born.
                        </DetailText>
                        <DetailText>Once the baby is here, I will open up the calendar and you'll be able to choose a day that will work for your schedule.</DetailText>
                        <DetailText>Feel free to reserve a few consecutive days if you want to account for bad weather.</DetailText>

                        <div className='my-5'>
                            <Calendar dueDate={config.calendar.dueDate} endDate={config.calendar.endDate} startDate={config.calendar.startDate} volunteers={yardWork} />
                        </div>
                        <SignUp />
                    </DetailSection>
                </div>
            </div>
        </>
    );
}
