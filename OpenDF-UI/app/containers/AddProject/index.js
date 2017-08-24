/*
 *
 * AddProject
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ButtonElement from '../../components/ButtonElement';

const styles = {
  Papers: {
    margin:10,
    padding:10,
  },
  TextFields:{
    width: 500,
  },
  Button:{
    float: 'right'
  },
};

export class AddProject extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
             value: 0,
           };

 handleChange = (event, index, value) => this.setState({value});


  render() {
    return (
      <div>
        <Helmet
          title="AddProject"
          meta={[
            { name: 'description', content: 'Description of AddProject' },
          ]}
        />

        <Grid fluid>
          <Row>
            <Paper style={styles.Papers}>
              <Col xs>
                <form>
                <TextField
                     hintText="Project Name"
                     floatingLabelText="Project Name"
                     fullWidth={true}
                     style={styles.TextFields}
                /> <br />
                <TextField
                     hintText="Company Name"
                     floatingLabelText="Company Name"
                     fullWidth={true}
                     style={styles.TextFields}
                /> <br />
                <TextField
                     hintText="Project Name"
                     floatingLabelText="Project Name"
                     fullWidth={true}
                     style={styles.TextFields}
                /> <br/>
                <SelectField
                  floatingLabelText="Investigator"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Investigator01" />
                  <MenuItem value={2} primaryText="Investigator02" />
                  <MenuItem value={3} primaryText="Investigator03" />
                  <MenuItem value={4} primaryText="Investigator04" />
                  <MenuItem value={5} primaryText="Investigator05" />
                </SelectField> <br/>

                <div style={styles.Button}>
                  <ButtonElement label={"Save"} backgroundColor={'#4CAF50'} labelColor={'#fff'} labelPosition={'after'} />
                  <ButtonElement label={"Reset"} backgroundColor={'#FF5252'} labelColor={'#fff'} labelPosition={'after'}/>
                </div>



                </form>
              </Col>
            </Paper>
          </Row>
        </Grid>
      </div>
    );
  }
}

AddProject.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddProject);