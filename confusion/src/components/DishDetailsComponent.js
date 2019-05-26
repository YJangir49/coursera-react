import React,{Component} from 'react'
import {CardImg,Card,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem,Label,Button,Row,Col,Modal,ModalHeader, ModalBody} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent'
import {Control, LocalForm, Errors} from 'react-redux-form'
import {baseUrl} from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength=(len)=>(val)=>!(val)||(val.length <= len);
const minLength=(len)=>(val)=> val && (val.length>=len);

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }
    }
        
        handleSubmit=(val)=> {
            this.props.postComment(this.props.dishId, val.rating, val.author, val.comment);
        }
        
        toggleModal =()=>{
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
    }

    render(){
        return(
          <div >   
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody >
                        <LocalForm onSubmit={(val)=>this.handleSubmit(val)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select  model=".rating" id="rating" name="rating"
                                        className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    </Control.select>
                                 </Col>   
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Your Name" 
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(2), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" rows="6"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Button className="mt-3" type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                </ModalBody>
                </Modal>
            </div>
        )
    }

}

    function RenderDish({dish}){

        if(dish!=null)
        {
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                             <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
             )
        }
        else
        return(
            <div></div>
        );
    }
    
    function RenderComments({ comments, postComment, dishId }) {
        if (comments != null) {
          return (
            <div className="text-left">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                <Stagger in>
                    {comments.map((comment) => {
                    return (
                        <Fade in>
                            <div key={comment.id}>
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                            </div>
                        </Fade>
                    );
                    })}
                </Stagger>
              </ul>
              <Row>
                <CommentForm  dishId={dishId} postComment={postComment}/>
              </Row>
            </div>
          );
        }
        else {
          return (
            <div></div>
          );
        }
      }
     const RenderDishDetail = (props)=>{

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }

        else if(props.dish!=null){
             return(
                    <div className='container'>
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>  
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish}/>
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <RenderComments comments={props.comments} 
                                postComment={props.postComment}
                                dishId={props.dish.id}/>
                            </div>
                        </div>
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

export default RenderDishDetail;