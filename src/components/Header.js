import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component  {
    
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {open: false};
    }
    
    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() { 
        this.setState({open: false}); 
    }
    
    render() {
                return (
                    <div>
                        <Drawer docked={false} open={this.state.open}>
                            <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Menu Item 3</MenuItem>
                        </Drawer>
        
                        <AppBar title="3D Learning Shapes"
                                iconElementRight={<FlatButton label="AR Mode" href="https://webvrtest-62248.firebaseapp.com"/>} />
                    </div>
                );
            }
        }

export default Header;