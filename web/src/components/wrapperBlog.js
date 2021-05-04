import React from 'react'

import styles from './wrapperBlog.module.css'

const WrapperBlog = ({children}) => {
  return <div className={styles.root}>{children}</div>
}

export default WrapperBlog
