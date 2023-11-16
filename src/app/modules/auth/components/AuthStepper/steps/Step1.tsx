import { useState } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'

export default function Step1() {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonNumber:any) => {
        setActiveButton(buttonNumber);
    };
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='auth-stepper'>
                <h2>
                    Choose an account type
                </h2>
                <p>
                    If you need more info, please visit our <a href='_#'>help page</a>.
                </p>

                <div className="d-flex step1-content">
                    <div
                        className={`d-flex flex-columns p-2 step1-button ${activeButton === 1 ? 'button-clicked' : ''}`}
                        onClick={() => handleClick(1)}
                    >
                        {/* Button number 1 */}
                        <img
                            src={toAbsoluteUrl(`/media/framework-logos/${activeButton===1 ? 'spring.png' : '/inactive/spring.png'}`)}
                            alt='avatar'
                        />
                        <div className='d-flex flex-column m-auto'>
                            <h3>
                                Creator
                            </h3>
                            <p>
                                Sign-up as a creator
                            </p>
                        </div>
                    </div>

                    <div
                        className={`d-flex flex-columns p-2 step1-button ${activeButton === 2 ? 'button-clicked' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        {/* Button number 2 */}
                        <img
                            src={toAbsoluteUrl(`/media/framework-logos/${activeButton===2 ? 'Angular.png' : '/inactive/Angular.png'}`)}
                            alt='avatar'
                        />
                        <div className='d-flex flex-column m-auto'>
                            <h3>
                                Agency
                            </h3>
                            <p>
                                Sign-up as an agency
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
