import OfferTimer from './OfferTimer';

export default function ShowTimer() {

    const {hours, minutes, seconds} = OfferTimer();

    return (
        <>
            <p className="card-clock"><span className="off-time">{hours}:{minutes}:{seconds}</span><i className="far fa-clock"></i></p>
        </>
    )
}
