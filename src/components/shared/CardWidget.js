import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

export function CardWidget() {
    return (
        <Button className="ml-3"> <FaBeer></FaBeer> Drink</Button>
    )
}