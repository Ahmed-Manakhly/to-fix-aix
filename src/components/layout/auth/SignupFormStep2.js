import useInput from '../../../hooks/Use-Input';
import { PhoneInput  } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { useNavigation , Link ,useSearchParams} from 'react-router-dom';
import classes from './Auth.module.scss' ;
import { Row , Col  } from 'react-bootstrap' 
import { useState} from 'react' ;

const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};

//-----------------------------------------
const SignupFormStep2 = ( {stepData}) => {
    const [SearchParams]=useSearchParams() ;
    const role = SearchParams.get('role') ;
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const phoneIsValid = isPhoneValid(phone);
    const phoneIsInValid = !phoneIsValid && isTouched
    //------------------------------------ init validation
    const {hasError : orgNameInputIsInvalid , valueIsValid : orgName,
        valueChangeHandler : orgnameInputChangeHandler , inputBlurHandler : orgnameInputBlurHandler } = useInput(value => value.trim() !=='') ;
    //-----------------------------------
    const navigation = useNavigation() ;
    const isSubmitting = navigation.state === 'submitting' ;
    //------------------------------------------------------form valid
    let formIsValid = false
    if(orgName && phoneIsValid){
        formIsValid = true;
    }
    const orgName1Classes = orgNameInputIsInvalid? `${classes["form-control"]} ${classes.invalid}` : `${classes["form-control"]}` ;
    const phoneClasses = phoneIsInValid? `${classes["form-control"]} ${classes.invalid}` : `${classes["form-control"]}` ;
    //-----------------------
    return (
        <Col className={`d-flex flex-column justify-content-center  p-lg-4 align-items-center`}>
            {/* {====================================================} */}
            <input type="email"    name="email"            hidden value={stepData.enteredEmail}readOnly/>
            <input type="password" name="password"         hidden value={stepData.enteredPass1}readOnly/> 
            <input type="password" name="passwordConfirm"  hidden value={stepData.enteredPass2}readOnly/>
            {/* {====================================================} */}
            <Row xs={0} md lg  className={`${orgName1Classes} d-flex flex-column align-items-center w-100`} >
                <label htmlFor="org_name" >Organization Name</label>
                <input type="text"  placeholder="Organization Name" id='org_name'
                onChange={orgnameInputChangeHandler} onBlur={orgnameInputBlurHandler} name="org_name"/>
                {orgNameInputIsInvalid && <p className={classes['error-text']}>Organization Name must not be empty</p>}
            </Row>
            <Row xs={0} md lg className={`${phoneClasses} d-flex flex-column align-items-left w-100`} >
                <label htmlFor='last_name'>Your Phone Number</label>
                    <PhoneInput
                    defaultCountry="us"
                    id='org_phone' name="org_phone"
                    required
                    value={phone}
                    onChange={(phone, { country }) => {setPhone(phone);setCountry(country)}}  onBlur={()=>{setIsTouched(true)}}
                />
                {phoneIsInValid && <p className={classes['error-text']}>Your Phone Number is not valid</p>}
            </Row>
            <Row xs={0} md lg className={`${classes["form-control"]} d-flex flex-column align-items-left w-100`} >
                <label htmlFor='org_name'>Your Country</label>
                <input type='text' id='country' name="country" placeholder="Your country Name"  readonly="readonly"
                onChange={orgnameInputChangeHandler} onBlur={orgnameInputBlurHandler} value={country.name||''}/>
            </Row>
            {/* {===================================} */}
            <Row className={`${classes["actions"]} d-flex  align-items-center w-100 m-0`}>
                <Link to={`?role=${role}&step=1`} className={`${classes['form-btn']} d-flex flex-column align-items-left w-50`}>Previous</Link>
                <button type="submit"  disabled={!formIsValid} className={`${classes['form-btn']} d-flex flex-column align-items-left w-50`} >  {isSubmitting? 'Submitting...' : "Sign Up"} </button>
            </Row>
        </Col>
    )
}

export default SignupFormStep2
