import { FC } from 'react'
import classNames from 'classnames'

import styles from './Main.module.scss'

type IMain = FC<{ className?: string }> & {
  Title: ITitle
  Description: IDescription
  ActionArea: IActionArea
}
type ITitle = FC<{ className?: string }>
type IDescription = FC<{ className?: string }>
type IActionArea = FC<{ className?: string }>

const Main: IMain = ({ children, className }) => {
  return <main className={classNames(styles.main, className)}>{children}</main>
}

Main.Title = ({ children, className }) => (
  <h1 className={classNames(styles.title, className)}>{children}</h1>
)

Main.Description = ({ children, className }) => (
  <p {...{ className }}>{children}</p>
)

Main.ActionArea = ({ children, className }) => (
  <div className={classNames(styles.actionArea, className)}>{children}</div>
)

export default Main