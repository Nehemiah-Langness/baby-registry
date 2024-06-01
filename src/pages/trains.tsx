import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';
import { Calendar } from '../components/calendar/calendar';

const yardworkStartDate = new Date(2024, 7, 3);
const yardworkEndDate = new Date(2024, 7, 31);

export default function Trains() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Care trains</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5' id='meal-train'>
                        <SubHeader>Meal Train</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>More info coming</DetailText>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5' id='yard-work'>
                        <SubHeader>Yard Work Train</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>If you are interested in helping mow or any other yard work tasks, let us know and we'll add you to a list to contact once the baby is born.</DetailText>
                        <DetailText>Once the baby is here, I will open up the calendar and you'll be able to choose a day that will work for your schedule.</DetailText>
                        <DetailText>Feel free to reserve a few consecutive days if you want to account for bad weather.</DetailText>
                        <div className="mb-5">
                            <a className='btn btn-outline-primary' target='_blank' href="https://lordoflifelcms.360unite.com/households/963434060">Contact Info for Lord of Life Members</a>
                        </div>
                        <Calendar endDate={yardworkEndDate} startDate={yardworkStartDate} volunteers={[]} inactive />
                    </DetailSection>
                </div>
            </div>
        </>
    );
}
