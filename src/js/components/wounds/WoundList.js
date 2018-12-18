import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWounds, selectWound, patchWound } from './../../../actions/woundActions';
import {bindActionCreators} from 'redux';
import { Badge, Button, Media } from 'react-bootstrap';
import './../../../css/wounds.css'

class woundList extends Component {
    
    resolveWound(wound, woundId) {
        this.props.patchWound(wound,woundId);
    }
   
     getHeader(wound){
        if(wound.attributes.resolved){
            return wound.attributes.type;
        }else{
            return <p>
                {wound.attributes.type} &nbsp;
                <Button onClick={() => this.resolveWound(wound, wound.id)} 
                    className="smallButton" bsStyle="info">
                    Resolve Wound
                </Button>
            </p>
        }
    }

    renderWoundList(){
        return this.props.wounds.map((wound) => {
            return(
                <Media.ListItem className="woundItem" key={wound.id}>    
                    <Media.Body>
                        <Media.Heading className="woundHeader">
                            {this.getHeader(wound)}
                        </Media.Heading>
                        <p className="woundLocation">
                            This wound is located on the patients <strong>{wound.attributes.bodyLocation}</strong>
                        </p><p className="woundInfo">
                            &nbsp;
                        {(wound.attributes.inHouseAcquired === true ?
                            (<Badge bsStyle="warning">Acquired in House</Badge>) : null
                        )}
                        &nbsp;
                        {(wound.attributes.resolved === true ?
                            (<Badge bsStyle="success">Resolved</Badge>) :  null
                        )}
                        </p>
                    </Media.Body>
                    <Media.Right align='top'>
                            <img className="woundImage" src={wound.attributes.imageUrl} alt="" />
                    </Media.Right >
                </Media.ListItem>         
            );
        });
   }
    
    render() {
        if (!this.props.wounds) {
            return (
                <div></div> //Patient has no wounds
            ); 
        }

        return (

           <Media.List className="woundList">
                {this.renderWoundList()}
           </Media.List>
        );
    }
}

function mapStateToProps(state){
    return{
        wounds: state.wounds.wounds
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWounds: fetchWounds,
        patchWound: patchWound,
        selectWound: selectWound},
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(woundList);