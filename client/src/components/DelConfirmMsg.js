import styles from './DelConfirmMsg.module.css';

const DelConfirmMsg = () => {

    return(
        <div className={styles.outer}>
            Are you sure you want to delete this memory?
            <b></b>
            Cannot be undone
        </div>
    )
}

export default DelConfirmMsg;