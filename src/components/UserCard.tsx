import { Card, CardContent, Typography } from '@mui/material';
import { userType } from '../models/userType';

const UserCards = ({ user }: { user: userType }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
           
                <Card key={user.email as string} style={{ width: '200px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            address: {user.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: {user.phone}: {user.email}
                        </Typography>
                    </CardContent>
                </Card>
            
        </div>
    );
};

export default UserCards;
