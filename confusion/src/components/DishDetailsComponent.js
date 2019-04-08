import React, {Component} from 'react'
import {CardImg,Card,CardBody,CardTitle,CardText} from 'reactstrap'
class DishDetail extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            dish: null
        };
    }

    renderDish(dish){
        if(dish!=null)
        {
            return(
               <Card>
                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
             )
        }
        else
        return(
            <div></div>
        );
    }
    
    renderComments(comments){
        var commentList = comments.map(cmt => {
            return(
                <li key={cmt.id}>
                  {cmt.comment}
                  <br/><br/>
                  --{cmt.author},{" "}{cmt.date.substring(0,10)}
                  <br/><br/>
                </li>
            );
        });
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled"> {commentList} </ul>
            </div>
        )
}
     render(){
         if(this.props.details){
             return(
                 <div className="row">
                    <div className="col-12 col-md-5 m-1">
                         {this.renderDish(this.props.details)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.details.comments)}
                    </div>
                 </div>
                 
             )
         }
         else
         {
             return(
                 <div></div>
             )
         }
     }
}

export default DishDetail;