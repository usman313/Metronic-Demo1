// import { useEffect, useRef, useState } from "react"
import { KTIcon, toAbsoluteUrl } from "../../../../_metronic/helpers"
import Step1 from "./AuthStepper/steps/Step1"
import { StepperComponent } from "../../../../_metronic/assets/ts/components"
import AuthStepper from "./AuthStepper/Steppers"
import Step2 from "./AuthStepper/steps/Step2"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

type StepperData={
  id: number;
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
}

const Stepper_Data: Array<StepperData>=[
  {
    id: 0,
    stepNumber: 1,
    stepTitle: 'Account Type',
    stepDescription: `Select your account type`,
  },
  {
    id: 1,
    stepNumber: 2,
    stepTitle: 'Profile Information',
    stepDescription: `Setup your personal Info`,
  },
  {
    id: 2,
    stepNumber: 3,
    stepTitle: 'Verification',
    stepDescription: `Verify your account.`,
  },
  {
    id: 3,
    stepNumber: 4,
    stepTitle: 'Creator Info',
    stepDescription: `Setup creator details`,
  },
  {
    id: 4,
    stepNumber: 5,
    stepTitle: 'Completed',
    stepDescription: `Your account is created`,
  }
]
export function Registration() {
  const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [hasError, setHasError] = useState(false)
    const [currentStep, setCurrentStep] = useState(1);
    
    const prevStep = () => {
        if (!stepper.current) {
          return
        }
        stepper.current.goPrev()
      }
    
      const nextStep = () => {
        setHasError(false)
        if (!stepper.current) {
          return
        }
        
        stepper.current.goNext()
      }
      useEffect(()=>{
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
      },[])
    return (
        <div
            ref={stepperRef}
            className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
            id='kt_modal_create_app_stepper'
        >
            {/* begin::Aside*/}
            
            <div 
              className='d-flex flex-column justify-content-around align-items-center flex-row-auto w-xl-400px'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})`}}
              >
                <Link to='/' className='mb-12'>
                  <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-1.png')} className='h-75px' />
                </Link>
                {/* begin::Nav*/}
                <div className='stepper-nav ps-lg-10'>
                    {Stepper_Data.map(step => {
                      return (
                        <AuthStepper
                          key={step.id}
                          stepNumber={step.stepNumber}
                          stepTitle={step.stepTitle}
                          stepDescription={step.stepDescription}
                        />
                      );
                    })}
                    {/* end::Step 1*/}
                </div>
                {/* end::Nav*/}

                {/* begin::Footer */}
                  <div className='d-flex flex-center flex-wrap px-5'>
                    {/* begin::Links */}
                    <div className='d-flex fs-base'>
                      <a href='#' className='px-5 fw-semibold text-success' target='_blank'>
                        Terms
                      </a>

                      <a href='#' className='px-5 fw-semibold text-success' target='_blank'>
                        Plans
                      </a>

                      <a href='#' className='px-5 fw-semibold text-success' target='_blank'>
                        Contact Us
                      </a>
                    </div>
                    {/* end::Links */}
                  </div>
                  {/* end::Footer */}
            </div>
            {/* begin::Aside*/}

            {/*begin::Content */}
            <div className='flex-row-fluid py-lg-5 px-lg-15 my-auto'>
              <div className='current justify-content-center' data-kt-stepper-element='content'>
                <Step1/>
              </div>
              <div data-kt-stepper-element='content' className=" w-50 mx-auto">
                <Step2/>
              </div>
              <div data-kt-stepper-element='content' className=" w-50 mx-auto">
                <Step1/>
              </div>

                    {/*begin::Actions */}
                    {/* <div className="w-75 mt-3"> */}
                      <div className='d-flex flex-stack m-auto'>
                          <div className='me-2'>
                              <button
                                  type='button'
                                  className='btn btn-lg btn-light-primary me-3'
                                  data-kt-stepper-action='previous'
                                  onClick={prevStep}
                              >
                                  <KTIcon iconName='arrow-left' className='fs-3 me-1' /> Previous
                              </button>
                          </div>
                          <div>
                              <button
                                  type='button'
                                  className='btn btn-lg btn-primary'
                                  data-kt-stepper-action='submit'
                                  // onClick={submit}
                              >
                                  Submit <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                              </button>

                              <button
                                  type='button'
                                  className='btn btn-lg btn-primary'
                                  data-kt-stepper-action='next'
                                  onClick={nextStep}
                              >
                                  Next Step <KTIcon iconName='arrow-right' className='fs-3 ms-1 me-0' />
                              </button>
                          </div>
                      </div>
                    {/* </div> */}
                    {/*end::Actions */}
            </div>
            {/*end::Content */}
        </div>
    )
}
