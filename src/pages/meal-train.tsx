import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';
import { Calendar } from '../components/calendar/calendar';
import { mealTrain } from '../data/meal-train';
import { SignUp } from '../components/sign-up';

const mealTrainStartDate = new Date(2024, 6, 7);
const mealTrainEndDate = new Date(2024, 8, 14);

export default function MealTrain() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Meal Train</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5' id='meal-train'>
                        <SubHeader>Information & Sign-Up</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>If you'd like to bring us meals, let us know and we'll add you to a list to contact once the baby is born.</DetailText>
                        <DetailText>
                            We should have family in town for a week or two after we have the baby, and you are welcome to bring food during that time, but we are starting the
                            sign-up for once we are without the extra help.
                        </DetailText>
                        <DetailText>We have no dietary restrictions and aren't picky, so whatever food you would like to bless us with, we will be grateful for.</DetailText>
                        <DetailText>Feel free to cook or order delivery - whatever your preference.</DetailText>
                        <div className='my-5'>
                            <Calendar endDate={mealTrainEndDate} startDate={mealTrainStartDate} volunteers={mealTrain} />
                        </div>
                        <SignUp />
                    </DetailSection>
                </div>
            </div>
        </>
    );
}
