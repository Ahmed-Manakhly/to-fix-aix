import useInput from '../../../hooks/Use-Input';
import { useNavigation , Link} from 'react-router-dom';
import classes from './Forms.module.scss' ;
//-----------------------------------------
const RuleForm = ( ) => {
    //------------------------------------ init validation
    const {hasError : ruleIsInvalid , valueIsValid : rule,
        valueChangeHandler : ruleChangeHandler , inputBlurHandler : ruleBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : nameIsInvalid , valueIsValid : name,
            valueChangeHandler : nameChangeHandler , inputBlurHandler : nameBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : contactIsInvalid , valueIsValid : contact,
            valueChangeHandler : contactChangeHandler , inputBlurHandler : contactBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : commentIsInvalid , valueIsValid : comment,
            valueChangeHandler : commentChangeHandler , inputBlurHandler : commentBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const {hasError : tagsIsInvalid , valueIsValid : tags,
            valueChangeHandler : tagsChangeHandler , inputBlurHandler : tagsBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const {hasError : studyIsInvalid , valueIsValid : study,
            valueChangeHandler : studyChangeHandler , inputBlurHandler : studyBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const navigation = useNavigation() ;
    const isSubmitting = navigation.state === 'submitting' ;
    //------------------------------------------------------form valid
    let formIsValid = false
    if(rule &&  name && contact && comment && tags && study){
        formIsValid = true;
    }
    //-----------------
    return (
        < >
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="rule" >Rule</label>
                <input type="text"  placeholder="Rule" name="rule" id='rule'
                onChange={ruleChangeHandler} onBlur={ruleBlurHandler} />
                {ruleIsInvalid && <p className={classes['tst-error']}>Kindly set Your rule</p>}
            </div>
            {/* {===================================} */}
            <div className={classes.col}>
                <label htmlFor="name" >Rule Name</label>
                <input type="text"  placeholder="Rule Name" name="name" id='name'
                onChange={nameChangeHandler} onBlur={nameBlurHandler} />
                {nameIsInvalid && <p className={classes['tst-error']}>Make sure to set Your Rule Name</p>}
            </div>
            {/* {===================================} */}
            <div className={classes.col}>
                <label htmlFor="contact" >Contact Info</label>
                <input type="text"  placeholder="Contact Info" name="contact" id='contact'
                onChange={contactChangeHandler} onBlur={contactBlurHandler} />
                {contactIsInvalid && <p className={classes['tst-error']}>Make sure to set The Contact Info</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="comment" >Comment</label>
                <input type="text"  placeholder="Comment" name="comment" id='comment'
                onChange={commentChangeHandler} onBlur={commentBlurHandler} />
                {commentIsInvalid && <p className={classes['tst-error']}>Kindly leave a comment</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="tags" >Tags</label>
                <input type="text"  placeholder="Tags" name="tags" id='tags'
                onChange={tagsChangeHandler} onBlur={tagsBlurHandler} />
                {tagsIsInvalid && <p className={classes['tst-error']}>Kindly leave Tags</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="study_trigger" >Study Trigger Series</label>
                <input type="text"  placeholder="Study Trigger Series" name="study_trigger_series" id='study_trigger'
                onChange={studyChangeHandler} onBlur={studyBlurHandler} />
                {studyIsInvalid && <p className={classes['tst-error']}>Kindly leave the study trigger series</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.actions}>
                <button type="button"  > <Link to='?role=developer1'>Previous</Link> </button>
                <button type="submit"  disabled={!formIsValid} > { isSubmitting? 'Submitting...' : "Save ->"} </button>
            </div>
        </>
    )
}
export default RuleForm
