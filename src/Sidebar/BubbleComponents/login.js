
import React,{Component, Fragment} from 'react';
import { Button, Modal,Label,Input,Col,Row } from 'reactstrap';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
     <Fragment>
        <Button color="danger" className="bubble-container sign-in-icon" onClick={this.toggle}> <i class="fas fa-sign-in-alt" /></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Label>Please enter your email or username</Label>
        <Input
        
        />
        <Label>Please enter your password</Label>
        <Input
        
        />
        <Row>
        <Col md="6">
        <Button color="success">Login</Button>
        </Col>
        <Col md="6">
        <Button>Register</Button>
        </Col>
        </Row>
        </Modal>
      </Fragment>
    );
  }
}

export default Login;