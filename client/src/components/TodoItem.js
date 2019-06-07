import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteTodo} from './../actions/deleteTodo';
import {
    Container,
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    CardFooter
} from 'reactstrap';

const TodoItem = () => {
    const onRemove = (e, id) => {
        e.preventDefault();
        
    };
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText></CardText>
                </CardBody>
                <CardFooter>
                    <Link onClick={this.onRemove} className="btn btn-danger">&times;</Link>
                </CardFooter>
            </Card>
        </Container>
    )
}

TodoItem.propTypes = {
    deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    todo: state.todo
});

export default connect(mapStateToProps, {deleteTodo})(TodoItem);
