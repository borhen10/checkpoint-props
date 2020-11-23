import Proptypes from 'prop-types'

const Profile = (props) => {
    const {
        fullName,
        bio,
        profession,
        handleName,
        children,
    } = props;

    return (
        <div className="center" >
            <div>
                {children}
            </div>
            <h1 style={{ color: "blue" }}>{fullName}</h1>
            <h2 style={{color: "black" }}>{profession}</h2>
            <p>{bio}</p>
            <button onClick={handleName ? () => handleName(fullName) : () => alert("no function")}>Submit</button>
        </div>
    );
};

Profile.propTypes = {
    fullName: Proptypes.string.isRequired,
    bio: Proptypes.string.isRequired,
    profession: Proptypes.string.isRequired,
    handleName: Proptypes.func.isRequired,
    children: Proptypes.element.isRequired
}

Profile.defaultProps = {
    profession: "No Data description",
};


export default Profile;