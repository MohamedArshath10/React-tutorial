const withCLickTracking = (Comp) => {
    return (props) => {
        const handleClick = () => {
            console.log('Button clicked', props.trackingdata);
        }
        return(
            <div onClick={handleClick}>
                <Comp {...props}/>
            </div>
        )
    }
}

export default withCLickTracking;