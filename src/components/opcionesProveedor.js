import { Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ResponsiveDrawerProveedor from "./ResponsiveDrawerProveedor";
import Title from "./title";

const OpcionesProveedor = () => {
  const myComponent = (
    <Fragment>
      <Title hasMargin={false} pageTitle="Mis Opciones" />
      <div className="padding-60px row">
        <Card className="col-md-5">
          <CardActionArea style={{ height: 200 }}>
            <Link to={"/editarsitio"}>
              <CardContent>
                <Typography variant="body3" color="textSecondary" component="p">
                  Editar Sitio
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <div className="col-md-2" />
        <Card className="col-md-5">
          <CardActionArea style={{ height: 200 }}>
            <Link to="/listasitios">
              <CardContent>
                <Typography variant="body3" color="textSecondary" component="p">
                  Listado Sitios
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </div>
    </Fragment>
  );

  return <ResponsiveDrawerProveedor childComponent={myComponent} />;
};

export default OpcionesProveedor;
