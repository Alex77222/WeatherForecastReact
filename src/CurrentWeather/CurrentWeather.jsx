import {
    Card,
    CardContent,
    Typography
} from "@mui/material";


const CurrentWeather = (props) => {
    return (
        <div className="container p-3  col-6 align-content-center">
            <Card variant="outlined" sx={{minWidth: 275}}>
                <CardContent>
                    <Typography  sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Погода
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {props.currentWeather.date}
                    </Typography>
                    <Typography variant="body2">
                        {props.currentWeather.temperature}
                        <br/>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CurrentWeather