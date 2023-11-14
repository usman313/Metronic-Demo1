type Props = {
  className: string
  title: string
  description: string
  color: string
  img?: string
  icon?: any
  iconBackgroud?: string
}

const CardsWidget20 = ({className, description, color, img, title, icon, iconBackgroud}: Props) => (
  <div
    className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
    style={{
      backgroundImage: `url('${img}')`,
      borderBottom: `4px solid ${color}`
    }}
  >
    <div className='card-header py-5'>
      <div className='card-title d-flex flex-column w-100'>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div><span className='fs-2hx fw-bold me-2 lh-1 ls-n2'>{title}</span></div>
          <div className="bg-light rounded" style={{backgroundColor: iconBackgroud}}>
            {icon}
          </div>
        </div>

        <span className='opacity-75 pt-1 fw-semibold fs-6'>{description}</span>
      </div>
    </div>
  </div>
)
export {CardsWidget20}
