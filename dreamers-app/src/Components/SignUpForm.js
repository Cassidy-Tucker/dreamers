import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardText, RaisedButton, TextField, FlatButton } from 'material-ui';
import '../css/App.css'

function handleFileUpload ({file}) {
  console.log(file);
}


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
      <div className="Signup">
    <form action="/" onSubmit={onSubmit}>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="field-line">
        <FlatButton
          input type="file"
          name="file-upload"
          label="Upload Avatar"
          primary={true}
          onChange={handleFileUpload}
        >
      </FlatButton>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" labelColor= "white"  />
      </div>
      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </div>
);



SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
