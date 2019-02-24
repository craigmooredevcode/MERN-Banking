import React, { Component } from 'react'
import styled from 'styled-components';
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getMessages, addMessage } from '../../actions/messagesActions';
import MessagesForm from './MessageForm';
import SingleMessage from './SingleMessage';
class Messages extends Component {
  render() {
    return (
      <MessagesWrapper className="mb-3">
            <div className="header-wrapper">
                 <h6 className="header text-white">Messages</h6>
            </div>
            <Container>
                <Row className="my-5">
                    <Col md="6">
                        <MessagesForm/>
                    </Col>
                    <Col md="6">
                       <SingleMessage/>
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
      </MessagesWrapper>
    )
  }
}

const MessagesWrapper = styled.div`
margin-left: 2rem;
width: 70rem;
height: auto;
background-color: #3a4149;
border: 1px solid #000;

.header {
    text-align: left;
    font-family: 'Open Sans';
    padding: 1.3rem 1rem 1rem 1rem;
}
.text-white {
    font-family: Open Sans;
}
.header-wrapper {
    background-color: #343b41;
    border-bottom: 1px solid #000;
}
`;

const mapStateToProps = state => ({
    message: state.messages
})

export default connect(mapStateToProps, {getMessages, addMessage})(Messages);