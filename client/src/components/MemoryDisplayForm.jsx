import styles from './MemoryForm.module.css';

const MemoryDisplayForm = (props) => {

    let { userInput } = props;

    return(
<div className={styles.outer}>
    <form>
        <div className={styles.inner}>
            <label>Title:</label><br/>
            <input type="text" name="title" value={userInput.title} readOnly={true} /><br/>
            <label>Content Type:</label><br/>
            <div className={styles.buttonContainer}>
                <input type="radio" checked={userInput.contentType === 'text'} name="contentType" readOnly={true} /> Text
                <input type="radio" checked={userInput.contentType === 'link'} name="contentType" readOnly={true} /> Link
            </div>
            <br/>
            <label>Content:</label><br/>
            <input type="text" name="content" value={userInput.content} readOnly={true} /><br/>
            <label>Notes:</label><br/>
            <input type="text" name="notes" value={userInput.notes} readOnly={true} /><br/>
        </div>
    </form>
</div>
    )
}

export default MemoryDisplayForm;