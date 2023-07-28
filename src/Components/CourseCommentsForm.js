import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CourseCommentsList from './CourseCommentsList';

function CourseCommentsForm({ commentList, courseId, addComment }) {
    const [show, setShow] = useState(false);
    const [newAuthor, setNewAuthor] = useState('');
    const [newCommentText, setNewCommentText] = useState('');
    const [validName, setValidName] = useState(false); 
    const [validComment, setValidComment] = useState(false); 
    const [isFormDisabled, setisFormDisabled] = useState(false); 

    const handleClose = () => {
        setNewAuthor('');
        setNewCommentText('');
        setValidName(false);
        setValidComment(false);
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
        //re-enable the form
        setisFormDisabled(false);
    };

    const handleCommentChange = e => {
        validateComment(e);
        setNewCommentText(e.target.value);
    };

    const handleAuthorChange = e => {
        validateName(e);
        setNewAuthor(e.target.value);
    };

    const validateName = e => {
        if (e.target.value.length === 0) {
            setValidName(false);
        } else {
            setValidName(true);
        }
    };

    const validateComment = e => {
        if (e.target.value.length === 0) {
            setValidComment(false);
        } else {
            setValidComment(true);
        }
    };

    const handleSave = e => {
        e.preventDefault();

        if (newAuthor.length === 0 || newCommentText.length === 0) {
            return;
        }

        const nextID = Math.max(...commentList.map(comment => comment.commentId)) + 1;
        const newCommentObj = {
            courseId: courseId,
            commentId: nextID,
            author: newAuthor,
            comment: newCommentText,
        };
        addComment(newCommentObj);
        setNewAuthor('');
        setNewCommentText('');
        setValidName(false);
        setValidComment(false);
//form must be closed and opened again to enter review
        setisFormDisabled(true);
    };

    return (
        <>
            <div className="glow-container">
                <Button className='mt-4 mb-3 form-elements glow-on-hover btn-view-comments' variant='outline-success' onClick={handleShow}>
                    View or Leave Comments
                </Button>
            </div>
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                scrollable={true}
                data-bs-theme='light'>
                <Modal.Header
                    className='bg-light border border-0 form-elements'
                    closeVariant={'white'}
                    closeButton>
                    <Modal.Title>Leave a comment</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light form-elements'>
                    <Form className='border-bottom'>
                        <label htmlFor='author-name'>
                            {!validName ? (
                                <span className='fst-italic fw-light input-form-elements'>
                                    {' '}
                                    Enter your name.
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </label>
                        <input
                            disabled={isFormDisabled}
                            id='author-name'
                            type='text'
                            placeholder='Your name'
                            autoFocus
                            className='bg-light input-form-elements form-control'
                            value={newAuthor}
                            onChange={handleAuthorChange}
                            required/>
                        <label htmlFor='new-comment'>
                            {!validComment ? (
                                <span className='fst-italic fw-light input-form-elements'>
                                    {' '}
                                    Enter comment.
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </label>
                        <textarea
                            disabled={isFormDisabled}
                            id='new-comment'
                            placeholder='Your comment'
                            rows='3'
                            className='bg-light input-form-elements form-control'
                            value={newCommentText}
                            onChange={handleCommentChange}
                            required/>
                        <div className='d-flex justify-content-end mb-3'>
                        <div className="glow-container">
                            <Button
                                className='ms-3 btn btn-form-elements glow-on-hover'
                                variant='outline-success'
                                onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                        <div className="glow-container">
                            <Button
                                disabled={isFormDisabled}
                                id='save-comment'
                                className='ms-3 btn-form-elements glow-on-hover'
                                variant='outline-success'
                                type='submit'
                                onClick={handleSave}>
                                Save Comment
                            </Button>
                            </div>
                        </div>
                    </Form>
                    <h5 className='form-elements'>Past Comments</h5>
                    <div className='comments-section'>           
                    <CourseCommentsList commentList={commentList} courseId={courseId}/>
                    </div> 
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CourseCommentsForm;