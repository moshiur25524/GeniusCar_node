
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    // const [selectedDate, setSelectedDate] = useState(new Date)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/216/635/small/human-dental-tooth-template-banner-design-free-vector.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;