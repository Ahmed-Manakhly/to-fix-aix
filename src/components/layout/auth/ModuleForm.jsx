import useInput from '../../../hooks/Use-Input';
import { useNavigation , Link} from 'react-router-dom';
import classes from './Forms.module.scss' ;
//-----------------------------------------
const ModuleForm = ( ) => {
    //------------------------------------ init validation
    const {hasError : moduleNameIsInvalid , valueIsValid : moduleName,
        valueChangeHandler : moduleNameChangeHandler , inputBlurHandler : moduleNameBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : modSettingIsInvalid , valueIsValid : modSetting,
            valueChangeHandler : modSettingChangeHandler , inputBlurHandler : modSettingBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const navigation = useNavigation() ;
    const isSubmitting = navigation.state === 'submitting' ;
    //------------------------------------------------------form valid
    let formIsValid = false
    if(moduleName &&  modSetting){
        formIsValid = true;
    }
    //-----------------
    return (
        < >
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="moduleName" >Module Name</label>
                <input type="text"  placeholder="Module Name" name="name" id='name'
                onChange={moduleNameChangeHandler} onBlur={moduleNameBlurHandler} />
                {moduleNameIsInvalid && <p className={classes['tst-error']}>Kindly set Your Module Name</p>}
            </div>
            {/* {===================================} */}
            <div className={classes.col}>
                <label htmlFor="settings" >Module Settings</label>
                <input type="settings"  placeholder="Module Settings" name="settings" id='settings'
                onChange={modSettingChangeHandler} onBlur={modSettingBlurHandler} />
                {modSettingIsInvalid && <p className={classes['tst-error']}>Make sure to set Your Module Settings</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.actions}>
                <button type="button"  > <Link to='?mode=signup'>Previous</Link> </button>
                <button type="submit"  disabled={!formIsValid} > { isSubmitting? 'Submitting...' : "Save ->"} </button>
            </div>
        </>
    )
}
export default ModuleForm
