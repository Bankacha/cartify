import { Form, Button, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Feedback = (props) => (
    props.bane ? (
        <Form.Control.Feedback type="invalid">
            {props.fieldName} is not valid
        </Form.Control.Feedback>
    ) : ''
)

export function Order() {

    const formSchema = yup.object().shape({
        email: yup.string().required().email(),
        name: yup.string().required().max(255),
        payment: yup.string().oneOf(['cash', 'card']),
        checkMeOut: yup.boolean().oneOf([true])
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmitAction = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmitAction)}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" ref={register} type="text" placeholder="Enter email" isInvalid={errors.email} />
                    <Feedback show={errors.email} fieldName="Email"></Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" ref={register} isInvalid={errors.name} />
                    <Feedback show={errors.name} fieldName="Name"></Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control name="address" placeholder="1234 Main St" ref={register} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control name="number" placeholder="Apartment, studio, or floor" ref={register} />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" ref={register} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check name="checkMeOut" ref={register} type="checkbox" label="Check me out" isInvalid={errors.checkMeOut} />
                <Feedback bane={errors.checkMeOut} fieldName="CheckMeOut"></Feedback>
            </Form.Group>
            <br></br>
            <Button className="w-100 mt-3" variant="primary" type="submit">
                Submit</Button>
        </Form>
    )

}