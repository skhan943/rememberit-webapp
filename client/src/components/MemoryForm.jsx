import styles from './MemoryForm.module.css';

const MemoryForm = (props) => {

    let { userInput, handleChange } = props;

    return(
        <div className={styles.outer}>
            <form>
                <div className={styles.inner}>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={userInput.title} onChange={handleChange} /><br/>
                    <label>Content Type:</label><br/>
                    <div className={styles.buttonContainer}>
                        <input type="radio" value="text" checked={userInput.contentType === 'text'} name="contentType" onChange={handleChange} /> Text
                        <input type="radio" value="link" checked={userInput.contentType === 'link'} name="contentType" onChange={handleChange} /> Link
                    </div>
                    <br/>
                    <label>Content:</label><br/>
                    <input type="text" name="content" value={userInput.content} onChange={handleChange} /><br/>
                    <label>Notes (optional):</label><br/>
                    <input type="text" name="notes" value={userInput.notes} onChange={handleChange} /><br/>
                </div>
            </form>
        </div>
    )
}

export default MemoryForm;