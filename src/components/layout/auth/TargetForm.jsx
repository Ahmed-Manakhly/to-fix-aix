import useInput from '../../../hooks/Use-Input';
import { useNavigation , Link} from 'react-router-dom';
import classes from './Forms.module.scss' ;
//-----------------------------------------
const TargetForm = ( ) => {
    //------------------------------------ init validation
    const {hasError : ipIsInvalid , valueIsValid : ip,
        valueChangeHandler : ipChangeHandler , inputBlurHandler : ipBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : portIsInvalid , valueIsValid : port,
            valueChangeHandler : portChangeHandler , inputBlurHandler : portBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : typeIsInvalid , valueIsValid : type,
            valueChangeHandler : typeChangeHandler , inputBlurHandler : typeBlurHandler } = useInput(value => value.trim() !=='') ;
    //------------------------
    const {hasError : aetIsInvalid , valueIsValid : aet,
            valueChangeHandler : aetChangeHandler , inputBlurHandler : aetBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const navigation = useNavigation() ;
    const isSubmitting = navigation.state === 'submitting' ;
    //------------------------------------------------------form valid
    let formIsValid = false
    if(ip &&  port && type && aet){
        formIsValid = true;
    }
    //-----------------
    return (
        < >
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="ip" >IP Address</label>
                <input type="text"  placeholder="IP Address" name="ip" id='ip'
                onChange={ipChangeHandler} onBlur={ipBlurHandler} />
                {ipIsInvalid && <p className={classes['tst-error']}>Kindly set Your IP Address</p>}
            </div>
            {/* {===================================} */}
            <div className={classes.col}>
                <label htmlFor="port" >Port Number</label>
                <input type="text"  placeholder="Port Number" name="port" id='port'
                onChange={portChangeHandler} onBlur={portBlurHandler} />
                {portIsInvalid && <p className={classes['tst-error']}>Make sure to set Your Port Number</p>}
            </div>
            {/* {===================================} */}
            <div className={classes.col}>
                <label htmlFor="target_type" >Target Type</label>
                <input type="text"  placeholder="Target Type" name="target_type" id='target_type'
                onChange={typeChangeHandler} onBlur={typeBlurHandler} />
                {typeIsInvalid && <p className={classes['tst-error']}>Make sure to set Your Target Type</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.col}>
                <label htmlFor="aet_target" >AET Target</label>
                <input type="text"  placeholder="AET Target" name="aet_target" id='aet_target'
                onChange={aetChangeHandler} onBlur={aetBlurHandler} />
                {aetIsInvalid && <p className={classes['tst-error']}>Kindly set Your AET Target</p>}
            </div>
            {/* {====================================================} */}
            <div className={classes.actions}>
                <button type="button"  > <Link to='?role=developer'>Previous</Link> </button>
                <button type="submit"  disabled={!formIsValid} > { isSubmitting? 'Submitting...' : "Save ->"} </button>
            </div>
        </>
    )
}
export default TargetForm
