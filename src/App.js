import { Formik, Form, Field } from 'formik'
import './header.css'
const App = () => {
  return (
    <div>
      <header>
        <Formik
        initialValues = {{ search: '' }}
        onSumit={async value=>{
          //llamar api de unsplash
          console.log(value)
        }}
        >
          <Form>
            <Field name="search"/>
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
