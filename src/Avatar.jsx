

import { getImageUrl } from './utils.jsx';


function Clock({ color, time }) {
    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    );
}

export default function Avatar({ person, size }) {
    return (
        <img
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />

    );

}


