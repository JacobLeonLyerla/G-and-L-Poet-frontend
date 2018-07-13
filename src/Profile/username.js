// import dependencies
import React,{Component,Fragment} from 'react';
import{Modal,Input,Label,Button} from 'reactstrap';

//import components
// import styling
// create statefull component
class User extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        })
    }
    render(){
        return(
            <Fragment>
           
            <div className="username-styles" onClick={()=> this.toggle()}>username</div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <Label>Enter new username</Label>
            <Input
            placeholder="username..."
            />
            <Button>Confirm</Button>
            </Modal>
        </Fragment>
        )
    }
}
export default User;