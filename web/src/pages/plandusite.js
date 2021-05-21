import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import styles from '../pages/plandusite.module.css'
import Wrapper from '../components/wrapper'
import {Link} from 'gatsby'

import {isBrowser} from '../lib/utils'

const MentionsLegalesPage = props => {
  if (!isBrowser) {
    return
  }

  return (
    <Layout>
      <Container>
        <div className={styles.titleContain}>
          <h1 className={styles.title}>Plan du site</h1>
        </div>
        <Wrapper>
          <div className={styles.plan}>
            <ul>
              <li>
                <Link to='/' > Accueil </Link>
              </li>
              <li>
                <Link to='/prestations-tarifs' > Prestations & Traifs </Link>
              </li>
              <li>
                <Link to='/blog' > Blog </Link>
              </li>
              <li>
                <Link to='/partenaires' > Parteneaires </Link>
              </li>
              <li>
                <Link to='/contact' > Contact </Link>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default MentionsLegalesPage
