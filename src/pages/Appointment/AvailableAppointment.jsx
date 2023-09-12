import { format } from "date-fns";


const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <h1 className="text-center font-bold text-xl text-secondary my-6">Available Appointment on {format(selectedDate, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment;