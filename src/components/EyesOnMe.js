// Code EyesOnMe Component Here
function EyesOnMe () {

    function focuser(){
        console.log('Good!')
    }
    function blurrer(){
        console.log('Hey! Eyes on me!')
    }
    
return(
    <div>
        <button
        onFocus={focuser}
        onBlur={blurrer}
        >Eyes on me</button>
    </div>
)
}

export default EyesOnMe;