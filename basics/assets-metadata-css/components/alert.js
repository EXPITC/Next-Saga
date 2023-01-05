import styles from './alert.module.css';
import clsx from 'clsx';

export function Alert({ children, type = 'error' }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
