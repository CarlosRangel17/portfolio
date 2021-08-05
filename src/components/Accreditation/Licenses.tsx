import React, { FunctionComponent, useState } from 'react'

import styles from './accreditation.module.scss'
import { accreditations } from '~consts/accreditation'
import { License } from '~interfaces/accreditation'
import Collapse from '~components/Collapse'
import Microsoft from '~svg/Microsoft'
import IBM from '~svg/IBM'
import EDX from '~svg/EDX'

const Licenses: FunctionComponent = () => {
  const [seeAll, setSeeAll] = useState(false)

  const onSeeAll = () => {
    setSeeAll(!seeAll)
  }
  const { licenses: licensesData, otherLicenses: otherLicensesData } = accreditations

  const licenseLogos = {
    Microsoft: <Microsoft className={styles.logo} />,
    IBM: <IBM className={styles.logo} />,
    edX: <EDX className={styles.logo} />
  }

  const getLicenseItems = (licenses: License[]) => {
    return licenses.map((license: License) => {
      const { issueDate, issuer, name, url } = license
      return (
        <div key={name} className={styles.item}>
          {licenseLogos[issuer]}
          <div key={name} className={styles.detail}>
            <p className={styles.name}>{name}</p>
            <p>{issuer}</p>
            <p>Issued: {issueDate}</p>
            <a className={styles.credential} href={url} target="_blank">
              <strong>See Credential</strong>
            </a>
          </div>
        </div>
      )
    })
  }

  const licenses = getLicenseItems(licensesData)
  const otherLicenses = getLicenseItems(otherLicensesData)

  return (
    licenses?.length > 0 && (
      <div className={styles.panel}>
        <h4 className={styles.title}>Licenses</h4>
        {licenses}
        <Collapse className={styles.collapse} isOpen={seeAll}>
          {otherLicenses}
        </Collapse>
        <button className={styles['see-all']} type="button" onClick={onSeeAll}>
          {seeAll ? 'See Less' : 'See All'}
        </button>
      </div>
    )
  )
}

export default Licenses
