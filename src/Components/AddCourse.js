import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form } from "reactstrap";
import { FormGroup, Input } from "reactstrap";

const AddCourse=()=>{

    return(
        <div>
            <h1 className="text-center">Fill course detail</h1>
            <Form>
                <FormGroup>
                    <label for="user id">course id</label>
                    <Input type="text" placeholder="enter here" name="userid" id="userid">
                    
                    </Input>
                    </FormGroup>
                    <FormGroup>
                        <lable for="title">Course title</lable>
                        <Input type="text" placeholder="Enter title here"
                        id="title" />
                    </FormGroup>



                    <FormGroup>
                        <lable for="description">Course description</lable>
                        <Input type="textarea" placeholder="Enter description here"
                        id="description" style={{height:200}} />
                    </FormGroup>
                    <Container>
                        <Button color="success">Add course</Button>
                        <Button color="warning ml-2">Clear</Button>
                    </Container>
            </Form>

           

        </div>
    )
}
export default AddCourse;