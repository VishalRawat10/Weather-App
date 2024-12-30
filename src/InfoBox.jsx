import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  let iconUrl = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
  function getWeatherImg(id) {
    return id >= 300 && id < 300
      ? "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : id >= 300 && id < 600
      ? "https://images.unsplash.com/photo-1627885244391-bf0309c8c234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : id >= 600 && id < 700
      ? "https://plus.unsplash.com/premium_photo-1673726864881-49e0f3816082?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : id >= 701 && id < 800
      ? "https://plus.unsplash.com/premium_photo-1675714692752-5b0358918e31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : id == 800
      ? "https://images.unsplash.com/photo-1506367861045-27937c3a8e63?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dr"
      : id > 800
      ? "https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : null;
  }
  return (
    <Card sx={{ width: 450, marginBottom: 10 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={getWeatherImg(info.id)}
        title="weather image"
      />

      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {info.name} <img className="icon" src={iconUrl} alt="" />
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <b>Temprature : {info.temp}&deg;C</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Feels Like : {info.feelsLike}&deg;C</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Humidity : {info.humidity}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>
            The weather looks like <i>{info.weather}</i> in {info.name}.
          </b>
        </Typography>
      </CardContent>
    </Card>
  );
}
