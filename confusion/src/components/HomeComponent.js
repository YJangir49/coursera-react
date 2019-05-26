import React from 'react'
import {Card, CardTitle, CardImg, CardBody, CardText, CardSubtitle} from 'reactstrap'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';



const RenderCard=({item, isLoading, errmess})=>{
    if (isLoading) {
        return(
                    <Loading />
        );
    }
    else if (errmess) {
        return(
                <h4>{errmess}</h4>
        );
    }
    else
        return(
            <FadeTransform  in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name}/>
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                            <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )

}

const Home = (props) => {
        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess} />
                        
                    </div>
                </div>
            </div>
        );
    }
export default Home;