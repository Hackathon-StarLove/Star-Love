import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Eyes color</label>
        <div>
          <Field name="Eyescolor" component="input" type="Eyescolor" placeholder="Eyes color"/>
        </div>
      </div>
      <div>
        <label>Gender</label>
        <div>
          <label><Field name="Gender" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="Gender" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Saber Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="rebel">Rebel</label>
        <div>
          <Field name="rebel" id="rebel" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label htmlFor="empire">Empire</label>
        <div>
          <Field name="empire" id="empire" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
