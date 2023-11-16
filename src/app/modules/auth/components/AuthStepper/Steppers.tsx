interface Props {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  stepLength: number;
}
export default function AuthStepper({
  stepNumber,
  stepTitle,
  stepDescription,
  stepLength,
}: Props) {
  console.log('stepper length: ', stepLength)
  return (
      <div className={`stepper-item ${stepNumber === 1 ? 'current' : ''}`} data-kt-stepper-element='nav'>
        {/* begin::Wrapper*/}
        <div className='stepper-wrapper'>
          {/* begin::Icon*/}
          <div className='stepper-icon w-40px h-40px'>
            <i className='stepper-check fas fa-check'></i>
            <span className='stepper-number'>{stepNumber}</span>
          </div>
          {/* end::Icon*/}

          {/* begin::Label*/}
          <div className='stepper-label'>
            <h3 className='stepper-title'>{stepTitle}</h3>

            <div className='stepper-desc'>{stepDescription}</div>
          </div>
          {/* end::Label*/}
        </div>
        {/* end::Wrapper*/}

        {/* begin::Line*/}
        {stepNumber === stepLength ? null : <div className='stepper-line h-40px'></div>}
        {/* end::Line*/}
      </div>
  )
}
