import './ButterflyTitle.css';

import { ButterflySVG } from '../SVGs/Butterfly';

interface ButteyflyProps {
    color: string;
}

export const ButterflyTitle: React.FC<ButteyflyProps> = ({ color }) => {
    return (
        <div className='butterflyContainer'>
            <ButterflySVG color={color} />
        </div>
    )
}