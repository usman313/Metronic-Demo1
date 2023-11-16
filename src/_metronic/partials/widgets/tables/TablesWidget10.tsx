/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

interface TableData {
  id: number;
  date: string;
  link: string;
  source: string;
  action: string;
}

const TABLE_DATA: Array<TableData> = [
  {
    id: 148525,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 458722,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 158476,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 687549,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 845248,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 258765,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 875492,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 587469,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 254817,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 125784,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 125755,
    date: '23 Sep 2023',
    link: 'https://google. com',
    source: 'Google',
    action: 'Delisted',
  },
]

const TablesWidget10: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='d-flex align-items-center position-relative me-4'>
            <KTIcon iconName='magnifier' className='fs-3 position-absolute ms-3' />
            <input
              type='text'
              id='kt_filter_search'
              className='form-control form-control-white form-control-sm w-150px ps-9'
              placeholder='Search'
            />
          </div>
        <div className='d-flex gap-3'>
          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Today</option>
              <option value='2'>Yesterday</option>
              <option value='3'>Tomorrow</option>
              <option value='4'>Weekly</option>
            </select>
          </div>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Status</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>ID</th>
                <th className='min-w-150px'>DATE REMOVED</th>
                <th className='min-w-140px'>LINK</th>
                <th className='min-w-120px'>SOURCE</th>
                <th className='min-w-100px'>ACTIONS</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {TABLE_DATA.map((item, index)=>{
                return(
                  <tr key={index}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                      </div>
                    </td>
                    <td>
                      <p>
                        {item.id}
                      </p>
                    </td>
                    <td>
                      <p>
                        {item.date}
                      </p>
                    </td>
                    <td>
                      <a href='#'>
                        {item.link}
                      </a>
                    </td>
                    <td>
                      <p>
                        {item.source}
                      </p>
                    </td>
                    <td>
                      <div 
                        className='px-2 rounded'
                        style={{
                            width: 'max-content', 
                            backgroundColor: item.action === 'Delisted' ? '#FFF5F8' : '#E8FFF3'
                          }}
                      >
                        <p style={{color: item.action === 'Delisted' ? '#D9214E' : '#50CD89'}}>
                          {item.action}
                        </p>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget10}
