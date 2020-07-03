
import React from 'react';

const LeaveCommentForm = () => {
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <form>
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Tell your story</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                            <label data-error="wrong" data-success="right" htmlFor="commentForm-title">I am ...</label>
                            <input type="text" id="commentForm-title" className="form-control validate" placeholder="a person" maxLength="40" />
                        </div>

                        <div className="md-form mb-4">
                            <textarea id="commentForm-story" className="form-control validate" placeholder="writing something to describe myself to others" />
                        </div>

                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LeaveCommentForm;