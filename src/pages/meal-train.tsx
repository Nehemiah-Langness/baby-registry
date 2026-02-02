import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';
import { Calendar } from '../components/calendar/calendar';
import { mealTrain } from '../data/meal-train';
import { SignUp } from '../components/sign-up';
import { config } from '../config';
import { NavbarComponent } from '../components/navbar';
import { PageHeader } from '../components/page-header';

export default function MealTrain() {
    return (
        <>
            <div className='opacity-0'>
                <NavbarComponent />
            </div>
            <div className='d-flex flex-column align-items-center py-5'>
                <PageHeader>Meal Train</PageHeader>
                <DetailSection>
                    <DetailText>If you'd like to bring us meals, let us know and we'll add you to a list to contact once the baby is born.</DetailText>
                    <DetailText>We have no dietary restrictions and aren't picky, so whatever food you would like to bless us with, we will be grateful for.</DetailText>
                    <DetailText>Feel free to cook or order delivery - whatever your preference.</DetailText>
                </DetailSection>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <SignUp />
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <DetailSection>
                        <DetailText>
                            Below, you will find a calendar with any dates that have already been reserved and you can let us know any open dates that you would prefer.
                        </DetailText>
                        <div className='my-5'>
                            <Calendar startDate={config.calendar.startDate} endDate={config.calendar.endDate} dueDate={config.calendar.dueDate} volunteers={mealTrain} />
                        </div>
                    </DetailSection>
                </div>
            </div>
        </>
    );
}
