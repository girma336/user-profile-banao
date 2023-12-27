import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar
} from "@material-tailwind/react";
import './UsersList.css'
const UsersList = ({ data, handleClick }) => {
    const buttonStyle = {
        color: '#0A66C2',
        border: '1px solid #0A66C2',
        padding: '8px 16px',
        borderRadius: '4px',
        background: 'transparent',
        cursor: 'pointer',
    };

    const { firstName, lastName } = data.profile;
    let displayName = `${firstName} ${lastName}`;

    if (displayName.length > 13) {
        displayName = `${displayName.substring(0, 10)}...`;
    }
    return (
        <Card className="card__user mt-[12px] relative">
            <img
                className="h-[62px] w-full object-cover object-center overflow-auto rounded-tl-lg rounded-tr-lg"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
            />
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[105px] h-[105px] rounded-full bg-blue-gray-300 flex justify-center items-center">
            <Avatar src={data.avatar}  className="w-[105px] h-[105px] flex justify-center items-center"  />
            </div>
            <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-2 text-center mt-[40px]">
                    {displayName}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 ml-auto mr-auto">
                <Button variant="outlined" style={buttonStyle} onClick={() => handleClick(data)} >See Details</Button>
            </CardFooter>
        </Card>
    );
}

export default UsersList;