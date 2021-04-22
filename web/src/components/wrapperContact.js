import React from 'react'

import styles from './wrapperContact.module.css'

const WrapperContact = ({children}) => {
  return <div className={styles.root}>{children}</div>
}

export default WrapperContact
