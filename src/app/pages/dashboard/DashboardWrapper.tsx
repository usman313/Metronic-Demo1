/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import { BiAlarmAdd, BiAlarmExclamation, BiAtom, BiBell  } from "react-icons/bi";
import {
  TablesWidget10,
  CardsWidget20,
} from '../../../_metronic/partials/widgets'

interface TopCards {
  id?: number;
  title: string;
  description: string;
  color: string;
  icon?: any;
  iconBackgroud?: string
}
const TOP_CARD_DATA: Array<TopCards>=[
  {
    id: 1,
    title: '252',
    description: 'Links Scraped',
    color: '#F1416C',
    icon: <BiAlarmAdd size={24} color='#F1416C'/>,
    iconBackgroud:'#D8D8E5'
  },
  {
    id: 2,
    title: '252',
    description: 'Links Checked',
    color: '#F6C000',
    icon: <BiAlarmExclamation size={24} color='#F6C000'/>,
    iconBackgroud:'#D8D8E5'
  },
  {
    id: 3,
    title: '252',
    description: 'Link Violations',
    color: '#5014D0',
    icon: <BiAtom size={24} color='#5014D0'/>,
    iconBackgroud:'#F8F5FF'
  },
  {
    id: 4,
    title: '252',
    description: 'Links Removed',
    color: '#F1416C',
    icon: <BiBell size={24} color='#F1416C'/>,
    iconBackgroud: '#F8F5FF'
  }
]
const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row'>
      {/* begin::Col */}
        {TOP_CARD_DATA.map(card=>{
          return(
            <div className='col-lg-3' key={card.id}>
              <CardsWidget20
                icon={card.icon}
                title={card.title}
                className='mb-5 mb-xl-10'
                description={card.description}
                color={card.color}
                />
            </div>
          )
        })}
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-cards-widget18 cssclassName="h-xl-100" image="./assets/media/stock/600x600/img-65.jpg"></app-cards-widget18> */}
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
    </div>
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.HOME'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
