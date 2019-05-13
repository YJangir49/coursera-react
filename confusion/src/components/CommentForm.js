import React , {Component} from 'react';
import {Button,Row,Col,Label,Modal,ModalHeader, ModalBody} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const maxLength=(len)=>(val)=>!(val)||(val.length <= len);
const minLength=(len)=>(val)=> val && (val.length>=len);

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }
        
        handleSubmit(val) {
            alert("Current State = "+ JSON.stringify(val));
            
        }
        
        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
    }

   
       
     

    render(){
        return(
          <div className="container">   
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody >
                        <LocalForm onSubmit={(val)=>this.handleSubmit(val)}>
                            <Row className="form-group">
                                <Label md htmlFor="rating">Rating</Label>
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
                                <Label md htmlFor="author">Your Name</Label>
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
                                <Label md htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" rows="6"
                                    placeholder="Comment"
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

export default CommentForm;